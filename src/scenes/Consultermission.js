import React, { Component } from 'react';
import { Container, Header, Content, Form,Body,Title, Right,Item, Input, Text } from 'native-base';
import { Divider, Headline,Subheading  } from 'react-native-paper';
import { Link,useNavigation } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Consultermission=(props)=>{
  
 const [item,setItem]= useState([])
  
    const navigation = useNavigation();
    return (
      <Container>
         <Header style={{backgroundColor:"#642960"}}>
         
          <Body style={{flex:1 , alignItems:'center'}}>
            <Title>Listes des colis</Title>
  
          </Body>
          <Right style={{flex:0.1}}/>
        </Header>
        <Title style={{color:"#ff4df3"}}></Title>
        <Headline style={{color:"#ff80f7" ,fontWeight:'bold',fontSize:30}}>  Afficher mission :</Headline>
        <Title style={{color:"#ff4df3"}}></Title>
        <Content>
          <Form>
          <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Numéro mission : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic' }}> {props.route.params.id}</Text>
              </>
              <Input />
            </Item>
            <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Heure et Date  : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic'}} > Vers: {props.route.params.heure} {props.route.params.date} </Text>
              </>
              <Input />
            </Item>
          <Item inlineLabel>
            <>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Destinataire : </Text>
            <Text style={{ fontSize:20,fontStyle:'italic'}}> {props.route.params.nom} {props.route.params.prenom}</Text>
            </>
             
              <Input />
            </Item>

            <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Adresse :  </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>  {props.route.params.adresse} </Text>
              </>
              <Input />
            </Item>
            
           
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Référence du Colis  :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}> {props.route.params.ref} </Text>
              <Input />
            </Item>
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Quantité  :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}> {props.route.params.qte} </Text>
              <Input />
            </Item>
           
            
          </Form>
        </Content>
      </Container>
    );
 
}
export default Consultermission