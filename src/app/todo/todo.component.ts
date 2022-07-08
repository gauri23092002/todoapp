import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private api:TodoserviceService) { 
    api.viewTodos().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }

  ngOnInit(): void {
  }
data:any=[]
}
