import { Component } from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService,private router: Router){}

  // logout(){
  //   if(confirm("Voulez vous vraiment vous déconnecter?")){
  //     this.router.navigateByUrl('/home');
  //   }
  //
  // }
  //
  // goHome(){
  //   this.router.navigateByUrl('/home');
  // }
  logout() {
    if (confirm("Voulez vous vraiment vous déconnecter?")) {
      this.authService.clearCache();
      this.router.navigateByUrl('/user');
    }
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

}

// import { Component } from '@angular/core';
// import { Router, RouterLink, RouterModule } from '@angular/router';
// import { AuthService } from '../../../auth/services/auth.service';
//
// @Component({
//   selector: 'app-menu',
//   standalone: true,
//   imports: [RouterLink, RouterModule],
//   templateUrl: './menu.component.html',
//   styleUrl: './menu.component.scss'
// })
// export class MenuComponent {
//   constructor(private authService: AuthService, private router: Router){}
//
//   logout(){
//     if(confirm("Voulez vous vraiment vous déconnecter?")){
//       this.authService.clearCache()
//       this.router.navigateByUrl('/login');
//     }
//
//   }
// }
