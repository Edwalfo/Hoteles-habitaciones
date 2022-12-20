import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.sass']
})
export class NavadminComponent implements OnInit {

  constructor(
    private _userServive: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this._userServive.logout().
    then(()=>{
      this.router.navigate(['/']);
    }).
    catch(error=>console.error(error)
    );

  }

}
