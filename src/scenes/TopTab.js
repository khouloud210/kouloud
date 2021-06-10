import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Acceuil from './Acceuil';
import Accidents from './Accidents';

import Rapports from './Rapports';
import Profile from'./Profile'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ModifieProfile from'./ModifieProfile'
import Mission from './Mission';
import Listeclient from './Listeclient';
import Ficheclient from './Ficheclient';
const Tab = createMaterialBottomTabNavigator();

const TopTab = ()=>{
    return (
        <Tab.Navigator
        initialRouteName="Liste client"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#642960' }}
        
      >
        <Tab.Screen
          name="Liste client"
          component={Listeclient}
         
          options={{
            tabBarLabel: 'Liste clients',
           
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'users'} color={color} size={20} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Fiche client"
          component={Ficheclient}
          options={{
            tabBarLabel: 'Consulter client',
          
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'eye'} color={color} size={22} />
            ),
          }}
        />
        
      </Tab.Navigator>
    )
}
export default TopTab;