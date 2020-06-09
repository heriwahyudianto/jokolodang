import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePayment, activePayment, deactivePayment } from '../actions';
import Switch from "react-switch";

class PaymentList extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id, checked) {
    if (checked) {
      this.props.deactivePayment(id)
      this.props.payments.map(article => {
        if (article.id === id) {
          article.is_active = 0
        }
      })
    } else {
      this.props.activePayment(id)
      this.props.payments.map(article => {
        if (article.id === id) {
          article.is_active = 1
        }
      })
    }
  }
  render() {                                                        
    if(this.props.payments.length) {                                
      return (
        <div>
          <h4>Payments</h4>
          <table>
              <thead>
                  <tr>
                      <td>Id</td>
                      <td>Name</td>
                      <td>Active</td>
                      <td>Delete</td>
                  </tr>
              </thead>
              <tbody>
                {this.props.payments.map(article => {                     
                    return (
                      <tr key={ article.id }>
                        <td>                              
                            {article.id}
                        </td>
                        <td>
                            <Link to={`/payments/${article.id}/edit`}>{article.name}</Link>
                        </td>
                        <td>
                          <Switch onChange={() => this.handleChange(article.id, article.is_active)} checked={Boolean(article.is_active)} />
                        </td>
                        <td><button className="btn btn-danger" type="button" 
                        onClick={() => this.props.deletePayment(article.id)}>          
                          Del
                        </button></td>
                      </tr>
                    );
                })}        
              </tbody>
          </table>
        </div>
      )    
    } else {
      return (<div>No Payments</div>)
    }
  }
}

const mapStateToProps = (state) => ({ payments: state.payments });  
const mapDispatchToProps = { deletePayment, activePayment, deactivePayment };                        
export default connect(mapStateToProps, mapDispatchToProps)(PaymentList); 