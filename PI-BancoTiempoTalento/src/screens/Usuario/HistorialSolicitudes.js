
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';

export default function HistorialSolicitudes() {

  // Esta sección contiene las solicitudes realizadas por el usuario.
  const solicitudes = [
    {
      id: 1,
      nombre: 'Entrenamiento Funcional',
      prestador: 'Carlos Ruiz',
      categoria: 'Deportes',
      duracion: '1 hora',
      estado: 'Aprobada',
      icono: '✚',
      color: '#E2F5E8',
      colorIcono: '#29945A',
    },
    {
      id: 2,
      nombre: 'Fútbol Básico',
      prestador: 'Luis Hernández',
      categoria: 'Deportes',
      duracion: '1 hora',
      estado: 'Pendiente',
      icono: '⚽',
      color: '#E8F5E9',
      colorIcono: '#29945A',
    },
    {
      id: 3,
      nombre: 'Inglés Conversacional',
      prestador: 'Ana Martínez',
      categoria: 'Idiomas',
      duracion: '1 hora',
      estado: 'Aprobada',
      icono: '文',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
    {
      id: 4,
      nombre: 'Programación en Python',
      prestador: 'María López',
      categoria: 'Tecnología',
      duracion: '2 horas',
      estado: 'Rechazada',
      icono: '▣',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      id: 5,
      nombre: 'Liderazgo Personal',
      prestador: 'Sofía García',
      categoria: 'Desarrollo Profesional',
      duracion: '1 hora',
      estado: 'Aprobada',
      icono: '✦',
      color: '#FFF1E3',
      colorIcono: '#D98A36',
    },
    {
      id: 6,
      nombre: 'Entrenamiento Funcional',
      prestador: 'Carlos Ruiz',
      categoria: 'Deportes',
      duracion: '1 hora',
      estado: 'Pendiente',
      icono: '✚',
      color: '#F0EAFE',
      colorIcono: '#8254B9',
    },
  ];

  // Esta sección controla el filtro seleccionado.
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  // Esta sección contiene las opciones de filtrado.
  const filtros = [
    'Todos',
    'Pendientes',
    'Aprobadas',
    'Rechazadas',
  ];

  // Esta función filtra las solicitudes según su estado.
  const solicitudesFiltradas = solicitudes.filter((solicitud) => {
    if (filtroActivo === 'Todos') {
      return true;
    }

    return solicitud.estado === filtroActivo.slice(0, -1);
  });

  // Esta función determina el color de cada estado.
  const obtenerColorEstado = (estado) => {
    if (estado === 'Aprobada') {
      return {
        fondo: '#E4F5E9',
        texto: '#29945A',
      };
    }

    if (estado === 'Pendiente') {
      return {
        fondo: '#E6F0FF',
        texto: '#3978C8',
      };
    }

    return {
      fondo: '#FDEAEA',
      texto: '#D9534F',
    };
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Historial
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      {/* Filtros por estado */}
      <View style={estilos.seccionFiltros}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={estilos.contenedorFiltros}
        >
          {filtros.map((filtro, indice) => (
            <Pressable
              key={indice}
              style={[
                estilos.botonFiltro,
                filtroActivo === filtro && estilos.filtroActivo,
              ]}
              onPress={() => setFiltroActivo(filtro)}
            >
              <Text
                style={[
                  estilos.textoFiltro,
                  filtroActivo === filtro && estilos.textoFiltroActivo,
                ]}
              >
                {filtro}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      {/* Listado de solicitudes */}
      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {solicitudesFiltradas.map((solicitud) => {
          const colorEstado = obtenerColorEstado(solicitud.estado);

          return (
            <View
              key={solicitud.id}
              style={estilos.tarjetaSolicitud}
            >

              {/* Icono del servicio */}
              <View
                style={[
                  estilos.iconoServicio,
                  { backgroundColor: solicitud.color },
                ]}
              >
                <Text
                  style={[
                    estilos.simboloServicio,
                    { color: solicitud.colorIcono },
                  ]}
                >
                  {solicitud.icono}
                </Text>
              </View>

              {/* Información del servicio */}
              <View style={estilos.informacionSolicitud}>

                <Text style={estilos.nombreServicio}>
                  {solicitud.nombre}
                </Text>

                <Text style={estilos.datoSolicitud}>
                  ♟ {solicitud.prestador}
                </Text>

                <Text style={estilos.datoSolicitud}>
                  ▦ {solicitud.categoria}
                </Text>

                <Text style={estilos.datoSolicitud}>
                  ◷ {solicitud.duracion}
                </Text>

              </View>

              {/* Estado de la solicitud */}
              <View style={estilos.contenedorEstado}>
                <View
                  style={[
                    estilos.etiquetaEstado,
                    { backgroundColor: colorEstado.fondo },
                  ]}
                >
                  <Text
                    style={[
                      estilos.textoEstado,
                      { color: colorEstado.texto },
                    ]}
                  >
                    {solicitud.estado}
                  </Text>
                </View>

                <Text style={estilos.flechaSolicitud}>›</Text>
              </View>

            </View>
          );
        })}

        {/* Mensaje cuando no existen solicitudes */}
        {solicitudesFiltradas.length === 0 && (
          <View style={estilos.contenedorVacio}>
            <Text style={estilos.iconoVacio}>◷</Text>

            <Text style={estilos.textoVacio}>
              No hay solicitudes en este estado.
            </Text>
          </View>
        )}

      </ScrollView>

      {/* Barra inferior de navegación visual */}
      <View style={estilos.barraInferior}>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>⌂</Text>
          <Text style={estilos.textoNavegacion}>Inicio</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoNavegacion}>▦</Text>
          <Text style={estilos.textoNavegacion}>Categorías</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoActivo}>◷</Text>
          <Text style={estilos.textoActivo}>Historial</Text>
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },

  espacioEncabezado: {
    width: 25,
  },

  seccionFiltros: {
    width: '100%',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  contenedorFiltros: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  botonFiltro: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#F4F5F7',
    marginRight: 9,
  },

  filtroActivo: {
    backgroundColor: '#EAF2FF',
  },

  textoFiltro: {
    fontSize: 12,
    color: '#777777',
  },

  textoFiltroActivo: {
    color: '#3978C8',
    fontWeight: 'bold',
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },

  tarjetaSolicitud: {
    width: '100%',
    minHeight: 100,
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
    marginRight: 10,
  },

  simboloServicio: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  informacionSolicitud: {
    flex: 1,
  },

  nombreServicio: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 5,
  },

  datoSolicitud: {
    fontSize: 10,
    color: '#777777',
    marginBottom: 3,
  },

  contenedorEstado: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingVertical: 5,
  },

  etiquetaEstado: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 6,
  },

  textoEstado: {
    fontSize: 9,
    fontWeight: 'bold',
  },

  flechaSolicitud: {
    fontSize: 22,
    color: '#AAAAAA',
  },

  contenedorVacio: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },

  iconoVacio: {
    fontSize: 38,
    color: '#AAAAAA',
    marginBottom: 12,
  },

  textoVacio: {
    fontSize: 13,
    color: '#888888',
  },

  // Barra inferior de navegación.
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
