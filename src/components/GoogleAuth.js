import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "35488826881-m7avktjhqjomv1be16e1dje38l37750k.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
      if(this.state.isSignedIn === null) {
          return <div>I dont know if we are signed in</div>
      } else if (this.state.isSignedIn) {
          return <div>i am signed in!</div>
      } else {
          return <div>i am not signed in</div>
      }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
