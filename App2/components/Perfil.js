
import { Text, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Perfil = ({ Nombre, Carrera, Materia, Cuatrimestre }) => {
    const [mostrar, setMostrar] = useState(false);

    return (
        <View style={styles.perfil}>
            <Text style={styles.nombre}>
                Nombre: {Nombre}
            </Text>

            {mostrar && (
                <View style={styles.informacion}>
                    <Text style={styles.dato}>
                        Carrera: {Carrera}
                    </Text>

                    <Text style={styles.dato}>
                        Materia: {Materia}
                    </Text>

                    <Text style={styles.dato}>
                        Cuatrimestre: {Cuatrimestre}
                    </Text>
                </View>
            )}

            <View style={styles.boton}>
                <Button
                    title={mostrar ? 'Ocultar Perfil' : 'Ver Perfil'}
                    onPress={() => setMostrar(!mostrar)}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    perfil: {
        width: '90%',
        marginVertical: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#D6D6D6',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
    },

    nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    informacion: {
        marginTop: 4,
        marginBottom: 8,
    },

    dato: {
        fontSize: 15,
        marginBottom: 8,
        lineHeight: 22,
    },

    boton: {
        marginTop: 4,
    },
});
