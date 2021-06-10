import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Body, Button, Container, Content, Footer, H3, Header,Left,ListItem,Right, Thumbnail,Text, List } from 'native-base';
import {  Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import {Switch} from 'react-native-gesture-handler'
import Animated from'react-native-reanimated'
import { DrawerActions } from '@react-navigation/routers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function Sidebar({progress,...props}){
    const translateX=Animated.interpolate(progress,{
        inputRange:[0,1],
        outputRange:[-100,0],

    });
return(
    <Container>
        <Header style={{backgroundColor:'#ffffff', borderBottomWidth:0}}>
        <Right >
            <Button transparent onPress={()=>props.navigation.dispatch(DrawerActions.closeDrawer())}> 
                <FontAwesome5 name={'bars'} style={{fontSize:20}} color="#642960"/>
                </Button>
               
            </Right>
           
        </Header>
        <Content contentContainerStyle={{flex:1}} >
            <ListItem thumbnail >
                <Left>
                <Image  source="../../assets/images/logo.png"/>
                </Left>
                <Body >
                    <H3>Livreur</H3>

                    <Text note>Livraison</Text>
                </Body>

            </ListItem>
        <DrawerContentScrollView {...props}>
        <Animated.View style={{transform:[{translateX}]}}>

      
                <DrawerItemList {...props}/>
              
    <DrawerItem label="Rate us"
    onPress={()=>props.navigation.navigate('auth')}/>
    </Animated.View>
</DrawerContentScrollView>
<List>
    <ListItem>
        <Body>
            <Text>
            Mode Sombre
            </Text>
        </Body>
        <Right>
            <Switch value={true} />

          
        </Right>
    </ListItem>
</List>

        </Content>
        <Footer style={{backgroundColor:"#642960"}}/>

        
   
    
</Container>
);
}
export default Sidebar;