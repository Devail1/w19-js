const urls = [
    'https://api.currencylayer.com/convert?access_key=50f3e1a7f30e7984e27ebec75f564ab9from=EUR&to=GBP&amount=100'
    ]
    
async function getData() {
    let url = "https://api.currencylayer.com/live?access_key=YOUR_ACCESS_KEY";

    let data = await (await fetch(url)).json();
    console.log(data);
}

