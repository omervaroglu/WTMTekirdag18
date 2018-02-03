import React, { Component } from 'react';
import { View, Text, Modal, Button } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from '../common/Header';
import SideBarContent from './SideBarContent';

class Speakers extends Component {

    constructor(props) {
      super(props);
            this.state = {
                isOpen: false,
            };
          }
            state = {
            modalVisible: false,
          };

            openModal() {
              this.setState({ modalVisible: true });
            }

            closeModal() {
              this.setState({ modalVisible: false });
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
       onchanged={(isopen) => this.updateMenu(isOpen)}//ikinci kez tıklandığında açma işlemi yapmıyor.Düzelt.
       disableGestures={true}//parmak kaydırma haraketiyle açılmaya kapalı
       >
       <View style={{ flex: 1, backgroundColor: '#fff' }}>
       <Header headerText="Konuşmacılar" toggle={this.toggle.bind(this)} />
       <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
       >
       <View>
        <View>
            <Text>This is content inside of modal component</Text>
            <Button
            onPress={() => this.closeModal()}
            title="Close modal"
            />
        </View>
       </View>
       </Modal>
       </View>
       </SideMenu>
   );
 }
 }

export default Speakers;
