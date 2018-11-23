var num = 2;
const number = 4;
console.log(number);
let chaineDeChar = "Salut, je JS c'est cool !"; //déclare une variable courante
console.log(chaineDeChar);
function uneFonction() {
    console.log(chaineDeChar);
}
console.log(document.querySelector(".navbar-brand"));

//$('document').ready()
//{
//    debugger;
//   //alert('yolo'); 
//}


const character = function getAcharacter() {
    fetch('https://swapi.co/api/people/10/').then(function(response) {
        return response.json();
    }).then(function(data) {
        debugger;
        document.querySelector(".navbar-brand > #id1").innerHTML = data.name;
        document.querySelector(".navbar-brand > #id2").innerHTML = data.mass;
//        document.querySelector(".navbar-brand > #id1").innerHTML = data.name;

    })
}

character();