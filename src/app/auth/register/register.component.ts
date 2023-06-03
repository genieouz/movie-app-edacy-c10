import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formHasError: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.minLength(6), Validators.required])
    })
  }

  registerUser() {
    if(this.registerForm.invalid) {
      this.formHasError = true;
      return;
    }
    const newUser = this.registerForm.value;
    this.authService.register(newUser).subscribe(
      result => {
        localStorage.setItem("currentSession", JSON.stringify(result));
        this.router.navigate(['/tasks'])
      }
    )
  }

  get firstName(): FormControl {
    return this.registerForm.controls['firstName'] as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.controls['email'] as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.controls['password'] as FormControl;
  }

  get username(): FormControl {
    return this.registerForm.controls['username'] as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.controls['lastName'] as FormControl;
  }
}
