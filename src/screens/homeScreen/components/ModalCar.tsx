import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { CarProduct } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
    isVisible: boolean;
    carProducts: CarProduct[];
    setShowModalCar: () => void;
    handleBuy: () => void;
}


export const ModalCar = ({ isVisible, carProducts, setShowModalCar, handleBuy }: Props) => {
    const { width } = useWindowDimensions();


    const totalPay = (): number => {

        let total: number = 0;
        carProducts.forEach(product => {
            total += product.total;
        })
        return total;
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{
                    ...styles.modalProduct,
                    width: width * 0.80
                }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>
                            Mis Productos
                        </Text>
                        <View style={styles.iconContainer}>
                            <Icon name='cancel'
                                size={23}
                                color={'black'}
                                onPress={setShowModalCar} />
                        </View>
                    </View>
                    <View>
                        {carProducts.length > 0 ? (
                            <>
                                <View style={styles.headerTable}>
                                    <Text style={styles.textHeaderTable}>Producto</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ ...styles.textHeaderTable, marginHorizontal: 10 }}>Precio</Text>
                                        <Text style={styles.textHeaderTable}>Cantidad</Text>
                                        <Text style={{ ...styles.textHeaderTable, marginHorizontal: 10 }}>Total</Text>
                                    </View>
                                </View>

                                <FlatList
                                    data={carProducts}
                                    renderItem={({ item }) =>
                                        <View style={styles.headerTable}>
                                            <Text>{item.name}</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ marginHorizontal: 10 }}>${item.price.toFixed(2)}</Text>
                                                <Text style={{ paddingHorizontal: 25 }}>{item.quantity}</Text>
                                                <Text style={{ marginHorizontal: 10 }}>${item.total.toFixed(2)}</Text>
                                            </View>
                                        </View>
                                    }
                                    keyExtractor={item => item.id.toString()}
                                />

                                <View style={styles.totalContainer}>
                                    <Text style={styles.textTotal}>
                                        Total a pagar: ${totalPay().toFixed(2)}
                                    </Text>
                                </View>
                            </>
                        ) : (
                            <View style={styles.emptyCartContainer}>
                                <Text style={styles.emptyCartText}>No hay productos en el carrito</Text>
                            </View>
                        )}
                    </View>
                    <TouchableOpacity style={[styles.buttonAddCart, carProducts.length === 0 && styles.buttonDisabled]} 
                    onPress={handleBuy}
                    disabled={carProducts.length === 0}>
                        <Text style={styles.buttonAddCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}