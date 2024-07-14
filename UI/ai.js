const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");


const APIKEY = ""; // fil this in 

const getResponse = async () => {
    const genAI = new GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt = document.getElementById("prompt").value;
    if(prompt == "") return;
    const result = await model.generateContent("Diagnose the disease and/or illness with the following symptoms:"+prompt); 
    const response = await result.response;
    const text = response.text();
    document.getElementById("response").innerText = text;
};

function onStart(){
    const submitButton = document.getElementById("Submit");
    submitButton.addEventListener("click", getResponse);
}
onStart();
