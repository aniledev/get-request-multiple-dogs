// "use strict";

function getDogImage(result) {
  fetch(result)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    .catch((error) => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  let html = "";
  for (const element of responseJson.message) {
    html += `<img src="${element}" class="results-img"/>`;
    //display the results section
  }
  $(".results").replaceWith(html);
  $(".results").removeClass("hidden");
}

// object = {
//     message: [1, 2,...]
// }

//set api to a variable to make it easier to reference in functions
const dogAPI = "https://dog.ceo/api/breeds/image/random/";

//Get value from the user input and verify that my event listener is working
function formValue() {
  $("button[type=submit]").click(function () {
    event.preventDefault();
    let numberOfDogs = $(".submit").val();

    //create a default value for the form to be set to 3
    if (numberOfDogs === "") {
      numberOfDogs = 3;
    }
    console.log(numberOfDogs);

    let result = `${dogAPI}${numberOfDogs}`;
    console.log(result);

    getDogImage(result);
    // let i = 1;
    // while (i <= numberOfDogs) {
    //   getDogImage();
    //   displayResults(responseJson);
    //   i++;
  });
}

// function watchForm() {
//   $('form').submit(event => {
//     event.preventDefault();
//     getDogImage();
//   });
// }

$(function () {
  console.log("App loaded! Waiting for submit!");
  formValue();
});
