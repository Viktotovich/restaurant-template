const formGenerator = {
  getContentSpace: function () {
    return document.querySelector("#content");
  },
  getModalSpace: function () {
    return document.querySelector(".title-space");
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
    const titleSpace = this.createTitleSpace();

    contentSpace.appendChild(contactUsArea);
    contentSpace.appendChild(titleSpace);
    contentSpace.appendChild(findUs);
  },
  createContactUsArea: function () {
    //make a modal here as well, give this a bg, this has the btn
    const contactUsContainer = document.createElement("div");
    const contactUsButton = document.createElement("button");
    const reservationButton = document.createElement("button");
    const buttonContainer = document.createElement("div");

    contactUsContainer.classList.add("contact-us-container");
    contactUsButton.classList.add("contact-us-button");
    reservationButton.classList.add("reservation-button");
    buttonContainer.classList.add("button-container");

    contactUsButton.textContent = "Contact Us";
    reservationButton.textContent = "Reserve in Advance";

    contactUsContainer.appendChild(buttonContainer);
    buttonContainer.appendChild(contactUsButton);
    buttonContainer.appendChild(reservationButton);

    contactUsButton.addEventListener("click", this.contactUsPopup);
    reservationButton.addEventListener("click", this.reservationPopup);

    return contactUsContainer;
  },
  createTitleSpace: function () {
    const titleSpace = document.createElement("div");
    const mapTitle = document.createElement("div");

    titleSpace.classList.add("title-space");
    mapTitle.classList.add("map-title");

    mapTitle.textContent = "You can find us here:";

    titleSpace.appendChild(mapTitle);
    return titleSpace;
  },
  createFindUsArea: function () {
    // This.. just works lol - no further ammendments required
    const findUsContainer = document.createElement("div");
    let mapLocation = document.createElement("div");

    findUsContainer.classList.add("find-us-container");

    mapLocation.innerHTML = this.createMap();

    findUsContainer.appendChild(mapLocation);

    return findUsContainer;
  },
  createMap: function () {
    return `<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Find%20Our%20Business%20Here)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe></div>`;
  },
  contactUsPopup: function () {
    const modal = document.createElement("dialog");
    const location = formGenerator.getModalSpace();

    modal.innerHTML = "";

    modal.innerHTML = `
        <div class="close-modal"> x </div>
        <div class="our-contact-container">
            <div class="for-normal">
                <h2>For Casual Dining:</h2>
                <div class="contact-number">Contact: +971-04-xxx-xxxx</div>
                <div class="contact-description">Walk-in dining available daily, except during peak hours (18:00-22:00). Please book your seats in advance</div>
            </div>
            <div class="for-events">
                <h2>For Events:</h2>
                <div class="contact-number">Contact: +971-xxx-xxxx</div>
                <div class="contact-description">We handle events of all sizes, from weddings, to anniversaries, to Birthday Parties.<br><br> Maximum guest count: 32.</div>
            </div>
            <div class="for-complaints">
                <h2>For Complaints, Reccomendations, or Suggestions:</h2>
                <div class="contact-email">vlad@vandbruno.com</div>
                <div class="contact-description">Please email us with all the necessary details. Allow us atleast 10 working days to respond, for emergency request - please visit our branch at 123 street
            </div>
        </div>
    `;

    modal.classList.add("contact-popup");
    location.appendChild(modal);
    modal.showModal();

    const closeModalButton = document.querySelector(".close-modal");
    closeModalButton.addEventListener("click", formGenerator.closeModal);
  },
  reservationPopup: function () {
    const modal = document.createElement("dialog");
    const location = formGenerator.getModalSpace();

    modal.innerHTML = "";

    modal.innerHTML = `
        <div class="close-modal"> x </div>
        <div class="reservation-form-container">
            <form action="/submit-reservation" method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Enter the name for the reservation">
                </div>

                <div class="form-group">
                    <label for="number">Phone Number:</label>
                    <input type="tel" id="number" name="number" required placeholder="Enter your phone number" pattern="[0-9]{10}">
                </div>

                <div class="form-group">
                    <label for="email">Email (Optional):</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email (optional)">
                    <small>*We do not send promotional emails or save your email beyond sending the confirmed reservation.</small>
                </div>

                <div class="form-group">
                    <label for="datetime">Date and Time:</label>
                    <input type="datetime-local" id="datetime" name="datetime" required>
                </div>

                <div class="form-group">
                    <label for="notes">Any additional notes (allergies, requirements, special requests):</label>
                    <textarea id="notes" name="notes" rows="4" placeholder="Enter any special requests"></textarea>
                </div>

                <button type="submit" class="submit-reservation">Submit Reservation</button>
            </form>
        </div>
    `;

    modal.classList.add("reservation-popup");
    location.appendChild(modal);
    modal.showModal();

    const closeModalButton = document.querySelector(".close-modal");
    const submitModalButton = document.querySelector(".submit-reservation");

    submitModalButton.addEventListener("click", formGenerator.submitModal);
    closeModalButton.addEventListener("click", formGenerator.closeModal);
  },
  closeModal: function (e) {
    e.target.parentElement.remove();
  },
  submitModal: function () {
    //we dont have a database, and it's a mock - so obviously this won't actually submit anything to the server
    document.querySelector(".close-modal").click();
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
