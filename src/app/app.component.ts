import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end Showdown';

  todos = [
    { text: 'explain angular', done: true },
    { text: 'write todo program', done: false },
    { text: 'go to the cavendish', done: false }
  ];

  addTodo(text, ev) {
    if (ev) ev.preventDefault();

    this.todos.push({
      text,
      done: false
    })
  }
}
