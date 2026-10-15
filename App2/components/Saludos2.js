
/* 1. Zona de importaciones */
import { Text, Button, View, Image } from 'react-native';

/* 2. Zona principal [COMPONENTE] */
export const Saludos2 = () => {
    return (
        <View>
            <Text>Hola RN - Soy un componente propio compuesto</Text>
            <Image
                source={require('../assets/wave.png')}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
            />
            <Button
                title="Presiona para saludar"
                onPress={() => alert('¡Hola desde Saludos2!')}
            />
        </View>
    );
};


