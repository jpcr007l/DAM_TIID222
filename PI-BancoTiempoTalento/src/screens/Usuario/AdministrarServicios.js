
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  Modal,
} from 'react-native';

export default function AdministrarServicios() {

  // Esta sección contiene los servicios registrados por el usuario.
  const [servicios, setServicios] = useState([
    {
      id: 1,
      nombre: 'Entrenamiento Funcional',
      categoria: 'Deportes',
      duracion: '1 hora',
      creditos: '1 crédito / hora',
      icono: '✚',
      color: '#E2F5E8',
      colorIcono: '#29945A',
    },
    {
      id: 2,
      nombre: 'Fútbol Básico',
      categoria: 'Deportes',
      duracion: '1 hora',
      creditos: '1 crédito / hora',
      icono: '⚽',
      color: '#E8F5E9',
      colorIcono: '#29945A',
    },
    {
      id: 3,
      nombre: 'Inglés Conversacional',
      categoria: 'Idiomas',
      duracion: '1 hora',
      creditos: '1 crédito / hora',
      icono: '文',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
    {
      id: 4,
      nombre: 'Programación en Python',
      categoria: 'Tecnología',
      duracion: '1 hora',
      creditos: '1 crédito / hora',
      icono: '▣',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
  ]);

  // Esta sección controla las ventanas emergentes de eliminación.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Esta variable guarda temporalmente el servicio seleccionado.
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  // Esta función prepara la confirmación de eliminación.
  const prepararEliminacion = (servicio) => {
    setServicioSeleccionado(servicio);
    setMostrarConfirmacion(true);
  };

  // Esta función elimina el servicio seleccionado de la lista local.
  const eliminarServicio = () => {
    if (servicioSeleccionado) {
      setServicios((listaActual) =>
        listaActual.filter(
          (servicio) => servicio.id !== servicioSeleccionado.id
        )
      );
    }

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
          Administrar mis servicios
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Botón para registrar un servicio nuevo */}
        <Pressable style={estilos.botonRegistrar}>
          <Text style={estilos.simboloRegistrar}>＋</Text>
          <Text style={estilos.textoBotonRegistrar}>
            Registrar nuevo servicio
          </Text>
        </Pressable>

        {/* Listado de servicios del usuario */}
        <View style={estilos.listaServicios}>

          {servicios.map((servicio) => (
            <View
              key={servicio.id}
              style={estilos.tarjetaServicio}
            >

              {/* Icono del servicio */}
              <View
                style={[
                  estilos.iconoServicio,
                  { backgroundColor: servicio.color },
                ]}
              >
                <Text
                  style={[
                    estilos.simboloServicio,
                    { color: servicio.colorIcono },
                  ]}
                >
                  {servicio.icono}
                </Text>
              </View>

              {/* Información del servicio */}
              <View style={estilos.informacionServicio}>

                <Text style={estilos.nombreServicio}>
                  {servicio.nombre}
                </Text>

                <Text style={estilos.datoServicio}>
                  {servicio.categoria}
                </Text>

                <Text style={estilos.datoServicio}>
                  ◷  {servicio.duracion}
                </Text>

                <Text style={estilos.datoServicio}>
                  {servicio.creditos}
                </Text>

              </View>

              {/* Opciones para modificar y eliminar */}
              <View style={estilos.botonesAccion}>

                <Pressable style={estilos.botonModificar}>
                  <Text style={estilos.textoModificar}>
                    ✎ Modificar
                  </Text>
                </Pressable>

                <Pressable
                  style={estilos.botonEliminar}
                  onPress={() => prepararEliminacion(servicio)}
                >
                  <Text style={estilos.textoEliminar}>
                    ▣ Eliminar
                  </Text>
                </Pressable>

              </View>

            </View>
          ))}

          {servicios.length === 0 && (
            <Text style={estilos.textoSinServicios}>
              No tienes servicios registrados.
            </Text>
          )}

        </View>

      </ScrollView>

      {/* Ventana de confirmación para eliminar */}
      <Modal
        transparent={true}
        visible={mostrarConfirmacion}
        animationType="fade"
        onRequestClose={() => setMostrarConfirmacion(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoPregunta}>
              <Text style={estilos.simboloPregunta}>?</Text>
            </View>

            <Text style={estilos.tituloModal}>
              ¿Deseas eliminar este servicio?
            </Text>

            <Text style={estilos.mensajeModal}>
              Esta acción eliminará el servicio de tu lista.
              ¿Deseas continuar?
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonAceptar}
                onPress={eliminarServicio}
              >
                <Text style={estilos.textoBotonModal}>
                  Sí
                </Text>
              </Pressable>

              <Pressable
                style={estilos.botonCancelar}
                onPress={() => setMostrarConfirmacion(false)}
              >
                <Text style={estilos.textoCancelar}>
                  No
                </Text>
              </Pressable>

            </View>

          </View>
        </View>
      </Modal>

      {/* Ventana de aviso de eliminación completada */}
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
              Servicio eliminado
            </Text>

            <Text style={estilos.mensajeModal}>
              El servicio fue eliminado correctamente.
            </Text>

            <Pressable
              style={estilos.botonAceptarCompleto}
              onPress={() => {
                setMostrarExito(false);
                setServicioSeleccionado(null);
              }}
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

// Esta sección contiene los estilos visuales de la interfaz.
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
    paddingHorizontal: 16,
  },

  botonRegistrar: {
    width: '100%',
    height: 44,
    backgroundColor: '#1675E8',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },

  simboloRegistrar: {
    fontSize: 23,
    color: '#FFFFFF',
    marginRight: 8,
  },

  textoBotonRegistrar: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  listaServicios: {
    width: '100%',
  },

  tarjetaServicio: {
    width: '100%',
    minHeight: 110,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },

  iconoServicio: {
    width: 43,
    height: 43,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },

  simboloServicio: {
    fontSize: 23,
    fontWeight: 'bold',
  },

  informacionServicio: {
    flex: 1,
    justifyContent: 'center',
  },

  nombreServicio: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 5,
  },

  datoServicio: {
    fontSize: 10,
    color: '#777777',
    marginBottom: 3,
  },

  botonesAccion: {
    width: 76,
    alignItems: 'stretch',
    marginLeft: 5,
  },

  botonModificar: {
    backgroundColor: '#EAF2FF',
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 7,
  },

  textoModificar: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#3978C8',
  },

  botonEliminar: {
    backgroundColor: '#FDECEC',
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoEliminar: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#D9534F',
  },

  textoSinServicios: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginTop: 35,
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
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#E5F1FF',
    borderWidth: 5,
    borderColor: '#D1E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  simboloPregunta: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2584D8',
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

  botonAceptar: {
    flex: 1,
    height: 42,
    backgroundColor: '#1675E8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
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

  textoCancelar: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#555555',
  },

});
