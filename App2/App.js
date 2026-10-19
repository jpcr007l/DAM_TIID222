
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { Saludo } from './components/Saludo';
// import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

/* 2. Zona principal [MAIN] */

export default function App() {
    return (
        <View style={styles.container}>
            
            {/* Práctica No. 7: Props & State */}

            {/* Mi perfil */}
            <Perfil
            Nombre="Javier Antonio Perez Juarez"
            Carrera="TIID"
            Materia="Desarrollo de Aplicaciones Móviles"
            Cuatrimestre="4TO"
            />

            {/* Perfil de Haziel */}
            <Perfil
             Nombre="Haziel Cornejo Silva"
             Carrera="TIID"
            Materia="Desarrollo de Aplicaciones Móviles"
            Cuatrimestre="4TO"
            />

            {/* Perfil de Jesus */}
            <Perfil
             Nombre="Jesus Lopez Cruz"
             Carrera="TIID"
             Materia="Desarrollo de Aplicaciones Móviles"
             Cuatrimestre="4TO"
            />

        </View>
    );
}

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


{/* Práctica No. 6: Estructura y Componentes*/}
{/*
            CONTENIDO DE LAS PRÁCTICAS ANTERIORES

            <Text>¡Hola Mundo React Native!</Text>
            <Image source={require('./assets/wave.png')} />

            <Text>----------------------------------------------------</Text>
            <Saludo />

            <Text>----------------------------------------------------</Text>
            <Saludos2 />

            <Text>----------------------------------------------------</Text>
            <Perfil />

            <Text>----------------------------------------------------</Text>
            */}