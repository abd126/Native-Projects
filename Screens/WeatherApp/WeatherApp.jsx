import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./weatherStyle";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function WeatherApp() {
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
                    <TextInput placeholder='Enter City Name' style={styles.input} />
                    <TouchableOpacity>
                       
                            <Ionicons name="search-circle" size={42} color="white" />
                        
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}