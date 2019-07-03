import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { AuthService } from './auth';
admin.initializeApp();

export const createToken = functions.https.onRequest((request, response) => {
        response.set('Access-Control-Allow-Origin', '*');
        const authService: AuthService = new AuthService(admin);
        authService.createToken(request.query['uid'])
        .then(
            data => {
                response.send(data);
            }
        ).catch(function(error) {
            console.log('Error creating custom token:', error);
        });
});
