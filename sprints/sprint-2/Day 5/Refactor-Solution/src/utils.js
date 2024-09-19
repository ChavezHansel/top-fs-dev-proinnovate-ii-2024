// Sanitize input to prevent XSS
export const sanitizeInput = (input) => {
    return input
        .replace(/[&<>"'/]/g, (match) => {
            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
            };
            return map[match];
        })
        .trim();
};
