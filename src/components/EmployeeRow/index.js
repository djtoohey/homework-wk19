import React from "react";
import "./style.css";

function EmployeeRow(props) {

    return (
        <tr>
            <td>
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
            </td>
            <td>{props.name}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.location}</td>
            <td>{props.occupation}</td>
        </tr >
    );
}

export default EmployeeRow;
