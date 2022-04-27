class UserCard extends HTMLElement {
  constructor() {
    super();
    this.name = "default_name";
    this.gender = "defautl_gender";
    this.photo = "placehold.co/128x128";
    this.attachShadow({ mode: "open" });
    // this.setData();
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */`
        <style></style>
        <img class="photo" src ="${this.photo}">
        <div class="card">Name: ${this.name} </div>
        <div class="gender">Gender: ${this.gender}</div>

      `;
  }

  setData(data) {
    this.name = data.name;
    this.photo = data.photo;
    this.gender = data.gender;
    this.render();
  }
}

customElements.define("user-card", UserCard);
