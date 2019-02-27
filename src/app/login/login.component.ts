import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var i=0;
    (function repeat(){
      if(i++>100) return;
        setTimeout(function() {
           document.write(""+i);
           console.log(""+i);
           repeat();
          
        },2000); 
      })();
    }
  
  }

