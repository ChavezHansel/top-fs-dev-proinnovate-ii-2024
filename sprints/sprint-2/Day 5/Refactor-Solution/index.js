import { setupEventHandlers } from "./src/events.js";
import { loadContacts } from "./src/storage.js";
import { renderContacts } from "./src/dom.js";

const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const addContactBtn = document.getElementById("addContactBtn");
const contactForm = document.getElementById("contacts");

const contacts = loadContacts();
renderContacts(contacts, contactList);
setupEventHandlers(
    contactForm,
    contactList,
    filterInput,
    clearFilterBtn,
    contacts
);
