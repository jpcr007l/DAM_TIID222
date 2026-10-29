
/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import { Perfil } from '../components/Perfil';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function Tarjetas() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Perfil
                Nombre="Javier Antonio Perez Juarez"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO"
                Style={styles.Tarjeta1}
            />

   
            <Perfil
                Nombre="Haziel Cornejo Silva"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO"
                Style={styles.Tarjeta2}
            />


            <Perfil
                Nombre="Jesus Lopez Cruz"
                Carrera="TIID"
                Materia="Desarrollo de Aplicaciones Móviles"
                Cuatrimestre="4TO"
                Style={styles.Tarjeta3}
            />

            <StatusBar style="auto" />
        </ScrollView>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    // Distribución general de los perfiles.
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },

    // Tarjeta 1: gris claro.
    Tarjeta1: {
        backgroundColor: '#F2F2F2',
    },

    // Tarjeta 2: gris intermedio.
    Tarjeta2: {
        backgroundColor: '#D9D9D9',
    },

    // Tarjeta 3: gris oscuro.
    Tarjeta3: {
        backgroundColor: '#BDBDBD',
    },

});
