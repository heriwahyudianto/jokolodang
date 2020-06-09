import axios from 'axios';  
import history from '../history';                                         

export const RECEIVE_PAYMENTS = 'GET_PAYMENTS';
export const ADD_PAYMENT = 'ADD_PAYMENT';  
export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
export const REMOVE_PAYMENT = 'REMOVE_PAYMENT'; 
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
export const REPLACE_PAYMENT = 'REPLACE_PAYMENT';
export const ACTIVE_PAYMENT = 'ACTIVE_PAYMENT';                   
export const DEACTIVE_PAYMENT = 'DEACTIVE_PAYMENT';   

const apiUrl = 'https://api.jokolodang.com/api/v1/payments';                     

export const getPayments = () => {                                   
  return (dispatch) => {
    return axios.get(`${apiUrl}`)                               
      .then(response => {
        dispatch({type: RECEIVE_PAYMENTS, payments: response.data.data})  
      })
      .catch(error => { throw(error); });
  };
};

export const addPayment = ({ name }) => {                                                      
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {name})                                                
      .then(response => {
        let data = response.data;
        dispatch({type: ADD_PAYMENT, payload: {id: data.id, name: data.name}})  
      })
      .then(() => {
        history.push("/payments")                                                                        
      })
      .catch(error => { throw(error) });
  };
};

export const getPayment = (id) => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/${id}`)
        .then(response => {
          dispatch({type: RECEIVE_PAYMENT, payment: response.data.data});
        })
        .catch(error => { 
          throw(error); 
        });
    };
  };

export const deletePayment = (id) => {
    return (dispatch) => {
      return axios.delete(`${apiUrl}/${id}`)
        .then(response => {
          dispatch({type: REMOVE_PAYMENT, payload: {id}})
        })
        .then(() => {
          history.push("/payments")
        })
        .catch(error => {
          throw(error);
        });
    };
  };


export const updatePayment = (payment) => {
    return (dispatch) => {
      return axios.put(`${apiUrl}/${payment.id}`, {name: payment.name})
        .then(response => {
          const data = response.data;
          dispatch({type: UPDATE_PAYMENT, payload: {id: data.id, name: data.name}})
          dispatch({type: REPLACE_PAYMENT, payload: {id: data.id, name: data.name}})
        })
        .then(() => {
          history.push(`/payments`)
        })
        .catch(error => { throw(error) });
    };
  };

  
export const activePayment = (id) => {
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${id}/activate`)
      .then(response => {
        dispatch({type: ACTIVE_PAYMENT, payload: {id}})
      })
      .then(() => {
        history.push("/payments")
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deactivePayment = (id) => {
  return (dispatch) => {
    return axios.patch(`${apiUrl}/${id}/deactivate`)
      .then(response => {
        dispatch({type: DEACTIVE_PAYMENT, payload: {id}})
      })
      .then(() => {
        history.push("/payments")
      })
      .catch(error => {
        throw(error);
      });
  };
};