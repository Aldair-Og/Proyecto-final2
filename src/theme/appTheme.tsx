import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: { 
        flex: 1 ,
        //width: 300,
        //height: 500,
    },
    backgroundImage: {
     
        width: '100%',
        height: '100%',
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
    buttonDisabled: {
        backgroundColor: '#ccc',  
    },
    emptyCartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    
    emptyCartText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
    






    
   
        cardContainer: {
            flex: 1,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            borderWidth: 1,
            borderColor: '#FF7043',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
            marginBottom: 15,
            marginHorizontal: 20,
            backgroundColor: '#A8E6CF',
        },
        titleCard: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#1565C0',
            textAlign: 'center',
        },
        imageCard: {
            height: 100,
            width: 100,
            resizeMode: 'contain',
            borderRadius: 10,
            marginBottom: 10,
        },
        iconContainer: {
            flex: 1,
            alignItems: 'flex-end',
        },
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
        modalProduct: {
            backgroundColor: '#FFFFFF',
            padding: 30,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 6,
            borderRadius: 15,
        },
        modalHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            position: 'relative',
        },
        modalTitle: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#1565C0',
            textAlign: 'center',
        },
        modalImage: {
            height: 220,
            width: 220,
            alignSelf: 'center',
            aspectRatio: 1,
            resizeMode: 'contain',
            marginVertical: 20,
        },
        quantityContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonQuantity: {
            backgroundColor: '#424242',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        buttonQuantityText: {
            color: '#FFFFFF',
            fontSize: 22,
            fontWeight: 'bold',
        },
        textQuantity: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#0D47A1',
        },
        buttonAddCart: {
            backgroundColor: 'blue',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 6,
            marginTop: 20,
        },
        buttonAddCartText: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
        },
        textStock: {
            color: '#C62828',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        textIconCar: {
            backgroundColor: '#FF7043',
            paddingHorizontal: 6,
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 'bold',
        },
        headerTable: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 8,
        },
        textHeaderTable: {
            fontWeight: 'bold',
            color: '#212121',
            fontSize: 16,
        },
        totalContainer: {
            alignItems: 'flex-end',
            paddingVertical: 15,
            paddingHorizontal: 12,
        },
        textTotal: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000000',
        },
        
        
    });
    