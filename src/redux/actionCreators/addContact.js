function addContact(contact) {
    return {
        type: "addContact",
        id: contact.id,
        name: contact.name,
        role: contact.role
    };
}

export default addContact;