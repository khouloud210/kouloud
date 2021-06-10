import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Body, Container, Content, Header, Icon, Left, Right, Title,Button } from 'native-base'
import {  Image} from 'react-native';
import * as React from 'react';
import {  View ,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Switch} from 'react-native-gesture-handler'
import Animated from'react-native-reanimated'
import { DrawerActions } from '@react-navigation/routers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function Accidents ({ navigation }) {


    
    return (
        <Container>
        <Header style={{backgroundColor:"#642960"}}>
          <Left style={{flex:0.1}} >
          <Button transparent onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}> 
                <FontAwesome5 name={'bars'} style={{fontSize:20}} color="#ffffff" />
                </Button>
          </Left>  
          <Body style={{flex:1 , alignItems:'center'}}>
            <Title>Accidents</Title>
  
          </Body>
          <Right style={{flex:0.1}}/>
        </Header>
        <Content 
        contentContainerStyle={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text>Accidents</Text>
  
        </Content>
      </Container>
    );
  }
  export default Accidents;