import React from 'react'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme'

export const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
        
                    <ImageBackground source={require('../../assets/fondo2.jpg')} style={styles.backgroundImage}>
        
                    </ImageBackground>
        </SafeAreaView>
    )
}
