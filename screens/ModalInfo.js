import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { Button } from 'react-native-paper';
export const ModalInfo = (props) => {

  const [show, setShow] = useState(true)
  console.log('showModal', props)
  console.log('show', show)
  return (
    <Modal
      transparent={true}
      visible={show}
      animationType="fade"
    >
      <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1 }}>
          <Text style={{ fontSize: 50 }}>Model Text</Text>
          <Button
            icon="content-save"
            mode="contained"
            theme={{ colors: { primary: "#00aaff" } }}
            style={{ margin: 20 }}
            onPress={() => setShow(false)}
          >
            <Text style={{ color: "white" }}>save changes</Text>

          </Button>

        </View>
      </View>
    </Modal>
  )
}
