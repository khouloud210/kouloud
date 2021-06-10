import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Body, Container, Content, Header, Icon, Left,List,ListItem, Right, Title,Separator,Button } from 'native-base'
import {  Image} from 'react-native';
import  React from 'react';
import {  View ,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Switch} from 'react-native-gesture-handler'
import Animated from'react-native-reanimated'
import { DrawerActions } from '@react-navigation/routers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider, Headline } from 'react-native-paper';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Ficheclient from './Ficheclient';
function Listecolis ({ navigation }) {

  const [item,setItem]= useState([])
  useEffect(()=>{
      axios.get('http:192.168.1.12:4002/colis/showcoli')
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
            <Title>Listes des colis</Title>
  
          </Body>
          <Right style={{flex:0.1}}/>
        </Header>
        <Title style={{color:"#ff4df3"}}></Title>
        <Headline style={{color:"#ff80f7" ,fontWeight:'bold',fontSize:30}}>  Afficher les Colis :</Headline>

        <List >
              
        {item.map((item, index)=><>
        <ListItem itemHeader first Divider  >
              
              <Left>
                <Body>
               
                <Text style={{fontSize:24 }} > Référence : {item.refcol}  </Text>
                <Text style={{fontSize:20 }}> Quantité :  {item.qtécol}</Text>
                </Body>
                
              </Left>
              <Button transparent onPress={() => navigation.navigate('Fiche colis',{
                ref:item.refcol,
                qte:item.qtécol ,
                prix:item.prix,
                poids:item.poids,
                frais:item.frais,
                  nom:item.nomcli,
                  prenom:item.prenomcli,
                  cin:item.cincli})}>
                  <Text style={{color:"#bc5cb6",fontSize:22}} >Afficher</Text>
                </Button>
            </ListItem>
            <Divider style={{height:'0.80 %' , backgroundColor:'#642960' }}/>
            </>
            )}
            
           
            
           
          </List>
      </Container>
    );
  }
  export default Listecolis;