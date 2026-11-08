
/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { StatusBar } from 'expo-status-bar';

import {
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator as RNActivityIndicator
} from 'react-native';

import { useState } from 'react';

import Inicio from './Inicio';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function ActivityIndicatorKeyboardAvoidingView() {

    // Estado para controlar el indicador de carga
    const [cargando, setCargando] = useState(false);

    // Estado para controlar la pantalla actual
    const [pantalla, setPantalla] = useState('principal');


    // Función para cambiar de pantalla
    function cambiarPantalla(destino) {

        setCargando(true);

        setTimeout(() => {
            setPantalla(destino);
            setCargando(false);
        }, 1500);
    }


    // Mostrar indicador de carga
    if (cargando) {
        return (
            <View style={styles.cargando}>

                <RNActivityIndicator size="large" />

                <Text style={styles.texto}>
                    Cargando...
                </Text>

            </View>
        );
    }


    // Mostrar pantalla de inicio de sesión
    if (pantalla === 'inicio') {
        return (
            <Inicio
                onRegresar={() => cambiarPantalla('principal')}
            />
        );
    }


    // Mostrar pantalla principal
    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>
                Pantalla Principal
            </Text>

            <Button
                title="Ir a Inicio"
                onPress={() => cambiarPantalla('inicio')}
            />

            <StatusBar style="auto" />

        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 15,
    },

    cargando: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 24,
        marginBottom: 20,
    },

    texto: {
        marginTop: 10,
        fontSize: 16,
    },

});


//Perez Juarez Javier Antonio