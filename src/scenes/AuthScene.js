import React , {Component, useState} from'react';
import {View,Text,StyleSheet} from 'react-native';
import {Form, Item, Input, Body, CheckBox,Button} from 'native-base';
import Logo from'../../assets/images/logo.png'
import axios from'axios'

import { useEffect } from 'react';
function AuthScene({progress,...props}){
  const[cin,setCin]=useState('');
  const[mdp,setMdp]=useState('');
  const[errorMesssage,setErrorMessage]=useState("");
  const login=async()=>{
  await axios.post('http:192.168.1.12:4002/livreur/login',{
    cinliv:cin,
    mdpliv:mdp,

  }).then((response)=>{
    if (response){
      console.log(response.data)
    
      props.navigation.navigate('home')
    }else if(error){
      
      alert(response.data.message)
      setErrorMessage(response.data.message);
    }
    
  }).catch((error)=>{
    console.log(error)
  })
  
}



        return(
            <View style={styles.container}>
              <View style={styles.top}></View>
            <View style={styles.middle}>
              <Text style={styles.textContainer}>Vous êtes prêt à partir</Text>
            <View style={styles.formArea}>
             <Text style={[styles.textContainer, styles.signin]}>S'identifier</Text>
             <Form style={styles.mainForm}>
                <Item style={styles.formItems}>
                    <Input placeholder="E-mail" 
                    style={styles.Input}
                    value={cin}
                    onChangeText={(text)=>{
                      setCin(text)
                    }}  />
                </Item>
                <Item style={styles.formItems}>
                    <Input placeholder="Mot de Passe" 
                    secureTextEntry style={styles.Input}
                    value={mdp}
                    onChangeText={(text)=>{
                      setMdp(text)
                    }} />
                </Item>
              
                <View style={styles.Button}>
                <Button block style={styles.mainBtn}  onPress={login}  >
                    <Text style={styles.btnText}>Connexion {errorMesssage}</Text>
                </Button>
              </View>
             </Form>
            </View>
            
            </View>
           <View style={styles.bottom}></View>
           
          </View>
        );
      }
      
    
    
    export default AuthScene;
  
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        position: 'relative',
      },
      top: {
        position: 'relative',
        backgroundColor: '#bc5cb6',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        height: 250,
      },
      img:{
          

      },
      middle: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
        paddingLeft: 26.3,
        paddingRight: 26.3,
      },
      bottom: {
        position: 'relative',
        height: '100%',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        backgroundColor: '#ffffff',
      },
      textContainer: {
        color: '#FCFDFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
      },
      textContain:{
        color: '#bc5cb6',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 20,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
      },
      formArea: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        top: '20%',
        paddingBottom: 40,
      },
      signin: {
        top: 0,
        color: '#481e46',
        marginTop: 15,
      },
      formItems: {
        marginTop: 15,
        borderBottomColor: '#2D3057',
      },
      Input: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
      },
      
      loginText: {
        color: '#2D3057',
        fontSize: 10,
        fontFamily: 'GoogleSans-Bold',
        fontWeight: 'bold',
      },
      
      Button: {
        padding: 30.8,
        borderRadius: 4,
      },
      mainBtn: {
        backgroundColor: '#481e46',
      },
      btnText: {
        color: '#ffffff',
        fontFamily: 'GoogleSans-Medium',
        fontSize: 14,
      },
    });