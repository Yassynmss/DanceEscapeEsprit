import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  token!: string;
  public popupMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Extraire le token de l'URL
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });

    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.resetForm.valid) {
      const newPassword = this.resetForm.value.password;
      // Utiliser le token extrait de l'URL dans la requête
      this.authService.resetPassword(this.token, newPassword).subscribe(
        () => {
          this.popupMessage = 'Password reset successfully';
          setTimeout(() => {
            this.popupMessage = '';
          }, 10000);
          console.log('Password reset successfully.');
          this.router.navigate(['/login']); // Rediriger vers une autre page après la réinitialisation du mot de passe
        },
        error => {
          console.error('Failed to reset password:', error);
          this.popupMessage = 'Failed to reset password';
          setTimeout(() => {
            this.popupMessage = '';
          }, 10000);
        }
      );
    }
  }
}
