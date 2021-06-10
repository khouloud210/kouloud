  
import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import { Body, Container, Content, Header, Icon, Left, Right, Title,Button,Text, Thumbnail } from 'native-base'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import EditProfile from'./EditProfile'
import Missions from '../App'

const Profile = ({progress,...props}) => {
    return (
      <SafeAreaView style={styles.container}>
        <Header  style={{backgroundColor:"#642960"}}>
          <Left style={{flex:0.1}} >
          <Button transparent onPress={()=>props.navigation.dispatch(DrawerActions.openDrawer())}> 
                  <FontAwesome5 name={'bars'} style={{fontSize:20}} color="#ffffff" />
                  </Button>
            </Left>
           
          
          <Body style={{  alignItems:'center'}}>
            <Title>Profile</Title>
  
          </Body>
         
          <Right style={{flex:0.175}} >
          <Button transparent onPress={() =>props.navigation.navigate('EditProfile')}> 
                  <FontAwesome5 name={'user-edit'} style={{fontSize:20}} color="#ffffff"  />
                  </Button>
            </Right>
        </Header>
        
        <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}} >
            <Thumbnail size={80}
            source={{uri:'https://image.flaticon.com/icons/png/512/1273/1273908.png'}}/>
            <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>John Doe</Title>
            <Text note style={styles.caption}>@j_doe</Text>
          </View>
        </View>
        </View>
        <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <FontAwesome5 name={'map-marker-alt'} style={{fontSize:20}} color="#777777"/>
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
        </View> 
        <View style={styles.row}>
        <FontAwesome5 name={'phone-alt'} style={{fontSize:20}} color="#777777"/>
          <Text style={{color:"#777777", marginLeft: 20}}>+216 12 345 678</Text>
        </View>
        <View style={styles.row}>
        <FontAwesome5 name={'envelope'} solid style={{fontSize:20}} color="#777777"/>
          <Text style={{color:"#777777", marginLeft: 20}}>khouloud.hwas@gmail.com</Text>
        </View>
        </View>
        <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#ffdbfd',
            borderRightWidth: 1
          }]}><Text style={{color:'#8f3b8a'}}>Wallet</Text>
            <Icon name="settings-outline" color="#FF6347" size={25}/>
            
          </View>
          <View style={styles.infoBox}>
            <Title style={{color:'#ff66f5'}}>12</Title>
            <Text style={{color:'#8f3b8a'}}>Orders</Text>
          </View>
      </View>
      <View style={styles.menuWrapper}>
      
    
        
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            
            <Text style={styles.menuItemText} onPress={()=>props.navigation.navigate('Missions')} >Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    );
    
  }
 
  export default Profile;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color:'#ff66f5'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#ffdbfd',
      borderBottomWidth: 1,
      borderTopColor: '#ffdbfd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });