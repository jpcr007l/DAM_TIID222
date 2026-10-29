/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { useState } from 'react';

import SwitchEjemplo from '../components/SwitchEjemplo';

import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function PressableSwitch() {

    const [imagenGrande, setImagenGrande] = useState(false);
    const [oscuro, setOscuro] = useState(false);

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: oscuro
                        ? '#000000'
                        : '#FFFFFF',
                },
            ]}
        >

            <Pressable>
                <Text
                    style={[
                        styles.texto,
                        {
                            color: oscuro
                                ? '#FFFFFF'
                                : '#000000',
                        },
                    ]}
                >
                    Presióname
                </Text>
            </Pressable>

            <Pressable
                onPress={() =>
                    setImagenGrande(!imagenGrande)
                }
            >
                <Image
                    source={require('../assets/UPQ_LOGO.png')}
                    style={
                        imagenGrande
                            ? styles.imagenGrande
                            : styles.image
                    }
                    resizeMode="contain"
                />
            </Pressable>

            <SwitchEjemplo
                oscuro={oscuro}
                cambiarModo={setOscuro}
            />

        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        fontSize: 20,
        marginBottom: 20,
    },

    image: {
        width: 100,
        height: 100,
    },

    imagenGrande: {
        width: 180,
        height: 180,
    },
});