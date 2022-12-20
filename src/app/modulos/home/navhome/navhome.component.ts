import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.sass']
})
export class NavhomeComponent implements OnInit { 

  constructor(
    private _userServive: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    console.log(this._userServive.currentUser()?.uid,'uid');
    
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
