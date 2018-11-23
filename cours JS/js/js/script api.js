const lolAPIkey = "RGAPI-39a42e71-1a7c-4eb5-9511-b4e308a226e1";

const summoner = function getSummonerName(name) {
    //var request = "https://euw.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + name +"?api_key="+ lolAPIkey;
    //debugger;
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Kronosun");
    xhr.setRequestHeader("Origin", "");
    xhr.setRequestHeader("Accept-Charset", "application/x-www-form-urlencoded; charset=UTF-8");
    xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
    xhr.setRequestHeader("User-Agent", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:63.0) Gecko/20100101 Firefox/63.0");
    xhr.setRequestHeader("X-Riot-Token", "RGAPI-39a42e71-1a7c-4eb5-9511-b4e308a226e1");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "5502c089-6245-4bc6-8db8-0783a42c9e7e");
    xhr.send(data);
//    debugger;
//    if (this.readyState === XMLHttpRequest.DONE) {
//        if (this.status === 200) {
//            console.log("Réponse reçue: %s", this.responseText);
//        } else {
//            console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
//        }
//    }
}

const masteries = function getMasteries() {
        document.querySelector(".navbar-brand > #id1").innerHTML = data.name;
        document.querySelector(".navbar-brand > #id2").innerHTML = data.mass;
//        document.querySelector(".navbar-brand > #id1").innerHTML = data.name;

}

summoner("Kronosun");