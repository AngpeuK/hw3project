import {User} from "./User";

export class Processor {

 givenConsent(user:User)   : void {
     user.consentGiven = true
 }

    verifyConsent(user:User) : boolean {
     return user.consentGiven === true
    }
}