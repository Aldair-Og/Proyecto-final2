import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InicioSesion } from './src/screens/InicioSesion';
import {Registro} from './src/screens/Registro';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
};

export default App;
