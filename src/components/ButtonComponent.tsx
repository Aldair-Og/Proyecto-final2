import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    title: string,
    handleSendInfo: () => void;
}


export const ButtonComponent = ({title, handleSendInfo} : Props) => {
    return (
        <TouchableOpacity style= {styles.button}
            onPress={handleSendInfo}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
