import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

export const Registro = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [telefono, setTelefono] = useState('');  

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/fondo2.jpg')} style={styles.backgroundImage}>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    
                    <Text style={styles.title}>Registro de Usuario</Text>

                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/logo.png')} style={styles.centeredImage} />
                    </View>

                    <View style={styles.formContainer}>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/usuario.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre de Usuario"
                                value={nombre}
                                onChangeText={setNombre}
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/correo.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Correo Electrónico"
                                keyboardType="email-address"
                                value={correo}
                                onChangeText={setCorreo}
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/telefono.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Número de Teléfono"
                                keyboardType="phone-pad"
                                value={telefono}
                                onChangeText={setTelefono}
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

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/password.png')} style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirmar Contraseña"
                                secureTextEntry
                                value={confirmarContrasena}
                                onChangeText={setConfirmarContrasena}
                                placeholderTextColor="#fff"
                            />
                        </View>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1 
        //width: 300,
        //height: 500,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingBottom: height * 0.05, 
    },
    title: {
        fontSize: width * 0.08,
        fontWeight: 'bold', 
        color: 'white',
        marginTop: height * 0.05, 
        textAlign: 'center',
    },
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    centeredImage: {
        width: width * 0.5, 
        height: height * 0.2, 
    },
    formContainer: {
        marginTop: height * 0.05, 
        width: '90%', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: height * 0.03, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50, 
        paddingHorizontal: width * 0.05, 
        width: '100%' 
    },
    icon: {
        width: width * 0.06, 
        height: width * 0.06, 
        marginRight: width * 0.03,
        tintColor: 'white'
    },
    input: { 
        flex: 1,
        height: height * 0.06, 
        color: 'white',
        fontSize: width * 0.045, 
        paddingHorizontal: width * 0.04 
    },
    button: { 
        backgroundColor: 'red',
        borderRadius: 25, 
        paddingVertical: height * 0.02, 
        paddingHorizontal: width * 0.1,
        marginTop: height * 0.02 
    },
    buttonText: { 
        color: 'white', 
        fontSize: width * 0.05, 
        fontWeight: 'bold' 
    },
});

export default Registro;
