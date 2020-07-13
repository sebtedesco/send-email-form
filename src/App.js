import React from 'react';
import './App.css';
import FormFields from './components/form-fields';
import NavBar from './components/nav-bar';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";



export default class App extends React.Component {



  // function sendEmail(e) {
  //   console.log('api called');
  // e.preventDefault();
  // console.log('success');
  // var URL = "https://e36k6c81va.execute-api.us-east-1.amazonaws.com/prod/submit";

  // var Namere = /[A-Za-z]{1}[A-Za-z]/;
  // if (!Namere.test($("#name-input").val())) {
  //   alert("Name can not less than 2 char");
  //   return;
  // }
  // var mobilere = /[0-9]{10}/;
  // if (!mobilere.test($("#phone-input").val())) {
  //   alert("Please enter valid mobile number");
  //   return;
  // }
  // if ($("#email-input").val() == "") {
  //   alert("Please enter your email id");
  //   return;
  // }

  // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  // if (!reeamil.test($("#email-input").val())) {
  //   alert("Please enter valid email address");
  //   return;
  // }

  // var name = $("#name-input").val();
  // var phone = $("#phone-input").val();
  // var email = $("#email-input").val();
  // var desc = $("#description-input").val();
  // var data = {
  //   name: name,
  //   phone: phone,
  //   email: email,
  //   desc: desc
  // };

  // $.ajax({
  //   type: "POST",
  //   url: "https://e36k6c81va.execute-api.us-east-1.amazonaws.com/prod",
  //   dataType: "json",
  //   crossDomain: "true",
  //   contentType: "application/json; charset=utf-8",
  //   data: JSON.stringify(data),


  //   success: function () {
  //     // clear form and show a success message
  //     alert("Successfull");
  //     document.getElementById("contact-form").reset();
  //     // location.reload();
  //   },
  //   error: function () {
  //     // show an error message
  //     alert("UnSuccessfull");
  //   }
  // });
// }

  sendEmail(e){
  console.log('sendEmail:', e);
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
