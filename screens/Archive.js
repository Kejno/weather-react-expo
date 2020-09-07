import React, { useState, useContext, useEffect } from 'react';
import { Button, Card } from 'react-native-paper';
import { View, Text, FlatList, Modal } from 'react-native';
import Header from './Header';
import { Loader } from './Loader';
import { MainContext } from './MainContext';
import AsyncStorage from '@react-native-community/async-storage';

export default Archive = () => {

    const info = useContext(MainContext)

    const [allDate, setAllDate] = useState(null)
    const [indexId, setIndexId] = useState(0)

    const [show, setShow] = useState(false)

    useEffect(() => {
        getStorageData()
    }, [])

    const getStorageData = async () => {
        const allDate = JSON.parse(await AsyncStorage.getItem('info'));
        setAllDate(allDate)
    }

    return (
        <View>

            <Header name="Archive" />

            <FlatList
                data={allDate}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            key={index}
                        >
                            <Card
                                key={index}
                                style={{ margin: 2, padding: 12 }}
                                onPress={() => {
                                    setShow(true);
                                    setIndexId(index)
                                }}
                            >
                                <View
                                    key={index}
                                    style={{
                                        flex: 1
                                    }}>

                                    <Text style={{ color: '#00aaff' }}>
                                        {`${item.city}, ${item.country}, ${item.date}, координаты: широта - ${item.coord.lat}\u00b0, долгота - ${item.coord.lon}\u00b0`}
                                    </Text>
                                </View>
                            </Card>

                        </View>
                    )
                }}
            />

            <Modal
                transparent={true}
                visible={show}
                animationType="fade"
            >
                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={{ backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1 }}>
                        <Text style={{ color: '#00aaff', fontSize: 20 }}>

                            {allDate
                                ? allDate[indexId].date
                                : <Loader />}

                        </Text>
                        <Button
                            mode="contained"
                            theme={{ colors: { primary: "#00aaff" } }}
                            style={{ margin: 20 }}
                            onPress={() => setShow(false)}
                        >
                            <Text style={{ color: "white" }}>Close</Text>

                        </Button>

                    </View>
                </View>
            </Modal>

        </View>
    );

}