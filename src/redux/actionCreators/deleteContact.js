function deleteContact(contact) {
    return {
        type: "deleteContact",
        id: contact.id,
        name: contact.name,
        role: contact.role
    };
}

export default deleteContact;