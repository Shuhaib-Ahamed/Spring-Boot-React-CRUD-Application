import React, { Component } from 'react'
import EmployeesServices from "../services/EmployeesServices";

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        };
      }

    componentDidMount() {
        EmployeesServices.getEmployeeById(this.state.id).then((res) => {
            this.setState({employee: res.data});
          });
    }  

    back() {
        this.props.history.push('/');
      }
    
    render() {
        return (
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center"  style={{ marginTop: "15px"}}>View Employee</h3>
                <div className="card-body">
                    <div className="row px-2">
                        <label style={{ marginBottom: "15px" }}>Employee First Name</label>
                        <h5>{ this.state.employee.firstName }</h5>
                        <label style={{ marginBottom: "15px" }}>Employee Last Name</label>
                        <h5>{ this.state.employee.lastName }</h5>
                        <label style={{ marginBottom: "15px" }}>Employee Email ID</label>
                        <h5>{ this.state.employee.emailId }</h5>
                    </div>
                    <div className="column px-2">
                    <button
                        className="btn btn-primary"
                        onClick={() => this.back()}
                        style={{ marginTop: "15px", marginBottom: "15px" }}
                      >
                        Back
                      </button>
                    </div>
                </div>
                
            </div>
        )
    }
}
