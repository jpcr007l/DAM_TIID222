
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';

export default function GestionarUsuarios() {

  // Esta sección contiene los usuarios registrados en el sistema.
  const usuarios = [
    {
      id: 1,
      nombre: 'Usuario 1',
      correo: 'usuario1@email.com',
    },
    {
      id: 2,
      nombre: 'Usuario 2',
      correo: 'usuario2@email.com',
    },
    {
      id: 3,
      nombre: 'Usuario 3',
      correo: 'usuario3@email.com',
    },
    {
      id: 4,
      nombre: 'Usuario 4',
      correo: 'usuario4@email.com',
    },
  ];

  // Esta sección controla el texto que se introduce en el buscador.
  const [busqueda, setBusqueda] = useState('');

  // Esta sección identifica al usuario seleccionado.
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  // Esta función filtra los usuarios por nombre o correo.
  const usuariosFiltrados = usuarios.filter((usuario) => {
    const texto = busqueda.toLowerCase();

    return (
      usuario.nombre.toLowerCase().includes(texto) ||
      usuario.correo.toLowerCase().includes(texto)
    );
  });

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Gestionar usuarios
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* Descripción de la sección */}
        <View style={estilos.seccionIntroduccion}>
          <Text style={estilos.tituloIntroduccion}>
            Usuarios registrados
          </Text>

          <Text style={estilos.textoIntroduccion}>
            Selecciona un usuario para administrar sus datos y actividades.
          </Text>
        </View>

        {/* Buscador de usuarios */}
        <View style={estilos.contenedorBusqueda}>
          <Text style={estilos.iconoBusqueda}>⌕</Text>

          <TextInput
            style={estilos.campoBusqueda}
            placeholder="Buscar usuario..."
            placeholderTextColor="#999999"
            value={busqueda}
            onChangeText={setBusqueda}
          />

          {busqueda.length > 0 && (
            <Pressable onPress={() => setBusqueda('')}>
              <Text style={estilos.limpiarBusqueda}>×</Text>
            </Pressable>
          )}
        </View>

        {/* Listado de usuarios */}
        <View style={estilos.listaUsuarios}>

          {usuariosFiltrados.map((usuario) => (
            <Pressable
              key={usuario.id}
              style={[
                estilos.tarjetaUsuario,
                usuarioSeleccionado === usuario.id &&
                  estilos.tarjetaSeleccionada,
              ]}
              onPress={() => setUsuarioSeleccionado(usuario.id)}
            >

              {/* Avatar del usuario */}
              <View style={estilos.avatarUsuario}>
                <Text style={estilos.simboloAvatar}>♟</Text>
              </View>

              {/* Información del usuario */}
              <View style={estilos.informacionUsuario}>

                <Text style={estilos.nombreUsuario}>
                  {usuario.nombre}
                </Text>

                <Text style={estilos.correoUsuario}>
                  {usuario.correo}
                </Text>

              </View>

              {/* Indicador de selección */}
              <View style={estilos.contenedorIndicador}>
                <Text style={estilos.flechaUsuario}>›</Text>
              </View>

            </Pressable>
          ))}

          {/* Mensaje cuando no existen coincidencias */}
          {usuariosFiltrados.length === 0 && (
            <View style={estilos.contenedorVacio}>
              <Text style={estilos.textoVacio}>
                No se encontraron usuarios.
              </Text>
            </View>
          )}

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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },

  espacioEncabezado: {
    width: 25,
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 18,
  },

  // Introducción de la pantalla.
  seccionIntroduccion: {
    width: '100%',
    marginTop: 17,
    marginBottom: 17,
  },

  tituloIntroduccion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  textoIntroduccion: {
    fontSize: 11,
    color: '#888888',
    lineHeight: 17,
  },

  // Buscador de usuarios.
  contenedorBusqueda: {
    width: '100%',
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F5F7',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  iconoBusqueda: {
    fontSize: 23,
    color: '#888888',
    marginRight: 9,
  },

  campoBusqueda: {
    flex: 1,
    height: '100%',
    fontSize: 12,
    color: '#333333',
  },

  limpiarBusqueda: {
    fontSize: 22,
    color: '#888888',
    paddingHorizontal: 5,
  },

  // Listado de usuarios.
  listaUsuarios: {
    width: '100%',
    paddingBottom: 20,
  },

  tarjetaUsuario: {
    width: '100%',
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    borderRadius: 8,
  },

  tarjetaSeleccionada: {
    backgroundColor: '#F0F6FF',
    borderBottomColor: '#D8E7FA',
  },

  avatarUsuario: {
    width: 39,
    height: 39,
    borderRadius: 22,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  simboloAvatar: {
    fontSize: 23,
    color: '#3978C8',
  },

  informacionUsuario: {
    flex: 1,
  },

  nombreUsuario: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  correoUsuario: {
    fontSize: 10,
    color: '#888888',
  },

  contenedorIndicador: {
    width: 27,
    height: 27,
    borderRadius: 15,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flechaUsuario: {
    fontSize: 21,
    color: '#3978C8',
  },

  // Mensaje cuando la búsqueda no tiene resultados.
  contenedorVacio: {
    alignItems: 'center',
    paddingVertical: 40,
  },

  textoVacio: {
    fontSize: 12,
    color: '#888888',
  },

});
