const formGenerator = {
  getContentSpace: function () {
    return document.querySelector("#content");
  },
  intiateForm: function () {
    this.resetPrevious();
    this.placeContent();
  },
  resetPrevious: function () {
    this.getContentSpace().textContent = "";
  },
  placeContent: function () {
    const contentSpace = this.getContentSpace();
    const contactUsArea = this.createContactUsArea();
    const findUs = this.createFindUsArea();

    contentSpace.appendChild(contactUsArea);
    contentSpace.appendChild(findUs);
  },
  createContactUsArea: function () {
    //make a modal here as well, give this a bg, this has the btn
    const contactUsContainer = document.createElement("div");
    const contactUsButton = document.createElement("button");
    const reservationButton = document.createElement("button");

    contactUsContainer.classList.add("contact-us-container");
    contactUsButton.classList.add("contact-us-button");
    reservationButton.classList.add("reservation-button");

    contactUsButton.textContent = "Contact Us";
    reservationButton.textContent = "Reserve in Advance";

    contactUsContainer.appendChild(contactUsButton);
    contactUsContainer.appendChild(reservationButton);

    contactUsButton.addEventListener("click", this.contactUsPopup);
    reservationButton.addEventListener("click", this.reservationPopup);

    return contactUsContainer;
  },
  createFindUsArea: function () {
    // This.. just works lol - no further ammendments required
    const findUsContainer = document.createElement("div");
    let mapLocation = document.createElement("div");

    mapLocation.innerHTML = this.createMap();

    findUsContainer.appendChild(mapLocation);

    return findUsContainer;
  },
  createMap: function () {
    return `<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Find%20Our%20Business%20Here)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>`;
  },
  contactUsPopup: function () {
    //Our contact details
  },
  reservationPopup: function () {
    //
  },
};

/* Okay this needs a bit of planning, let's start:

The image as background, button to CONTACT US in the middle of the image, and then a modal pops-up exactly like in the workit-kit.

The information doesnt have to be stored because it's a mock (obviously).

Below the image, add some random google maps location side by side to an a random (100% fake address)

And voila, should be it.

The modal: 
[x]
Name, 
Number,
[Optional] Email, *we do not send promotional emails or save your email beyond sending the confirmed reservation,
Date and time,
Any additional notes (allergies, requirements, special requests):

[Submit]
*/

export { formGenerator };
