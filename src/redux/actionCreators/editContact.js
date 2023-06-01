function editContact(contact) {
    return {
        type: "editContact",
        id: contact.id,
        name: contact.name,
        role: contact.role
    };
}

export default editContact;