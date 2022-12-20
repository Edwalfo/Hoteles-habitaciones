import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private _userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) {

    this.formLogin = this.fb.group({

      email: ['', Validators.required],
      pass: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    console.log(this._userService.currentUser()?.uid);
    
  }




  onSubmit() {
    this._userService.login(this.formLogin.value).then(res=>{
      console.log(res);
      this.router.navigate(['/admin']);
      
    }).catch(error=>console.log(error)
    );
  }

}
