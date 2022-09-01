import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from "react-native";
import {createSwitchNavigator, createAppContainer} from "react-navigation";
import firebase from "firebase";
import db from "../config";
import BottomTabNavigator from "../components/BottomTabNavigator";

const appIcon = require("../assets/appIcon.png");

export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: ""
      };
    }

    handleLogin = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("BottomTab");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    }

    render() { 
        return(<>

            <AppContainer />
            
            <TouchableOpacity>
                Iniciar Sesión
            </TouchableOpacity>
            
        </>)
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    Login: {screen: LoginScreen},
    BottomTab: {screen: BottomTabNavigator}
},
{
    initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppSwitchNavigator)