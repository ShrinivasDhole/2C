import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  displayname=" ";
  displayaddress=" ";
  displayemail=" ";
  displaynumber=" ";
  getValue(name:string , address:string , email:string , number:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displayemail=email;
    this.displaynumber=number;
  }
}
