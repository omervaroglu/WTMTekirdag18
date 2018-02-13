import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import SideMenu from 'react-native-side-menu';
import PopupDialog from 'react-native-popup-dialog';
import Header from '../common/Header';
import SideBarContent from './SideBarContent';
import SpeakerButton from '../common/SpeakerButton';


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

   render() {
     return (
       <SideMenu
       menu={<SideBarContent />}
       isOpen={this.state.isOpen}
       onChange={(isOpen) => this.updateMenu(isOpen)}
       disableGestures={true}
       >
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Header headerText="Konuşmacılar" toggle={this.toggle.bind(this)} />
            <SpeakerButton onPress={() => { this.first.show(); }} />

            <SpeakerButton onPress={() => { this.second.show(); }} />

            <SpeakerButton onPress={() => { this.third.show(); }} />

            <SpeakerButton onPress={() => { this.fourth.show(); }} />

            <SpeakerButton onPress={() => { this.fifth.show(); }} />

            <SpeakerButton onPress={() => { this.sixth.show(); }} />

        </ScrollView>
        <PopupDialog
                  ref={(first) => { this.first = first; }}
                  overlayPointerEvents="auto"
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                {/* eslint-disable-line global-require */}
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../img/afis1.png')}
                />
                {/* eslint-enable global-require */}
                </View>
                <View>
                      <Text>1 </Text>
                      <Text>@github:</Text>
                      <Text>@twitter:</Text>
                      <Text>@instagram:</Text>
                </View>

            </View>
            <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
            ceteros sadipscing contentiones ex cum,
            ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
            vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
            id fierent euripidis temporibus vis, ius ne vivendo adversarium.
            Reque salutandi duo te, facilis ceteros maiestatis cum ad.
            Expetenda constituto in pro, aliquid volumus nominati cum cu,
            vidit nonumy et ius. An duo eros commune noluisse.
            Discere cotidieque ex pro.</Text>
        </PopupDialog>

        <PopupDialog
                  ref={(second) => { this.second = second; }}
                  overlayPointerEvents="auto"
        >
           <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
             <View>
             {/* eslint-disable-line global-require */}
             <Image
                style={{ width: 100, height: 100 }}
                source={require('../img/afis1.png')}
             />
             {/* eslint-enable global-require */}
             </View>
              <View>
                  <Text>2 </Text>
                  <Text>@github:</Text>
                  <Text>@twitter:</Text>
                  <Text>@instagram:</Text>
              </View>

             </View>
             <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
             ceteros sadipscing contentiones ex cum,
             ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
             vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
             id fierent euripidis temporibus vis, ius ne vivendo adversarium.
             Reque salutandi duo te, facilis ceteros maiestatis cum ad.
             Expetenda constituto in pro, aliquid volumus nominati cum cu,
             vidit nonumy et ius. An duo eros commune noluisse.
             Discere cotidieque ex pro.</Text>
        </PopupDialog>

            <PopupDialog
                      ref={(third) => { this.third = third; }}
                      overlayPointerEvents="auto"
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                    {/* eslint-disable-line global-require */}
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../img/afis1.png')}
                    />
                    {/* eslint-enable global-require */}
                    </View>
                    <View>
                          <Text>3 </Text>
                          <Text>@github:</Text>
                          <Text>@twitter:</Text>
                          <Text>@instagram:</Text>
                    </View>

                </View>
                <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
                ceteros sadipscing contentiones ex cum,
                ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
                vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
                id fierent euripidis temporibus vis, ius ne vivendo adversarium.
                Reque salutandi duo te, facilis ceteros maiestatis cum ad.
                Expetenda constituto in pro, aliquid volumus nominati cum cu,
                vidit nonumy et ius. An duo eros commune noluisse.
                Discere cotidieque ex pro.</Text>
          </PopupDialog>

            <PopupDialog
                      ref={(fourth) => { this.fourth = fourth; }}
                      overlayPointerEvents="auto"
            >
               <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                 <View>
                 {/* eslint-disable-line global-require */}
                 <Image
                    style={{ width: 100, height: 100 }}
                    source={require('../img/afis1.png')}
                 />
                 {/* eslint-enable global-require */}
                 </View>
                 <View>
                      <Text>4 </Text>
                      <Text>@github:</Text>
                      <Text>@twitter:</Text>
                      <Text>@instagram:</Text>
                 </View>

                 </View>
                 <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
                 ceteros sadipscing contentiones ex cum,
                 ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
                 vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
                 id fierent euripidis temporibus vis, ius ne vivendo adversarium.
                 Reque salutandi duo te, facilis ceteros maiestatis cum ad.
                 Expetenda constituto in pro, aliquid volumus nominati cum cu,
                 vidit nonumy et ius. An duo eros commune noluisse.
                 Discere cotidieque ex pro.</Text>
            </PopupDialog>

                <PopupDialog
                          ref={(fifth) => { this.fifth = fifth; }}
                          overlayPointerEvents="auto"
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View>
                        {/* eslint-disable-line global-require */}
                        <Image
                            style={{ width: 100, height: 100 }}
                            source={require('../img/afis1.png')}
                        />
                        {/* eslint-enable global-require */}
                        </View>
                        <View>
                              <Text>5 </Text>
                              <Text>@github:</Text>
                              <Text>@twitter:</Text>
                              <Text>@instagram:</Text>
                        </View>

                    </View>
                    <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
                    ceteros sadipscing contentiones ex cum,
                    ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
                    vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
                    id fierent euripidis temporibus vis, ius ne vivendo adversarium.
                    Reque salutandi duo te, facilis ceteros maiestatis cum ad.
                    Expetenda constituto in pro, aliquid volumus nominati cum cu,
                    vidit nonumy et ius. An duo eros commune noluisse.
                    Discere cotidieque ex pro.</Text>
                </PopupDialog>

                <PopupDialog
                    ref={(sixth) => { this.sixth = sixth; }}
                    overlayPointerEvents="auto"
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View>
                      {/* eslint-disable-line global-require */}
                      <Image
                        style={{ width: 100, height: 100 }}
                        source={require('../img/afis1.png')}
                      />
                      {/* eslint-enable global-require */}
                    </View>
                   <View>
                     <Text>6 </Text>
                    <Text>@github:</Text>
                    <Text>@twitter:</Text>
                    <Text>@instagram:</Text>
                 </View>

                 </View>
                 <Text>Lorem ipsum dolor sit amet, eu pri exerci utinam,
                  ceteros sadipscing contentiones ex cum,
                  ei tamquam accusamus duo. Te antiopam expetenda honestatis sea,
                  vel ad causae epicurei, ut qui ubique doctus. Mei soleat mandamus ut,
                  id fierent euripidis temporibus vis, ius ne vivendo adversarium.
                  Reque salutandi duo te, facilis ceteros maiestatis cum ad.
                  Expetenda constituto in pro, aliquid volumus nominati cum cu,
                  vidit nonumy et ius. An duo eros commune noluisse.
                  Discere cotidieque ex pro.</Text>
              </PopupDialog>

       </SideMenu>
   );
 }
 }

export default Speakers;
