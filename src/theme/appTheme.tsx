import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: { 
        flex: 1 ,
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
    textRedirect:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    iconPassword:{
        position: 'absolute',
        right: 15,
        bottom: 14,
    },
});