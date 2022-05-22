const iframe = document.getElementById('login-iframe');
console.log(iframe);
const loginDoc = iframe.contentDocument || iframe.contentWindow.document;

const loginInput = loginDoc.querySelector("target-login-input");

const handleChange = () => {
    console.log(loginInput.value);
};

loginInput.addEventListener("change", handleChange);

console.log(loginInput);
