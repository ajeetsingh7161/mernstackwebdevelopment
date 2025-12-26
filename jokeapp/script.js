async function GetNewJokes(){

    const respone= await fetch("https://official-joke-api.appspot.com/jokes/random");
    console.log(Response);

    const data = await Response.json();
    console.log(data);

    document.getElementById("setup").innerText=data.setup;
    document.getElementById("punchline").innerText


}