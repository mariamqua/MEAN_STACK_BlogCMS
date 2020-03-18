import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { BycategoryComponent } from './components/bycategory/bycategory.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailsComponent } from './components/category/category-details/category-details.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { PostComponent } from './components//post/post.component';
import { PostDetailsComponent } from './components/post/post-details/post-details.component';
import { PostAddComponent } from './components/post/post-add/post-add.component';
import { PostEditComponent } from './components/post/post-edit/post-edit.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Blog Home' }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    data: { title: 'Blog Admin' }
  },
  {
    path: 'bycategory/:id',
    component: BycategoryComponent,
    data: { title: 'Post by Category' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Show Post Details' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    component: CategoryComponent,
    data: { title: 'Category' }
  },
  {
    path: 'category/details/:id',
    canActivate: [AuthGuard],
    component: CategoryDetailsComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'category/add',
    canActivate: [AuthGuard],
    component: CategoryAddComponent,
    data: { title: 'Category Add' }
  },
  {
    path: 'category/edit/:id',
    canActivate: [AuthGuard],
    component: CategoryEditComponent,
    data: { title: 'Category Edit' }
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    component: PostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'post/details/:id',
    canActivate: [AuthGuard],
    component: PostDetailsComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post/add',
    canActivate: [AuthGuard],
    component: PostAddComponent,
    data: { title: 'Post Add' }
  },
  {
    path: 'post/edit/:id',
    canActivate: [AuthGuard],
    component: PostEditComponent,
    data: { title: 'Post Edit' }
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
