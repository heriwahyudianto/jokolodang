import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePayment, activePayment, deactivePayment } from '../actions';
import Switch from "react-switch";

class PaymentList extends Component {
  constructor() {
    super();
    this.state = {
      idAsc : true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }
  
  handleChange(id, checked) {
    if (checked) {
      this.props.deactivePayment(id)
      // eslint-disable-next-line array-callback-return
      this.props.payments.map(article => {
        if (article.id === id) {
          article.is_active = 0
        }
      })
    } else {
      this.props.activePayment(id)
      // eslint-disable-next-line array-callback-return
      this.props.payments.map(article => {
        if (article.id === id) {
          article.is_active = 1
        }
      })
    }
  }

  handleSort(idAsc) {
    if (idAsc) {
      this.setState({idAsc: false})
      this.props.payments.sort(
        function(a, b) { 
          return b.id - a.id ;
        }
      )
    } else {
      this.setState({idAsc: true})
      this.props.payments.sort(
        function(a, b) { 
          return a.id - b.id ;
        }
      )
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
                      <td>Id <span className="material-icons" onClick={() => this.handleSort(this.state.idAsc)}>
keyboard_arrow_up
</span></td>
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