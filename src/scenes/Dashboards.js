import React from 'react'
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Body, Container, Content, Header, Icon, Left, Right, Title,Button } from 'native-base'
export default class Dashboards extends React.Component{
    render(){
        return(
            <Container>
            <Header style={{backgroundColor:"#642960"}}>
              <Left style={{flex:0.1}} />
              
                
              <Body style={{flex:1 , alignItems:'center'}}>
                <Title>Acceuil</Title>
      
              </Body>
              <Right style={{flex:0.1}}/>
            </Header>
            <Content 
            contentContainerStyle={{
              flex:1,
              alignItems:'center',
              justifyContent:'center'
            }}>
              <Text>Missions</Text>
      
            </Content>
          </Container>
        )
    }
}