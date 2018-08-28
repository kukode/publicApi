// let barang = ["sabun"]
// barang.push("piring")
// barang.push("rinso")
// console.log(barang)
const validator = require('validator')

class Auth{
   
    constructor(){
        this.user = [{
            "username" : "root",
            "password" : "secret"
        }]
        this.datauser
    }
    login(data){
        this.datauser = data
        for(let i=0;i <= this.user.length - 1;i++){
            if(this.datauser.username === this.user[i].username && this.datauser.password === this.user[i].password){
                console.log('sukses')
            }
            else {
                console.log('gagal login')
            }
        }
    }
    validate(data){

    }
    
    
    
}

// const cek = new Auth()
// cek.login(
//     {
//     "username" : "root",
//     "password": "secret"
//     }
// )
let email = validator.isEmail('joko@mail.com')
console.log(email)
