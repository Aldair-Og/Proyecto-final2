import React, { useState } from 'react';
import {
    View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform,Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');

export const InicioSesion = () => {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground source={require('../../assets/fondo2.jpg')} style={styles.backgroundImage}>

                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        
                        <Text style={styles.title}>Iniciar Sesión</Text>

                        <View style={styles.imageContainer}>
                            <Image source={require('../../assets/logo.png')} style={styles.centeredImage} />
                        </View>

                        <View style={styles.formContainer}>
                            <View style={styles.inputContainer}>
                                <Image source={require('../../assets/usuario.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Usuario"
                                    value={usuario}
                                    onChangeText={setUsuario}
                                    placeholderTextColor="#fff"
                                />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image source={require('../../assets/password.png')} style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Contraseña"
                                    secureTextEntry
                                    value={contrasena}
                                    onChangeText={setContrasena}
                                    placeholderTextColor="#fff"
                                />
                            </View>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Ingresar</Text>
                            </TouchableOpacity>
                        </View>                   
                    
                    </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: 300,
        //height: 500,

    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    keyboardView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: height * 0.05,
    },
    title: {
        fontSize: width * 0.11,
        fontWeight: 'bold',
        color: 'white',
        marginTop: height * 0.04,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: width * 0.6,
        height: width * 0.6,
        resizeMode: 'contain',
    },
    formContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.03,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 25,
        paddingHorizontal: 15,
        width: '100%',
        marginBottom: height * 0.02,
    },
    icon: {
        width: width * 0.08,
        height: width * 0.08,
        marginRight: 10,
        tintColor: 'white',
    },
    input: {
        flex: 1,
        height: 50,
        color: 'white',
        fontSize: 18,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 25,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.2,
        marginTop: height * 0.02,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: 'bold',
    },
});

