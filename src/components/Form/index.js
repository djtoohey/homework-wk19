import React from "react";
// import "./style.css";

function Form(props) {

    return (
        <form>
            <input type="text" placeholder="Filter By Name" value={props.value} onChange={props.handleInput}></input>
            <button>Search </button>
        </form>
    );
}

export default Form;
