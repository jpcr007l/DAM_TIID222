
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

export default function InformacionServicio() {

  // Esta sección controla las ventanas emergentes de la pantalla.
  // Solo permite visualizar la confirmación y el aviso de solicitud.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Esta sección contiene la información del servicio de ejemplo.
  const servicio = {
    nombre: 'Entrenamiento Funcional',
    prestador: 'Carlos Ruiz',
    creditos: '1 crédito / 1 h',
    descripcion:
      'Aprende los diferentes ejercicios y técnicas del entrenamiento funcional para mejorar tu condición física, fuerza y movilidad. El servicio incluye explicación práctica, rutina básica y seguimiento durante las sesiones.',
    categoria: 'Deportes',
    duracion: '1 hora',
    disponibilidad: 'Lunes a Viernes',
    horario: 'Horario a coordinar con el prestador',
    requisitos: [
      'Ropa deportiva cómoda',
      'Botella de agua',
    ],
  };

  // Esta función muestra la confirmación antes de solicitar el servicio.
  const confirmarSolicitud = () => {
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
          Información del servicio
        </Text>

        <Text style={estilos.iconoFavorito}>♧</Text>
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Tarjeta con información general del servicio */}
        <View style={estilos.tarjetaServicio}>

          <View style={estilos.iconoServicio}>
            <Text style={estilos.simboloServicio}>⚊</Text>
          </View>

          <View style={estilos.datosServicio}>
            <Text style={estilos.nombreServicio}>
              {servicio.nombre}
            </Text>

            <Text style={estilos.datoPrestador}>
              ♟  {servicio.prestador}
            </Text>

            <Text style={estilos.datoCreditos}>
              ◷  {servicio.creditos}
            </Text>
          </View>

        </View>

        {/* Descripción del servicio */}
        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>Descripción</Text>

          <Text style={estilos.textoDescripcion}>
            {servicio.descripcion}
          </Text>
        </View>

        {/* Categoría del servicio */}
        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>Categoría</Text>

          <View style={estilos.filaInformacion}>
            <View style={estilos.iconoPequeno}>
              <Text style={estilos.simboloPequeno}>✚</Text>
            </View>

            <Text style={estilos.textoInformacion}>
              {servicio.categoria}
            </Text>
          </View>
        </View>

        {/* Duración del servicio */}
        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>Duración</Text>

          <View style={estilos.filaInformacion}>
            <View style={estilos.iconoPequeno}>
              <Text style={estilos.simboloPequeno}>◷</Text>
            </View>

            <Text style={estilos.textoInformacion}>
              {servicio.duracion}
            </Text>
          </View>
        </View>

        {/* Disponibilidad del prestador */}
        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>Disponibilidad</Text>

          <View style={estilos.filaInformacion}>
            <View style={estilos.iconoPequeno}>
              <Text style={estilos.simboloPequeno}>▦</Text>
            </View>

            <View style={estilos.detalleInformacion}>
              <Text style={estilos.textoInformacion}>
                {servicio.disponibilidad}
              </Text>

              <Text style={estilos.textoSecundario}>
                {servicio.horario}
              </Text>
            </View>
          </View>
        </View>

        {/* Requisitos para solicitar el servicio */}
        <View style={estilos.seccion}>
          <Text style={estilos.tituloSeccion}>Requisitos</Text>

          <View style={estilos.filaInformacion}>
            <View style={estilos.iconoPequeno}>
              <Text style={estilos.simboloPequeno}>▤</Text>
            </View>

            <View style={estilos.listaRequisitos}>
              {servicio.requisitos.map((requisito, indice) => (
                <Text key={indice} style={estilos.textoRequisito}>
                  •  {requisito}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Botón para solicitar el servicio */}
        <Pressable
          style={estilos.botonSolicitar}
          onPress={() => setMostrarConfirmacion(true)}
        >
          <Text style={estilos.textoBoton}>
            Solicitar servicio
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
              <Text style={estilos.simboloPregunta}>?</Text>
            </View>

            <Text style={estilos.tituloModal}>
              ¿Deseas solicitar este servicio?
            </Text>

            <Text style={estilos.mensajeModal}>
              Se enviará una solicitud al prestador.
              ¿Deseas continuar?
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonAceptar}
                onPress={confirmarSolicitud}
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

      {/* Ventana emergente de solicitud enviada */}
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
              Solicitud enviada
            </Text>

            <Text style={estilos.mensajeModal}>
              Tu solicitud ha sido enviada correctamente.
              Te notificaremos cuando sea aceptada.
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

  iconoFavorito: {
    fontSize: 25,
    color: '#333333',
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 18,
  },

  tarjetaServicio: {
    width: '100%',
    minHeight: 90,
    backgroundColor: '#F0FAF4',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginTop: 12,
    marginBottom: 18,
  },

  iconoServicio: {
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#DDF4E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloServicio: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#29945A',
  },

  datosServicio: {
    flex: 1,
  },

  nombreServicio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 7,
  },

  datoPrestador: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 5,
  },

  datoCreditos: {
    fontSize: 12,
    color: '#666666',
  },

  seccion: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 12,
  },

  tituloSeccion: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
  },

  textoDescripcion: {
    fontSize: 12,
    lineHeight: 18,
    color: '#666666',
    paddingHorizontal: 5,
    paddingBottom: 4,
  },

  filaInformacion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    minHeight: 35,
  },

  iconoPequeno: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#E9F7EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloPequeno: {
    fontSize: 17,
    color: '#29945A',
    fontWeight: 'bold',
  },

  textoInformacion: {
    fontSize: 12,
    color: '#555555',
  },

  detalleInformacion: {
    flex: 1,
  },

  textoSecundario: {
    fontSize: 11,
    color: '#888888',
    marginTop: 3,
  },

  listaRequisitos: {
    flex: 1,
  },

  textoRequisito: {
    fontSize: 12,
    color: '#666666',
    lineHeight: 19,
  },

  botonSolicitar: {
    width: '100%',
    height: 46,
    backgroundColor: '#1675E8',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 25,
  },

  textoBoton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
    fontSize: 17,
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
