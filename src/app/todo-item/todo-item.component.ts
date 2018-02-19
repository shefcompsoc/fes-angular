import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo;

  @HostBinding('class.done') get done () {
    return this.todo.done;
  }

  constructor() {}

  ngOnInit() {}

  markAs(done) {
    this.todo.done = done;
  }
}
