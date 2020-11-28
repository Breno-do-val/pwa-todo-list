export default class HtmlService {
  #todoService;

  constructor() {
    this.bindFormEvent(todoService);
    this.todoService = todoService;
  }

  bindFormEvent() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("submitted! value: " + form.item.value);
      form.reset();
      form.item.focus();
    });
  }
}
