// tslint:disable-next-line:quotemark
import { RouterModule, Routes } from "@angular/router";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { ShopComponent } from "./components/shop/shop.component";

// tslint:disable-next-line:quotemark
const routes: Routes = [
  // tslint:disable-next-line:quotemark
  { path: "", redirectTo: "shop", pathMatch: "full" },
  // tslint:disable-next-line:quotemark
  { path: "shop", component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
