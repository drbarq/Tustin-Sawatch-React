import React from 'react'

export default function TableHeaderLabel(props) {
    const carAttributes = [
        {   
            label: "Year",
            name: "vehicle_year"
        },
        {   
            label: "Make",
            name: "make"
        },
        {   
            label: "Model",
            name: "vehicle_model"
        },
        {   
            label: "Displacement",
            name: "displacement"
        },
        {   
            label: "Cylinders",
            name: "cylinders"
        },
        {   
            label: "Class",
            name: "class"
        },
    ]
    return(
        carAttributes.map((item, index) => {
            return(
                <th key={index}> {item.label}
                    <button className={props.currentSort === `${item.name}` ? "active-sort" : undefined} 
                            onClick={() => props.updateCurrentSort(`${item.name}`)} >
                        <i className="fa fa-caret-down"></i>
                    </button>
                </th>
            )
        })
    )
}