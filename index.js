var websiteName = document.getElementById("SiteName");
var WebsiteURL = document.getElementById("URL");

var websitecontainer = [];

if (localStorage.length != 0) {
    websitecontainer = JSON.parse(localStorage.getItem("Websites"));
    displayTableDate(websitecontainer);
}


function getDate()
{

    if (validationOfSiteName && validationOfSiteUrl())
    {
        var website = {
            Name: websiteName.value,
            URL: WebsiteURL.value
        }
        websitecontainer.push(website);
        localStorage.setItem("Websites", JSON.stringify(websitecontainer));
        displayTableDate(websitecontainer);
        console.log(websitecontainer);
        clearInputes();
    }


}




function displayTableDate(arr) {
    var emlementInTable = ``;
    for (var i = 0; i < arr.length; i++) {
        emlementInTable += `
        <tr class=" border-bottom  ">
        <td >${i}</td>
        <td>${arr[i].Name}</td>
        <td><a href="${arr[i].URL}" target="_blank"><button class="visitbtn btn btn ">Visit</button></a></td>
        <td><Button onclick=" deleteWebsite(${i});" class="btn btn-danger ">Delete</Button></td>
         </tr>`
    }

    document.getElementById("tableBody").innerHTML = emlementInTable;
}


function deleteWebsite(index) {
    websitecontainer.splice(index, 1);
    displayTableDate(websitecontainer);
    localStorage.setItem("Websites", JSON.stringify(websitecontainer));



}


function validationOfSiteName() {
    var regex = /[A-zA-z]{3:} /;
    return regex.test(websiteName.value);
}


function validationOfSiteUrl() {
    var regex = /^www\.[a-zA-Z]{1,}\.com$/;
    return regex.test(WebsiteURL.value);
}

function clearInputes() {
    websiteName.value = "";
    WebsiteURL.value = "";

}

