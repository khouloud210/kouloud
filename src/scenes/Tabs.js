import * as React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Acceuil from './Acceuil';
import Accidents from './Accidents';

import Rapports from './Rapports';
import Profile from'./Profile'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {StyleSheet,View,Image,Text} from 'react-native'

import ModifieProfile from'./ModifieProfile'
import Mission from './Mission';
const Tab = createMaterialBottomTabNavigator();

const Tabs = ()=>{
    return (
        <Tab.Navigator
      initialRouteName="Acceuil"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#642960' }}
      
    >
      <Tab.Screen
        name="Acceuil"
        component={Acceuil}
       
        options={{
          tabBarLabel: 'Acceuil',
         
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={'house-user'} color={color} size={20} />
          ),
        }}
      />
     
     
       <Tab.Screen
        name="Profil"
        component={Profile}
     
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <FontAwesome5  name="user" solid color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5

    }
})
export default Tabs;

 