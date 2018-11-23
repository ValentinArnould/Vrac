const addChar = function addAcharToLocalStorage() {
    //random nbr
    fetch('https://swapi.co/api/people/10/').then(function(response) {
        //debugger;
        return (response.status == 200 ? response.json() : "");
    }).then(function(data) {
        var tableChar = "";
        debugger;
        if(data != "") {
            tableChar = localStorage.getItem('people');
            tableChar += JSON.stringify(data);
            localStorage.setItem('people',data);
        }
        tableChar = localStorage.getItem('people');
        var tabb = tableChar;
        debugger;
//        console.log(JSON.parse(tableChar)[0].name);
        //document.querySelector(".navbar-brand > #id1").innerHTML = data.name;
        //document.querySelector(".navbar-brand > #id2").innerHTML = data.mass;
        //document.querySelector(".navbar-brand > #id1").innerHTML = data.name;

    })
}