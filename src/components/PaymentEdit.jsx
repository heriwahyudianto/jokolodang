import React from 'react';
import { connect } from 'react-redux';
import { getPayment, updatePayment } from '../actions';

class PaymentEdit extends React.Component {
    componentDidMount() {                                                         
        this.props.getPayment(this.props.match.params.id);
      }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {                                                             
    event.preventDefault();
    const id = this.props.payment.id;
    const name = this.state.name ? this.state.name : this.props.payment.name;
    const payment = {id: id, name: name}
    this.props.updatePayment(payment);
  };

  handleCancel = () => {
    this.props.history.push(`/payments`);
  }

  render() {
    const payment = this.props.payment;
    return (
      <div>
        <h1>Edit {this.props.payment.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" defaultValue={this.props.payment.name}  onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Update</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ payment: state.payment });

const mapDispatchToProps = { getPayment, updatePayment };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentEdit);