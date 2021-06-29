import React, { Component } from "react";
//import SearchWrapper from "./SearchWrapper.js";
import Table from "./Table";
import Api from "../utils/Api";
import '../UserDirectory.css';;



export default class RandomUsers extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  categories = [
    { name: "Pic", width: "10%" },
    { name: "Name", width: "20%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
  ]

  SortArray = categories => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

    const compareFilter = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[categories] === undefined) {
          return 1;
        } else if (b[categories] === undefined) {
          return -1;
        }
        else if (categories === "name") {
          return a[categories].first.localeCompare(b[categories].first);
        } else {
          return a[categories] - b[categories];
        }
      } else {
        if (a[categories] === undefined) {
          return 1;
        } else if (b[categories] === undefined) {
          return -1;
        }
        else if (categories === "name") {
          return b[categories].first.localeCompare(a[categories].first);
        } else {
          return b[categories] - a[categories];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compareFilter);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearch = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() {
    Api.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        {/*<Search handleSearch={this.handleSearch} />*/}
        <div className="data-area">
          <Table

            categories={this.categories}
            users={this.state.filteredUsers}
            SortArray={this.SortArray}
          />
        </div>
      </>
    );
  }
}
