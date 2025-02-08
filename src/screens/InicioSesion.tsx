import React, { useState } from 'react';
import {
    View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform,Dimensions,
    Alert} from 'react-native';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons'

interface Props {
    users: User[];
}


interface LoginForm{
    email: string;
    password: string;
}

export const InicioSesion = ({users}: Props) => {

    const [loginForm, setLoginForm] = useState<LoginForm>({email: '', password: ''});

    const handleChange = (name: string, value: string): void => {
        setLoginForm({...loginForm, [name]: value});
    }

    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === loginForm.email && user.password === loginForm.password);
        return existUser;
    }

    const handleLogin = (): void => {
        if(loginForm.email === '' || loginForm.password === ''){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }
        
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario y/o contraseña incorrecta')
            return;
        }

        console.log();
        
        navigation.dispatch(CommonActions.navigate({name: 'Home'}));

    }

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation();


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
                                <InputComponent text='Correo' 
                                    keyboard='email-address'
                                    handleChange={handleChange}
                                    name={'email'}
                                    />
                            </View>

                            <View style={styles.inputContainer}>
                                <Image source={require('../../assets/password.png')} style={styles.icon} />
                                <InputComponent text='contraseña' 
                                    handleChange={handleChange}
                                    name={'password'}
                                    isPassword= {hiddenPassword}
                                />
                                <Icon name = {hiddenPassword ? 'visibility' : 'visibility-off' }
                                    size={20} 
                                    color={'white'}
                                    style= {styles.iconPassword}
                                    onPress={() => setHiddenPassword(!hiddenPassword)}
                                />
                            </View>

                            <ButtonComponent title='Ingresar'
                                handleSendInfo={handleLogin}/>
                        </View>                   
                    
                    <TouchableOpacity 
                        onPress={() => navigation.dispatch(CommonActions.navigate({name: 'Registro'}))}>
                    <Text style = {styles.textRedirect}>No tienes una cuenta? Registrate ahora</Text>
                </TouchableOpacity>

                    </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};


