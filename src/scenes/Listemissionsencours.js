import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Body, Container, Content, Header, Icon,List,ListItem, Left, Right, Title,Button,SwipeRow } from 'native-base'
import {  Image} from 'react-native';
import * as React from 'react';
import {  View ,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Switch} from 'react-native-gesture-handler'
import Animated from'react-native-reanimated'
import { DrawerActions } from '@react-navigation/routers';

import { useEffect,useState } from 'react';
import axios from 'axios';
import { Divider, Headline } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Listemissionencours ({ navigation }) {

const [item,setItem]= useState([])
useEffect(()=>{
    axios.get('http://192.168.1.12:4002/mission/showmetat')
    .then(response=>
        setItem(response.data)
        )
        .catch(err=>
            console.log(err))
},[])
    
    return (
        <Container>
        <Header style={{backgroundColor:"#642960"}}>
          <Left style={{flex:0.1}} >
          <Button transparent onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}> 
                <FontAwesome5 name={'bars'} style={{fontSize:20}} color="#ffffff" />
                </Button>
          </Left>  
          <Body style={{flex:1 , alignItems:'center'}}>
            <Title>Mission</Title>
  
          </Body>
          <Right style={{flex:0.1}}/>
        </Header>
        <Title style={{color:"#ff4df3"}}></Title>
        <Headline style={{color:"#ff80f7" ,fontWeight:'bold',fontSize:30}}>  Les missions :</Headline>

        <Content scrollEnabled={false}>
        {item.map((item, index)=>
        <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            right={
              
              <Button success onPress={() => navigation.navigate('Rapports',{
                id:item.idmission,
                date:item.datemiss ,
                heure:item.heuremiss,
                nom:item.nomcli,
                prenom:item.prenomcli,
                  nomli:item.nomliv,
                  prenomli:item.prenomliv,
                  qte:item.qtécol,
                  adresse:item.adressecli,
                  tel:item.telportablecli,
                  ref:item.refcol}) }>
                <FontAwesome5 name={'check'} style={{color:'#fff'}} size={20} />
              </Button>
            }
            body={
              <View>
                <Text>  Mission numéro =   {item.idmission}</Text>
                <Text>  Date de Début  =   {item.datemiss}</Text>
                <Text>  Heure de mission =   {item.heuremiss}</Text>
                <Text>  Vers  =   {item.nomcli}</Text>
              </View>
            }
            
          >

          </SwipeRow>
            )}
        </Content>
      </Container>
    );
  }
  export default Listemissionencours;