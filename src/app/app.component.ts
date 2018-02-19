import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end Showdown';
  filter = 'none';

  todos = [
    { text: 'explain angular', done: true },
    { text: 'write todo program', done: false },
    { text: 'go to the cavendish', done: false }
  ];

  addTodo(text, ev) {
    if (ev) {
      ev.preventDefault();
    }

    this.todos.push({
      text,
      done: false
    });
  }

  setFilter(filter) {
    this.filter = filter;
  }

  applyFilter(todos) {
    if (this.filter === 'complete') {
      return todos.filter(x => x.done);
    } else if (this.filter === 'incomplete') {
      return todos.filter(x => !x.done);
    } else {
      // no filter
      return todos;
    }
  }
}
