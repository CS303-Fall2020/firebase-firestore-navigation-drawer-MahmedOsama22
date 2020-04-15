import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import React from 'react';
import HomeStack from "./homeStack1";
import ProfileStack from './profileStack';
import Header3 from '../components/header3'

const RootDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        color: 'orange'
    },

    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            drawerLabel: () => <Header3 />
        }
    }


});

export default createAppContainer(RootDrawerNavigation);
