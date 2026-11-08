
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Modal,
} from 'react-native';

export default function UsuarioSeleccionado() {

  // Esta sección contiene los datos del usuario seleccionado.
  const usuario = {
    nombre: 'Usuario 1',
    correo: 'usuario1@email.com',
  };

  // Esta sección controla las ventanas emergentes.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Esta sección controla el estado de acceso del usuario.
  const [usuarioDeshabilitado, setUsuarioDeshabilitado] = useState(false);

  // Esta función confirma el bloqueo del usuario.
  const deshabilitarUsuario = () => {
    setUsuarioDeshabilitado(true);
    setMostrarConfirmacion(false);
    setMostrarExito(true);
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Usuario seleccionado
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      {/* Información general del usuario */}
      <View style={estilos.contenido}>

        <View style={estilos.tarjetaUsuario}>

          <View style={estilos.avatarUsuario}>
            <Text style={estilos.simboloAvatar}>♟</Text>
          </View>

          <View style={estilos.informacionUsuario}>
            <Text style={estilos.nombreUsuario}>
              {usuario.nombre}
            </Text>

            <Text style={estilos.correoUsuario}>
              {usuario.correo}
            </Text>

            <Text style={estilos.estadoUsuario}>
              {usuarioDeshabilitado ? 'Usuario deshabilitado' : 'Usuario activo'}
            </Text>
          </View>

        </View>

        {/* Opción para deshabilitar al usuario */}
        <Pressable
          style={estilos.tarjetaAccion}
          onPress={() => setMostrarConfirmacion(true)}
        >

          <View style={estilos.iconoDeshabilitar}>
            <Text style={estilos.simboloDeshabilitar}>⊘</Text>
          </View>

          <View style={estilos.informacionAccion}>
            <Text style={estilos.tituloAccion}>
              {usuarioDeshabilitado
                ? 'Usuario deshabilitado'
                : 'Deshabilitar usuario'}
            </Text>

            <Text style={estilos.descripcionAccion}>
              Bloquear el acceso del usuario al sistema
            </Text>
          </View>

          <Text style={estilos.flechaAccion}>›</Text>

        </Pressable>

        {/* Opción para modificar los datos */}
        <Pressable style={estilos.tarjetaAccion}>

          <View style={estilos.iconoModificar}>
            <Text style={estilos.simboloModificar}>✎</Text>
          </View>

          <View style={estilos.informacionAccion}>
            <Text style={estilos.tituloAccion}>
              Modificar datos
            </Text>

            <Text style={estilos.descripcionAccion}>
              Editar información del usuario
            </Text>
          </View>

          <Text style={estilos.flechaAccion}>›</Text>

        </Pressable>

        {/* Opción para consultar el historial */}
        <Pressable style={estilos.tarjetaAccion}>

          <View style={estilos.iconoHistorial}>
            <Text style={estilos.simboloHistorial}>◷</Text>
          </View>

          <View style={estilos.informacionAccion}>
            <Text style={estilos.tituloAccion}>
              Ver historial
            </Text>

            <Text style={estilos.descripcionAccion}>
              Consultar actividades y solicitudes del usuario
            </Text>
          </View>

          <Text style={estilos.flechaAccion}>›</Text>

        </Pressable>

      </View>

      {/* Ventana emergente de confirmación */}
      <Modal
        transparent={true}
        visible={mostrarConfirmacion}
        animationType="fade"
        onRequestClose={() => setMostrarConfirmacion(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoAdvertencia}>
              <Text style={estilos.simboloAdvertencia}>!</Text>
            </View>

            <Text style={estilos.tituloModal}>
              ¿Deshabilitar usuario?
            </Text>

            <Text style={estilos.mensajeModal}>
              El usuario no podrá acceder al sistema.
              ¿Deseas continuar con esta acción?
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonCancelar}
                onPress={() => setMostrarConfirmacion(false)}
              >
                <Text style={estilos.textoCancelar}>
                  No
                </Text>
              </Pressable>

              <Pressable
                style={estilos.botonDeshabilitar}
                onPress={deshabilitarUsuario}
              >
                <Text style={estilos.textoBoton}>
                  Sí
                </Text>
              </Pressable>

            </View>

          </View>
        </View>
      </Modal>

      {/* Ventana emergente de operación exitosa */}
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
              Usuario deshabilitado
            </Text>

            <Text style={estilos.mensajeModal}>
              El usuario ha sido deshabilitado correctamente
              y ya no podrá acceder al sistema.
            </Text>

            <Pressable
              style={estilos.botonAceptarCompleto}
              onPress={() => setMostrarExito(false)}
            >
              <Text style={estilos.textoBoton}>
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

  // Información del usuario seleccionado.
  tarjetaUsuario: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 12,
  },

  avatarUsuario: {
    width: 52,
    height: 52,
    borderRadius: 27,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloAvatar: {
    fontSize: 30,
    color: '#3978C8',
  },

  informacionUsuario: {
    flex: 1,
  },

  nombreUsuario: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  correoUsuario: {
    fontSize: 11,
    color: '#888888',
    marginBottom: 5,
  },

  estadoUsuario: {
    fontSize: 10,
    color: '#29945A',
  },

  // Tarjetas de acciones administrativas.
  tarjetaAccion: {
    width: '100%',
    minHeight: 77,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  informacionAccion: {
    flex: 1,
    marginLeft: 11,
  },

  tituloAccion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  descripcionAccion: {
    fontSize: 10,
    color: '#888888',
    lineHeight: 15,
  },

  flechaAccion: {
    fontSize: 24,
    color: '#AAAAAA',
    marginLeft: 8,
  },

  // Icono de deshabilitar usuario.
  iconoDeshabilitar: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#FDECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  simboloDeshabilitar: {
    fontSize: 25,
    color: '#D9534F',
  },

  // Icono de modificar datos.
  iconoModificar: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  simboloModificar: {
    fontSize: 23,
    color: '#3978C8',
  },

  // Icono de historial.
  iconoHistorial: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#F2EAFE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  simboloHistorial: {
    fontSize: 23,
    color: '#8254B9',
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

  iconoAdvertencia: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#FDECEC',
    borderWidth: 5,
    borderColor: '#F9D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  simboloAdvertencia: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D9534F',
  },

  iconoExito: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#E2F6E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  simboloExito: {
    fontSize: 35,
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

  botonCancelar: {
    flex: 1,
    height: 42,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonDeshabilitar: {
    flex: 1,
    height: 42,
    backgroundColor: '#E84D59',
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

  textoBoton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  textoCancelar: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555555',
  },

});
