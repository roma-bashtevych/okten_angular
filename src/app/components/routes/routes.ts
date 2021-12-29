import {UsersComponent} from "../users/users.component";
import {PostsComponent} from "../posts/posts.component";
import {UserDetailsComponent} from "../users/user/user-details/user-details.component";
import {Routes} from "@angular/router";

export let routes: Routes = [
  {
    path: 'users', component: UsersComponent,
    children: [{path: ':id', component: UserDetailsComponent}]
  },
  {path: 'posts', component: PostsComponent},
]
