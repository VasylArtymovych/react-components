import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Counter.module.css'
import Buttons from './Buttons'

class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
        step: 1,
    }
    static propTypes = {initialValue: PropTypes.number,}

    state = {
        value: this.props.initialValue,
        step: this.props.step,
    }

    

    increment = ()=> {
        this.setState((prevState) => ({value: prevState.value + prevState.step,}))
    }

    decrement = () => {
        this.setState((prevState) => ({value: prevState.value - prevState.step,}))
    }

    render(){
        const {value} = this.state;

        return (
            <div className={s.container}>

                <Buttons 
                onIncrement={this.increment}
                onDecrement={this.decrement}
                />

                <span className={s.value} >{value}</span>
            </div>
        )
    }
}

export default Counter;