import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, SafeAreaView, ScrollView, Dimensions, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';


interface Props {
    users: User[];
    addUser: (user: User) => void;
}


interface RegisterForm{
    name: string;
    email: string;
    phone: string;
    password: string;
    confiPassw: string;
}

export const Registro = ({users, addUser}:Props) => {

    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confiPassw: '',
    });

    const navigation = useNavigation();

    const handleChange = (name: string, value: string): void => {
        setRegisterForm({...registerForm, [name]: value});
    }

    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === registerForm.email);
        return existUser;
    }

    const getIdNewUser = () => {
        const getIdUser = users.map(user => user.id);
        return Math.max(...getIdUser) + 1;
    }

    const handleRegister = (): void => {
        if(registerForm.name === '' || registerForm.email === '' || registerForm.phone === '' || registerForm.password === ''){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }

        if(verifyUser()){
            Alert.alert('Error', 'El correo ya esta registrado')
            return;
        }

        if(!(registerForm.password === registerForm.confiPassw)){
            Alert.alert('Error', 'Las contraseñas no coinciden')
            return;
        }

        console.log();
        

        const newUser: User = {
            id: getIdNewUser(),
            name: registerForm.name,
            email: registerForm.email,
            phone: registerForm.phone,
            password: registerForm.password
        }

        addUser(newUser);
        Alert.alert('Registro', 'Usuario registrado con exito');
        navigation.goBack();
        
    } 

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
                            <InputComponent text='Nombre'
                            handleChange={handleChange}
                            name={'name'}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/correo.png')} style={styles.icon} />
                            <InputComponent text='Correo'
                                keyboard='email-address'
                                handleChange={handleChange}
                                name={'email'}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/telefono.png')} style={styles.icon} />
                            <InputComponent text='Telefono'
                                keyboard='phone-pad'
                                handleChange={handleChange}
                                name={'phone'}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/password.png')} style={styles.icon} />
                                <InputComponent text='Contraseña' 
                                    handleChange={handleChange}
                                    name={'password'}
                                />
                        </View>

                        <View style={styles.inputContainer}>
                            <Image source={require('../../assets/password.png')} style={styles.icon} />
                            <InputComponent text='Confirmar contraseña' 
                                    handleChange={handleChange}
                                    name={'confiPassw'}
                                />
                        </View>

                        <ButtonComponent title='Registrarse' handleSendInfo={handleRegister}/>
                    </View>
                    <TouchableOpacity 
                        onPress={() => navigation.dispatch(CommonActions.navigate({name: 'InicioSesion'}))}>
                        <Text style = {styles.textRedirect}>Ya tienes una cuenta? Inicia sesion ahora</Text>
                    </TouchableOpacity>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};

