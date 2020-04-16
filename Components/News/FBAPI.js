const API_TOKEN = 'EAAkQjvy46XABAGloXptn6nv3pu9YFUedBJhZC32HIrBFXzonXvSyUl0X9ZBCXGlGTbZC3iuu4es6qgcWiuHQwE6ESZCBlKGc0PBkytkgfSUYjK1OfRO9gvXxMsZBCsJ9jzbEyoKT2y8aFFiHKyEOfoKHVxV3jSZCatAn88ZCdc1HZCJuKSGsiyHepbNVa0asZAuQZD'

export function getFeedFromApiGraph() {
    const url = 'https://graph.facebook.com/v6.0/me/feed?fields=full_picture%2Cmessage%2Cfrom%2Ccreated_time&access_token=' + API_TOKEN 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getEventsFromApiGraph() {
    const url = 'https://graph.facebook.com/v6.0/me/events?fields=description%2Cend_time%2Cname%2Cplace%2Cstart_time%2Cid%2Ccover&access_token=' + API_TOKEN 
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
