export default class LeaderBoard {

  async post(url, data){

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data)
    })
    const res = await response.json();
    return res;
  }

  async get(url){
    const response = await fetch(url);
    const res = await response.json();
    return res;
  }
}