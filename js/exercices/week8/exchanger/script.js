let root = document.getElementById("root");
let btn = document.createElement("button");
btn.setAttribute("type","button"); 
btn.setAttribute("id","myBtn"); 
root.appendChild(btn);

document.getElementById("myBtn").innerHTML = "Convert";

document.getElementById("myBtn").addEventListener("click", Convert);

async function Convert() {

	let endpoint = 'live'
	let access_key = '50f3e1a7f30e7984e27ebec75f564ab9';

	let value = document.getElementById("amount").value;
	let from = document.getElementById("currencies1").value;
	let to = document.getElementById("currencies2").value;

	let index = document.getElementById("currencies2").selectedIndex;
	let local = document.getElementById("currencies2")[index].getAttribute('title');

    let url = `http://api.currencylayer.com/${endpoint}?access_key=${access_key}&from=${from}&to=${to}&amount=${amount}`;  

	let data = await (await fetch(url)).json();

	let quotes = Object.values(data)[5];

	const getFromValue = () => {
		for (let [key, value] of Object.entries(quotes)) {
	 		if (key.includes(from)) {
	 			return value;
	 		}
 		}
 	}
 	const getToValue = () => {
	 	for (let [key, value] of Object.entries(quotes)) {
	 		if (key.includes(to)) {
	 			return value;
	 	}
 	}
 }

 	console.log(getFromValue());
 	console.log(getToValue());
 	let Ratio = (  ( getToValue() ) / ( getFromValue() ) );
 	console.log(Ratio);
 	let Result = value * Ratio;

	document.getElementById("result").innerHTML = `${value} ${from} worth ${parseInt(Result)} ${local}`;
}