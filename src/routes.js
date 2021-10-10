const express = require("express")
const translate = require('translate-google')


const cors = require("cors")
var bodyParser = require('body-parser');
// cal express
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));





const routes = express.Router();

routes.post("/login", (require,response) => {
  
    
       language = require.body.language;
       sign = require.body.sign;
       forget = require.body.forget;
       here = require.body.here
       login = require.body.login;
       email = require.body.email;
       password = require.body.password;
       translate({a: 'I speak Chinese!', b: [sign,forget,here,login,email,password]}, {from: 'pt', to: language}).then(res => {
        console.log(res)
        sign =  res.b[0]
        forget = res.b[1]
        here = res.b[2]
        login = res.b[3]
        email = res.b[4]
        password = res.b[5]
        return response.json({language,sign,forget,here,login,email,password,})
      
      
    }).catch(err => {
        console.error(err)
    })
     
        
      
})
   


    

//

// pegando parametro do tipo query
//http://localhost:3333/users?name=keven
routes.get("/users", (require,response) => {
    const params = require.query
    console.log(params);
    return response.json({
        name: "keven",
        email: "kevenescovedo1916@gmail.com"
    })
})
//http://localhost:3333/users/1
routes.get("/users/:id", (require,response) => {
    const params = require.params
    console.log(params);
    return  response.send("hello word");
})
//http://localhost:3333/users
routes.post("/users", (require,response) => {
    const body = require.body
    console.log(body);
    return  response.json(body);
})


module.exports = routes