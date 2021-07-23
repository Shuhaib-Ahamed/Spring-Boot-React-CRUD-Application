import React, { Component } from "react";
import EmployeesServices from "../services/EmployeesServices";

export default class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  updateEmployee(id) {
    this.props.history.push(`/employee/${id}`);
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  deleteEmployee(id) {
    EmployeesServices.deleteEmployee(id).then((res) => {
      this.setState({employees: this.state.employees.filter(employee => employee.id !== id)})
    });
  }

  componentDidMount() {
    EmployeesServices.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/employee/_add");
  }

  render() {
    return (
      <div>
        <h1 className="text-left">Employee List</h1>
        <div className="column">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="column" style={{ marginTop: "20px" }}>
          <table className="table table-striped table-bordered" style={{ scrollBehavior: "auto" }}>
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td className="text-center">
                    <div>
                      <button
                        className="btn btn-success"
                        onClick={() => this.updateEmployee(employee.id)}
                        style={{ marginRight: "15px" }}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ marginRight: "15px" }}
                        onClick={() => this.deleteEmployee(employee.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => this.viewEmployee(employee.id)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
