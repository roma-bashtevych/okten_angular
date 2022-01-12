import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {UserDeactivatorService} from "../services/user-deactivator.service";
import {UserActivatorService} from "../services/user-activator.service";

export let routes: Routes = [
  {path: '', component: UsersComponent, canDeactivate: [UserDeactivatorService]},
  {path: 'users/:id', component: UserDetailsComponent, canActivate: [UserActivatorService]},
  {path: 'users', redirectTo: '', pathMatch: 'full'},
]
