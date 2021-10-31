const isEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);

const containLetter = (password: string) => /[a-zA-Z]/g.test(password);

const checkName = (name: string) => /^[a-zA-Z\s]*$/.test(name);

const containNumber = (password: string) => /\d/.test(password);

const constainSpecialCharacters = (name: string) =>
    /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/.test(name);

export { isEmail, containLetter, containNumber, constainSpecialCharacters, checkName };
