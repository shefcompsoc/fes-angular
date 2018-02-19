import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [
    {text: 'explain angular', done: true},
    {text: 'write program', done: false},
    {text: 'go to the cavendish', done: false}
  ];

  constructor() {}

  ngOnInit() {}
}
