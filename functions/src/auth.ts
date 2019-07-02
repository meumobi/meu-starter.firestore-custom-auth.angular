export class AuthService {
    admin;
    constructor(admin) {
        this.admin = admin;
    }
    public createToken(uid: string) {
        return this.admin.auth().createCustomToken(uid);
    }
}
