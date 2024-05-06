import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule,RouterOutlet,CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
 isSlideOut=true;
  authService: any;
 

 constructor(private router:Router,private service:AuthService){}
 toggleSlideOut():void{
  this.isSlideOut=!this.isSlideOut;
 }
 OnUser(){
  this.router.navigate(['profile'])
 }
 OnDash(){
  console.log("works")
  this.router.navigate(['dashboard']);
 
 }
 OnOut(){
  

  this.router.navigate(['login'])
 }
}
