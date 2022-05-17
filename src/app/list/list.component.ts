import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms'; 
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  events: any;
 

  addEvent(event: any){
this.events=event.value.toLocaleString();
    //this.events.push(event.value.toLocaleString());
   console.log(this.events);
  
  }
  //addEvent( event: MatDatepickerInputEvent<Date>) {
   // this.events.push ( '${event.value}');
    
  //}
taskList:any[]=[];
taskList1:any[]=[];
taskList2:any[]=[];
toggle =true;
//status ='enable';
newList:any[]=[];   
new: boolean=false;
editTodo: boolean=false;
  constructor() { 

  }
  insertTask(item:any){
this.taskList.push({id:this.taskList.length,name:item,date:this.events})
//console.log(this.taskList);
this.events=[];
  }
  
  ngOnInit(): void {
  }
remove(id:number){
  this.taskList=this.taskList.filter(item=>item.id!=id)
 // this.taskList1=this.taskList1.filter(item=>item.id!=id)
}
removeafteredit(id1:number,name1:string){
 
  this.taskList2=this.taskList2.filter(item=>item.id!=id1)
}

displayList(id1:number,name1:string,date1:any){
  this.taskList1=(this.taskList.filter(item=>item.id==id1));
this.taskList2.push({id:id1,name:name1,date:date1})
  this.taskList=this.taskList.filter(item=>item.id!=id1)

  //this.toggle= ! this.toggle;

  //this.status= this.toggle ? 'enable': 'disable';
 // console.log(this.taskList2)
}
edit(id:number){
  this.editTodo = !this.editTodo;
  this.new=!this.new;
  this.newList=(this.taskList.filter(item=>item.id==id));
}

update(id1:number,name1:any,date1:any){
  this.new=!this.new;

  this.taskList.forEach((ele:any,index:any)=>{
    if (ele.id == id1 ) {ele.name=name1; ele.date=date1;
     
  
  }});
  

  

}



}
