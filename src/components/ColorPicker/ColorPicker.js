import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ColorPicker.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(s);

class ColorChanger extends Component {
    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    state = {
        activeColorIdx: 0,
    }
    setCurrentColorIdx = (index)=>{
        this.setState({activeColorIdx: index});
    }

    makeItemClassName = index => {
        return cx('btn',  {'active': index === this.state.activeColorIdx})
        
        // const classes = [s.btn];
        // if(index === this.state.activeColorIdx){
        //     classes.push(s.active);
        // }
        // return classes.join(' ');
    }

    render(){
        const {colors, setBgrColor} = this.props;
        return (
            <>
                {colors.map(({label, color}, index) => {
                    return (
                        <button 
                        type="button" 
                        key={label} 
                        style={{backgroundColor: color}}
                        className={this.makeItemClassName(index)}
                        onClick={() => {
                            this.setCurrentColorIdx(index); 
                            setBgrColor(color);
                        }}
                        >
                            {label}
                        </button>
                    )
                })}
            </>
        )
    }
}

export default ColorChanger;