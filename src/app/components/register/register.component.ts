/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { GenderType, User } from 'src/app/models/user';
import { role } from 'src/app/models/role'; // Assurez-vous que le chemin d'accès est correct

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  roles: string[] = ["ADMIN", "EVALUATOR", "DANCER", "VISITOR"];
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roles: ["VISITOR", Validators.required], // Changez de 'roles' à 'role'
      genderType: [GenderType.Male, Validators.required],
      phonenumber: ['', Validators.required],
      podepostal: ['', Validators.required],
      commune: ['', Validators.required],
      language: ['', Validators.required],
      expertise: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const rolechosing = this.registerForm.value.role; // Correction du nom de la variable
    const newUser: User = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      paswd: this.registerForm.value.password,
      roles: [{ name: rolechosing } as role], // Utilisez un tableau avec un objet role
      genderType: this.registerForm.value.genderType,
      phonenumber: this.registerForm.value.phonenumber,
      podepostal: this.registerForm.value.postalCode,
      commune: this.registerForm.value.commune,
      language: this.registerForm.value.language,
      expertise: this.registerForm.value.expertise
    };
    
    this.userService.createUser(newUser).subscribe(
      (data) => {
        console.log('User registered successfully!', data);
        // Réinitialiser le formulaire ou rediriger l'utilisateur vers une autre page après l'inscription
      },
      (error) => {
        console.error('Error registering user:', error);
        // Gérer les erreurs d'inscription, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }
}*/


import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerForm!: FormGroup;
  mfaRes: any;
  isLoading = false;
  
  roleTypes: string[] = ['USER','ADMIN', 'EVALUATOR', 'DANCER', 'VISITOR'];

  constructor(private authenticationClient: AuthenticationService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      paswd: new FormControl('', Validators.required),
      role: new FormControl(null, Validators.required),
      enableMfa: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      podepostal: new FormControl('', Validators.required),
      commune: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      expertise: new FormControl('', Validators.required)
    });
    this.mfaRes = null;
}


register() {
  this.isLoading = true;

  // Récupérer la valeur du champ "role"
  const selectedRole = this.registerForm.value.role;

  // Créer un objet avec une propriété "name" contenant le rôle sélectionné
  const rolesObject = { name: selectedRole };

  // Construire l'objet de données à envoyer dans la requête
  const requestData = {
    ...this.registerForm.value,
    roles: [rolesObject] // Envoyer le rôle sous forme de tableau
  };

  this.authenticationClient.register(requestData)
    .subscribe((mfaQR: any) => {
      this.isLoading = false;
      this.mfaRes = JSON.parse(mfaQR);
      console.log(this.mfaRes);
    });
}








}


















 /* registerForm: FormGroup;
  submitted = false;

  genderTypes: GenderType[] = [GenderType.Male, GenderType.Female, GenderType.Other];
  roleTypes: RoleType[] = Object.values(RoleType); // Ajoutez cette ligne pour accéder aux rôles dans le template

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required], // Changez de 'roles' à 'role'
      genderType: [GenderType.Male, Validators.required],
      phonenumber: ['', Validators.required],
      podepostal: ['', Validators.required],
      commune: ['', Validators.required],
      language: ['', Validators.required],
      expertise: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const roleChoosing = this.registerForm.value.role; // Correction du nom de la variable
    const newUser: User = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      paswd: this.registerForm.value.password,
      roles: [{ name: roleChoosing }], // Utilisez un tableau avec un objet role
      genderType: this.registerForm.value.genderType,
      phonenumber: this.registerForm.value.phonenumber,
      podepostal: this.registerForm.value.postalCode,
      commune: this.registerForm.value.commune,
      language: this.registerForm.value.language,
      expertise: this.registerForm.value.expertise
    };

    this.userService.createUser(newUser).subscribe(
      (data) => {
        console.log('User registered successfully!', data);
        // Réinitialiser le formulaire ou rediriger l'utilisateur vers une autre page après l'inscription
      },
      (error) => {
        console.error('Error registering user:', error);
        // Gérer les erreurs d'inscription, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }*/
  




/*import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { GenderType, User } from 'src/app/models/user';
import { role } from 'src/app/models/role'; // Assurez-vous que le chemin d'accès est correct

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  roles: string[] = ["ADMIN", "EVALUATOR", "DANCER", "VISITOR"];
  genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ["VISITOR", Validators.required], // Changez de 'roles' à 'role'
      genderType: [GenderType.Male, Validators.required],
      phonenumber: ['', Validators.required],
      podepostal: ['', Validators.required],
      commune: ['', Validators.required],
      language: ['', Validators.required],
      expertise: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const newUser: User = {
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      paswd: this.registerForm.value.password,
      roles: [{ name: this.registerForm.value.role } as role], // Créez un objet Role et ajoutez-le à votre tableau de rôles
      genderType: this.registerForm.value.genderType,
      phonenumber: this.registerForm.value.phonenumber,
      podepostal: this.registerForm.value.postalCode,
      commune: this.registerForm.value.commune,
      language: this.registerForm.value.language,
      expertise: this.registerForm.value.expertise
    };

    this.userService.createUser(newUser).subscribe(
      (data) => {
        console.log('User registered successfully!', data);
        // Réinitialiser le formulaire ou rediriger l'utilisateur vers une autre page après l'inscription
      },
      (error) => {
        console.error('Error registering user:', error);
        // Gérer les erreurs d'inscription, par exemple, afficher un message d'erreur à l'utilisateur
      }
    );
  }
}*/
