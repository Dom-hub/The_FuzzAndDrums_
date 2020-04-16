const TokenAPI = "&key=AIzaSyBSgxqmVkoBGHUShTwZbcLku1YIjuGbb7k";
const url = "https://www.googleapis.com/youtube/v3/";

export function getVideoDataIDFromApi(){
    const code = "playlistItems?part=snippet&fields=items(snippet)&resourceid&maxResults=50&playlistId=UUFJSTBDmWzTO077srl2HR2Q";
    const tmp_url = url + code + TokenAPI;
    return fetch(tmp_url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
}
