import React, { useState } from 'react'
import { FlatList, ImageBackground, StatusBar, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from '../../theme/appTheme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCar } from './components/ModalCar';
import { CardProduct } from './components/CardProduct';

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface CarProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {

    const products: Product[] = [
        { id: 1, name: 'Huawei Mate x6', price: 3577.00, stock: 6, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555423/Huawei_Mate_x6_bzxrgh.png' },
        { id: 2, name: 'Huawei nova 12 i', price: 799.00, stock: 10, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555423/Huawei_nova12i_jf3crf.png' },
        { id: 3, name: 'Huawei nova 12 s', price: 699.00, stock: 15, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555423/Huawei_nova12s_wowjkr.png' },
        { id: 4, name: 'Huawei nova 13 pro', price: 1555.00, stock: 4, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555423/Huawei_nova13_pro_rmd6gc.png' },
        { id: 5, name: 'Huawei Pura 70 ultra', price: 1199.00, stock: 9, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555423/Huawie_Pura70_ultra_l1swkk.png' },
        { id: 6, name: 'Iphone 14', price: 800.00, stock: 6, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_14___abbvhs.png' },
        { id: 7, name: 'Iphone 15', price: 963.00, stock: 10, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_15___p3dnud.png' },
        { id: 8, name: 'Iphone 15 pro max', price: 1341.00, stock: 15, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_15pro_max_fax0gr.jpg' },
        { id: 9, name: 'Iphone 16 pro', price: 1450.00, stock: 4, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_16pro__nqtvuk.png' },
        { id: 10, name: 'Iphone se', price: 300.00, stock: 9, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_se__s0ugtq.png' },
        { id: 11, name: 'Samsung Galaxy Zflip', price: 650.00, stock: 6, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555452/Samsung_Galaxy_Zflip_buwq5u.jpg' },
        { id: 12, name: 'Samsung Galaxy A55 5g', price: 450.00, stock: 10, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555451/Samsung_Galaxy_A55_5G_kzghvu.jpg' },
        { id: 13, name: 'Samsun Galaxy A05', price: 200.00, stock: 15, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555451/Samsung_Galaxy_A05_iufnm4.jpg' },
        { id: 14, name: 'Samsung Galaxy s24 FE', price: 769.00, stock: 4, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555451/Samsung_Galaxy_S24_FE_qkehed.png' },
        { id: 15, name: 'Samsung s25 Ultra', price: 1792.85, stock: 9, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555452/Samsung_s25_ultra_ym6tsj.png' },
        { id: 16, name: 'Xiaomi 13T', price: 688.00, stock: 6, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555459/Xiaomi-13T_jbrnwb.jpg' },
        { id: 17, name: 'Xiaomi 14 ultra', price: 1375.50, stock: 10, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555439/iphone_15___p3dnud.png' },
        { id: 18, name: 'Xiaomi Redmi Note 15', price: 466.00, stock: 15, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555459/Xiaomi_Redmi_note_15_vbtzks.jpg' },
        { id: 19, name: 'Xiaomi 12 Lite 5g', price: 350.00, stock: 4, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555460/Xiaomi_12_lite_5g_qujb70.jpg' },
        { id: 20, name: 'Xiaomi Redmi Note 13 Pro 5g', price: 346.00, stock: 9, pathImage: 'https://res.cloudinary.com/djk1ulrwt/image/upload/v1739555461/Xiaomi_redmi_Note_12_pro_5g_xjmxs2.jpg' }
    ];

    const [productsState, setProductsState] = useState<Product[]>(products);
    const [carProducts, setCarProducts] = useState<CarProduct[]>([]);
    const [showModalCar, setShowModalCar] = useState<boolean>(false);

    const changeStock = (id: number, quantity: number): void => { 
        const updateStock = productsState.map(product => product.id === id
            ? { ...product, stock: product.stock - quantity }
            : product);

        setProductsState(updateStock);
        addProduct(id, quantity);
    }

    const addProduct = (id: number, quantity: number) => {  
        const product = productsState.find(product => product.id === id);
        if (product) {
            setCarProducts(prevCarProducts => {
                const existingProduct = prevCarProducts.find(p => p.id === id);
                if (existingProduct) {
                    return prevCarProducts.map(p => 
                        p.id === id 
                            ? { ...p, quantity: p.quantity + quantity, total: (p.quantity + quantity) * p.price } 
                            : p
                    );
                } else {
                    return [
                        ...prevCarProducts, 
                        { 
                            id: product.id, 
                            name: product.name, 
                            price: product.price, 
                            quantity: quantity,
                            total: product.price * quantity 
                        }
                    ];
                }
            });
        }
    }

    const handleBuy = () => {
        setCarProducts([]); 
        setShowModalCar(false);  
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground 
                    source={{ uri: 'https://wallpapers.com/images/hd/sky-blue-background-rhpd7lcvyudhamoj.jpg' }} 
                    style={styles.backgroundImage}
                >
                    <StatusBar />
                    <View style={styles.headerContainer}>
                        <View style={{ ...styles.iconContainer, paddingHorizontal: 30 }}>
                            <Text style={styles.textIconCar}>
                                {carProducts.length}
                            </Text>
                            <Icon name='shopping-cart' size={33} color={'black'} onPress={() => setShowModalCar(!showModalCar)} />
                        </View>
                    </View>
                    <FlatList
                        data={productsState}
                        renderItem={({ item }) => <CardProduct product={item} changeStock={changeStock} />}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </ImageBackground>
            </View>
            <ModalCar isVisible={showModalCar} carProducts={carProducts} setShowModalCar={() => setShowModalCar(!showModalCar)} handleBuy={handleBuy}/>
        </SafeAreaView>
    );
};
