export class MfaVerificationResponse {
    email!: string;
    jwt!: string;
    authValid!: boolean;
    mfaRequired!: boolean;
    tokenValid!: boolean;
    message!: string;
    constructor(email: string,
        jwt: string,
        tokenValid: boolean,
        authValid: boolean,
        mfaRequired: boolean,
        message: string){
            this.email = email!=null?email:"";
            this.jwt = jwt!=null?jwt:"";
            this.message = message!=null?message:"";
            this.mfaRequired = mfaRequired!=null?mfaRequired:false;
            this.tokenValid = tokenValid!=null?tokenValid:false;
            this.authValid = authValid!=null?authValid:false;
        }
}