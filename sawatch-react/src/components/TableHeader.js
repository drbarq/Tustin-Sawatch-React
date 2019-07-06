import React from 'react'

export default function TableHeader() {

    return(
        <th>Year
            <button className={this.state.currentSort === "vehicle_year" ? "active-sort" : undefined} onClick={() => this.updateCurrentSort("vehicle_year")}>
                <i className="fa fa-caret-down"></i>
            </button>
        </th>
    )
}