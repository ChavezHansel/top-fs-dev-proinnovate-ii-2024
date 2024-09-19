export const loadContacts = () => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
};

export const addContact = (contacts, contact) => {
    const newContact = { id: Date.now(), ...contact };
    contacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
};

export const deleteContact = (contacts, contactId) => {
    const updatedContacts = contacts.filter((c) => c.id !== Number(contactId));
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    return updatedContacts;
};

export const updateContact = (contacts, updatedContact) => {
    const index = contacts.findIndex((c) => c.id === updatedContact.id);
    if (index !== -1) {
        contacts[index] = updatedContact;
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    return contacts;
};
