import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Acceuil from './Acceuil';
import Accidents from './Accidents';

import Rapports from './Rapports';
import Profile from'./Profile'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ModifieProfile from'./ModifieProfile'
import Mission from './Mission';
import Consultermission from './Consultermission';
import Listemissionencours from './Listemissionsencours';
const Tab = createMaterialBottomTabNavigator();

const TabMissions = ()=>{
    return (
        <Tab.Navigator
        initialRouteName="Missions"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#642960' }}
        
      >
        <Tab.Screen
          name="Missions"
          component={Mission}
         
          options={{
            tabBarLabel: 'Missions',
           
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'calendar-alt'} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Consulter Missions"
          component={Consultermission}
         
          options={{
            tabBarLabel: 'Consulter mission',
           
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'calendar-alt'} color={color} size={20} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Liste en cours"
          component={Listemissionencours}
          options={{
            tabBarLabel: 'Mission en cours',
          
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'calendar-check'} color={color} size={22} />
            ),
          }}
        />
         <Tab.Screen
          name="Rapports"
          component={Rapports}
       
          options={{
            tabBarLabel: 'Rapports',
            tabBarIcon: ({ color }) => (
              <FontAwesome5  name="file-signature" solid color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    )
}
export default TabMissions;