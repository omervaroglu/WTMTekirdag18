import React, { Component } from 'react';
import { View, Image, Linking } from 'react-native';
import getDirections from 'react-native-google-maps-directions';
import SideMenu from 'react-native-side-menu';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import SideBarContent from './Components/SideBar';
import Button from './common/Button';
import Header from './common/Header';

class Main extends Component {
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
         console.log('is open');
         }


  handleGetDirections = () => {
    const data = {
      //  source: {
      //   latitude: null,
      //   longitude: null
      // },
      destination: {
        latitude: 41.182517,
        longitude: 27.817833
      },
      params: [
        {
          key: 'dirflg',
          value: 'w'
        }
      ]
    };

    getDirections(data);
  }


  addCalendar(title: string) {
    const eventConfig = {
      title: "IWD Tekirdağ 18'",
      startDate: '2018-03-03T06:00:00.00Z',
      endDate: '2018-03-03T12:0:00.00Z',
      url: 'https://www.meetup.com/gdgtekirdag/events/246863908/',
      location: 'Çorlu Mühendislik Fakültesi',
    };
    return (
      AddCalendarEvent.presentNewCalendarEventDialog(eventConfig)
      .then(eventId => {
        //handle success (receives event id) or dismissing the modal (receives false)
        if (eventId) {
        console.warn(eventId);
      } else {
      console.warn('dismissed');
      }
      })
      .catch((error: string) => {
        // handle error such as when user rejected permissions
        console.warn(error);
     })
    );
  }

  render() {
    return (
      <SideMenu
      menu={<SideBarContent />}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenu(isOpen)}
      disableGestures={true}
      >
        <View style={{ flex: 1, backgroundColor: '#fff' }} onPress={() => this.toggle.bind(this)}>
          <Header headerText="#IWD18'" toggle={this.toggle.bind(this)} />
          <View>
            {/* eslint-disable-line global-require */}
            <Image
               style={{ width: 'auto', height: 250 }}
               source={require('./img/afis1.png')}
            />
            {/* eslint-enable global-require */}
          </View>
          <View>
            <Button onPress={() => Linking.openURL('https://www.meetup.com/gdgtekirdag/events/246863908/')}> Hemen Bilet Al </Button>
          </View>
          <View>
            <Button onPress={this.handleGetDirections}> Konuma Bak </Button>
          </View>
          <View>
           <Button
           onPress={() => { this.addCalendar(); }}
           >
            Takvime Ekle
            </Button>
          </View>
          </View>
      </SideMenu>
    );
  }
}

export default Main;
