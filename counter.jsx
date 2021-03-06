import React, {PropTypes, Component} from 'react'

const Counter = ({value, onIncrement, onDecrement}) => {

  <div>
    <button onClick={onIncrement}>
      Increment
    </button>
    {''}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr/>
    <div>
      clicked: {value} times
    </div>
  </div>

  Counter.propTypes ={
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }

}

  export default Counter;