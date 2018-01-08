import React, { Component } from 'react';
import { StaffList } from '../data/staff';
import Staff from './courses/Staff';
import Columns from 'react-columns';


class SearchTeacher extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searchDept: "",
      staffList: StaffList
    };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  updateSearchDept(event) {
    this.setState({searchDept: event.target.value})
  }

  render () {
    let filteredDept = this.state.staffList.filter(
      (staff) => {
          return staff.dept.toLowerCase().indexOf(this.state.searchDept.toLowerCase()) !== -1;}
    )


    let filteredContacts= filteredDept.filter(
      (staff) => {
          return staff.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;}
          ).sort((a,b) => {
      var nameA = a.title.toUpperCase();
      var nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
      })

  let notFound = () => {
    return <h3>Not Found!</h3>
  }

  let filterTeachers = filteredContacts.map((staff) => {
    return <Staff title={staff.title}
                   desc={staff.description}
                   phone={staff.phone}
                   room={staff.room}
                   dept={staff.dept}
                   key={staff.id} />
  })

    return (
      <div>
        <Columns columns="2">
      <h4 className="center">Teacher Quick Search  <input
          type="text"
          placeholder="Search..."
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        /></h4>
        <h4 className="left">Department Quick Search <input
          type="text"
          placeholder="Search..."
          value={this.state.searchDept}
          onChange={this.updateSearchDept.bind(this)}
        /></h4>
      </Columns>
        <ul>
          <Columns columns="2">
            {filterTeachers}
          </Columns>
        </ul>
      </div>
  )
  }

}


export default SearchTeacher;
