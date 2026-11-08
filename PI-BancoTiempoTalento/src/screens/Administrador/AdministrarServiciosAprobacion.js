
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

export default function AdministrarServiciosAprobacion() {

  // Esta sección contiene los servicios registrados por los usuarios.
  const [servicios, setServicios] = useState([
    {
      id: 1,
      nombre: 'Entrenamiento Funcional',
      usuario: 'Carlos Ruiz',
      categoria: 'Deportes',
      duracion: '1 hora',
      estado: 'Pendiente',
    },
    {
      id: 2,
      nombre: 'Clases de inglés',
      usuario: 'Ana Martínez',
      categoria: 'Idiomas',
      duracion: '2 horas',
      estado: 'Pendiente',
    },
    {
      id: 3,
      nombre: 'Reparación de computadoras',
      usuario: 'Luis Hernández',
      categoria: 'Tecnología',
      duracion: '1 hora',
      estado: 'Pendiente',
    },
  ]);

  // Esta sección controla las ventanas emergentes.
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Esta sección identifica el servicio y la acción seleccionados.
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [accionSeleccionada, setAccionSeleccionada] = useState('');

  // Esta sección contiene los mensajes de confirmación.
  const obtenerMensaje = () => {
    if (accionSeleccionada === 'Aprobar') {
      return {
        titulo: '¿Deseas aprobar este servicio?',
        descripcion: 'El servicio estará disponible para los usuarios.',
        resultado: 'Servicio aprobado',
        mensajeResultado: 'El servicio ha sido aprobado correctamente.',
      };
    }

    if (accionSeleccionada === 'Denegar') {
      return {
        titulo: '¿Deseas denegar este servicio?',
        descripcion: 'El servicio no será autorizado para su publicación.',
        resultado: 'Servicio denegado',
        mensajeResultado: 'El servicio ha sido denegado correctamente.',
      };
    }

    return {
      titulo: '¿Deseas eliminar este servicio?',
      descripcion: 'Esta acción eliminará el servicio del listado.',
      resultado: 'Servicio eliminado',
      mensajeResultado: 'El servicio ha sido eliminado correctamente.',
    };
  };

  // Esta función abre la confirmación de una acción.
  const confirmarAccion = (servicio, accion) => {
    setServicioSeleccionado(servicio);
    setAccionSeleccionada(accion);
    setMostrarModal(true);
  };

  // Esta función ejecuta la acción seleccionada.
  const ejecutarAccion = () => {
    if (!servicioSeleccionado) {
      return;
    }

    if (accionSeleccionada === 'Eliminar') {
      setServicios((listaActual) =>
        listaActual.filter(
          (servicio) => servicio.id !== servicioSeleccionado.id
        )
      );
    } else {
      setServicios((listaActual) =>
        listaActual.map((servicio) =>
          servicio.id === servicioSeleccionado.id
            ? { ...servicio, estado: accionSeleccionada === 'Aprobar'
                ? 'Aprobado'
                : 'Denegado' }
            : servicio
        )
      );
    }

    setMostrarModal(false);
    setMostrarResultado(true);
  };

  // Esta función determina el color del estado.
  const obtenerColorEstado = (estado) => {
    if (estado === 'Aprobado') {
      return {
        fondo: '#E4F5E9',
        texto: '#29945A',
      };
    }

    if (estado === 'Denegado') {
      return {
        fondo: '#FDEAEA',
        texto: '#D9534F',
      };
    }

    return {
      fondo: '#FFF4DF',
      texto: '#C58B28',
    };
  };

  const mensajes = obtenerMensaje();

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Administrar servicios
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Descripción de la sección */}
        <View style={estilos.seccionIntroduccion}>
          <Text style={estilos.tituloIntroduccion}>
            Servicios registrados
          </Text>

          <Text style={estilos.descripcionIntroduccion}>
            Revisa los servicios enviados por los usuarios y decide
            si deseas aprobarlos, denegarlos o eliminarlos.
          </Text>
        </View>

        {/* Contador de servicios pendientes */}
        <View style={estilos.resumenServicios}>
          <Text style={estilos.numeroPendientes}>
            {servicios.filter(
              (servicio) => servicio.estado === 'Pendiente'
            ).length}
          </Text>

          <Text style={estilos.textoPendientes}>
            Servicios pendientes de revisión
          </Text>
        </View>

        {/* Listado de servicios */}
        <View style={estilos.listaServicios}>

          {servicios.map((servicio) => {
            const colorEstado = obtenerColorEstado(servicio.estado);

            return (
              <View
                key={servicio.id}
                style={estilos.tarjetaServicio}
              >

                {/* Información del servicio */}
                <View style={estilos.encabezadoServicio}>
                  <View style={estilos.iconoServicio}>
                    <Text style={estilos.simboloServicio}>▤</Text>
                  </View>

                  <View style={estilos.informacionServicio}>
                    <Text style={estilos.nombreServicio}>
                      {servicio.nombre}
                    </Text>

                    <Text style={estilos.usuarioServicio}>
                      Prestador: {servicio.usuario}
                    </Text>
                  </View>
                </View>

                {/* Datos del servicio */}
                <View style={estilos.detallesServicio}>
                  <Text style={estilos.textoDetalle}>
                    Categoría: {servicio.categoria}
                  </Text>

                  <Text style={estilos.textoDetalle}>
                    Duración: {servicio.duracion}
                  </Text>
                </View>

                {/* Estado actual */}
                <View style={estilos.contenedorEstado}>
                  <Text style={estilos.etiquetaEstado}>
                    Estado:
                  </Text>

                  <View
                    style={[
                      estilos.etiquetaEstadoValor,
                      { backgroundColor: colorEstado.fondo },
                    ]}
                  >
                    <Text
                      style={[
                        estilos.textoEstado,
                        { color: colorEstado.texto },
                      ]}
                    >
                      {servicio.estado}
                    </Text>
                  </View>
                </View>

                {/* Acciones administrativas */}
                {servicio.estado === 'Pendiente' && (
                  <View style={estilos.contenedorAcciones}>

                    <Pressable
                      style={estilos.botonAprobar}
                      onPress={() =>
                        confirmarAccion(servicio, 'Aprobar')
                      }
                    >
                      <Text style={estilos.textoBoton}>
                        Aprobar
                      </Text>
                    </Pressable>

                    <Pressable
                      style={estilos.botonDenegar}
                      onPress={() =>
                        confirmarAccion(servicio, 'Denegar')
                      }
                    >
                      <Text style={estilos.textoBoton}>
                        Denegar
                      </Text>
                    </Pressable>

                    <Pressable
                      style={estilos.botonEliminar}
                      onPress={() =>
                        confirmarAccion(servicio, 'Eliminar')
                      }
                    >
                      <Text style={estilos.textoBoton}>
                        Eliminar
                      </Text>
                    </Pressable>

                  </View>
                )}

              </View>
            );
          })}

          {/* Mensaje cuando no hay servicios */}
          {servicios.length === 0 && (
            <View style={estilos.contenedorVacio}>
              <Text style={estilos.iconoVacio}>✓</Text>

              <Text style={estilos.textoVacio}>
                No hay servicios registrados.
              </Text>
            </View>
          )}

        </View>

      </ScrollView>

      {/* Ventana emergente de confirmación */}
      <Modal
        transparent={true}
        visible={mostrarModal}
        animationType="fade"
        onRequestClose={() => setMostrarModal(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoPregunta}>
              <Text style={estilos.simboloPregunta}>?</Text>
            </View>

            <Text style={estilos.tituloModal}>
              {mensajes.titulo}
            </Text>

            <Text style={estilos.mensajeModal}>
              {mensajes.descripcion}
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonCancelarModal}
                onPress={() => setMostrarModal(false)}
              >
                <Text style={estilos.textoCancelar}>
                  No
                </Text>
              </Pressable>

              <Pressable
                style={estilos.botonAceptarModal}
                onPress={ejecutarAccion}
              >
                <Text style={estilos.textoBotonModal}>
                  Sí
                </Text>
              </Pressable>

            </View>

          </View>
        </View>
      </Modal>

      {/* Ventana emergente de resultado */}
      <Modal
        transparent={true}
        visible={mostrarResultado}
        animationType="fade"
        onRequestClose={() => setMostrarResultado(false)}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoExito}>
              <Text style={estilos.simboloExito}>✓</Text>
            </View>

            <Text style={estilos.tituloModal}>
              {mensajes.resultado}
            </Text>

            <Text style={estilos.mensajeModal}>
              {mensajes.mensajeResultado}
            </Text>

            <Pressable
              style={estilos.botonAceptarCompleto}
              onPress={() => setMostrarResultado(false)}
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
    paddingHorizontal: 15,
  },

  // Introducción de la pantalla.
  seccionIntroduccion: {
    marginTop: 17,
    marginBottom: 14,
  },

  tituloIntroduccion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 6,
  },

  descripcionIntroduccion: {
    fontSize: 11,
    color: '#888888',
    lineHeight: 17,
  },

  // Resumen de servicios pendientes.
  resumenServicios: {
    minHeight: 55,
    backgroundColor: '#EAF2FF',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 15,
  },

  numeroPendientes: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3978C8',
    marginRight: 11,
  },

  textoPendientes: {
    fontSize: 11,
    color: '#56799F',
  },

  // Listado de servicios.
  listaServicios: {
    width: '100%',
    paddingBottom: 20,
  },

  tarjetaServicio: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    padding: 12,
    marginBottom: 13,
    backgroundColor: '#FFFFFF',
  },

  encabezadoServicio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  iconoServicio: {
    width: 38,
    height: 38,
    borderRadius: 8,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  simboloServicio: {
    fontSize: 20,
    color: '#3978C8',
  },

  informacionServicio: {
    flex: 1,
  },

  nombreServicio: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  usuarioServicio: {
    fontSize: 10,
    color: '#888888',
  },

  detallesServicio: {
    paddingLeft: 48,
    marginBottom: 9,
  },

  textoDetalle: {
    fontSize: 10,
    color: '#777777',
    marginBottom: 4,
  },

  contenedorEstado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  etiquetaEstado: {
    fontSize: 10,
    color: '#777777',
    marginRight: 7,
  },

  etiquetaEstadoValor: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 5,
  },

  textoEstado: {
    fontSize: 9,
    fontWeight: 'bold',
  },

  // Botones de aprobación, denegación y eliminación.
  contenedorAcciones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 7,
  },

  botonAprobar: {
    flex: 1,
    height: 34,
    backgroundColor: '#29945A',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonDenegar: {
    flex: 1,
    height: 34,
    backgroundColor: '#E7A13B',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonEliminar: {
    flex: 1,
    height: 34,
    backgroundColor: '#D9534F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoBoton: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // Mensaje cuando no existen servicios.
  contenedorVacio: {
    alignItems: 'center',
    paddingVertical: 45,
  },

  iconoVacio: {
    fontSize: 35,
    color: '#29945A',
    marginBottom: 10,
  },

  textoVacio: {
    fontSize: 12,
    color: '#888888',
  },

  // Ventanas emergentes.
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
    fontSize: 29,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    textAlign: 'center',
    marginBottom: 10,
  },

  mensajeModal: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 17,
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
    height: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonAceptarModal: {
    flex: 1,
    height: 40,
    backgroundColor: '#1675E8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botonAceptarCompleto: {
    width: '100%',
    height: 40,
    backgroundColor: '#1675E8',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoCancelar: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
  },

  textoBotonModal: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

});
