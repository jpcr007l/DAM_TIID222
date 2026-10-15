
/* 1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

/* 2. Zona principal [MAIN] */

export default function App() {
    return (
         <View style={styles.container}>
            <Text>¡Hola Mundo React Native!</Text>
            <Image source={require('./assets/wave.png')} />
            //<Text>----------------------------------------------------</Text>
            //<Saludo />
            <Text>----------------------------------------------------</Text>
            <Saludos2 />
            <Text>----------------------------------------------------</Text>
            <Perfil />
            <Text>----------------------------------------------------</Text>

        </View>
    );
}




/*export default function App() {
    return (
        <View style={styles.container}>
            <Text>¡Hola Mundo React Native!</Text>
            <Image source={require('./assets/wave.png')} />
            <Text>----------------------------------------------------</Text>
            <Saludo />
            <Saludo />
            <Text>----------------------------------------------------</Text>
            <Saludos2 />
            <Saludos2 />
            
            <StatusBar style="auto" />
        </View>
    );
}
*/

/* 3. Zona de estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
