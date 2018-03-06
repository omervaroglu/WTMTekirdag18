import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Image } from 'react-native';
import SideMenu from 'react-native-side-menu';
import PopupDialog, {
  DialogTitle,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
  FadeAnimation,
} from 'react-native-popup-dialog';
import Header from '../common/Header';
import SideBarContent from '../Components/SideBar';

const scaleAnimation = new ScaleAnimation();

class EventCalender extends Component {

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
   const { teamStyle, nameStyle } = style;
   return (
     <SideMenu
     menu={<SideBarContent />}
     isOpen={this.state.isOpen}
     onChange={(isOpen) => this.updateMenu(isOpen)}
     disableGestures={true}
     >
     <View style={{ flex: 1, backgroundColor: '#fff' }}>
       <Header headerText="Etkinlik Takvimi" toggle={this.toggle.bind(this)} />
       <ScrollView>

       <TouchableOpacity onPress={() => { this.one.show() }}>
         <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
           <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                  <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>9.</Text>
                  <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>30</Text>
                </View>
                <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                  <ImageBackground source={require('../img/Schulde/registration.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Kayıt ve Sabah Kahvesi</Text>
                    </View>
                  </ImageBackground>
                </View>
             </View>
           </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => { this.two.show() }}>
        <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
         <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
              <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>10.</Text>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>00</Text>
            </View>
            <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
              <ImageBackground source={require('../img/Schulde/opening.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>GDG Tekirdağ WTM 2018 Açılışı & Keynote</Text>
                </View>
              </ImageBackground>
            </View>
           </View>
         </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => { this.three.show() }}>
         <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
          <View style={{ flexDirection: 'row' }}>
             <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
               <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>10.</Text>
               <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>10</Text>
             </View>
             <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
               <ImageBackground source={require('../img/Speakers/ceren-celik.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                 <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                   <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Digital Leadership and Transformation</Text>
                   <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Ceren Çelik Çetin</Text>
                 </View>
               </ImageBackground>
             </View>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { this.four.show() }}>
          <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
           <View style={{ flexDirection: 'row' }}>
              <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>11.</Text>
                <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>05</Text>
              </View>
              <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                <ImageBackground source={require('../img/Speakers/berivan-goktas.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                  <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Test Nedir? Test Otomasyonu Nedir ve Neden İhtiyaç Duyulur?</Text>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Berivan Göktaş</Text>
                  </View>
                </ImageBackground>
              </View>
             </View>
           </View>
           </TouchableOpacity>

           <TouchableOpacity onPress={() => { this.five.show() }}>
           <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
            <View style={{ flexDirection: 'row' }}>
               <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                 <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>12.</Text>
                 <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>00</Text>
               </View>
               <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                 <ImageBackground source={require('../img/Speakers/ekarina.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                   <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                     <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Problems of Multinational Team</Text>
                     <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Ekaterina Vinnichenko</Text>
                   </View>
                 </ImageBackground>
               </View>
              </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.six.show() }}>
            <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
             <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                  <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>13.</Text>
                  <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>15</Text>
                </View>
                <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                  <ImageBackground source={require('../img/Speakers/burcu-yalcinkaya.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>They shoot me down Bank Bank!</Text>
                      <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Burcu Yalçınkaya</Text>
                    </View>
                  </ImageBackground>
                </View>
               </View>
             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={() => { this.seven.show() }}>
             <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
              <View style={{ flexDirection: 'row' }}>
                 <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                   <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>14.</Text>
                   <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>10</Text>
                 </View>
                 <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                   <ImageBackground source={require('../img/Speakers/ahmet-yalcinkaya.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                     <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                       <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>iOSa Giriş!</Text>
                       <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Ahmet Yalçınyaka</Text>
                     </View>
                   </ImageBackground>
                 </View>
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { this.eight.show() }}>
              <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
               <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>15.</Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>05</Text>
                  </View>
                  <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                    <ImageBackground source={require('../img/Speakers/nese-kina.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                      <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Deneyim Tasarımının Yolculuğu</Text>
                        <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Neşe Kına</Text>
                      </View>
                    </ImageBackground>
                  </View>
                 </View>
               </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => { this.nine.show() }}>
               <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                   <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                     <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>16.</Text>
                     <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>00</Text>
                   </View>
                   <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                     <ImageBackground source={require('../img/Speakers/gokhan-ozturk.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                       <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                         <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Androidin Haklı Varisi : Kotlin !</Text>
                         <Text style={{ fontSize: 13, fontWeight: '400', color: 'white', marginLeft: 10 }}>Gökhan Öztürk</Text>
                       </View>
                     </ImageBackground>
                   </View>
                  </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.ten.show() }}>
                <View style={{ width: Dimensions.get('window').width, height: 75, marginHorizontal: 5, marginVertical: 5 }}>
                 <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                      <Text style={{ fontSize: 30, fontWeight: '400', color: '#727272' }}>16.</Text>
                      <Text style={{ fontSize: 15, fontWeight: '400', color: '#727272' }}>45</Text>
                    </View>
                    <View style={{ width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginLeft: 5 }}>
                      <ImageBackground source={require('../img/Schulde/party.jpg')} style={{ width: Dimensions.get('window').width - 50, height: 75, alignItems: 'flex-start', alignSelf: 'flex-start', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: 'rgba(66,64,64,0.7)', width: Dimensions.get('window').width - 50, height: 75, justifyContent: 'center' }}>
                          <Text style={{ fontSize: 20, fontWeight: '400', color: 'white', marginLeft: 10 }}>Kapanış</Text>
                        </View>
                      </ImageBackground>
                    </View>
                   </View>
                 </View>
                 </TouchableOpacity>
       </ScrollView>

       <PopupDialog
       ref={(one) => { this.one = one }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 215, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View style={{ justifyContent: 'flex-start' }}>
          <Image source={require('../img/Schulde/registration.jpg')} style={{ width: Dimensions.get('window').width, height: 70, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Kayıt ve Sabah Kahvesi </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}> Etkinlik öncesi kayıt ve küçük bir sabah kahvesi. </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(two) => { this.two = two }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 280, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Schulde/opening.jpg')} style={{ width: Dimensions.get('window').width, height: 70, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> GDG Tekirdağ WTM 2018 Açılışı & Keynote </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}> Etkinliğin açılışı ve GDG Tekirdağ hakkında temel bilgilendirmeler. Ardından gün içerisindeki program hakkındaki gerekli bilgiler. </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(three) => { this.three = three }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 400, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/ceren-celik.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Digital Leadership and Transformation </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Ceren Çelik Çetin </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(four) => { this.four = four }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 400, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/berivan-goktas.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Test Nedir? Test Otomasyonu Nedir ve Neden İhtiyaç Duyulur? </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Berivan Göktaş </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(five) => { this.five = five }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 500, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/ekarina.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Problems of Multinational Team </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Ekaterina Vinnichenko </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}> Being a part of multinational team, Id like to speak about cultural differences, misunderstandings and problems in such companies. Especially problems women can face and ways to overcome them. </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(six) => { this.six = six }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 350, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/burcu-yalcinkaya.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> They shoot me down Bank Bank! </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Burcu Yalçınkaya </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(seven) => { this.seven = seven }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 350, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/ahmet-yalcinkaya.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> iOSa Giriş! </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Ahmet Yalçınkaya </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(eight) => { this.eight = eight }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 350, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/nese-kina.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Deneyim Tasarımının Yolculuğu </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Neşe Kına </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(nine) => { this.nine = nine }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 350, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Speakers/gokhan-ozturk.jpg')} style={{ width: Dimensions.get('window').width, height: 270, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Androidin Haklı Varisi : Kotlin! </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Gökhan Öztürk </Text>
         </View>
       </PopupDialog>

       <PopupDialog
       ref={(ten) => { this.ten = ten }}
       dialogAnimation={scaleAnimation}
       overlayPointerEvents="auto"
       dialogStyle={{ height: 120, alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-start' }}
       containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
       >
         <View>
          <Image source={require('../img/Schulde/party.jpg')} style={{ width: Dimensions.get('window').width, height: 70, justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}> Kapanış </Text>
         </View>
       </PopupDialog>

       </View>
     </SideMenu>
   );
 }
}

const style = {
   teamStyle: {
     borderWidth: 5,
     borderColor: '#1be9b6',
     borderRadius: 50,
     width: 100,
     height: 100,
     alignSelf: 'center',
     justifyContent: 'center'
   },
   nameStyle: {
     alignItems: 'center',
     fontWeight: 'bold',
     fontSize: 20,
   }
 };

export default EventCalender;
