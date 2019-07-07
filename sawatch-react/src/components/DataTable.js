import React, { Component } from 'react'
import TableDataRow from "./TableDataRow"
import TableHeaderLabel from './TableHeaderLabel';
const apiUrl = "https://api.sawatchlabs.com/models/13/2017"

export default class DataTable extends Component {
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
            <div className="swt-table-wrapper">
                <table className="swt-table">
                    <thead>
                        <tr>
                            <TableHeaderLabel currentSort={this.state.currentSort} updateCurrentSort={this.updateCurrentSort}/>
                        </tr>
                    </thead>
                    <tbody id="swt-table">
                        <TableDataRow sortedData={this.sortedSawatchData}/>
                    </tbody>
                </table>
            </div>
        )
    }
}