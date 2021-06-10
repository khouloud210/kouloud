
import React , {Component} from'react';
import {View,Text,Image,StyleSheet,Animated,ActivityIndicator} from 'react-native';
import Screen from'../../assets/images/screen.png'

import {Actions} from 'react-native-router-flux'
const switchtoAuth=()=>{
    Actions.replace("authscene")
}
class LoadingScene extends Component{
    state={
        LogoAnime:new Animated.Value(3),
        LogoText:new Animated.Value(0),
        loadingSpinner:false,
    };
    componentDidMount(){
        const {LogoAnime,LogoText}=this.state;
        Animated.parallel([
            Animated.spring(LogoAnime,{
                toValue:1,
                tension:10,
                friction:1.75,
                duration:1000,
            }).start(),
            Animated.timing(LogoText,{
                toValue:1,
                duration:1999,
            }),
        ]).start(()=>{
            this.setState({
                loadingSpinner:true,
            });
            setTimeout(switchtoAuth,1400)


        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={{
                    opacity:this.state.LogoAnime,
                    bottom:this.state.LogoAnime.interpolate({
                        inputRange:[0,1],
                        outputRange:[80,0],
                    }),
                }}>
                     <Image source={Screen} style={styles.img}/>
                </Animated.View>
               <Animated.View style={{
                   opacity:this.state.LogoText
               }}>
                <Text style={styles.logoText}>Bienvenue !</Text>
                </Animated.View>
            </View>
        );
    }
}
export default LoadingScene;
const styles=StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:'#bc5cb6',
        justifyContent:'center',
        alignItems:'center'
    },
    logoText:{
        color:'#ffffff',
        fontFamily:'Raleway-ExtraBold',
        fontSize:40,
        marginTop:29.1,
        fontWeight:'300'
    }
})