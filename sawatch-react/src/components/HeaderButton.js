import React from 'react'

export default function TableHeader(props) {

    // the issue is I an trying to return a button that references this.state, which is on the app level.  this breaks it
    // move all table to its own component and set its own state 

    return(
        <button className={this.state.currentSort === props.attribute ? "active-sort" : undefined} onClick={() => this.updateCurrentSort(props.attribute)}>
            <i className="fa fa-caret-down"></i>
        </button>
    )

}