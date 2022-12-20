import { Injectable } from '@angular/core';
import { Auth, getAuth, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

  login({email,pass}:any){
    return signInWithEmailAndPassword(this.auth, email,pass);
  }

  logout(){
    return signOut(this.auth);
  }

  currentUser(){
    return getAuth().currentUser;
  }
}
