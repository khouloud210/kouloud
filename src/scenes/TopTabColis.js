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
import Listecolis from './Listecolis';
import Fichecolis from './Fichecolis';
const Tab = createMaterialBottomTabNavigator();

const TopTabColis = ()=>{
    return (
        <Tab.Navigator
        initialRouteName="Liste colis"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#642960' }}
        
      >
        <Tab.Screen
          name="Liste colis"
          component={Listecolis}
         
          options={{
            tabBarLabel: 'Liste colis',
           
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'box'} color={color} size={20} />
            ),
          }}
        />
       
        <Tab.Screen
          name="Fiche colis"
          component={Fichecolis}
          options={{
            tabBarLabel: 'Consulter colis',
          
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'eye'} color={color} size={22} />
            ),
          }}
        />
         <Tab.Screen
          name="Liste client"
          component={Listeclient}
          options={{
            tabBarLabel: 'Liste clients',
          
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'users'} color={color} size={22} />
            ),
          }}
        />
        
      </Tab.Navigator>
    )
}
export default TopTabColis;