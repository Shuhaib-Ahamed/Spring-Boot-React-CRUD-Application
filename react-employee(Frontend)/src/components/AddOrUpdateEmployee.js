import React, { Component } from "react";
import EmployeesServices from "../services/EmployeesServices";

export default class AddOrUpdateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeesServices.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;

        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };

    if (this.state.id === "_add") {
      EmployeesServices.addEmployees(employee).then((res) => {
        this.props.history.push("/");
      });
    } else {
      EmployeesServices.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/");
      });
    }
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="column" style={{ marginTop: "50px" }}>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.state.id === "_add" ? (
                <h3 className="text-center" style={{ marginTop: "10px" }}>
                  {" "}
                  Add Employee{" "}
                </h3>
              ) : (
                <h3 className="text-center" style={{ marginTop: "10px" }}>
                  {" "}
                  Update Emplolyee{" "}
                </h3>
              )}

              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "10px" }}>
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group" style={{ marginTop: "10px" }}>
                    <label>Email</label>
                    <input
                      name="emailId"
                      placeholder="Email"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                    <div className="form-group" style={{ marginTop: "20px" }}>
                      <button
                        className="btn btn-success"
                        onClick={this.saveOrUpdateEmployee}
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={this.cancel}
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
