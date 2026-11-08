
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function InicioAdministrador() {

  // Esta sección contiene la información del administrador.
  const administrador = {
    nombre: 'Administrador',
    descripcion: 'Panel de administración',
  };

  // Esta sección contiene las opciones principales del administrador.
  const opciones = [
    {
      id: 1,
      nombre: 'Dashboard con estadísticas',
      descripcion: 'Visualiza información general del sistema',
      icono: '▥',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      id: 2,
      nombre: 'Gestionar usuarios',
      descripcion: 'Administra los usuarios registrados',
      icono: '♟',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
    {
      id: 3,
      nombre: 'Administrar servicios',
      descripcion: 'Gestiona los servicios de la plataforma',
      icono: '▤',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
  ];

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Encabezado con información del administrador */}
        <View style={estilos.encabezado}>

          <View style={estilos.avatar}>
            <Text style={estilos.simboloAvatar}>♙</Text>
          </View>

          <View style={estilos.informacionAdministrador}>
            <Text style={estilos.nombreAdministrador}>
              {administrador.nombre}
            </Text>

            <Text style={estilos.descripcionAdministrador}>
              {administrador.descripcion}
            </Text>
          </View>

        </View>

        {/* Opciones principales del administrador */}
        <View style={estilos.listaOpciones}>

          {opciones.map((opcion) => (
            <View
              key={opcion.id}
              style={estilos.tarjetaOpcion}
            >

              {/* Icono de la opción */}
              <View
                style={[
                  estilos.iconoOpcion,
                  { backgroundColor: opcion.color },
                ]}
              >
                <Text
                  style={[
                    estilos.simboloOpcion,
                    { color: opcion.colorIcono },
                  ]}
                >
                  {opcion.icono}
                </Text>
              </View>

              {/* Información de la opción */}
              <View style={estilos.informacionOpcion}>

                <Text style={estilos.nombreOpcion}>
                  {opcion.nombre}
                </Text>

                <Text style={estilos.textoOpcion}>
                  {opcion.descripcion}
                </Text>

              </View>

              {/* Indicador visual de acceso */}
              <Text style={estilos.flechaOpcion}>›</Text>

            </View>
          ))}

        </View>

      </ScrollView>
    </View>
  );
}

// Esta sección contiene los estilos visuales de la pantalla.
const estilos = StyleSheet.create({

  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 20,
  },

  // Encabezado del administrador.
  encabezado: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  simboloAvatar: {
    fontSize: 32,
    color: '#3978C8',
  },

  informacionAdministrador: {
    flex: 1,
  },

  nombreAdministrador: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 5,
  },

  descripcionAdministrador: {
    fontSize: 12,
    color: '#888888',
  },

  // Listado de opciones principales.
  listaOpciones: {
    width: '100%',
  },

  tarjetaOpcion: {
    width: '100%',
    minHeight: 85,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 11,
    paddingHorizontal: 13,
    paddingVertical: 12,
    marginBottom: 13,
  },

  iconoOpcion: {
    width: 46,
    height: 46,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloOpcion: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  informacionOpcion: {
    flex: 1,
  },

  nombreOpcion: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  textoOpcion: {
    fontSize: 10,
    color: '#888888',
    lineHeight: 15,
  },

  flechaOpcion: {
    fontSize: 25,
    color: '#AAAAAA',
    marginLeft: 8,
  },

});
