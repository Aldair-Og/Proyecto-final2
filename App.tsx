import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InicioSesion } from './src/screens/InicioSesion';
import Registro from './src/screens/Registro';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <InicioSesion/>
            {/*<Registro/>*/}
        </SafeAreaView>
    );
};

export default App;
