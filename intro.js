
//function changeBackground() {
//    document.getElementById("changeBtn").innerHTML = $(showGreen(),showYellow(),showOrange());
//}

showGreen();
function showGreen() {
    document.getElementById('body').innerHTML = /*HTML*/`
    <div id="body" onclick="showOrange()">
        <div style="background-color: green;"></div> `
;}

showYellow();
function showYellow() {

    document.getElementById('body').innerHTML = /*HTML*/`
    <div id="body" onclick="showGreen()">
        <div style="background-color: yellow;"></div> 
`;}

showOrange();
function showOrange() {
    document.getElementById('body').innerHTML = /*HTML*/`
    <div id="body" onclick="showYellow()">
        <div style="background-color: orange;"></div>
    `;}

function show(myFunction,bG1,bG2,bG3) {
    document.getElementById('body').innerHTML = /*HTML*/`
    <div id="body" onclick="show${myFunction}">
    <div class="body" style="background-color: ${bG1};"></div>
    <div class="body" style="background-color: ${bG2};"></div>
    <div class="body" style="background-color: ${bG3};"></div>
`;}