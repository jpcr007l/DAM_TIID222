
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Pressable,
  Modal,
  ScrollView,
} from 'react-native';

export default function ModificarDatosUsuario() {

  // Esta sección contiene los datos originales del usuario.
  const datosOriginales = {
    nombre: 'Usuario 1',
    correo: 'usuario1@email.com',
  };

  // Esta sección permite editar el nombre y el correo del usuario.
  const [nombre, setNombre] = useState(datosOriginales.nombre);
  const [correo, setCorreo] = useState(datosOriginales.correo);

  // Esta sección controla las ventanas emergentes.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Esta función abre la confirmación de los cambios.
  const prepararActualizacion = () => {
    setMostrarConfirmacion(true);
  };

  // Esta función simula la actualización de los datos.
  const actualizarDatos = () => {
    setMostrarConfirmacion(false);
    setMostrarExito(true);
  };

  // Esta función restaura los datos originales.
  const cancelarCambios = () => {
    setNombre(datosOriginales.nombre);
    setCorreo(datosOriginales.correo);
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Modificar datos
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* Información del usuario seleccionado */}
        <View style={estilos.tarjetaUsuario}>

          <View style={estilos.avatarUsuario}>
            <Text style={estilos.simboloAvatar}>♟</Text>
          </View>

          <View style={estilos.informacionUsuario}>
            <Text style={estilos.nombreUsuario}>
              Usuario 1
            </Text>

            <Text style={estilos.correoUsuario}>
              usuario1@email.com
            </Text>
          </View>

        </View>

        {/* Campo para modificar el nombre completo */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Nombre completo
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>♙</Text>

            <TextInput
              style={estilos.campoTexto}
              placeholder="Ingresa el nombre completo"
              placeholderTextColor="#999999"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>
        </View>

        {/* Campo para modificar el correo electrónico */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Correo electrónico
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>✉</Text>

            <TextInput
              style={estilos.campoTexto}
              placeholder="Ingresa el correo electrónico"
              placeholderTextColor="#999999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={correo}
              onChangeText={setCorreo}
            />
          </View>
        </View>

        {/* Botón para actualizar los datos */}
        <Pressable
          style={estilos.botonModificar}
          onPress={prepararActualizacion}
        >
          <Text style={estilos.textoBoton}>
            Modificar datos
          </Text>
        </Pressable>

        {/* Botón para cancelar los cambios */}
        <Pressable
          style={estilos.botonCancelar}
          onPress={cancelarCambios}
        >
          <Text style={estilos.textoCancelar}>
            Cancelar
          </Text>
        </Pressable>

      </ScrollView>

      {/* Ventana emergente de confirmación */}
      <Modal
        transparent={true}
        visible={mostrarConfirmacion}
        animationType="fade"
        onRequestClose={() => setMostrarConfirmacion(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoPregunta}>
              <Text style={estilos.simboloPregunta}>!</Text>
            </View>

            <Text style={estilos.tituloModal}>
              ¿Guardar cambios?
            </Text>

            <Text style={estilos.mensajeModal}>
              Se actualizarán el nombre y el correo electrónico
              del usuario. ¿Deseas continuar?
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonCancelarModal}
                onPress={() => setMostrarConfirmacion(false)}
              >
                <Text style={estilos.textoCancelarModal}>
                  No
                </Text>
              </Pressable>

              <Pressable
                style={estilos.botonAceptar}
                onPress={actualizarDatos}
              >
                <Text style={estilos.textoBotonModal}>
                  Sí
                </Text>
              </Pressable>

            </View>

          </View>
        </View>
      </Modal>

      {/* Ventana emergente de actualización exitosa */}
      <Modal
        transparent={true}
        visible={mostrarExito}
        animationType="fade"
        onRequestClose={() => setMostrarExito(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoExito}>
              <Text style={estilos.simboloExito}>✓</Text>
            </View>

            <Text style={estilos.tituloModal}>
              Datos actualizados
            </Text>

            <Text style={estilos.mensajeModal}>
              La información del usuario se ha actualizado
              correctamente.
            </Text>

            <Pressable
              style={estilos.botonAceptarCompleto}
              onPress={() => setMostrarExito(false)}
            >
              <Text style={estilos.textoBotonModal}>
                Aceptar
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>

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
    paddingTop: 15,
  },

  // Información general del usuario.
  tarjetaUsuario: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 22,
  },

  avatarUsuario: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloAvatar: {
    fontSize: 28,
    color: '#3978C8',
  },

  informacionUsuario: {
    flex: 1,
  },

  nombreUsuario: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  correoUsuario: {
    fontSize: 10,
    color: '#888888',
  },

  // Campos de edición.
  seccionCampo: {
    width: '100%',
    marginBottom: 18,
  },

  etiquetaCampo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  campoInformacion: {
    width: '100%',
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    paddingHorizontal: 12,
  },

  iconoCampo: {
    fontSize: 16,
    color: '#888888',
    marginRight: 10,
  },

  campoTexto: {
    flex: 1,
    height: '100%',
    fontSize: 12,
    color: '#333333',
  },

  // Botones principales.
  botonModificar: {
    width: '100%',
    height: 44,
    backgroundColor: '#1675E8',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  textoBoton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botonCancelar: {
    width: '100%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  textoCancelar: {
    fontSize: 12,
    color: '#777777',
  },

  // Estilos de las ventanas emergentes.
  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
  },

  contenedorModal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },

  iconoPregunta: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#E5F1FF',
    borderWidth: 5,
    borderColor: '#D1E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  simboloPregunta: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2584D8',
  },

  iconoExito: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#E2F6E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  simboloExito: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#29945A',
  },

  tituloModal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },

  mensajeModal: {
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 18,
  },

  botonesModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  botonCancelarModal: {
    flex: 1,
    height: 42,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonAceptar: {
    flex: 1,
    height: 42,
    backgroundColor: '#1675E8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonAceptarCompleto: {
    width: '100%',
    height: 42,
    backgroundColor: '#1675E8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBotonModal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  textoCancelarModal: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555555',
  },

});
