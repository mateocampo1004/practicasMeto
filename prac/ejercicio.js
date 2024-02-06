'use strict'

class User{
    
    constructor (username,password,email){

       this.username = username;
        this.password = password;
        this.email = email;
    }
    
    login(username,password){
        //validar usuario y contraseña

        if(this.username === username && this.password === password){
            alert("Welcome");
            }else{
            alert("Credenciales incorrectas");
        }
    }

    resetPass(password){
    this.password = password;    
   // alert(` Nueva clave: ${this.password}`)
    }
 
    updateInfo(email){
      
        this.email = email;

        alert(`Email: ${this.email}`);
    }

    
}

let user1 = new User('Juanito','Juanito123','juanito@gmail.com');

user1.login("Juanito","Juanito123");
user1.resetPass("carlangas");
//user1.login("Juanito","carlangas","juan");
user1.updateInfo("carlangas@gmail.com");