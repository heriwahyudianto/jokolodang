import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPayment, deletePayment } from '../actions';

class PaymentInfo extends Component {
  componentDidMount() {                                                         
    this.props.getPayment(this.props.match.params.id);
  }

  render() {
    const payment = this.props.payment;
    return (
      <div>
        <h2>{payment.id}: {payment.name}</h2>
        <div className="btn-group">
          <Link to={{ pathname: `/payments/${payment.id}/edit`, state: { payment: payment } }} className='btn btn-info'>  
            Edit
          </Link>
          <button className="btn btn-danger" type="button" onClick={() => this.props.deletePayment(payment.id)}>          
            Delete
          </button>
          <Link to="/payments" className="btn btn-secondary">Close</Link>                                                 
        </div>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ payment: state.payment });                 

const mapDispatchToProps = { getPayment, deletePayment };                        

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo); 