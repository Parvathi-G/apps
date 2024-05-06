import { Routes } from '@angular/router';
import { AuthComponent } from './feature/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskcreationpageComponent } from './components/taskcreationpage/taskcreationpage.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { TaskDetailPageComponent } from './components/task-detail-page/task-detail-page.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';



export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:AuthComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'taskcreationpage',component:TaskcreationpageComponent},
    {path:'sidenavbar',component:SideNavComponent},
    {path:'taskdetailpage/:id',component:TaskDetailPageComponent},
    {path:'taskdetailpage',component:TaskDetailPageComponent},
    {path:'piechart',component:PiechartComponent},
    {path:'profile',component:ProfileComponent},
    {
        path: 'edit/:id',
        component:EditComponent
    },
   
   
  
  
    
];
