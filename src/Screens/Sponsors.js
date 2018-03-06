import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Dimensions } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../common/Header';
import SideBarContent from '../Components/SideBar';

class Sponsors extends Component {
  constructor(props) {
    super(props);
          this.state = {
              isOpen: false,
          };
        }
  toggle() {
          this.setState({
            isOpen: !this.state.isOpen
               });
           }
 updateMenu(isOpen) {
         this.setState({ isOpen });
         }

   render() {
     return (
       <SideMenu
       menu={<SideBarContent />}
       isOpen={this.state.isOpen}
       onchanged={(isOpen) => this.updateMenu(isOpen)}//ikinci kez tıklandığında açma işlemi yapmıyor.Düzelt.
       disableGestures={true}//parmak kaydırma haraketiyle açılmaya kapalı
       >
       <View style={{ flex: 1, backgroundColor: '#fff' }} >
       <Header headerText="Sponsorlar" toggle={this.toggle.bind(this)} />
       <ScrollView>
         <View style={{ alignItems: 'center', marginTop: 10 }}>
           <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> Ana Sponsor </Text>
             <Image source={require('../img/Partners/Google.png')} style={{ width: Dimensions.get('window').width , height: Dimensions.get('window').height / 5 - 7, marginTop: 10 }}/>
           <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '400' }}> Sponsor </Text>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../img/Partners/ctso.jpeg')} style={{ width: 150, height: 150, marginRight: 5 }} />
            <Image source={require('../img/Partners/corlu-belediye.png')} style={{ width: 150, height: 150, marginLeft: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../img/Partners/Ozsut.jpg')} style={{ width: 130, height: 60 }} />
            <Image source={require('../img/Partners/trakya-cicek.png')} style={{ width: 200, height: 50 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../img/Partners/rengarenk.png')} style={{ width: 110, height: 90, marginRight: 5 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../img/Partners/abakus.jpeg')} style={{ width: 256, height: 160, marginRight: 5 }} />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '400', marginTop: 10, marginBottom: 10 }}> Media Sponsorları </Text>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../img/Partners/webtekno.png')} style={{ width: 100, height: 100, marginRight: 10 }} />
              <Image source={require('../img/Partners/hdteknohaber.png')} style={{ width: 170, height: 50, marginLeft: 10 }} />
            </View>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '400', marginTop: 10, marginBottom: 10 }}> Destekçimiz </Text>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../img/Partners/nku.png')} style={{ width: 150, height: 150, marginRight: 10 }} />
            </View>
        </View>
       </ScrollView>
       </View>
       </SideMenu>
   );
 }
 }

export default Sponsors;
