import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end Showdown';
  filter = 'none';

  _todos = [
    { text: 'explain angular', done: true },
    { text: 'write todo program', done: false },
    { text: 'go to the cavendish', done: false }
  ];

  @ViewChild('todoText') textInput: ElementRef;

  addTodo(text) {
    this._todos.push({
      text,
      done: false
    });

    this.textInput.nativeElement.value = '';
  }

  setFilter(filter) {
    this.filter = filter;
  }

  get todos() {
    if (this.filter === 'complete') {
      return this._todos.filter(x => x.done);
    } else if (this.filter === 'incomplete') {
      return this._todos.filter(x => !x.done);
    } else {
      // no filter
      return this._todos;
    }
  }
}
