import React from 'react';
import './App.css';
import FormFields from './components/form-fields';
import NavBar from './components/nav-bar';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import $ from 'jquery';



export default class App extends React.Component {

  sendEmail(data){
    // var URL = "https://1i2240h2ug.execute-api.us-east-1.amazonaws.com/test";

    var fullName = data.fullName;
    var email = data.email;
    var message = data.message;
    var messageData = {
      name: fullName,
      email: email,
      message: message,
    };

    $.ajax({
      type: "POST",
      url: "https://1i2240h2ug.execute-api.us-east-1.amazonaws.com/test",
      crossDomain: "true",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(messageData),

      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
        // location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }
    });
  }

  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <NavBar />
          <FormFields sendEmail={this.sendEmail} />
        </Container>
      </React.Fragment>
    );
  }
}
