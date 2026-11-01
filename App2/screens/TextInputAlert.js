
/* =========================================================
   1. IMPORTACIONES
   ========================================================= */
import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';



/* =========================================================
   2. COMPONENTE PRINCIPAL (MAIN)
   ========================================================= */
export function TextInputAlert() {

    // 2.1. ESTADOS
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    // 2.2. ALERT: REGISTRO Y MENSAJES
    const registrarDatos = () => {
        if (!nombre.trim() || !correo.trim()) {
            alert('Completa todos los campos.');
            return;
        }

        alert(`Registro exitoso\n\nNombre: ${nombre}\nCorreo: ${correo}`);
        limpiarCampos();
    };

    // 2.3. LIMPIAR DATOS
    const limpiarCampos = () => {
        setNombre('');
        setCorreo('');
    };

    return (
        <View style={styles.contenedor}>

            {/* Título y descripción. */}
            <Text style={styles.titulo}>Práctica: TextInput & Alert</Text>
            <Text style={styles.descripcion}>
                Introduce tus datos para realizar un registro.
            </Text>

            {/* -------------------------------------------------
                TEXTINPUT: CAPTURA DEL NOMBRE
               ------------------------------------------------- */}
            <Text style={styles.etiqueta}>Nombre completo</Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            {/* -------------------------------------------------
                TEXTINPUT: CAPTURA DEL CORREO
               ------------------------------------------------- */}
            <Text style={styles.etiqueta}>Correo electrónico</Text>
            <TextInput
                style={styles.input}
                placeholder="usuario@correo.com"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* -------------------------------------------------
                ALERT: BOTÓN PARA REGISTRAR LOS DATOS
               ------------------------------------------------- */}
            <Pressable
                style={styles.botonPrincipal}
                onPress={registrarDatos}
            >
                <Text style={styles.textoBoton}>Registrar usuario</Text>
            </Pressable>

            {/* -------------------------------------------------
                BOTÓN PARA LIMPIAR EL FORMULARIO
               ------------------------------------------------- */}
            <Pressable
                style={styles.botonSecundario}
                onPress={limpiarCampos}
            >
                <Text style={styles.textoBotonSecundario}>
                    Limpiar formulario
                </Text>
            </Pressable>

        </View>
    );
}


/* =========================================================
   3. ESTILOS
   ========================================================= */
const styles = StyleSheet.create({

    // Contenedor principal.
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
