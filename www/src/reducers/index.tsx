import Actions from '../constants'
import topState from '../state/'

interface IActions{
  type: Actions
}

const reducer = (state: topState = new topState(), action: IActions) =>{
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
