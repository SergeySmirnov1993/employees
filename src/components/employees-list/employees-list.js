import EmployeesListItem from "../employees-list-item/employees-list-item";
import { Component } from "react";
import "./employees-list.css";

class EmployeesList extends Component {
  render() {
    const elements = this.props.data.map((item) => {
      const { id } = item;
      return (
        <EmployeesListItem
          key={id}
          {...item}
          deleteEmployee={this.props.deleteEmployee}
        />
      );
    });
    return <ul className="app-list list-group">{elements}</ul>;
  }
}

export default EmployeesList;
