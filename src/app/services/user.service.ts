import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        {
            firstName: 'Gérald',
            lastName: 'Navarette',
            email: 'gerald.navarette@gmail.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'faire la fête'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

}