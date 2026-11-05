/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { StatusBar } from 'expo-status-bar';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ActivityIndicator
} from 'react-native';

import { useState, useEffect } from 'react';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export function ImageBackgroundSplashScreen() {

    // Estado para controlar la pantalla de carga
    const [showSplash, setShowSplash] = useState(true);

    // Efecto para controlar el tiempo de carga
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    // Pantalla Splash
    if (showSplash) {
        return (
            <View style={styles.splashContainer}>

                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    style={{ marginTop: 20 }}
                />

                <Text style={styles.splashLoading}>
                    Cargando...
                </Text>

            </View>
        );
    }

    // Pantalla principal
    return (
        <ImageBackground
            source={{
                uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
            }}
            style={styles.container}
            resizeMode="cover"
        >

            <View style={styles.overlay}>

                <Text style={styles.titulo}>
                    Bienvenidos
                </Text>

            </View>

            <StatusBar style="light" />

        </ImageBackground>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    // Estilos del Splash
    splashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        width: '100%',
    },

    splashIcon: {
        fontSize: 80,
    },

    splashTitle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 10,
    },

    splashSub: {
        color: '#a7f3d0',
        fontSize: 18,
        marginTop: 5,
    },

    splashLoading: {
        color: '#d1fae5',
        fontSize: 12,
        marginTop: 20,
    },

    // Estilos de la presentación principal
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20,
        paddingHorizontal: 40,
        borderRadius: 15,
        alignItems: 'center',
    },

    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});