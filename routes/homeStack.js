import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import main from '../screens/main'
import loading from '../screens/loading'
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../components/header'
import Header1 from '../components/header1'
import MyDrawer from './drawer'

const screens = {

    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'SignUp',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            title: 'Forgot Password',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    },
    Main: {
        screen: main,
        navigationOptions: {
            title: 'main',
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: () => <Header />,
            headerLeft: null,
            headerStyle: {
                backgroundColor: 'green',
            },
            headerRight: () => <Header1 />
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'ToDo Details',
            headerStyle: {
                backgroundColor: 'green'
            }
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);




