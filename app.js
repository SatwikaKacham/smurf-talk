var btnTrans =document.querySelector(".btnTrans");
console.log(btnTrans);
var inputTxt = document.querySelector("input");
console.log(inputTxt);
var outPut = document.querySelector(".output");
console.log(outPut);
outPut.innerText="translated text is shown here" ;
function Url(text){
 return "https://api.funtranslations.com/translate/pig-latin.json"+"?text="+text;
}


function errorHandler(error)
 {
     console.log("error occured: "+error);
     alert("ERROR!! Something wrong with the server try again after some time.");
 }

function clickEvent()
{
fetch( Url(inputTxt.value))
.then(response => response.json()) 
.then(json => outPut.innerText=json.contents.translated  )

.catch(errorHandler);
};

btnTrans.addEventListener("click",clickEvent);