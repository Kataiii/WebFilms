import React from "react";

const Book = (props) => {
    if(!props.name){
        return null;
    }

    return (
        <div>
            <h2 key={0}>{props.name}</h2>
            <p key={1}>{props.year}</p>
            <p key={2}>{props.price}</p>
        </div>
    );
};


export default Book;