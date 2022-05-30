import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css'
import Dropdown from '../Dropdown/Dropdown';

class Section extends Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node,
    }

    state = {
        color: '#fff', 
    };

    setColor = (newColor) => {
        this.setState({color: newColor});
    }
    render(){
        const {color} = this.state;
        const {title, children} = this.props;

        return (
            <section className={s.section} style={{backgroundColor: color}}>
                {title && <h2 className={s.title}>{title}</h2>}
                <Dropdown setColor={this.setColor}/>
                {children}
            </section>
        )
    }
}

// function Section({title, children}){
//     return (
//     <section className={s.section}>
//         {title && <h2 className={s.title}>{title}</h2>}
//         {children}
//     </section>
//     )
// };

// Section.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.node,
// };

export default Section;

