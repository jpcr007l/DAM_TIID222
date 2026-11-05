/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Tarjetas from './Tarjetas';
import { SafeScreen } from './SafeScreen';
import PressableSwitch from './PressableSwitch';
import { TextInputAlert } from './TextInputAlert';
import FlatListSectionList from './FlatListSectionList';
import { ImageBackgroundSplashScreen } from './ImageBackgroundSplashScreen';
import { ModalBottomSheet } from './ModalBottomSheet';
import { ActivityIndicatorKeyboardAvoidingView } from './ActivityIndicatorKeyboardAvoidingView';


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch (screen) {

        case 'tarjetas':
            return <Tarjetas />;

        case 'safeScreen':
            return <SafeScreen />;

        case 'pressableSwitch':
            return <PressableSwitch />;

        case 'textInputAlert':
            return <TextInputAlert />;

        case 'flatListSectionList':
            return <FlatListSectionList />;

        case 'imageBackgroundSplashScreen':
            return <ImageBackgroundSplashScreen />;

        case 'modalBottomSheet':
            return <ModalBottomSheet />;

        case 'activityIndicatorKeyboardAvoidingView':
            return <ActivityIndicatorKeyboardAvoidingView />;

        case 'menu':
        default:
            return (
                <ScrollView contentContainerStyle={styles.container}>

                    <Text style={styles.titulo}>
                        Menú de prácticas
                    </Text>

                    <View style={styles.boton}>
                        <Button
                            title="Tarjetas"
                            onPress={() => setScreen('tarjetas')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="SafeAreaView & ScrollView"
                            onPress={() => setScreen('safeScreen')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Pressable & Switch"
                            onPress={() => setScreen('pressableSwitch')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="TextInput & Alert"
                            onPress={() => setScreen('textInputAlert')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="FlatList & SectionList"
                            onPress={() => setScreen('flatListSectionList')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="ImageBackground & SplashScreen"
                            onPress={() => setScreen('imageBackgroundSplashScreen')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="Modal & Bottom Sheet"
                            onPress={() => setScreen('modalBottomSheet')}
                        />
                    </View>

                    <View style={styles.boton}>
                        <Button
                            title="ActivityIndicator & KeyboardAvoidingView"
                            onPress={() => setScreen('activityIndicatorKeyboardAvoidingView')}
                        />
                    </View>

                    <StatusBar style="auto" />

                </ScrollView>
            );
    }
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },

    boton: {
        width: 280,
        marginVertical: 8,
    },

});