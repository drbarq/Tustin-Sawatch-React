import React from 'react'

export default function DataRow(props) {
    return(
        props.sortedData().map(carInfo => {
            return (
                <tr key={carInfo.id}>
                    <td>{carInfo.vehicle_year}</td>
                    <td>{carInfo.make}</td>
                    <td>{carInfo.vehicle_model}</td>
                    <td>{carInfo.displacement}</td>
                    <td>{carInfo.cylinders}</td>
                    <td>{carInfo.class}</td>
                </tr>
            )
        })
    )
}
