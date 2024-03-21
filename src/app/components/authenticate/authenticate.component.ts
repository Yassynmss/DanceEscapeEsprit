/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      paswd: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const paswd = this.loginForm.value.paswd;

    this.authenticationService.authenticate(email, paswd).subscribe(
      (data) => {
        console.log('Authentication successful!', data);
        // Gérer la redirection de l'utilisateur ou d'autres actions après l'authentification réussie
      },
      (error) => {
        console.error('Authentication failed:', error);
        // Gérer les erreurs d'authentification, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }
}*/
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MfaVerificationResponse } from 'src/app/shared/mfa-verification-response.modal';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {

  public loginForm!: FormGroup;
  response!: MfaVerificationResponse;
  message!: string;
  constructor(private authenticationClient: AuthenticationService,
    private authService: AuthService) { 
      if(this.authService.isLoggedIn())
        this.authService.navidateToHome();

    }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  login(){
    this.authenticationClient.login(this.loginForm.value).subscribe((loginResponse: MfaVerificationResponse) => {
      this.response = loginResponse;
      this.message = loginResponse.message;
        ///this.authService
    });
  }
























 /* loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      paswd: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const paswd = this.loginForm.value.paswd;

    this.authenticationService.authenticate(email, paswd).subscribe(
      (data) => {
        console.log('Authentication successful!', data);

        if (data && data.token) {
          // Authentication successful, navigate to appropriate route based on roles
          if (data.roles && data.roles.includes('ADMIN')) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/front']); 
          }
        } else {
          // Handle invalid response from authentication service
          console.error('Invalid authentication response:', data);
          // Optionally, display an error message to the user
        }
      },
      (error) => {
        console.error('Authentication failed:', error);
        // Optionally, display an error message to the user
      }
    );
  }*/
}
