import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  profileForm!: FormGroup;
  user!: User;
  roles: Role[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: '', disabled: true }, Validators.email],
      roles: [[]] // Utilisez un tableau vide pour les rôles sélectionnés par défaut
      // Ajoutez d'autres champs de profil utilisateur au besoin
    });

    this.userService.getUserProfile().subscribe(
      (user: User) => {
        this.user = user;
        this.patchFormWithUserData();
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );

    // Chargez les rôles disponibles
    this.loadRoles();
  }

  patchFormWithUserData(): void {
    this.profileForm.patchValue({
      firstName: this.user.firstname,
      lastName: this.user.lastname,
      email: this.user.email,
      roles: this.user.roles // Remplissez les rôles sélectionnés dans le formulaire
      // Patchez d'autres champs de profil utilisateur au besoin
    });
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      const updatedUser: User = {
        id: this.user.id,
        firstname: this.profileForm.value.firstName,
        lastname: this.profileForm.value.lastName,
        email: this.user.email,
        roles: this.profileForm.value.roles
        // Ajoutez d'autres champs de profil utilisateur au besoin
      };

      // Appelez le service pour mettre à jour le profil utilisateur
      this.userService.updateUserProfile(updatedUser).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          // Mettez à jour les détails du profil utilisateur dans le composant si nécessaire
        },
        (error) => {
          console.error('Error updating user profile:', error);
          // Gérer les erreurs ici
        }
      );
    } else {
      // Gérez les validations du formulaire
    }
  }

  loadRoles(): void {
    // Appelez le service pour récupérer les rôles disponibles
    this.userService.getRolesFromDatabase().subscribe(
      (roles: Role[]) => {
        this.roles = roles;
      },
      (error) => {
        console.error('Error fetching roles:', error);
        // Gérer les erreurs ici
      }
    );
  }
}
