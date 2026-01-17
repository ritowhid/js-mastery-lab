class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}towhid`
    }

    set password(value){
        this._password = value
    }
}

const towhid = new User("t@towhid.ai", "abc")
console.log(towhid.email);