import peppinoPizza from "./Peppino_pizza.png";

export function loadMainPage() {
    // Create the image element
    const img = document.createElement('img');
    img.src = peppinoPizza;

    // Create the first div for "Hours"
    const hoursDiv = document.createElement('div');
    const hoursHeading = document.createElement('h3');
    hoursHeading.textContent = 'Hours';
    const hoursList = document.createElement('ul');

    // Define the hours
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    days.forEach(day => {
    const hoursItem = document.createElement('li');
    hoursItem.textContent = `${day}: 12am - 12am`;
    hoursList.appendChild(hoursItem);
    });

    // Append elements to the "Hours" div
    hoursDiv.appendChild(hoursHeading);
    hoursDiv.appendChild(hoursList);

    // Create the second div for "Location"
    const locationDiv = document.createElement('div');
    const locationHeading = document.createElement('h3');
    locationHeading.textContent = 'Location';
    const locationP = document.createElement('p');
    locationP.textContent = '123 Peppino Ave, Peppinoland';

    // Append elements to the "Location" div
    locationDiv.appendChild(locationHeading);
    locationDiv.appendChild(locationP);

    // Create the main container div
    const content = document.querySelector("#content");
    content.appendChild(img);
    content.appendChild(hoursDiv);
    content.appendChild(locationDiv);
}