import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
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
import SpeakerButton from '../common/SpeakerButton';

const scaleAnimation = new ScaleAnimation();

class Speakers extends Component {
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

   showScaleAnimationDialog() {
    this.scaleAnimationDialog.show();
  }

  showSlideAnimationDialog() {
    this.slideAnimationDialog.show();
  }

  showFadeAnimationDialog() {
    this.fadeAnimationDialog.show();
  }

   render() {
     const { teamStyle, nameStyle, textStyle } = style;
     return (
       <SideMenu
       menu={<SideBarContent />}
       isOpen={this.state.isOpen}
       onChange={(isOpen) => this.updateMenu(isOpen)}
       disableGestures={true}
       >
        <Header headerText="Konuşmacılar" toggle={this.toggle.bind(this)} />
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton
                onPress={() => { this.one.show(); }}
                teamImage={require('../img/Speakers/burcu-yalcinkaya.jpg')} />
                <Text style={textStyle}>
                Burcu Yalçınkaya
                </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.two.show(); }}
                teamImage={require('../img/Speakers/ekarina.jpg')} />
                  <Text style={{ color: '#000',
                  fontSize: 14,
                  fontWeight: '300',
                  height: 30,
                  width: Dimensions.get('window').width / 2 - 40,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  textAlign: 'center' }}>
                    Ekaterina Vinnichenko
                  </Text>
              </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton onPress={() => { this.three.show(); }}
                teamImage={require('../img/Speakers/ahmet-yalcinkaya.jpg')} />
                  <Text style={textStyle}>
                    Ahmet Yalçınkaya
                  </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.four.show(); }}
                teamImage={require('../img/Speakers/berivan-goktas.jpg')} />
                  <Text style={textStyle}>
                    Berivan Göktaş
                  </Text>
              </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton onPress={() => { this.five.show(); }}
                teamImage={require('../img/Speakers/nese-kina.jpg')} />
                  <Text style={textStyle}>
                    Neşe Kına
                  </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.six.show(); }}
                teamImage={require('../img/Speakers/ceren-celik.jpg')} />
                  <Text style={textStyle}>
                    Ceren Çelik Çetin
                  </Text>
              </View>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.seven.show(); }}
                teamImage={require('../img/Speakers/gokhan-ozturk.jpg')} />
                  <Text style={textStyle}>
                    Gökhan Öztürk
                  </Text>
              </View>

            </View>
            <View style={{ height: 100 }}/>
        </ScrollView>

      <PopupDialog
      ref={(one) => { this.one = one }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Burcu Yalçınkaya"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 420, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.one.dismiss();
            }}
            key="button-1"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/burcu-yalcinkaya.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/bturkmen')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/burcuco/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('http://burcu.co/')}>
                <Image source={require('../img/SocialMediaIcon/internetY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>I graduated from Department of Computer Engineering at Anadolu University, Eskişehir in 2012. I worked in different sectors such as hospital automation, farm management and mobile banking as Android and iOS Developer. I'm an organizer of Women Techmakers and Google Developer Group İstanbul. One more thing... I'm the biggest fan of Star Wars!</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(two) => { this.two = two }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ekaterina Vinnichenko"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 500, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.two.dismiss();
            }}
            key="button-2"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/ekarina.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.facebook.com/ekaterina.vynnichenko')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Everyday at work I deal with software engineers, business analylists and QA specialists, both male and female. I work for the company with more than 500 staff. Although I am considered to be an English teacher, most of the time I work as a psychoanalist, trying to help my students to solve the problems they face at work) That made me think it would be a great idea to share all this experience and knowledge with people.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(three) => { this.three = three }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ahmet Yalçınkaya"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 310, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.three.dismiss();
            }}
            key="button-3"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/ahmet-yalcinkaya.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ahmetws')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.linkedin.com/in/ayalcinkaya/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.facebook.com/ahmetws')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/theswiftist')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>2016 yılından itibaren Sahibinden.com da iOS Developer.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(four) => { this.four = four }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Berivan Göktaş"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 320, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.four.dismiss();
            }}
            key="button-4"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/berivan-goktas.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.linkedin.com/in/berivangoktas/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>İstanbul Üniversitesi Bilgisayar Mühendisliği mezunuyum. Sahibinden.com da 4 yıldır çalışmaktayım.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(five) => { this.five = five }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Neşe Kına"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 470, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.five.dismiss();
            }}
            key="button-5"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/nese-kina.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.linkedin.com/in/nesekina/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>After studying Industrial Product Design, she has been working as a product and experience designer in various sectors of design for about 4 years. On the other hand she is continuing her graduate education in the same department. She currently works as a Senior User Experience Designer in a leading financial institution and is making User Experience Mentorship for different industries.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(six) => { this.six = six }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ceren Çelik Çetin"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 500, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.six.dismiss();
            }}
            key="button-6"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/ceren-celik.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ceren-celik-cetin-7434bb51/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>Ceren studied Business and Management Information Systems at graduate level. She worked as business analyst, project manager and agile coach on several organizations as such in finance, tourism and e-commerce. She is an enthusiastic entrepreneur and started her consultancy business in 2017. She uses drama and gamification technics to experiencing the problems and solutions in her trainings. She has a happy toddler girl, and in every possible time she plays games with her.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
      <PopupDialog
      ref={(seven) => { this.seven = seven }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Gökhan Öztürk"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 500, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      actions={[
          <DialogButton
            buttonStyle={{ height: 50 }}
            text="Kapat"
            onPress={() => {
              this.seven.dismiss();
            }}
            key="button-7"
          />
        ]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Speakers/gokhan-ozturk.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/AndroidEduIO')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/gokhanozturk-/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={{ marginTop: 10, marginBottom: 10  }}>
          <View style={{ alignSelf: 'center', width: Dimensions.get('window').width - 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>2013 yılında Maltepe Üniversitesi Yazılım Mühendisliği bölümünden mezun oldu. 2013 Haziran ayından itibaren Akbank Direkt Mobil projesinde, Nomad Commerce isimli şirketin çalışanı olarak dış kaynak konumlandırıldı. 4 yıla yakın Akbank ekiplerinin içerisinde çalıştı. Buradaki son 2 yılında Akbank Direkt projesinin dış kaynak kanadında Önyüz (Client) Takım Lideri oldu. 10 kişiye yakın takım arkadaşı ile beraber harika bir 2 yıl geçirdi. Nisan 2017'de Demirören Medya Grubu bünyesinde Yeni İş Geliştirme (Arge) takımında göreve başladı. O tarihten şimdiye Demirören Medya grubu bünyesinde geliştirilecek mobil uygulmaların mimarisini çıkartmakta, yeni teknolojilerin çıkarılan uygulamalardaki mvp'lerini oluşturmaktadır. Bunun yanında 2015 yılından beri Maltepe Üniversitesi Bilgisayar Mühendisliği alanında Tezli Yüksek Lisansına devam etmektedir. 2016 Eylül ayından beri Kodluyoruz.Org isimli derneğin kurucu ortaklarından biridir ve burada Yönetim Kurulu Üyeliği - Eğitmen Koordinatörlüğü - Android Eğitmenliği görevlerini sürdürmektedir.</Text>
          </View>
        </ScrollView>
      </PopupDialog>
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
   },
   textStyle: {
     color: '#000',
     fontSize: 17,
     fontWeight: '300',
     height: 30,
     width: Dimensions.get('window').width / 2 - 40,
     alignSelf: 'center',
     justifyContent: 'center',
     textAlign: 'center'
   },
 };

export default Speakers;
