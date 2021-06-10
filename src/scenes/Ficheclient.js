import React, { Component } from 'react';
import { Container, Header, Content, Form,Body,Title, Right,Item, Input, Text } from 'native-base';
import { Divider, Headline,Subheading  } from 'react-native-paper';
const Ficheclient=(props)=>{

    return (
      <Container>
         <Header style={{backgroundColor:"#642960"}}>
         
          <Body style={{flex:1 , alignItems:'center'}}>
            <Title>Listes des colis</Title>
  
          </Body>
          <Right style={{flex:0.1}}/>
        </Header>
        <Title style={{color:"#ff4df3"}}></Title>
        <Headline style={{color:"#ff80f7" ,fontWeight:'bold',fontSize:30}}>  Afficher Client :</Headline>
        <Title style={{color:"#ff4df3"}}></Title>
        <Content>
          <Form>
          <Item inlineLabel>
            <>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Carte d'Identité Nationale : </Text>
            <Text style={{ fontSize:20,fontStyle:'italic'}}>{props.route.params.cinid} </Text>
            </>
             
              <Input />
            </Item>
            <Item inlineLabel>
              <>
              <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Nom et Prénom : </Text>

              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>  {props.route.params.nom} {props.route.params.prenom}</Text>
              </>
              <Input />
            </Item>
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Ville  :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>{props.route.params.ville} </Text>
              <Input />
            </Item>
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Adresse   :  </Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}> {props.route.params.adresse}, {props.route.params.codec} </Text>
              <Input />
            </Item>
            <Item inlineLabel>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Email   :</Text>
              <Text style={{ fontSize:20 ,fontStyle:'italic'}}>  {props.route.params.email}</Text>
              <Input />
            </Item>
            <Item inlineLabel last>
            <Text style={{color:"#bc5cb6" ,fontWeight:'bold',fontSize:22}}>Numéro du Portable  :   </Text>
            <Text style={{ fontSize:20 ,fontStyle:'italic'}}> +216 {props.route.params.tel}</Text>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
 
}
export default Ficheclient