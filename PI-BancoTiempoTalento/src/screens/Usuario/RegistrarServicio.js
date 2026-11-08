
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

export default function RegistrarServicio() {

  // Esta sección almacena la información que captura el usuario.
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [duracion, setDuracion] = useState('1 hora');

  // Esta sección controla los selectores de categoría y duración.
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [mostrarDuraciones, setMostrarDuraciones] = useState(false);

  // Esta sección controla las ventanas emergentes.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  // Opciones disponibles para seleccionar.
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

  // Esta función permite seleccionar la duración del servicio.
  const seleccionarDuracion = (opcion) => {
    setDuracion(opcion);
    setMostrarDuraciones(false);
  };

  // Esta función abre la confirmación del registro.
  const prepararRegistro = () => {
    setMostrarConfirmacion(true);
  };

  // Esta función simula el registro del servicio.
  const registrarServicio = () => {
    setMostrarConfirmacion(false);
    setMostrarExito(true);
  };

  // Esta función cierra el aviso y limpia el formulario.
  const finalizarRegistro = () => {
    setMostrarExito(false);
    setNombre('');
    setDescripcion('');
    setCategoria('');
    setDuracion('1 hora');
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Registrar servicio
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* Campo para el nombre del servicio */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Nombre del servicio
          </Text>

          <TextInput
            style={estilos.campoTexto}
            placeholder="Ingresa el nombre del servicio"
            placeholderTextColor="#999999"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        {/* Campo para la descripción */}
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

        {/* Selector de categoría */}
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
            <Text style={estilos.iconoSelector}>▦</Text>

            <Text
              style={[
                estilos.textoSelector,
                !categoria && estilos.textoPlaceholder,
              ]}
            >
              {categoria || 'Selecciona una categoría'}
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

        {/* Selector de duración */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Duración
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

        {/* Botón para iniciar el registro */}
        <Pressable
          style={estilos.botonRegistrar}
          onPress={prepararRegistro}
        >
          <Text style={estilos.textoBoton}>
            Registrar servicio
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
              ¿Deseas registrar este servicio?
            </Text>

            <Text style={estilos.mensajeModal}>
              Verifica que la información del servicio
              sea correcta antes de continuar.
            </Text>

            <View style={estilos.botonesModal}>

              <Pressable
                style={estilos.botonAceptar}
                onPress={registrarServicio}
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

      {/* Ventana emergente de registro exitoso */}
      <Modal
        transparent={true}
        visible={mostrarExito}
        animationType="fade"
        onRequestClose={finalizarRegistro}
      >
        <View style={estilos.fondoModal}>
          <View style={estilos.contenedorModal}>

            <View style={estilos.iconoExito}>
              <Text style={estilos.simboloExito}>✓</Text>
            </View>

            <Text style={estilos.tituloModal}>
              Servicio registrado
            </Text>

            <Text style={estilos.mensajeModal}>
              Tu servicio se ha registrado correctamente.
            </Text>

            <Pressable
              style={estilos.botonAceptarCompleto}
              onPress={finalizarRegistro}
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

  textoPlaceholder: {
    color: '#999999',
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

  botonRegistrar: {
    width: '100%',
    height: 45,
    backgroundColor: '#1675E8',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
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
