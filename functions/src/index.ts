import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { AuthService } from './auth';
admin.initializeApp();

export const createToken = functions.https.onRequest((request, response) => {
        const authService: AuthService = new AuthService(admin);
        const uid = "aaaaa";
        authService.createToken(uid)
        .then(
            data => {
                response.send(data);
            }
        ).catch(function(error) {
            console.log('Error creating custom token:', error);
        });
});
