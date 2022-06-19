import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./weatherStyle";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function WeatherApp() {

    const [weatherData, setWeatherData] = useState({})
    const [cityName, setCityname] = useState("Karachi")
    const [searchCityName, setSearchCityName] = useState("")
    const [currentLocation, setCurrentLocation] = useState({})

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (posotion) => {
                        setCurrentLocation(posotion)
                        setCityname("")
                    },
                    (error) => {
                        console.log("error", error)
                        setSearchCityName(cityName)
                    }
                )
            }
        }
        getLocation()
    }, [])



    useEffect(() => {
        const api = {
            key: "56a9c1b59e94a977720820c838c997b7",
            base: "https://api.openweathermap.org/data/2.5/",
            units: "metric",

        }
        let searchQuery = currentLocation && currentLocation.coords
            ? `lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}`
            : `q=${searchCityName ? searchCityName : cityName}`




        fetch(`${api.base}weather?${searchQuery}&appid=${api.key}&units=${api.units}&cnt=3`)
            .then((res) => res.json())
            .then((result) => {
                setWeatherData(result)
            }).catch((err) => {
                console.log(err)
            })

        
    }, [searchCityName, currentLocation])
    console.log(currentLocation)

    //Search Function 
    const searchCity = (e) => {
        setSearchCityName(cityName)

    }
    console.log(weatherData, "weather Data")

    return (
        <View style={styles.container}>
            <View style={styles.resultBox}>
                <Text>Result Screen</Text>
            </View>
            <View style={styles.searchingBox}>
                <Text>
                    Searching Box
                </Text>
                <View style={styles.weekDetail}>
                    <Text>7 Days Detail ..............</Text>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Enter City Name' style={styles.input}
                        onChangeText={(e) => setCityname(e)}
                        value={cityName} />
                    <TouchableOpacity
                        onPress={searchCity} >

                        <Ionicons name="search-circle" size={42} color="white" />

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}