
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  Modal,
} from 'react-native';

export default function ModificarServicio() {

  // Esta sección almacena los datos originales del servicio.
  const datosOriginales = {
    nombre: 'Entrenamiento Funcional',
    descripcion:
      'Aprende diferentes ejercicios y técnicas del entrenamiento funcional para mejorar tu condición física, fuerza y movilidad.',
    categoria: 'Deportes',
    duracion: '1 hora',
  };

  // Esta sección controla la información editable del servicio.
  const [nombre, setNombre] = useState(datosOriginales.nombre);
  const [descripcion, setDescripcion] = useState(datosOriginales.descripcion);
  const [categoria, setCategoria] = useState(datosOriginales.categoria);
  const [duracion, setDuracion] = useState(datosOriginales.duracion);

  // Esta sección controla los selectores.
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [mostrarDuraciones, setMostrarDuraciones] = useState(false);

  // Esta sección controla las ventanas emergentes.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Opciones disponibles para los selectores.
  const categorias = [
    'Deportes',
    'Idiomas',
    'Tecnología',
    'Hogar',
    'Salud',
    'Desarrollo Profesional',
  ];

  const duraciones = [
    '30 minutos',
    '1 hora',
    '2 horas',
    '3 horas',
  ];

  // Esta función permite seleccionar una categoría.
  const seleccionarCategoria = (opcion) => {
    setCategoria(opcion);
    setMostrarCategorias(false);
  };

  // Esta función permite seleccionar una duración.
  const seleccionarDuracion = (opcion) => {
    setDuracion(opcion);
    setMostrarDuraciones(false);
  };

  // Esta función prepara la confirmación de los cambios.
  const prepararActualizacion = () => {
    setMostrarCategorias(false);
    setMostrarDuraciones(false);
    setMostrarConfirmacion(true);
  };

  // Esta función simula la actualización del servicio.
  const actualizarServicio = () => {
    setMostrarConfirmacion(false);
    setMostrarExito(true);
  };

  // Esta función restaura los datos originales del servicio.
  const cancelarCambios = () => {
    setNombre(datosOriginales.nombre);
    setDescripcion(datosOriginales.descripcion);
    setCategoria(datosOriginales.categoria);
    setDuracion(datosOriginales.duracion);
    setMostrarCategorias(false);
    setMostrarDuraciones(false);
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Modificar servicio
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Campo para modificar el nombre */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Nombre del servicio
          </Text>

          <TextInput
            style={estilos.campoTexto}
            placeholder="Nombre del servicio"
            placeholderTextColor="#999999"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        {/* Campo para modificar la descripción */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Descripción
          </Text>

          <TextInput
            style={estilos.campoDescripcion}
            placeholder="Describe tu servicio..."
            placeholderTextColor="#999999"
            multiline={true}
            textAlignVertical="top"
            value={descripcion}
            onChangeText={setDescripcion}
          />
        </View>

        {/* Selector para modificar la categoría */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Categoría
          </Text>

          <Pressable
            style={estilos.selector}
            onPress={() => {
              setMostrarCategorias(!mostrarCategorias);
              setMostrarDuraciones(false);
            }}
          >
            <Text style={estilos.iconoSelector}>✚</Text>

            <Text style={estilos.textoSelector}>
              {categoria}
            </Text>

            <Text style={estilos.flechaSelector}>
              {mostrarCategorias ? '⌃' : '⌄'}
            </Text>
          </Pressable>

          {mostrarCategorias && (
            <View style={estilos.listaOpciones}>
              {categorias.map((opcion, indice) => (
                <Pressable
                  key={indice}
                  style={estilos.opcion}
                  onPress={() => seleccionarCategoria(opcion)}
                >
                  <Text style={estilos.textoOpcion}>
                    {opcion}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Selector para modificar la duración */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Duración en horas
          </Text>

          <Pressable
            style={estilos.selector}
            onPress={() => {
              setMostrarDuraciones(!mostrarDuraciones);
              setMostrarCategorias(false);
            }}
          >
            <Text style={estilos.iconoSelector}>◷</Text>

            <Text style={estilos.textoSelector}>
              {duracion}
            </Text>

            <Text style={estilos.flechaSelector}>
              {mostrarDuraciones ? '⌃' : '⌄'}
            </Text>
          </Pressable>

          {mostrarDuraciones && (
            <View style={estilos.listaOpciones}>
              {duraciones.map((opcion, indice) => (
                <Pressable
                  key={indice}
                  style={estilos.opcion}
                  onPress={() => seleccionarDuracion(opcion)}
                >
                  <Text style={estilos.textoOpcion}>
                    {opcion}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Botón para guardar los cambios */}
        <Pressable
          style={estilos.botonGuardar}
          onPress={prepararActualizacion}
        >
          <Text style={estilos.textoBotonGuardar}>
            Guardar cambios
          </Text>
        </Pressable>

        {/* Botón para cancelar la modificación */}
        <Pressable
          style={estilos.botonCancelar}
          onPress={cancelarCambios}
        >
          <Text style={estilos.textoBotonCancelar}>
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
              <Text style={estilos.simboloPregunta}>?</Text>
            </View>

            <Text style={estilos.tituloModal}>
              ¿Guardar cambios?
            </Text>

            <Text style={estilos.mensajeModal}>
              Se actualizará la información del servicio.
              ¿Deseas continuar?
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonAceptar}
                onPress={actualizarServicio}
              >
                <Text style={estilos.textoBotonModal}>
                  Aceptar
                </Text>
              </Pressable>

              <Pressable
                style={estilos.botonCancelarModal}
                onPress={() => setMostrarConfirmacion(false)}
              >
                <Text style={estilos.textoCancelarModal}>
                  Cancelar
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
              Servicio actualizado
            </Text>

            <Text style={estilos.mensajeModal}>
              Los cambios en el servicio se han guardado
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
    paddingTop: 12,
  },

  seccionCampo: {
    width: '100%',
    marginBottom: 18,
  },

  etiquetaCampo: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },

  campoTexto: {
    width: '100%',
    height: 43,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    paddingHorizontal: 12,
    fontSize: 13,
    color: '#333333',
  },

  campoDescripcion: {
    width: '100%',
    height: 105,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    paddingHorizontal: 12,
    paddingTop: 11,
    fontSize: 13,
    color: '#333333',
  },

  selector: {
    width: '100%',
    height: 43,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  iconoSelector: {
    fontSize: 17,
    color: '#29945A',
    marginRight: 12,
  },

  textoSelector: {
    flex: 1,
    fontSize: 13,
    color: '#444444',
  },

  flechaSelector: {
    fontSize: 20,
    color: '#777777',
  },

  listaOpciones: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 7,
    marginTop: 5,
    overflow: 'hidden',
  },

  opcion: {
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  textoOpcion: {
    fontSize: 13,
    color: '#444444',
  },

  botonGuardar: {
    width: '100%',
    height: 45,
    backgroundColor: '#1675E8',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  textoBotonGuardar: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botonCancelar: {
    width: '100%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  textoBotonCancelar: {
    fontSize: 13,
    color: '#666666',
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
