import Actions from '../constants'
interface topState {
  number: number
}

interface IActions{
  type: Actions
}

const reducer = (state: topState = {number:0}, action: IActions) =>{
  switch(action.type){
  case Actions.Increase:
    return {
      number: state.number+1
    };
  case Actions.Decrease:
    return {
      number: state.number-1
    };
  default:
    return state;
  }
}

export default reducer;
