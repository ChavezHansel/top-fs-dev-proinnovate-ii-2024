export const renderContacts = (contacts, contactList) => {
    contactList.innerHTML = "";
    contacts.forEach(({ id, name, phone }) => {
        const li = document.createElement("li");
        li.classList.add("contact-item");
        li.setAttribute("data-id", id);
        li.innerHTML = `<strong>${name}</strong> - ${phone}
        <div class="contact-buttons">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        </div>
        `;
        contactList.appendChild(li);
    });
};
