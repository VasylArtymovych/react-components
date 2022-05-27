import Painting from  '../Painting/Painting';
import PropTypes from 'prop-types';
import s from './PaintingList.module.css';

function PaintingList({items}){
    return (
    <ul className={s.list}>
        {items.map(item => {
            return <li key={item.id} className={s.item}>
                <Painting 
                    url={item.url} 
                    title={item.title} 
                    author={item.author.tag} 
                    profileUrl={item.author.url} 
                    price={item.price}
                    quantity={item.quantity}
                />
                
            </li>
        })}
    </ul>
    )
};

PaintingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired,}))
}

export default PaintingList;