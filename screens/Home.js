import React, { useContext } from 'react';
import { Card, Title } from 'react-native-paper';
import { View, Image } from 'react-native'
import Header from './Header'
import { MainContext } from './MainContext';
import { Loader } from './Loader'
import { fieldItems } from './constants';

const Home = () => {

    const info = useContext(MainContext)

    const styled = {
        styledTitle: {
            color: '#00aaff',
            fontSize: 30,
        },
        styledContent: {
            margin: 5,
            padding: 12
        },
    }

    const { styledTitle, styledContent } = styled

    return (
        <View style={{ flex: 1 }}>
            <Header name="Weather App" />

            {info.loading
                ? <Loader />
                : <View>

                    <View style={{ alignItems: "center" }}>
                        <Title style={{ ...styledTitle, marginTop: 30 }}>
                            {info.country}
                        </Title>
                        <Title style={{ ...styledTitle, marginTop: 10 }}>
                            {info.city}
                        </Title>
                        <Image
                            style={{ width: 120, height: 80 }}
                            source={{ uri: "https://openweathermap.org/img/w/" + info.icon + ".png" }}
                        />
                        <Title
                            style={{ ...styledTitle, marginBottom: 20 }}>
                            {info.desc}
                        </Title>

                    </View>

                    <Card style={styledContent}>
                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[0]} - ${info.temp}\u00b0C`}</Title>
                    </Card>
                    <Card style={styledContent}>
                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[1]} - ${info.humidity}%`}</Title>
                    </Card>
                    <Card style={styledContent}>
                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[2]} - ${info.coord.lat}\u00b0`}</Title>
                    </Card>
                    <Card style={styledContent}>
                        <Title style={{ color: "#00aaff" }}>{`${fieldItems[3]} - ${info.coord.lon}\u00b0`}</Title>
                    </Card>

                </View>
            }

        </View>
    )
}

export default Home;
