import { User } from "../models/user";

export class MfaVerificationResponse {
    email!: string;
    jwt!: string;
    authValid!: boolean;
    mfaRequired!: boolean;
    tokenValid!: boolean;
    message!: string;
    user!: User; // Ajout de la propriété user de type User
    roleTypes!: string[]; // Modifier le type de roleTypes

    constructor(email: string,
        jwt: string,
        tokenValid: boolean,
        authValid: boolean,
        mfaRequired: boolean,
        message: string,
        user: User,
        roles: { name: string }[]){ // Modifier le type des rôles
            this.email = email != null ? email : "";
            this.jwt = jwt != null ? jwt : "";
            this.message = message != null ? message : "";
            this.mfaRequired = mfaRequired != null ? mfaRequired : false;
            this.tokenValid = tokenValid != null ? tokenValid : false;
            this.authValid = authValid != null ? authValid : false;
            this.user = user; // Initialisation de la propriété user

            // Extraction des noms des rôles à partir du tableau d'objets
            this.roleTypes = roles.map(role => role.name);
        }
}
