import React, { Component } from 'react';
import { Container, Header, Content, Form,Body,Title, Right,Item, Input, Text } from 'native-base';
import { Divider, Headline,Subheading  } from 'react-native-paper';
import { Link,useNavigation } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Fichecolis=(props)=>{
  
 const [item,setItem]= useState([])
  useEffect(()=>{
      axios.get('http:192.168.1.22:4002/client/fiche')
      .then(response=>
          setItem(response.data)
          )
          .catch(err=>
              console.log(err))
  },[])
    
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
        <Headline style={{color:"#ff80f7" ,fontWeight:'bold',fontSize:30}}>  Afficher colis :</Headline>
        <Title style={{color:"#ff4df3"}}></Title>
        <Content>
          <Form>
          <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Destinataire : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic' ,textDecorationLine: 'underline'}} onPress={() => navigation.navigate('Liste client')}>{props.route.params.nom} {props.route.params.prenom} </Text>
              </>
              <Input />
            </Item>
            <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Expéditeur : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic'}} >Société: EXPRESS LIVRAISON </Text>
              </>
              <Input />
            </Item>
          <Item inlineLabel>
            <>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Référence du colis : </Text>
            <Text style={{ fontSize:20,fontStyle:'italic'}}>{props.route.params.ref} </Text>
            </>
             
              <Input />
            </Item>

            <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}> Quantité : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>  {props.route.params.qte} </Text>
              </>
              <Input />
            </Item>
            
           
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Poids  :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>{props.route.params.poids} KG </Text>
              <Input />
            </Item>
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Frais du livraison   :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}> {props.route.params.frais} </Text>
              <Input />
            </Item>
            <Item inlineLabel last>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Prix Total    :</Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>  {props.route.params.prix} DT</Text>
              <Input />
            </Item>
            
          </Form>
        </Content>
      </Container>
    );
 
}
export default Fichecolis