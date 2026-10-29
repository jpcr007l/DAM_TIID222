/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { View, Text, Switch, StyleSheet } from 'react-native';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function SwitchEjemplo({ oscuro, cambiarModo }) {
    return (
        <View style={styles.container}>

            <Text
                style={[
                    styles.titulo,
                    { color: oscuro ? '#FFFFFF' : '#000000' }
                ]}
            >
                Modo oscuro
            </Text>

            <Switch
                value={oscuro}
                onValueChange={cambiarModo}
            />

        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});