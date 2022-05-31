import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './ColorPicker.module.css';

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
        const classes = [s.btn];

        if(index === this.state.activeColorIdx){
            classes.push(s.active);
        }
        return classes.join(' ');
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