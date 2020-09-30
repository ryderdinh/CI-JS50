const $template = document.getElementById("template-form-sign");

class FormSign extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));

    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");

    this.$formSign = this.shadowRoot.querySelector(".form-sign");
    this.$formSign.onsubmit = (event) => {
      event.preventDefault();
      this.signIn();
    };
  }

  signIn() {
    //   get data
    let email = this.$email.value;
    let password = this.$password.value;
    console.log(email, password);
    // check data
    if (this.validate(this.email, this.password)) {
      alert("Success ✨");
    }
  }

  validate(email, password) {
    let checkCondition = true;
    if (email == "") {
      this.$email.error = "Enter email!";
      checkCondition = false;
    } else {
      this.$email.error = "";
    }

    if (password == "") {
      this.$password.error = "Enter password!";
      checkCondition = false;
    } else {
      this.$password.error = "";
    }

    return checkCondition;
  }
}

window.customElements.define("form-sign", FormSign);
