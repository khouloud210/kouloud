import React , {Component} from'react';
import {View,Text} from 'react-native';
import {Router,Scene} from'react-native-router-flux';
import LoadingScene from'./scenes/LoadingScene'
import AuthScene from'./scenes/AuthScene'

import Home from'./scenes/Home'
import customDrawer from'./scenes/customDrawer'
import Acceuil from './scenes/Acceuil';

import Rapports from './scenes/Rapports';
import Accidents from './scenes/Accidents';
import Listeclient from './scenes/Listeclient';
import Listecolis from './scenes/Listecolis';
import Tabs from './scenes/Tabs';
import Profile from './scenes/Profile';
import ModifieProfile from './scenes/ModifieProfile';
import TabMissions from './scenes/TabMissions';
import Mission from './scenes/Mission';
import TopTab from './scenes/TopTab';
import Ficheclient from './scenes/Ficheclient';
import TopTabColis from './scenes/TopTabColis';
import Fichecolis from './scenes/Fichecolis';
import Consultermission from './scenes/Consultermission';
import Listemissionencours from './scenes/Listemissionsencours';

class App extends Component{
    render(){
        return(
           <Router>
               <Scene key="root" >
               <Scene key="loading" component={LoadingScene} initial={true} hideNavBar={true}>

               </Scene>
               <Scene key="authscene" component={AuthScene} hideNavBar={true} >

               </Scene>
         

         
               <Scene key="home" component={Home} hideNavBar={true} >

               </Scene>
               <Scene key="custom" component={customDrawer} hideNavBar={true} >


               </Scene>
               <Scene key="acceuil" component={Acceuil} hideNavBar={true} >
                   

                </Scene>
                 <Scene key="mission" component={Mission} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="rapports" component={Rapports} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="accidents" component={Accidents} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="clients" component={Listeclient} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="colis" component={Listecolis} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="profile" component={Profile} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="modifierprofile" component={ModifieProfile} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="tabs" component={Tabs} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="tabsmision" component={TabMissions} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="toptab" component={TopTab} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="Ficheclient" component={Ficheclient} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="toptabcolis" component={TopTabColis} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="Fichecolis" component={Fichecolis} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="consultermission" component={Consultermission} hideNavBar={true} >
                   

                   </Scene>
                   <Scene key="listemissionencours" component={Listemissionencours} hideNavBar={true} >
                   

                   </Scene>
               </Scene>

           </Router>
        );
    }
}
export default App;