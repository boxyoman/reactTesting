import * as React from "react";
import RAButton from './basics/button/index.tsx'
import { connect } from 'react-redux'
import { IDispatch } from 'redux'
import {increase, decrease} from '../actions/'
import topState from '../state'

interface CounterProps{
  number: number,
  onIncrease: () => void,
  onDecrease: () => void
}

class Counter extends React.Component<CounterProps, {}> {
  render() {
    return <div>
      <RAButton color="Green" 
                onClick={ e => this.props.onIncrease()}>+</RAButton>
      <RAButton color="Red" 
                onClick={ e => this.props.onDecrease() }>-</RAButton>
      <div>{this.props.number}</div>
    </div>;
  }
}

const mapStateToProps = (state:topState) => {
  return {
    number: state.number
  }
}
const mapDispatchToProps = (dispatch:IDispatch) => {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease())
  }
}

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default VisibleCounter;
