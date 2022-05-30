import React, {Component} from 'react';
import ColorChanger from '../ColorChanger';
import Colors from '../ColorChanger/Colors.json';
import s from './Dropdown.module.css';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    static propTypes = {
        setColor: PropTypes.func,
    }
    
    state = {
        visible: false,
    };

    togle = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    }

    render(){
        const {visible} = this.state;
        const {setColor} = this.props;
        return (
        <div className={s.container}>
            <button 
                type="button" 
                className={s.btn}
                onClick={this.togle}
            >
                { visible ? 'hide color-menu' : 'show color-menu'}
            </button>

            { visible && (
                <div className={s.menu}>
                    <ColorChanger colors={Colors} setBgrColor={setColor}/>
                </div>
            )}
            
        </div>)
    }
}

export default Dropdown;