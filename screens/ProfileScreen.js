import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile'
import  EditProfile from './EditProfile'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ProfileStack = createStackNavigator();
const ProfileStackScreen = ({navigation}) => {
    const {colors} = useTheme();
  
    return (
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: '',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome5
                  name={"bars"}
                  size={25}
                  backgroundColor="#8f3b8a"
                  color={colors.text}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  name="account-edit"
                  size={25}
                  backgroundColor={colors.background}
                  color={colors.text}
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            ),
          }}
        />
        <ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
          }}
          component={EditProfile}
        />
      </ProfileStack.Navigator>
    );
        };