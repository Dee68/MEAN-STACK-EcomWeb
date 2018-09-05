// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  NgForm
  // tslint:disable-next-line:quotemark
} from "@angular/forms";

@Component({
  // tslint:disable-next-line:quotemark
  selector: "app-register",
  // tslint:disable-next-line:quotemark
  templateUrl: "./register.component.html",
  // tslint:disable-next-line:quotemark
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  // // tslint:disable-next-line:quotemark
  // UserName: String = "";
  // // tslint:disable-next-line:quotemark
  // Email: String = "";
  // // tslint:disable-next-line:quotemark
  // Password: String = "";
  // // tslint:disable-next-line:quotemark
  // ConfirmPassword: String = "";

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}
  Signup(signupForm: NgForm) {
    console.log(signupForm.controls);
  }
  matchingPass(password, cpass) {
    return (group: FormGroup) => {
      if (group.controls[password].value === group.controls[cpass].value) {
        return null;
      } else {
        return { matchingPass: true };
      }
    };
  }
  createForm() {
    this.signupForm = this.fb.group(
      {
        username: [
          // tslint:disable-next-line:quotemark
          "",
          Validators.compose([Validators.required, Validators.minLength(2)])
        ],
        // tslint:disable-next-line:quotemark
        email: [
          // tslint:disable-next-line:quotemark
          "",
          Validators.compose([Validators.required, Validators.email])
        ],
        password: [
          // tslint:disable-next-line:quotemark
          "",
          Validators.compose([Validators.required, Validators.minLength(6)])
        ],
        // tslint:disable-next-line:quotemark
        cpass: ["", Validators.required]
      },
      // tslint:disable-next-line:quotemark
      { validator: this.matchingPass("password", "cpass") }
    );
  }
}
