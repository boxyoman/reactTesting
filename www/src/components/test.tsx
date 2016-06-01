import * as React from "react";
import RAButton from './basics/button/index.tsx'
import { connect } from 'react-redux'
import {increase, decrease} from '../actions/'
import topState from '../state'

interface HelloProps{
  number: number,
  onIncrease: () => void,
  onDecrease: () => void
}

class Hello extends React.Component<HelloProps, {}> {
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
const mapDispatchToProps = (dispatch:any) => {
  return {
    onIncrease: (): void => dispatch(increase()),
    onDecrease: (): void => dispatch(decrease())
  }
}

const VisibleHello = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)

export default VisibleHello;
