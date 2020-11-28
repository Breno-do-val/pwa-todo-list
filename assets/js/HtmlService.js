export default class HtmlService {
  _todoService;

  constructor(todoService) {
    this.bindFormEvent();
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
