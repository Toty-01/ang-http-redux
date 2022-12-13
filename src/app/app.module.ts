import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { CustomDirective } from './custom.directive';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './pages/home/users/users.component';
import { PostsComponent } from './pages/home/posts/posts.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProduitsComponent,
    CustomDirective,
    HomeComponent,
    UsersComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
