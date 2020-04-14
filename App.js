import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Firebase from "./config/Firebase";
import * as firebase from "firebase";
import Navigator from './routes/drawer';
import MainNavigation from "./routes/homeStack";
import { NavigationContainer } from "@react-navigation/native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    if (!firebase.apps.length) { firebase.initializeApp(Firebase.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticationReady: true });
    this.setState({ isAuthenticated: !!user });
  }

  render() {
    return (

      <NavigationContainer>
        {(this.state.isAuthenticated) ? <Navigator /> : <MainNavigation />}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFCC",
    alignItems: "center",
    justifyContent: "center"
  }
});
