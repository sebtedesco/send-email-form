import React from "react";
// import AppCSS from '../../src/App.css'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default class FormFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      message: "",
      errors: {
        name: false,
        email: false,
        message: false,
      },
      errorFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    let value;
    value = event.target.value;
    const errors = { ...this.state.errors };
    errors[name] = false;
    this.setState({
      [name]: value,
      errors,
    });
  }

  handleValidation(event) {
    event.preventDefault();
    const name = event.target.name;
    const errors = { ...this.state.errors };
    // const value = event.target.value;
    const fullNameRegex = new RegExp(/(?:(\w+-?\w+)) (?:(\w+))(?: (\w+))?$/);
    const emailRegex = new RegExp(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    );

    switch (name) {
      case "fullName":
        if (!fullNameRegex.test(this.state[name])) {
          errors.fullName = true;
          this.setState({
            errors,
          });
        }
        break;
      case "email":
        if (!emailRegex.test(this.state[name])) {
          errors.email = true;
          this.setState({
            errors,
          });
        }
        break;
      case "message":
        if (!this.state.message) {
          errors.message = true;
          this.setState({
            errors,
          });
        }
        break;
        default:
          console.log('Input field name is not valid.')
    }
    this.setState({ errors }, () => {
      this.errorFree();
    });
  }

  errorFree() {
    if (
      (!this.state.errors.fullName && this.state.fullName,
      !this.state.errors.email && this.state.email,
      !this.state.errors.message,
      this.state.message)
    ) {
      this.setState({ errorFree: true });
    } else {
      this.setState({ errorFree: false });
    }
  }

  buttonClicked() {
    console.log(this.state.errorFree);
    if (this.state.errorFree) {
      this.props.sendEmail(this.state);
    }
  }

  useStyles(){
  return makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            error={this.state.errors.fullName ? "error" : ""}
            id="standard"
            label={this.state.errors.fullName ? "Error" : "Full Name"}
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            style={{ margin: 8 }}
            placeholder="Full Name"
            helperText={
              this.state.errors.fullName
                ? "Incorrect entry."
                : "Please enter full name."
            }
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            error={this.state.errors.email ? "error" : ""}
            id="standard"
            label={this.state.errors.email ? "Error" : "Email Address"}
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            style={{ margin: 8 }}
            placeholder="Email Address"
            helperText={
              this.state.errors.email
                ? "Please enter a valid email address."
                : "Please enter an email address."
            }
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={this.state.errors.message ? "error" : ""}
            id="outlined-multiline-static"
            label={
              this.state.errors.message ? "Message cannot be blank." : "Message"
            }
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            onBlur={this.handleValidation}
            fullWidth
            multiline
            rows={8}
            variant="outlined"
          />
          <br />
          <Button onClick={this.buttonClicked}>Submit</Button>
        </div>
      </div>
    );
  }
}
