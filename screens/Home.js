import React, { useContext } from 'react';
import { Card, Title } from 'react-native-paper';
import { View, Image } from 'react-native'
import moment from 'moment';
import Header from './Header'
import AsyncStorage from '@react-native-community/async-storage';
import { MainContext } from './MainContext';
import { Loader } from './Loader'

export default Home = () => {

    const info = useContext(MainContext)

    return (
        <View style={{ flex: 1 }}>
            <Header name="Weather App" />

            {info.loading
                ? <Loader />
                : <View>
                    <View style={{ alignItems: "center" }}>
                        <Title
                            style={{
                                color: '#00aaff',
                                marginTop: 30,
                                fontSize: 30,
                            }}>
                            {info.country}
                        </Title>
                        <Title
                            style={{
                                color: '#00aaff',
                                marginTop: 10,
                                fontSize: 30,
                            }}>
                            {info.city}
                        </Title>
                        <Image
                            style={{
                                width: 120,
                                height: 80
                            }}
                            source={{ uri: "https://openweathermap.org/img/w/" + info.icon + ".png" }}
                        />
                        <Title
                            style={{
                                color: '#00aaff',
                                marginBottom: 20,
                                fontSize: 20
                            }}>
                            {info.desc}
                        </Title>

                    </View>

                    <Card style={{
                        margin: 5,
                        padding: 12
                    }}>
                        <Title style={{ color: "#00aaff" }}>Температура - {`${info.temp}\u00b0C`}</Title>
                    </Card>
                    <Card style={{
                        margin: 5,
                        padding: 12
                    }}>
                        <Title style={{ color: "#00aaff" }}>Влажность - {`${info.humidity}%`}</Title>
                    </Card>
                    <Card style={{
                        margin: 5,
                        padding: 12
                    }}>
                        <Title style={{ color: "#00aaff" }}>Ширина-  {`${info.coord.lat}\u00b0`}</Title>
                    </Card>
                    <Card style={{
                        margin: 5,
                        padding: 12
                    }}>
                        <Title style={{ color: "#00aaff" }}>Долгота-  {`${info.coord.lon}\u00b0`}</Title>
                    </Card>

                </View>
            }

        </View>
    )
}

