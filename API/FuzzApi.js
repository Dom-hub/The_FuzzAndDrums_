//const API_TOKEN = "9ba3265fa4c0615501083ce55d7eebc1";
//const ip = ""
//const url = "https://kayzere.me/public/index.php/"

const url = "http://192.168.1.150:8080/public/index.php/"

export function getMusiqueFromApiWithSearchedText(text){
    const route = "musique/";
    const tmp_url = url + route + text
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

export function getMusiqueFromApiWithId(id){
    const route = "musiqueWithId/";
    const tmp_url = url + route + id
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getVideosFromApiWithSearchedText(){
    const route = "videos/";
    const tmp_url = url + route
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

// e-mail

  export function addEmailToDB($email){
    console.log($email)
    const route = "add_email/";
    const tmp_url = url + route + $email
    fetch(tmp_url)
      .catch((error) => {return false});
    return true;
  }

// Galerie

const API_TOKEN = "EAAkQjvy46XABAGloXptn6nv3pu9YFUedBJhZC32HIrBFXzonXvSyUl0X9ZBCXGlGTbZC3iuu4es6qgcWiuHQwE6ESZCBlKGc0PBkytkgfSUYjK1OfRO9gvXxMsZBCsJ9jzbEyoKT2y8aFFiHKyEOfoKHVxV3jSZCatAn88ZCdc1HZCJuKSGsiyHepbNVa0asZAuQZD";

export function getPhotosFromApi() {
  const url = 'https://graph.facebook.com/2437779766534711/photos?access_token='+API_TOKEN;
  return fetch (url)
  .then((response) => response.json())
  .catch((error) => console.error(error));
  }

export function getAlbumsFromApi(){
const url = 'https://graph.facebook.com/2437779766534711/albums?access_token='+API_TOKEN;
return fetch (url)
.then((response) => response.json())
.catch((error) => console.error(error));
}

export function getAlbumsPhotosFromApi(){
const url = "https://graph.facebook.com/v6.0/me/albums?fields=photos%7Bimages%2Cid%7D&access_token="+API_TOKEN;
return fetch (url)
.then((response) => response.json())
.catch((error) => console.error(error));
}

export function getUploadePhotosFromApi(){

const url = "https://graph.facebook.com/v6.0/me/photos?fields=images&type=uploaded&access_token="+API_TOKEN;

return fetch (url)
.then((response) => response.json())
.catch((error) => console.error(error));
}

export function getPhotoFullScreen (id) {
 return fetch('https://graph.facebook.com/v6.0/'+ id + '?fields=images%2Cid&access_token=' + API_TOKEN)
   .then((response) => response.json())
   .catch((error) => console.error(error));
}