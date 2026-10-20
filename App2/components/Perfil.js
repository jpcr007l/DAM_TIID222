
/* =========================================================
   1. IMPORTACIÓN DE COMPONENTES Y HERRAMIENTAS
   ========================================================= */

// Componentes visuales y herramienta de estilos de React Native.
import { Text, View, Button, StyleSheet } from 'react-native';

// Hook para controlar el estado del componente.
import { useState } from 'react';


/* =========================================================
   2. DECLARACIÓN DEL COMPONENTE PERFIL
   ========================================================= */

// Recibe cinco propiedades desde App.js:
// Nombre, Carrera, Materia, Cuatrimestre y Style.
export const Perfil = ({
    Nombre,
    Carrera,
    Materia,
    Cuatrimestre,
    Style
}) => {

    /* -----------------------------------------------------
       2.1. ADMINISTRACIÓN DEL ESTADO
       ----------------------------------------------------- */

    // false indica que los datos académicos comienzan ocultos.
    // setMostrar permite cambiar su visibilidad.
    const [mostrar, setMostrar] = useState(false);


    /* -----------------------------------------------------
       2.2. ESTRUCTURA VISUAL DEL COMPONENTE
       ----------------------------------------------------- */

    return (

        // Combina el estilo general con el estilo recibido.
        <View style={[styles.Tarjeta, Style]}>

            {/* Nombre del estudiante */}
            <Text style={styles.nombre}>
                {Nombre}
            </Text>

            {/* Mostrar los datos cuando mostrar sea true */}
            {mostrar && (
                <View style={styles.informacion}>

                    {/* Carrera del estudiante */}
                    <Text style={styles.carrera}>
                        {Carrera}
                    </Text>

                    {/* Materia que cursa */}
                    <Text style={styles.otroTexto}>
                        {Materia}
                    </Text>

                    {/* Cuatrimestre actual */}
                    <Text style={styles.otroTexto}>
                        {Cuatrimestre}
                    </Text>

                </View>
            )}

            {/* Botón para mostrar u ocultar los datos */}
            <View style={styles.boton}>
                <Button
                    title={mostrar ? 'Ocultar Perfil' : 'Ver Perfil'}
                    onPress={() => setMostrar(!mostrar)}
                    color="#424242"
                />
            </View>

        </View>
    );
};


/* =========================================================
   3. DEFINICIÓN Y ORGANIZACIÓN DE LOS ESTILOS
   ========================================================= */

const styles = StyleSheet.create({

    /* -----------------------------------------------------
       3.1. ESTILO GENERAL DE LA TARJETA
       ----------------------------------------------------- */


Tarjeta: {
    width: 250,
    aspectRatio: 1,
    marginVertical: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 12,
    justifyContent: 'space-between',
},


    /* -----------------------------------------------------
       3.2. ESTILO DEL NOMBRE
       ----------------------------------------------------- */

    nombre: {
        fontSize: 24,
        marginBottom: 8,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#212121',
    },

    /* -----------------------------------------------------
       3.3. ESTILO DE LA CARRERA
       ----------------------------------------------------- */

    carrera: {
        fontSize: 24,
        color: '#196cd2',
        fontFamily: 'Roboto',
        marginBottom: 8,
    },

    /* -----------------------------------------------------
       3.4. CONTENEDOR DE LA INFORMACIÓN
       ----------------------------------------------------- */

    informacion: {
        marginTop: 4,
        marginBottom: 8,
    },

    /* -----------------------------------------------------
       3.5. ESTILO DE LOS DATOS ACADÉMICOS
       ----------------------------------------------------- */

    otroTexto: {
        color: '#333333',
        fontSize: 12,
        fontFamily: 'Courier',
        fontStyle: 'italic',
        marginBottom: 6,
    },

    /* -----------------------------------------------------
       3.6. ESTILO DEL BOTÓN
       ----------------------------------------------------- */

    boton: {
        marginTop: 4,
    },

});
