import React, {useState} from 'react';
import css from './contacts.module.css'
import SearchedContacts from "./searchedContacts/searchedContacts";
const Contacts = (props) => {
    let submit = React.useRef("Add");
    let id = React.useRef();
    let name = React.useRef();
    let role = React.useRef();
    //SELECT changed
    let change = (e) => {
        name.current.classList.remove('hidden');
        role.current.classList.remove('hidden');
        id.current.value="";
        name.current.value="";
        role.current.value="";
        switch (e.target.value) {
            case "Add":
                name.current.placeholder = "Name";
                role.current.placeholder = "Role";
                submit.current.value = "Add";
                break;
            case "Edit":
                name.current.placeholder = "New name";
                role.current.placeholder = "New role";
                submit.current.value = "Edit";
                break;
            case "Remove":
                name.current.classList.add('hidden');
                role.current.classList.add('hidden');
                submit.current.value = "Remove";
                break;
        }
    }
    //CRUD
    const manipulate = (e) => {
        e.preventDefault();
        let currentManipulate = {
            contact: {
                id: id.current.value,
                name: name.current.value,
                role: role.current.value
            },
            typeSubmit: submit.current.value
        }
        let result = props.manipulate(currentManipulate);
        //тут в searchState передается старое значение массива
        setSearchState(result.reducer_contacts.contact);
    }
    //Searching
    let searchedContacts=props.data.contact;
    let searchValue = React.useRef();
    const [searchState, setSearchState] = useState(searchedContacts);

    let searchChange = (e) => {
        e.preventDefault();
        searchedContacts = props.data.contact.filter(p => {
            let currentSearch = searchValue.current.value.toLowerCase();
            let currentPId = p.id.toString().toLowerCase();
            let currentPName = p.name.toLowerCase();
            let currentPRole = p.role.toLowerCase();
            return ((currentPId.includes(currentSearch)) || (currentPName.includes(currentSearch)) || (currentPRole.includes(currentSearch)))
        })
        setSearchState(searchedContacts);
    }
    return (
        <div>
            <h1>Contacts</h1>
            <form id="form" className={css.form}>
                <input type="search" ref={searchValue} onChange={searchChange} className={css.input + ' ' + css.search} placeholder="Search"/>
                <select className={css.input} onChange={change}>
                    <option value="Add">Add</option>
                    <option value="Edit">Edit</option>
                    <option value="Remove">Remove</option>
                </select>
                <input type="text" ref={id} className={css.input} placeholder="Id"/>
                <input type="text" ref={name} className={css.input} placeholder="Name"/>
                <input type="text" ref={role} className={css.input} placeholder="Role"/>
                <input type="button" onClick={manipulate} ref={submit}
                       className={css.input}
                       value={props.data.buttonState}/>
                <button className={css.input} onClick={(e) => {e.preventDefault();props.logout()}}>Log out</button>
            </form>
            <SearchedContacts data={searchState}/>
        </div>
    )
}
export default Contacts