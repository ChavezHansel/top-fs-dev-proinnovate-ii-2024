export const validateInput = (name, phone) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!nameRegex.test(name))
        throw new Error("Name should contain only letters.");
    if (!phoneRegex.test(phone))
        throw new Error("Phone should contain only numbers.");
};
