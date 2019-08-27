import React from "react";
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from "react-navigation";
import HomeScreen from './DrawerScreens/HomeScreen'
import LoginScreen from './DrawerScreens/LoginScreen'
import DetailsScreen from './DrawerScreens/DetailsScreen'
import Screen1 from './TabScreens/Screen1'
import Screen2 from './TabScreens/Screen2'
import Screen3 from './TabScreens/Screen3'


const LoginStack = createStackNavigator({
    login: LoginScreen
});
/**
 * create individual drawer items before tieing it to the drawer navigation stack
 */
const drawerItems = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    College: {
        screen: Screen1
    },
    School: {
        screen: Screen2,
    },
    Travel: {
        screen: Screen3,
    }
});
/**
 * create the drawer stack and set the items within, decoration
 */
const DrawerStackNavigator = createStackNavigator(
    {
        DrawerRoute: {
            screen: drawerItems,
        }
    },
    {
        defaultNavigationOptions:({navigation})=> ({
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            title: navigation.state.routes[navigation.state.index].routeName,
        
        })
    },
    
);
/**
 * create a single stack containing other sub screens
 */
const OtherStack = createStackNavigator(
    {
        DrawerRoute: {
            screen: DrawerStackNavigator,
            navigationOptions: ({
                header: null,
            }),
        },

        Details: DetailsScreen,
        Screen1: Screen1,
        Screen2: Screen2,
        Screen3: Screen3,
    }
);
//the whole box stacked in a vertical order.
export default createAppContainer(createSwitchNavigator({
    OtherStack: OtherStack,
    LoginStack: LoginStack,
}))
