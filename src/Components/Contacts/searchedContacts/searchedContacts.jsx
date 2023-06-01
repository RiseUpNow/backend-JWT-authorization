import React from 'react';
import css from "../contacts.module.css";
    const SearchedContacts = (props) => {
    let listItems = props.data.map((s) =>
        <div className={css.cart}>
            <p>Contact {s.id}</p>
            <p>Name: {s.name}</p>
            <p>Role: {s.role}</p>
        </div>);
        return (
            <div>
            {listItems}
            </div>
        );
}
export default SearchedContacts