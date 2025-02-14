import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { InicioSesion } from '../screens/InicioSesion';
import {Registro}from '../screens/Registro';
import { HomeScreen } from '../screens/homeScreen/HomeScreen';

export interface User {
    id: number,
    name: string,
    email: string,
    phone: string,
    password: string,
}


const user: User[] = [
    {id: 1, name: 'Fernando Perez', email: 'fperez@gmail.com', phone: '012345', password: '12345'},
    {id: 2, name: 'Henry Martines', email: 'hmaetines@gmail.com', phone: '012345', password: '12345'}
]



const Stack = createStackNavigator();

export const StackNavigator = () => {

    const [userManager, setUserManager] = useState<User[]>(user);

    const addUser = (user: User): void => {
        setUserManager([...userManager, user]);
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="InicioSesion" 
                options={{headerShown: false}} 
                children={() => <InicioSesion users={userManager}/>} />
            <Stack.Screen name="Registro" 
                options={{headerShown: false}} 
                children={() => <Registro users={userManager} addUser={addUser}/>} />
            <Stack.Screen name="Home" 
                options={{headerShown: false}} 
                component={HomeScreen} />
        </Stack.Navigator>
    );
}