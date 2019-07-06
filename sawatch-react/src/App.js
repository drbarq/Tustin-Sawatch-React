import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import DataRow from "./components/DataRow"
// import HeaderButton from './components/HeaderButton';
const apiUrl = "https://api.sawatchlabs.com/models/13/2017"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sawatchData: [],
      currentSort: ""
    }
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => data.data)
      .then(sawatchData => {this.setState({sawatchData})})
      .catch(error => console.error(error))
}

  sortedSawatchData = () => {
    return this.state.sawatchData.sort((a, b) => {
      // debugger
      if(!this.state.currentSort) {
        return 0
      } else {
          return a[this.state.currentSort] > b[this.state.currentSort]
          ? 1
          : -1 
      } 
    })
  }

  updateCurrentSort = sortTerm => {
    this.setState({
      currentSort: sortTerm
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="swt-header-wrapper">
          <img src="https://sawatchlabs.com/images/sawatch-logo-blk.png" alt="Sawatch Labs Logo" className="swt-logo"/>
          <h1 className="swt-header">Sawatch Labs</h1>
          <h2 className="swt-subheader">Front End Technical Challenge</h2>
        </div>
        <div className="swt-table-wrapper">
          <table className="swt-table">
            <thead>
              <tr>
                <th>Year
                  <button className={this.state.currentSort === "vehicle_year" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("vehicle_year")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                <th>Make
                  <button className={this.state.currentSort === "make" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("make")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                <th>Model
                  <button className={this.state.currentSort === "vehicle_model" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("vehicle_model")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                <th>Displacement
                  <button className={this.state.currentSort === "displacement" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("displacement")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                <th>Cylinders
                  <button className={this.state.currentSort === "cylinders" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("cylinders")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                <th>Class
                  <button className={this.state.currentSort === "class" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("class")}>
                    <i className="fa fa-caret-down"></i>
                  </button>
                </th>
                {/* <HeaderButton attribute={"vehicle_model"} /> */}
              </tr>
            </thead>
            <tbody id="swt-table">
              <DataRow sortedData={this.sortedSawatchData}/>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
  
}

export default App;
