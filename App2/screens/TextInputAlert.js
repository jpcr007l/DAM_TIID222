/* =========================================================
   1. IMPORTACIONES
   ========================================================= */
import { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

/* =========================================================
   2. COMPONENTE PRINCIPAL
   ========================================================= */
export function TextInputAlert() {
    // Guardamos los datos introducidos por el usuario.
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    // Función para registrar y validar los datos.
    const registrarDatos = () => {
        // Comprobamos que los campos estén completos.
        if (!nombre.trim() || !correo.trim()) {
            if (Platform.OS === 'web') {
                globalThis.alert('Completa todos los campos.');
            } else {
                Alert.alert('Campos obligatorios', 'Completa todos los campos.');
            }
            return;
        }

        // Comprobamos que el correo tenga un formato básico.
        if (!correo.includes('@') || !correo.includes('.')) {
            if (Platform.OS === 'web') {
                globalThis.alert('Introduce un correo válido.');
            } else {
                Alert.alert('Correo no válido', 'Introduce un correo válido.');
            }
            return;
        }

        // Preparamos el mensaje con los datos introducidos.
        const mensaje = `Nombre: ${nombre.trim()}\nCorreo: ${correo.trim()}`;

        // Mostramos los datos según la plataforma.
        if (Platform.OS === 'web') {
            globalThis.alert(`Registro exitoso\n\n${mensaje}`);
            setNombre('');
            setCorreo('');
        } else {
            Alert.alert('Registro exitoso', mensaje, [
                { text: 'Aceptar', onPress: () => { setNombre(''); setCorreo(''); } }
            ]);
        }
    };

    // Función para limpiar los campos con confirmación.
    const limpiarFormulario = () => {
        if (Platform.OS === 'web') {
            // En navegador, confirm() permite aceptar o cancelar.
            if (globalThis.confirm('¿Deseas borrar los datos?')) {
                setNombre('');
                setCorreo('');
            }
        } else {
            // En dispositivos móviles, usamos Alert.
            Alert.alert('Limpiar formulario', '¿Deseas borrar los datos?', [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Limpiar', style: 'destructive', onPress: () => { setNombre(''); setCorreo(''); } }
            ]);
        }
    };

    /* -----------------------------------------------------
       3. INTERFAZ VISUAL
       ----------------------------------------------------- */
    return (
        <View style={styles.contenedor}>
            <StatusBar style="auto" />

            {/* Título y descripción de la práctica. */}
            <Text style={styles.titulo}>Práctica: TextInput & Alert</Text>
            <Text style={styles.descripcion}>Introduce tus datos para realizar un registro.</Text>

            {/* Campo para escribir el nombre. */}
            <Text style={styles.etiqueta}>Nombre completo</Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={nombre}
                onChangeText={setNombre}
                autoCapitalize="words"
                maxLength={50}
            />

            {/* Campo para escribir el correo electrónico. */}
            <Text style={styles.etiqueta}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder="usuario@correo.com"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
                maxLength={100}
            />

            {/* Botón para registrar los datos. */}
            <Pressable style={styles.botonPrincipal} onPress={registrarDatos}>
                <Text style={styles.textoBoton}>Registrar usuario</Text>
            </Pressable>

            {/* Botón para limpiar el formulario. */}
            <Pressable style={styles.botonSecundario} onPress={limpiarFormulario}>
                <Text style={styles.textoBotonSecundario}>Limpiar formulario</Text>
            </Pressable>
        </View>
    );
}

/* =========================================================
   4. ESTILOS
   ========================================================= */
const styles = StyleSheet.create({
    // Contenedor principal de la pantalla.
    contenedor: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        padding: 24
    },

    // Título principal.
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#222222',
        marginBottom: 12
    },

    // Descripción introductoria.
    descripcion: {
        fontSize: 14,
        color: '#666666',
        textAlign: 'center',
        marginBottom: 28,
        lineHeight: 21
    },

    // Etiquetas de los campos.
    etiqueta: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333333',
        marginBottom: 7
    },

    // Apariencia de los campos de entrada.
    input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 15,
        color: '#222222',
        backgroundColor: '#FFFFFF',
        marginBottom: 20
    },

    // Botón principal.
    botonPrincipal: {
        backgroundColor: '#424242',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 12
    },

    // Texto del botón principal.
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600'
    },

    // Botón secundario.
    botonSecundario: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#9E9E9E',
        paddingVertical: 13,
        borderRadius: 8,
        alignItems: 'center'
    },

    // Texto del botón secundario.
    textoBotonSecundario: {
        color: '#424242',
        fontSize: 15,
        fontWeight: '600'
    }
}); 