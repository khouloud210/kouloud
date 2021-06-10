import * as React from 'react';
import {  View ,Text} from 'react-native/';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Body, Container, Content, Header, Icon, Left, Right, Title,Button } from 'native-base'
import Sidebar from './customDrawer';
import AuthScene from './AuthScene';
import Dashboards from './Dashboards'
import Acceuil from './Acceuil'

import Rapports from './Rapports';
import Accidents from './Accidents';
import Listeclient from './Listeclient';
import Listecolis from './Listecolis';
import Tabs from './Tabs'
import TabMissions from './TabMissions';
import TopTab from './TopTab';
import TopTabColis from './TopTabColis';
const Drawer = createDrawerNavigator();



const AppDrawer=()=>{
  return(
    <Drawer.Navigator drawerContent={props=><Sidebar{...props}/>}>
      <Drawer.Screen name="Acceuil" component={Tabs} 
        options={{
          drawerIcon:({}) =>(
            <FontAwesome5 name={'house-user'} style={{fontSize:20}} color="#642960"/>
          ),
        }}/>
        <Drawer.Screen name="Missions" 
        component={TabMissions} 
        options={{
          drawerIcon:({}) =>(
            <FontAwesome5 name={'calendar-alt'} style={{fontSize:20}} color="#642960"/>
          ),
        }}
        />
        <Drawer.Screen name="Rapports" 
        component={Rapports} 
        options={{
          drawerIcon:({}) =>(
            <FontAwesome5 name={'calendar-check'} style={{fontSize:20}} color="#642960"/>
          ),
        }}
        />
        <Drawer.Screen name="Accidents" 
        style={{fontSize:50}}
        component={Accidents} 
        options={{
          fontSize:30,
          drawerIcon:({}) =>(
            <FontAwesome5 name={'calendar-times'} style={{fontSize:20}} color="#642960"/>
          ),
        }}
        />
         <Drawer.Screen name="Listes Clients" 
        style={{fontSize:50}}
        component={TopTab} 
        options={{
          fontSize:30,
          drawerIcon:({}) =>(
            <FontAwesome5 name={'users'} style={{fontSize:20}} color="#642960"/>
          ),
        }}
        />
         <Drawer.Screen name="Listes Colis" 
        style={{fontSize:50}}
        component={TopTabColis} 
        options={{
          fontSize:30,
          drawerIcon:({}) =>(
            <FontAwesome5 name={'box'} style={{fontSize:20}} color="#642960"/>
          ),
        }}
        />
        
        
      </Drawer.Navigator>
    
  )
}
export default function Home() {
  return (
    <NavigationContainer>
     <AppDrawer/>
     
    </NavigationContainer>
  );
}