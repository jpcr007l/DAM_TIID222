
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function Aprender() {

  // Esta sección contiene las opciones principales de la pantalla.
  // Lo que hace es mostrar los accesos a explorar y administrar servicios.
  const opciones = [
    {
      nombre: 'Explorar servicios',
      descripcion: 'Encuentra servicios de otros usuarios',
      icono: '⌕',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      nombre: 'Administrar mis servicios',
      descripcion: 'Gestiona los servicios que ofreces',
      icono: '▤',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
  ];

  // Esta sección contiene las categorías disponibles.
  const categorias = [
    {
      nombre: 'Salud',
      icono: '✚',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      nombre: 'Hogar',
      icono: '✿',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
    {
      nombre: 'Idiomas',
      icono: '文',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
    {
      nombre: 'Tecnología',
      icono: '▣',
      color: '#EAF4FC',
      colorIcono: '#3785B9',
    },
  ];

  // Esta sección contiene los temas disponibles para aprender.
  const secciones = [
    'Deportes',
    'Idiomas',
    'Tecnología',
    'Desarrollo Profesional',
  ];

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>
        <Text style={estilos.tituloPrincipal}>Aprender</Text>
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Buscador */}
        <View style={estilos.contenedorBuscador}>
          <Text style={estilos.iconoBuscar}>⌕</Text>

          <TextInput
            style={estilos.buscador}
            placeholder="Buscar servicios o conocimientos"
            placeholderTextColor="#999999"
          />
        </View>

        {/* Opciones principales */}
        <View style={estilos.seccionOpciones}>
          {opciones.map((opcion, indice) => (
            <View
              key={indice}
              style={estilos.tarjetaOpcion}
            >
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

              <View style={estilos.contenidoOpcion}>
                <Text style={estilos.nombreOpcion}>
                  {opcion.nombre}
                </Text>

                <Text style={estilos.descripcionOpcion}>
                  {opcion.descripcion}
                </Text>
              </View>

              <Text style={estilos.flechaOpcion}>›</Text>
            </View>
          ))}
        </View>

        {/* Categorías con desplazamiento horizontal */}
        <View style={estilos.seccionCategorias}>

          <View style={estilos.encabezadoSeccion}>
            <Text style={estilos.tituloSeccion}>Categorías</Text>
            <Text style={estilos.textoVerTodas}>Ver todas</Text>
          </View>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={estilos.contenedorCategorias}
          >
            {categorias.map((categoria, indice) => (
              <View
                key={indice}
                style={estilos.tarjetaCategoria}
              >
                <View
                  style={[
                    estilos.iconoCategoria,
                    { backgroundColor: categoria.color },
                  ]}
                >
                  <Text
                    style={[
                      estilos.simboloCategoria,
                      { color: categoria.colorIcono },
                    ]}
                  >
                    {categoria.icono}
                  </Text>
                </View>

                <Text style={estilos.nombreCategoria}>
                  {categoria.nombre}
                </Text>

                <Text style={estilos.flechaCategoria}>›</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Secciones de conocimientos */}
        <View style={estilos.seccionConocimientos}>
          <Text style={estilos.tituloSeccion}>Secciones</Text>

          <View style={estilos.listaSecciones}>
            {secciones.map((seccion, indice) => (
              <Text
                key={indice}
                style={estilos.nombreSeccion}
              >
                {seccion}
              </Text>
            ))}
          </View>
        </View>

      </ScrollView>

      {/* Barra inferior de navegación visual */}
      <View style={estilos.barraInferior}>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>⌂</Text>
          <Text style={estilos.textoNavegacion}>Inicio</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoActivo}>▦</Text>
          <Text style={estilos.textoActivo}>Categorías</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>◷</Text>
          <Text style={estilos.textoNavegacion}>Historial</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>♙</Text>
          <Text style={estilos.textoNavegacion}>Perfil</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 15,
  },

  flechaRegreso: {
    fontSize: 34,
    color: '#222222',
    marginRight: 15,
  },

  tituloPrincipal: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#222222',
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 20,
  },

  contenedorBuscador: {
    height: 48,
    backgroundColor: '#F4F5F7',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginTop: 10,
    marginBottom: 22,
  },

  iconoBuscar: {
    fontSize: 25,
    color: '#777777',
    marginRight: 10,
  },

  buscador: {
    flex: 1,
    fontSize: 14,
    color: '#333333',
  },

  // Opciones principales de la pantalla.
  seccionOpciones: {
    width: '100%',
    marginBottom: 28,
  },

  tarjetaOpcion: {
    width: '100%',
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDF0F3',
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 12,
    marginBottom: 10,
  },

  iconoOpcion: {
    width: 46,
    height: 46,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  simboloOpcion: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  contenidoOpcion: {
    flex: 1,
  },

  nombreOpcion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  descripcionOpcion: {
    fontSize: 12,
    color: '#888888',
  },

  flechaOpcion: {
    fontSize: 25,
    color: '#999999',
    marginLeft: 5,
  },

  // Categorías en una fila horizontal desplazable.
  seccionCategorias: {
    width: '100%',
    marginBottom: 28,
  },

  encabezadoSeccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  tituloSeccion: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
  },

  textoVerTodas: {
    fontSize: 13,
    color: '#3978C8',
  },

  contenedorCategorias: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
  },

  tarjetaCategoria: {
    width: 175,
    minHeight: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EDF0F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginRight: 12,
  },

  iconoCategoria: {
    width: 43,
    height: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  simboloCategoria: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  nombreCategoria: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
  },

  flechaCategoria: {
    fontSize: 22,
    color: '#999999',
  },

  // Secciones de conocimientos.
  seccionConocimientos: {
    width: '100%',
    marginBottom: 25,
  },

  listaSecciones: {
    width: '100%',
    flexDirection: 'column',
  },

  nombreSeccion: {
    fontSize: 15,
    color: '#555555',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  // Barra inferior.
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
