// tslint:disable-next-line:quotemark
import { AppRoutingModule } from "./app-routing.module";
// tslint:disable-next-line:quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";

// tslint:disable-next-line:quotemark
// tslint:disable-next-line:quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line:quotemark
import { NavbarComponent } from "./components/navbar/navbar.component";
// tslint:disable-next-line:quotemark
import { ShopComponent } from "./components/shop/shop.component";

@NgModule({
  declarations: [AppComponent, ShopComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
