
/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    Pressable,
    Image,
    Alert,
    StyleSheet,
    ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

export default function App() {
    // Estados para almacenar los datos del estudiante.
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    // Estados para controlar las opciones del registro.
    const [asistiraTaller, setAsistiraTaller] = useState(false);
    const [requiereConstancia, setRequiereConstancia] = useState(false);
    const [participaraDeportes, setParticiparaDeportes] = useState(false);

    /* =====================================================
       FUNCIÓN PARA VALIDAR Y ENVIAR EL REGISTRO
       ===================================================== */

    const enviarRegistro = () => {
        // Validamos que ningún campo de texto esté vacío.
        if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
            Alert.alert(
                'Campos obligatorios',
                'Por favor, completa todos los campos del registro.'
            );
            return;
        }

        // Validamos que el semestre contenga únicamente números.
        if (!/^\d+$/.test(semestre.trim())) {
            Alert.alert(
                'Semestre inválido',
                'El semestre debe contener únicamente números.'
            );
            return;
        }

        // Preparamos el resumen de los datos del estudiante.
        const mensaje =
            `Nombre: ${nombre.trim()}\n` +
            `Carrera: ${carrera.trim()}\n` +
            `Semestre: ${semestre.trim()}\n\n` +
            `Taller: ${asistiraTaller ? 'Sí' : 'No'}\n` +
            `Constancia: ${requiereConstancia ? 'Sí' : 'No'}\n` +
            `Deportes: ${participaraDeportes ? 'Sí' : 'No'}`;

        // Mostramos la información del registro.
        Alert.alert('Registro completo', mensaje);
    };

    /* =====================================================
       INTERFAZ DE USUARIO
       ===================================================== */

    return (
        <ScrollView contentContainerStyle={styles.contenedor}>
            <StatusBar style="auto" />

            {/* Logotipo de la universidad. */}
            <Image
                source={require('./assets/UPQ_LOGO.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* Título principal. */}
            <Text style={styles.titulo}>
                Registro de Evento Universitario
            </Text>

            {/* Campo para el nombre completo. */}
            <TextInput
                style={styles.input}
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
            />

            {/* Campo para la carrera. */}
            <TextInput
                style={styles.input}
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
            />

            {/* Campo para el semestre. */}
            <TextInput
                style={styles.input}
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
                keyboardType="numeric"
            />

            {/* Subtítulo de las opciones del evento. */}
            <Text style={styles.subtitulo}>Opciones</Text>

            {/* Opción para asistir al taller. */}
            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    ¿Asistirá al taller?
                </Text>

                <Switch
                    value={asistiraTaller}
                    onValueChange={setAsistiraTaller}
                />
            </View>

            {/* Opción para solicitar constancia. */}
            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    ¿Requiere constancia?
                </Text>

                <Switch
                    value={requiereConstancia}
                    onValueChange={setRequiereConstancia}
                />
            </View>

            {/* Opción para participar en actividades deportivas. */}
            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    ¿Participará en actividades deportivas?
                </Text>

                <Switch
                    value={participaraDeportes}
                    onValueChange={setParticiparaDeportes}
                />
            </View>

            {/* Botón para enviar el registro. */}
            <Pressable
                style={styles.boton}
                onPress={enviarRegistro}
            >
                <Text style={styles.textoBoton}>
                    Enviar Registro
                </Text>
            </Pressable>
        </ScrollView>
    );
}

/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({
    // Contenedor principal de la pantalla.
    contenedor: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
        paddingTop: 30,
        justifyContent: 'center'
    },

    // Logotipo de la universidad.
    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginBottom: 20
    },

    // Título principal de la aplicación.
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#222222',
        marginBottom: 25
    },

    // Campos de entrada de texto.
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 12
    },

    // Subtítulo de las opciones.
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222222',
        marginTop: 15,
        marginBottom: 12
    },

    // Fila que contiene cada pregunta y su interruptor.
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        minHeight: 40
    },

    // Texto de las preguntas.
    etiqueta: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginRight: 10
    },

    // Botón para enviar el registro.
    boton: {
        backgroundColor: '#087BFA',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },

    // Texto del botón.
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
