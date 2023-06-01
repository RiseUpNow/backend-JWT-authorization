import initialState from "../initialState";

export default function contact(state = initialState.pageContacts, action) {
    switch (action.type) {
        case "addContact":
            return Object.assign({}, state, {
                contact: [...state.contact, {id: parseInt(action.id), name: action.name, role: action.role}]
            })
        case "editContact":
            return Object.assign({}, state, {
                contact: state.contact.map(p => {
                    if (p.id === parseInt(action.id)) {
                        p.name = action.name;
                        p.role = action.role;
                    }
                    return p;
                })
            });
        case "deleteContact":
            return Object.assign({}, state, {
                contact: state.contact.filter(p => p.id !== parseInt(action.id))
            })
        default:
            return state;
    }
}