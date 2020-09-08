import React, { useState, useContext, useEffect } from 'react';
import { Button, Card, Title } from 'react-native-paper';
import { View, Text, FlatList, Modal } from 'react-native';
import Header from './Header';
import { Loader } from './Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { fieldItems } from './constants';

export default Archive = () => {

    const [allData, setAllData] = useState(null);
    const [indexId, setIndexId] = useState(0);
    const [show, setShow] = useState(false);


    useEffect(() => {
        getStorageData()
    }, []);

    const getStorageData = async () => {
        const allData = JSON.parse(await AsyncStorage.getItem('info'));
        setAllData(allData)
    }

    return (
        <View>

            <Header name="Archive" />

            <FlatList
                data={allData}
                renderItem={({ item, index }) => {

                    return (
                        <View
                        >
                            <Card
                                style={{ margin: 2, padding: 12 }}
                                onPress={() => {
                                    setShow(true);
                                    setIndexId(index)
                                }}
                            >
                                <View style={{ flex: 1 }}>
                                    <Text style={{ color: '#00aaff' }}>
                                        {` ${item.date}, ${item.city}, ${item.country}, координаты: широта - ${item.coord.lat}\u00b0, долгота - ${item.coord.lon}\u00b0`}
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
                    <View style={{ backgroundColor: "#ffffff", margin: 50, marginBottom: 300, padding: 40, borderRadius: 10, flex: 1 }}>
                        <View style={{ color: '#00aaff', fontSize: 20 }}>

                            {allData

                                ? <>
                                    <Card style={{ margin: 5, padding: 8 }}>
                                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[0]} - ${allData[indexId].temp}\u00b0C`}</Title>
                                    </Card>
                                    <Card style={{ margin: 5, padding: 8 }}>
                                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[1]} - ${allData[indexId].humidity}%`}</Title>
                                    </Card>
                                    <Card style={{ margin: 5, padding: 8 }}>
                                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[2]} - ${allData[indexId].coord.lat}\u00b0`}</Title>
                                    </Card>
                                    <Card style={{ margin: 5, padding: 8 }}>
                                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[3]} - ${allData[indexId].coord.lon}\u00b0`}</Title>
                                    </Card>
                                </>

                                : <Loader />}

                        </View>

                        <Button
                            mode="contained"
                            theme={{ colors: { primary: "#00aaff" } }}
                            style={{ margin: 45 }}
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