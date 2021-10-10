
 import translate from "google-translate-api";
 function ApiTranslateMensage(request, response){
   
        if (request.method !== 'POST') {
          response.status(405).send({ message: 'Only POST requests allowed' })
          return
        }
        else {
          var tolangue = request.body.to;
          tolangue = tolangue.toLowerCase();
          tolangue = tolangue.substr(0,2);
          var texttranslate = request.body.text;
         
          const translate = require('@vitalets/google-translate-api');

translate(texttranslate, {to: tolangue}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
    response.status(200).send({text: res.text, from: res.from.language.iso});
}).catch(err => {
    response.status(400).send(err);
});
      }
     
}
export default  ApiTranslateMensage;