import { RECEIVE_PAYMENTS, ADD_PAYMENT, REMOVE_PAYMENT, REPLACE_PAYMENT } from '../actions';                           

const initialState = { payments: [] }

export default function paymentsReducer(state = initialState, action) {  
  switch (action.type) {
    case RECEIVE_PAYMENTS:                                               
      return action.payments;
    case ADD_PAYMENT:                                                    
      return [action.payload, ...state];
    case REMOVE_PAYMENT:
        return state.filter(payment => payment.id !== action.payload.id);
    case REPLACE_PAYMENT:
        return state.map((payment) => {
            if (payment.id === action.payload.id) {
            return {
                ...payment,
                name: action.payload.name,
            }
            } else return payment;
        })
    default:                                                             
      return state;
  }
}