import { combineReducers } from 'redux';
import payments from './paymentsReducer';
import payment from './paymentReducer';

export default combineReducers({
  payments: payments,
  payment: payment,
});