import { RECEIVE_PAYMENT, UPDATE_PAYMENT  } from '../actions';

export default function paymentReducer(state = {}, action) {  
  switch (action.type) {
    case RECEIVE_PAYMENT:                                     
      return action.payment;
    case UPDATE_PAYMENT:
    return {
        id: action.id,
        name: action.payload.name,
    }
    default:
      return state;
  }
};