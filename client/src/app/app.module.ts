import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

<<<<<<< HEAD
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ShopComponent } from "./components/shop/shop.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, ShopComponent],
  imports: [BrowserModule, AppRoutingModule],
=======
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ShopComponent } from './components/shop/shop.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
>>>>>>> e2beb28377320fe0b235918ced6e7ce25e652a49
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
