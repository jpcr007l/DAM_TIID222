
/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Perfil } from './components/Perfil';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function App() {
    return (
        <View style={styles.container}>

            {/* Práctica No. 7: Props & State */}

            {/* Perfil 1: Javier */}
            <Perfil
                Nombre="Javier"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO Cuatrimestre"
                Style={styles.Tarjeta1}
            />

            {/* Perfil 2: Haziel */}
            <Perfil
                Nombre="Haziel"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO Cuatrimestre"
                Style={styles.Tarjeta2}
            />

            {/* Perfil 3: Jesús */}
            <Perfil
                Nombre="Jesus"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO Cuatrimestre"
                Style={styles.Tarjeta3}
            />

            <StatusBar style="auto" />
        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    // CAPTURA 11: Código de la configuración Flexbox.
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

        // Organiza las tarjetas verticalmente.
        flexDirection: 'column',

        // Coloca las tarjetas al final del eje vertical.
        justifyContent: 'flex-end',

        // Centra las tarjetas horizontalmente.
        alignItems: 'center',
    },

    // Tarjeta 1: gris claro.
    Tarjeta1: {
        backgroundColor: '#F2F2F2',
    },

    // Tarjeta 2: gris intermedio.
    Tarjeta2: {
        backgroundColor: '#D9D9D9',
    },

    // Tarjeta 3: gris más oscuro.
    Tarjeta3: {
        backgroundColor: '#BDBDBD',
    },

});
