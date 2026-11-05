/* =========================================================
   1. ZONA DE IMPORTACIONES
   ========================================================= */

import { StyleSheet, Text, View, FlatList, SectionList} from "react-native";


/* =========================================================
   2. ZONA PRINCIPAL [MAIN]
   ========================================================= */

// Datos para FlatList
const datosFlat = [
    {id: '1', nombre: "Juan"},
    {id: '2', nombre: "Maria"},
    {id: '3', nombre: "Pedro"},
    {id: '4', nombre: "Emilio"}
];

// Datos para SectionList
const datosSection = [
    {
        titulo: 'Frutas',
        data: ['Manzana', 'Platano'],
    },
    {
        titulo: 'Verduras',
        data: ['Zanahoria', 'Lechuga']
    }
];

// Función principal
export default function FlatListSectionList() {
    return (
        <View style={styles.container}>

            {/* PANEL PRINCIPAL */}
            <View style={styles.panel}>

                {/* EJEMPLO - FLATLIST */}
                <Text style={styles.titulo}>
                    EJEMPLO - FLATLIST
                </Text>

                <FlatList
                    style={styles.lista}
                    data={datosFlat}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>
                            {item.nombre}
                        </Text>
                    )}
                />

                {/* EJEMPLO - SECTIONLIST */}
                <Text style={styles.titulo}>
                    EJEMPLO - SECTIONLIST
                </Text>

                <SectionList
                    style={styles.lista}
                    sections={datosSection}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>
                            {item}
                        </Text>
                    )}
                    renderSectionHeader={({ section: { titulo } }) => (
                        <Text style={styles.encabezado}>
                            {titulo}
                        </Text>
                    )}
                />

            </View>

        </View>
    );
}


/* =========================================================
   3. ZONA DE ESTILOS Y POSICIONAMIENTO
   ========================================================= */

const styles = StyleSheet.create({

    // Contenedor exterior
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

panel: {
    width: '30%',
    minHeight: '85%',
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: '#C4F3FF',
    justifyContent: 'center',
},


    // Títulos principales
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        color: 'purple',
    },

    // Ancho y posición de las listas
    lista: {
        width: '100%',
        alignSelf: 'center',
    },

    // Encabezados de SectionList
    encabezado: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#E9A75B',
        padding: 5,
        color: 'white',
    },

    // Elementos de ambas listas
    item: {
        fontSize: 14,
        padding: 10,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#526D78',
    },

});