import { AddUser } from "src/app/shared/interface/user.interface";

export class User implements AddUser{
    constructor(
        readonly id: number,
        public login: string,
        public password: string,
        public email: string,
        public status: boolean            
        

    ){}

}