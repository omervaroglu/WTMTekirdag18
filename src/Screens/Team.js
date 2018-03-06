import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking
} from 'react-native'
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

class Team extends Component {
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
        <Header headerText="Takım" toggle={this.toggle.bind(this)} />
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton
                onPress={() => { this.one.show() }}
                teamImage={require('../img/Team/aysin-bulus.jpg')}
                />
                <Text style={textStyle}>
                Ayşin Buluş
                </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.two.show(); }}
                teamImage={require('../img/Team/derya-yanal.jpg')} />
                <Text style={textStyle}>
                  Derya Yanal
                </Text>
              </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton onPress={() => { this.three.show(); }}
                teamImage={require('../img/Team/kocer-celik.jpeg')} />
                <Text style={textStyle}>
                  Koçer Çelik
                </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.four.show(); }}
                teamImage={require('../img/Team/sercan-yusuf.jpg')} />
                <Text style={textStyle}>
                  Sercan Yusuf
                </Text>
              </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton onPress={() => { this.five.show(); }}
                teamImage={require('../img/Team/ufuk-cakmak.jpg')} />
                <Text style={textStyle}>
                  Ufuk Çakmak
                </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.six.show(); }}
                teamImage={require('../img/Team/arda-senturk.jpg')} />
                <Text style={textStyle}>
                  Arda Senturk
                </Text>
              </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
              <View>
                <SpeakerButton onPress={() => { this.seven.show(); }}
                teamImage={require('../img/Team/ozan-turcan.jpg')} />
                <Text style={textStyle}>
                  Ozan Türcan
                </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.eight.show(); }}
                teamImage={require('../img/Team/huseyin.jpg')} />
                  <Text style={textStyle}>
                    Hasan Hüseyin
                  </Text>
              </View>
              </View>
              <View style={{ flexDirection: 'row' }}>

              <View>
                <SpeakerButton onPress={() => { this.nine.show(); }}
                teamImage={require('../img/Team/umit-ozturk.jpg')} />
                  <Text style={textStyle}>
                    Ümit Öztürk
                  </Text>
              </View>

              <View>
                <SpeakerButton onPress={() => { this.ten.show(); }}
                teamImage={require('../img/Team/omer-varoglu.jpeg')} />
                  <Text style={textStyle}>
                    Ömer Varoğlu
                  </Text>
              </View>
              </View>
              <View style={{ flexDirection: 'row' }}>

                <View>
                  <SpeakerButton onPress={() => { this.eleven.show(); }}
                  teamImage={require('../img/Team/tolga-ozeren.jpg')} />
                    <Text style={textStyle}>
                      Tolga Özeren
                    </Text>
                </View>
                <View>
                  <SpeakerButton onPress={() => { this.twelve.show(); }}
                  teamImage={require('../img/Team/mert-bilgic.png')} />
                    <Text style={textStyle}>
                      Mert Bilgiç
                    </Text>
                </View>

              </View>
            </View>
            <View style={{ height: 100 }}/>
        </ScrollView>

      <PopupDialog
      ref={(one) => { this.one = one }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ayşin Buluş"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/aysin-bulus.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/aysin.bulus')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ayşin-buluş-b1831a13a')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/AysinBulus')}>
              <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(two) => { this.two = two }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Derya Yanal"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/derya-yanal.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
            <TouchableOpacity  onPress={() => Linking.openURL('https://www.facebook.com/derya.yanal')}>
              <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => Linking.openURL('https://twitter.com/derya_yanal')}>
              <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(three) => { this.three = three }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Koçer Çelik"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/kocer-celik.jpeg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity  onPress={() => Linking.openURL('https://www.facebook.com/kocer.celik.12')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(four) => { this.four = four }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Sercan Yusuf"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/sercan-yusuf.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/srcnysf')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sercanyusuf')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/srcnysf')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => Linking.openURL('https://twitter.com/srcnysf')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(five) => { this.five = five }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ufuk Çakmak"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/ufuk-cakmak.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/Ufukckmak')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/ucakmak33')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ufuk-%C3%A7akmak-193a9ab6/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(six) => { this.six = six }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Arda Şentürk"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/arda-senturk.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ArdaSenturk')}>
              <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ardasnturk/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/ardasnturk')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/ArdaSnturk')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(seven) => { this.seven = seven }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ozan Türcan"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/ozan-turcan.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/ozanturcan')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/ozan-türcan-1ba019aa/')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/ozanturcan')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(eight) => { this.eight = eight }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Hüseyin Hasan"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/huseyin.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/hsynchsn')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/hsynchsn')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/hsynchsn')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com/hsynchsn')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(nine) => { this.nine = nine }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ümit Öztürk"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/umit-ozturk.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/umit-ozturk')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/%C3%BCmit-%C3%B6zt%C3%BCrk-4340a8109/")}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/umit.ozturk.374549')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/coffeamerikano')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(ten) => { this.ten = ten }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Ömer Varoğlu"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/omer-varoglu.jpeg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/omervaroglu')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('http://linkedin.com/in/ömer-varoğlu-9a9046123')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/omerfaruk.varoglu.5')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/omervaroglu')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(eleven) => { this.eleven = eleven }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Tolga Özeren"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/tolga-ozeren.jpg')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/t-ozeren')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/t-ozeren')}>
                <Image source={require('../img/SocialMediaIcon/linkedinY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/tozrn')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/tolgaozeren')}>
                <Image source={require('../img/SocialMediaIcon/twitterY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5  }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </PopupDialog>
      <PopupDialog
      ref={(twelve) => { this.twelve = twelve }}
      dialogTitle={<DialogTitle
        titleStyle={{ width: Dimensions.get('window').width }}
        titleTextStyle={{ fontSize: 20, fontWeight: 'bold' }}
        title="Mert Bilgiç"
        />
      }
      dialogAnimation={scaleAnimation}
      overlayPointerEvents="auto"
      dialogStyle={{ height: 165, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      containerStyle={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <View>
            <Image
            style={teamStyle}
            source={require('../img/Team/mert-bilgic.png')}
            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com/mertbilgic')}>
                <Image source={require('../img/SocialMediaIcon/githubY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://m.facebook.com/profile.php?id=100000461508078&ref=content_filter')}>
                <Image source={require('../img/SocialMediaIcon/facebookY.png')} style={{ width: 35, height: 35, marginHorizontal: 5, marginVertical: 5 }}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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

export default Team;
