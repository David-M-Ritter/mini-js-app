change_color = () => {
    if (document.getElementById("header").innerText == "Hello World!"){
        console.log("Yes")}
    else {
        console.log("No")}

};


urlnice = () => {
    const requestUrl = "http://127.0.0.1:3000/Nicedude";
    const reponse = fetch(requestUrl)
    .then((response) => response.json())
    .then((json) => console.log(json))
};