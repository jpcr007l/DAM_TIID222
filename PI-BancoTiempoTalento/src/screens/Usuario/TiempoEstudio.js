
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function TiempoEstudio() {

  // Esta sección contiene los indicadores generales de estudio.
  const estadisticas = {
    tiempoTotal: '12 h 30 min',
    sesiones: 18,
    promedioDiario: '1 h 47 min',
  };

  // Esta sección contiene el tiempo de estudio registrado por día.
  const tiempoPorDia = [
    { dia: 'Lun', horas: 2 },
    { dia: 'Mar', horas: 3 },
    { dia: 'Mié', horas: 1.5 },
    { dia: 'Jue', horas: 4 },
    { dia: 'Vie', horas: 2 },
    { dia: 'Sáb', horas: 0.5 },
    { dia: 'Dom', horas: 0 },
  ];

  // Esta sección contiene las últimas sesiones de estudio.
  const ultimasSesiones = [
    {
      id: 1,
      nombre: 'Energía eléctrica',
      categoria: 'Ciencias',
      duracion: '45 min',
      icono: '⚡',
      color: '#FFF4D9',
      colorIcono: '#D9A52E',
    },
    {
      id: 2,
      nombre: 'Finanzas personales',
      categoria: 'Finanzas',
      duracion: '1 hora',
      icono: '▥',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      id: 3,
      nombre: 'Ahorro de energía',
      categoria: 'Hogar',
      duracion: '30 min',
      icono: '♧',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
    {
      id: 4,
      nombre: 'Programación orientada a objetos',
      categoria: 'Tecnología',
      duracion: '1 h 30 min',
      icono: '</>',
      color: '#F2EAFE',
      colorIcono: '#8254B9',
    },
    {
      id: 5,
      nombre: 'Bases de datos',
      categoria: 'Tecnología',
      duracion: '1 hora',
      icono: '▤',
      color: '#FFF0E2',
      colorIcono: '#D98A36',
    },
    {
      id: 6,
      nombre: 'Desarrollo web',
      categoria: 'Tecnología',
      duracion: '45 min',
      icono: '▯',
      color: '#FCEAF0',
      colorIcono: '#C65B82',
    },
  ];

  // Esta función calcula la altura de cada barra de la gráfica.
  const calcularAltura = (horas) => {
    return (horas / 4) * 105;
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Tiempo de estudio
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Tarjeta con el tiempo total de estudio */}
        <View style={estilos.tarjetaTiempo}>

          <View style={estilos.iconoTiempo}>
            <Text style={estilos.simboloTiempo}>◷</Text>
          </View>

          <View style={estilos.informacionTiempo}>
            <Text style={estilos.etiquetaTiempo}>
              Tiempo total esta semana
            </Text>

            <Text style={estilos.cantidadTiempo}>
              {estadisticas.tiempoTotal}
            </Text>

            <Text style={estilos.textoTiempo}>
              Tiempo dedicado al aprendizaje
            </Text>
          </View>

        </View>

        {/* Indicadores secundarios */}
        <View style={estilos.contenedorIndicadores}>

          <View style={estilos.tarjetaIndicador}>
            <View style={estilos.iconoSesiones}>
              <Text style={estilos.simboloIndicador}>▤</Text>
            </View>

            <Text style={estilos.valorIndicador}>
              {estadisticas.sesiones}
            </Text>

            <Text style={estilos.etiquetaIndicador}>
              Sesiones
            </Text>
          </View>

          <View style={estilos.tarjetaIndicador}>
            <View style={estilos.iconoPromedio}>
              <Text style={estilos.simboloIndicador}>▥</Text>
            </View>

            <Text style={estilos.valorIndicador}>
              {estadisticas.promedioDiario}
            </Text>

            <Text style={estilos.etiquetaIndicador}>
              Promedio diario
            </Text>
          </View>

        </View>

        {/* Gráfica de tiempo de estudio por día */}
        <View style={estilos.seccionGrafica}>

          <Text style={estilos.tituloSeccion}>
            Tiempo de estudio por día
          </Text>

          <View style={estilos.contenedorGrafica}>

            {/* Referencias verticales de la gráfica */}
            <View style={estilos.etiquetasVerticales}>
              <Text style={estilos.textoEje}>4 h</Text>
              <Text style={estilos.textoEje}>3 h</Text>
              <Text style={estilos.textoEje}>2 h</Text>
              <Text style={estilos.textoEje}>1 h</Text>
              <Text style={estilos.textoEje}>0 h</Text>
            </View>

            {/* Barras de la gráfica */}
            <View style={estilos.areaGrafica}>

              <View style={estilos.lineasGrafica}>
                {[1, 2, 3, 4, 5].map((linea) => (
                  <View
                    key={linea}
                    style={estilos.lineaHorizontal}
                  />
                ))}
              </View>

              <View style={estilos.contenedorBarras}>
                {tiempoPorDia.map((dia, indice) => (
                  <View
                    key={indice}
                    style={estilos.grupoBarra}
                  >

                    <View style={estilos.areaBarra}>
                      <View
                        style={[
                          estilos.barra,
                          {
                            height: calcularAltura(dia.horas),
                          },
                        ]}
                      />
                    </View>

                    <Text style={estilos.etiquetaDia}>
                      {dia.dia}
                    </Text>

                  </View>
                ))}
              </View>

            </View>

          </View>
        </View>

        {/* Listado de las últimas sesiones */}
        <View style={estilos.seccionSesiones}>

          <Text style={estilos.tituloSeccion}>
            Últimas sesiones
          </Text>

          {ultimasSesiones.map((sesion) => (
            <View
              key={sesion.id}
              style={estilos.tarjetaSesion}
            >

              {/* Icono de la sesión */}
              <View
                style={[
                  estilos.iconoSesion,
                  { backgroundColor: sesion.color },
                ]}
              >
                <Text
                  style={[
                    estilos.simboloSesion,
                    { color: sesion.colorIcono },
                  ]}
                >
                  {sesion.icono}
                </Text>
              </View>

              {/* Información de la sesión */}
              <View style={estilos.informacionSesion}>

                <Text style={estilos.nombreSesion}>
                  {sesion.nombre}
                </Text>

                <Text style={estilos.categoriaSesion}>
                  {sesion.categoria}
                </Text>

              </View>

              {/* Duración de la sesión */}
              <Text style={estilos.duracionSesion}>
                ◷ {sesion.duracion}
              </Text>

            </View>
          ))}

        </View>

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
          <Text style={estilos.iconoNavegacion}>◷</Text>
          <Text style={estilos.textoNavegacion}>Historial</Text>
        </View>

        <View style={estilos.opcionNavegacion}>
          <Text style={estilos.iconoActivo}>♙</Text>
          <Text style={estilos.textoActivo}>Perfil</Text>
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

  // Tarjeta principal de tiempo de estudio.
  tarjetaTiempo: {
    width: '100%',
    minHeight: 100,
    backgroundColor: '#EAF2FF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginTop: 15,
    marginBottom: 13,
  },

  iconoTiempo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#D5E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloTiempo: {
    fontSize: 28,
    color: '#3978C8',
  },

  informacionTiempo: {
    flex: 1,
  },

  etiquetaTiempo: {
    fontSize: 11,
    color: '#56799F',
    marginBottom: 5,
  },

  cantidadTiempo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#276EBB',
    marginBottom: 3,
  },

  textoTiempo: {
    fontSize: 10,
    color: '#6F8EAD',
  },

  // Indicadores secundarios.
  contenedorIndicadores: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  tarjetaIndicador: {
    width: '48%',
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: '#F8F9FA',
    padding: 11,
    alignItems: 'flex-start',
  },

  iconoSesiones: {
    width: 29,
    height: 29,
    borderRadius: 7,
    backgroundColor: '#DDF4E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  iconoPromedio: {
    width: 29,
    height: 29,
    borderRadius: 7,
    backgroundColor: '#F0EAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  simboloIndicador: {
    fontSize: 17,
    color: '#3978C8',
  },

  valorIndicador: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },

  etiquetaIndicador: {
    fontSize: 10,
    color: '#888888',
    marginTop: 3,
  },

  // Sección de la gráfica.
  seccionGrafica: {
    width: '100%',
    marginBottom: 24,
  },

  tituloSeccion: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 15,
  },

  contenedorGrafica: {
    width: '100%',
    height: 165,
    flexDirection: 'row',
  },

  etiquetasVerticales: {
    width: 28,
    height: 130,
    justifyContent: 'space-between',
    paddingBottom: 2,
  },

  textoEje: {
    fontSize: 9,
    color: '#999999',
  },

  areaGrafica: {
    flex: 1,
    height: 165,
    position: 'relative',
  },

  lineasGrafica: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 130,
    justifyContent: 'space-between',
  },

  lineaHorizontal: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  contenedorBarras: {
    height: 165,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  grupoBarra: {
    flex: 1,
    height: 165,
    alignItems: 'center',
  },

  areaBarra: {
    width: '100%',
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  barra: {
    width: 15,
    maxHeight: 130,
    backgroundColor: '#3989D8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  etiquetaDia: {
    fontSize: 10,
    color: '#777777',
    marginTop: 7,
  },

  // Listado de últimas sesiones.
  seccionSesiones: {
    width: '100%',
    marginBottom: 20,
  },

  tarjetaSesion: {
    width: '100%',
    minHeight: 67,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 9,
  },

  iconoSesion: {
    width: 39,
    height: 39,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  simboloSesion: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  informacionSesion: {
    flex: 1,
  },

  nombreSesion: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  categoriaSesion: {
    fontSize: 10,
    color: '#888888',
  },

  duracionSesion: {
    fontSize: 10,
    color: '#777777',
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
