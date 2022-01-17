import React,{Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
 
const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="HOME" component={StackNavigator}/>
            <Drawer.Screen name="PROFILE" component={Profile}/>
        </Drawer.Navigator>

    )
}
export default DrawerNavigator;