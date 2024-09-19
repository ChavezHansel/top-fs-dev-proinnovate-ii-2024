import { addContact, deleteContact, updateContact } from "./storage.js";
import { sanitizeInput } from "./utils.js";
import { validateInput } from "./validation.js";
import { renderContacts } from "./dom.js";

export const setupEventHandlers = (
    contactForm,
    contactList,
    filterInput,
    clearFilterBtn,
    contacts
) => {
    let isEditing = false;
    let currentContactId = null;

    contactForm.onsubmit = (e) => {
        e.preventDefault();
        const name = sanitizeInput(document.getElementById("name").value);
        const phone = sanitizeInput(document.getElementById("phone").value);
        const terms = document.getElementById("terms").checked;

        try {
            if (!terms) throw new Error("Please accept the terms.");
            validateInput(name, phone);

            if (isEditing) {
                contacts = updateContact(contacts, {
                    id: currentContactId,
                    name,
                    phone,
                });
                isEditing = false;
                currentContactId = null;
            } else {
                addContact(contacts, { name, phone });
            }

            renderContacts(contacts, contactList);
            contactForm.reset();
        } catch (error) {
            alert(error.message);
        }
    };

    contactList.onclick = (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const contactId = e.target.closest(".contact-item").dataset.id;
            contacts = deleteContact(contacts, contactId);
            renderContacts(contacts, contactList);
        }

        if (e.target.classList.contains("edit-btn")) {
            const contactId = e.target.closest(".contact-item").dataset.id;
            const contactToEdit = contacts.find(
                (c) => c.id === Number(contactId)
            );

            document.getElementById("name").value = contactToEdit.name;
            document.getElementById("phone").value = contactToEdit.phone;

            isEditing = true;
            currentContactId = Number(contactId);
        }
    };

    filterInput.oninput = (e) => {
        const query = e.target.value.toLowerCase();
        const filteredContacts = contacts.filter(
            (contact) =>
                contact.name.toLowerCase().includes(query) ||
                contact.phone.includes(query)
        );
        renderContacts(filteredContacts, contactList);
    };

    clearFilterBtn.onclick = () => {
        filterInput.value = "";
        renderContacts(contacts, contactList);
    };
};
