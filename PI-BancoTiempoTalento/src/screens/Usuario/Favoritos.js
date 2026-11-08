
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function Favoritos() {

  // Esta sección contiene los cursos y temas guardados por el usuario.
  const favoritos = [
    {
      id: 1,
      nombre: 'Energía eléctrica',
      categoria: 'Ciencias',
      duracion: '1 hora',
      icono: '⚡',
      color: '#FFF4D9',
      colorIcono: '#D9A52E',
    },
    {
      id: 2,
      nombre: 'Finanzas personales',
      categoria: 'Finanzas',
      duracion: '45 minutos',
      icono: '▥',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      id: 3,
      nombre: 'Ahorro de energía',
      categoria: 'Hogar',
      duracion: '30 minutos',
      icono: '♧',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
    {
      id: 4,
      nombre: 'Programación orientada a objetos',
      categoria: 'Tecnología',
      duracion: '2 horas',
      icono: '</>',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
    {
      id: 5,
      nombre: 'Bases de datos',
      categoria: 'Tecnología',
      duracion: '1 hora',
      icono: '▤',
      color: '#FFF0E2',
      colorIcono: '#D98A36',
    },
    {
      id: 6,
      nombre: 'Desarrollo web',
      categoria: 'Tecnología',
      duracion: '1 hora',
      icono: '▯',
      color: '#FCEAF0',
      colorIcono: '#C65B82',
    },
  ];

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Favoritos
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      {/* Listado de favoritos */}
      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        <View style={estilos.listaFavoritos}>

          {favoritos.map((favorito) => (
            <View
              key={favorito.id}
              style={estilos.tarjetaFavorito}
            >

              {/* Icono representativo del tema */}
              <View
                style={[
                  estilos.iconoFavorito,
                  { backgroundColor: favorito.color },
                ]}
              >
                <Text
                  style={[
                    estilos.simboloFavorito,
                    { color: favorito.colorIcono },
                  ]}
                >
                  {favorito.icono}
                </Text>
              </View>

              {/* Información del tema guardado */}
              <View style={estilos.informacionFavorito}>

                <Text style={estilos.nombreFavorito}>
                  {favorito.nombre}
                </Text>

                <Text style={estilos.categoriaFavorito}>
                  {favorito.categoria}
                </Text>

                <Text style={estilos.duracionFavorito}>
                  ◷  {favorito.duracion}
                </Text>

              </View>

              {/* Icono para identificar que es favorito */}
              <View style={estilos.contenedorCorazon}>
                <Text style={estilos.corazon}>
                  ♥
                </Text>
              </View>

            </View>
          ))}

        </View>

      </ScrollView>

      {/* Barra inferior de navegación visual */}
      <View style={estilos.barraInferior}>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>⌂</Text>
          <Text style={estilos.textoNavegacion}>Inicio</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>▦</Text>
          <Text style={estilos.textoNavegacion}>Categorías</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>◷</Text>
          <Text style={estilos.textoNavegacion}>Historial</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoActivo}>♙</Text>
          <Text style={estilos.textoActivo}>Perfil</Text>
        </View>

      </View>

    </View>
  );
}

// Esta sección contiene los estilos visuales de la pantalla.
const estilos = StyleSheet.create({

  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  encabezado: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  flechaRegreso: {
    fontSize: 30,
    color: '#222222',
  },

  tituloPrincipal: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },

  espacioEncabezado: {
    width: 25,
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 16,
  },

  listaFavoritos: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 20,
  },

  tarjetaFavorito: {
    width: '100%',
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 12,
    paddingHorizontal: 5,
  },

  iconoFavorito: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloFavorito: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  informacionFavorito: {
    flex: 1,
    justifyContent: 'center',
  },

  nombreFavorito: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  categoriaFavorito: {
    fontSize: 11,
    color: '#777777',
    marginBottom: 4,
  },

  duracionFavorito: {
    fontSize: 10,
    color: '#999999',
  },

  contenedorCorazon: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  corazon: {
    fontSize: 22,
    color: '#E65B78',
  },

  // Barra inferior de navegación.
  barraInferior: {
    height: 68,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  opcionNavegacion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconoNavegacion: {
    fontSize: 22,
    color: '#999999',
    marginBottom: 3,
  },

  textoNavegacion: {
    fontSize: 11,
    color: '#999999',
  },

  iconoActivo: {
    fontSize: 22,
    color: '#3978C8',
    marginBottom: 3,
  },

  textoActivo: {
    fontSize: 11,
    color: '#3978C8',
    fontWeight: 'bold',
  },

});
