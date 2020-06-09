import React from 'react';
import { connect } from 'react-redux';
import { addPayment } from '../actions';                      

class PaymentAdd extends React.Component {
  state = { name: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPayment(this.state);                                
  };

  render() {
    return (
      <div>
        <h4>Add Payment</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="text" name="name" required value={this.state.name} onChange={this.handleChange} 
              className="form-control" placeholder="Name" />
          </div>
          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addPayment };                     

export default connect(null, mapDispatchToProps)(PaymentAdd);  