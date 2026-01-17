const User = {
    _email: 't@rit.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const car = Object.create(User)
console.log(car.email);