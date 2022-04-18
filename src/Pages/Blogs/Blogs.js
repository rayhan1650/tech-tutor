import React from "react";

const Blogs = () => {
  return (
    <div className="container my-3">
      <h4>
        Q1. What is the difference between authorization and authentication?
      </h4>
      <h5>Answer:</h5>
      <p className="fs-5">
        <ol>
          <li>
            Authorization determines what resources a user can access where
            Authentication verifies who the user is.
          </li>
          <li>
            Authorization always takes place after authentication where
            Authentication is the first step of a good identity and access
            management process.
          </li>
          <li>
            Authorization isn't visible to or changeable by the user where
            Authentication is visible to and partially changeable by the user.
          </li>
          <li>
            Authorization determines What permission do user have while
            Authentication determines whether the person is user or not.
          </li>
          <li>
            Authorization needs user's privilege or security levels while
            Authentication needs usually user's login details.
          </li>
        </ol>
      </p>
      <h4 className="mt-5">
        Q2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h4>
      <h5>Answer:</h5>
      <p className="fs-5">
        I am using firebase for several reasons. Firebase gives me different
        types of user authentication method. I can easily get functionality of
        users authentication, verify email, password reset etc. Also I can host
        my website in firebase easily. It saves a ton of time by providing a
        simple way to handle the sign-in/signup process.The best part is that it
        builds trust and increases the user's base of my app that makes it more
        professional, better, and faster. Firebase is very easy to use and it
        has a huge organised documentation. For bigener all of those services
        are free. That's why I am using firebase.
        <br />
        The alternatives of firebase authentication is Amazon Cognito, Passport,
        Auth0, MongoDB, JSON web token, Okta, Keycloak etc.
      </p>

      <h4 className="mt-5">
        Q3. What other services does firebase provide other than authentication?
      </h4>
      <h5>Answer:</h5>
      <p className="fs-5">
        <strong>Other services of firebase:</strong>
        <br />
        <strong>Cloud Firestore:</strong> Cloud Firestore is a NoSQL document
        database that lets us easily store, sync, and query data for our mobile
        and web apps - at global scale.
        <br />
        <strong>Google Analytics:</strong> Google Analytics for Firebase
        provides free, unlimited reporting on up to 500 distinct events. <br />
        <strong>Cloud Messaging:</strong> Firebase Cloud Messaging (FCM)
        provides a reliable and battery-efficient connection between our server
        and devices that allows us to deliver and receive messages and
        notifications on iOS, Android, and the web at no cost. <br />
        <strong>Hosting:</strong> With Firebase Hosting, we can deploy a
        single-page web app, a mobile app landing page, or a progressive web app
        without all the hassle. <br />
        <strong>Cloud Storage:</strong> Cloud Storage is designed to help us
        quickly and easily store and serve user-generated content, such as
        photos and videos.
        <br />
        <strong>Cloud Functions:</strong> Create functions that are triggered by
        Firebase products, such as changes to data in the Realtime Database, new
        user sign-ups via Auth, and conversion events in Analytics. <br />
        <strong>Remote Config:</strong> Remote Config gives us visibility and
        fine-grained control over our app's behavior and appearance so we can
        make changes by simply updating its configuration from the Firebase
        console. <br />
        <strong>Dynamic Links:</strong> Dynamic Links are smart URLs that allow
        us to send existing and potential users to any location within our iOS
        or Android app.
        <br />
      </p>
    </div>
  );
};

export default Blogs;
