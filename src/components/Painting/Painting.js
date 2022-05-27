import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import s from './Painting.module.css';
import Counter from '../Counter/Counter'

const Painting = (props) => {
    const {
        url = defaultImg,
        title,
        author = 'not defind',
        profileUrl,
        price,
        quantity,
      } = props;

    return (
      <div>
        <img src={url} alt={title} className={s.img}/>
        <h2>{title}</h2>
        <p>
          <b>Author:</b> <a href={profileUrl}>{author}</a>
        </p>
        <p><b>Price:</b> {price} credits</p>
        <p><b>Availibility:</b> { quantity < 10 ? "Few Left" : "in Stok"}</p>
        
        <Counter initialValue={0} step={1}/>
      </div>
    );
  };
  
  Painting.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    profileUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default Painting;
