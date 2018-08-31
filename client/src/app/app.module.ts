// tslint:disable-next-line:quotemark
import { AppRoutingModule } from "./app-routing.module";
// tslint:disable-next-line:quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { ReactiveFormsModule } from "@angular/forms";

// tslint:disable-next-line:quotemark
// tslint:disable-next-line:quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line:quotemark
import { NavbarComponent } from "./components/navbar/navbar.component";
// tslint:disable-next-line:quotemark
import { ShopComponent } from "./components/shop/shop.component";
// tslint:disable-next-line:quotemark
import { RegisterComponent } from "./components/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
