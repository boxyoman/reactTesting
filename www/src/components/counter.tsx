import * as React from "react";
import RAButton from './basics/button/index.tsx'
import { connect } from 'react-redux'
import { IDispatch } from 'redux'
import {increase, decrease} from '../actions/'
import topState from '../state'

interface ICounterProps {
  number: number,
  onIncrease: () => void,
  onDecrease: () => void
}

function Counter({
  number,
  onIncrease,
  onDecrease
}:ICounterProps){
  return (<div>
    <RAButton color="Green" onClick={ e => onIncrease()}>+</RAButton>
    <RAButton color="Red" onClick={ e => onDecrease() }>-</RAButton>
    <div>{number}</div>
  </div>);
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
