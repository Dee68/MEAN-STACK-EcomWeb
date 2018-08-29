<<<<<<< HEAD
// tslint:disable-next-line:quotemark
=======
>>>>>>> e2beb28377320fe0b235918ced6e7ce25e652a49
import { RouterModule, Routes } from "@angular/router";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { ShopComponent } from "./components/shop/shop.component";

// tslint:disable-next-line:quotemark
const routes: Routes = [
  // tslint:disable-next-line:quotemark
<<<<<<< HEAD
  { path: "", redirectTo: "shop", pathMatch: "full" },
  // tslint:disable-next-line:quotemark
  { path: "shop", component: ShopComponent }
=======
  { path: "shop", component: ShopComponent },
  {
    // tslint:disable-next-line:quotemark
    path: "",
    // tslint:disable-next-line:quotemark
    redirectTo: "shop",
    // tslint:disable-next-line:quotemark
    pathMatch: "full"
  }
>>>>>>> e2beb28377320fe0b235918ced6e7ce25e652a49
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
