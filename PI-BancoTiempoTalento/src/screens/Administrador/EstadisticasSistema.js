
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function EstadisticasSistema() {

  // Esta sección contiene los datos de usuarios registrados.
  const usuariosRegistrados = [
    { mes: 'Agosto', cantidad: 35 },
    { mes: 'Septiembre', cantidad: 52 },
    { mes: 'Octubre', cantidad: 45 },
  ];

  // Esta sección contiene las categorías más demandadas.
  const categorias = [
    {
      id: 1,
      nombre: 'Deportes',
      porcentaje: 35,
      color: '#3989D8',
    },
    {
      id: 2,
      nombre: 'Idiomas',
      porcentaje: 25,
      color: '#35A879',
    },
    {
      id: 3,
      nombre: 'Tecnología',
      porcentaje: 20,
      color: '#A17BD5',
    },
    {
      id: 4,
      nombre: 'Hogar y salud',
      porcentaje: 20,
      color: '#E6AD52',
    },
  ];

  // Esta sección contiene los usuarios mejor valorados.
  const usuariosMejorValorados = [
    {
      id: 1,
      nombre: 'Carlos Ruiz',
      calificacion: '4.9',
      icono: '♙',
      color: '#EAF2FF',
      colorIcono: '#3978C8',
    },
    {
      id: 2,
      nombre: 'Ana Martínez',
      calificacion: '4.8',
      icono: '♙',
      color: '#FFF3DF',
      colorIcono: '#D99B36',
    },
    {
      id: 3,
      nombre: 'Luis Hernández',
      calificacion: '4.8',
      icono: '♙',
      color: '#E8F7ED',
      colorIcono: '#29945A',
    },
  ];

  // Esta función calcula la altura de las barras.
  const calcularAltura = (cantidad) => {
    return (cantidad / 60) * 100;
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Estadísticas
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Primera sección: usuarios registrados */}
        <View style={estilos.tarjetaEstadistica}>

          <View style={estilos.encabezadoSeccion}>
            <View style={estilos.iconoSeccion}>
              <Text style={estilos.simboloSeccion}>▥</Text>
            </View>

            <View style={estilos.informacionEncabezado}>
              <Text style={estilos.tituloSeccion}>
                Usuarios registrados
              </Text>

              <Text style={estilos.subtituloSeccion}>
                Usuarios registrados por mes
              </Text>
            </View>
          </View>

          {/* Gráfica de barras */}
          <View style={estilos.contenedorGrafica}>

            <View style={estilos.etiquetasVerticales}>
              <Text style={estilos.textoEje}>60</Text>
              <Text style={estilos.textoEje}>45</Text>
              <Text style={estilos.textoEje}>30</Text>
              <Text style={estilos.textoEje}>15</Text>
              <Text style={estilos.textoEje}>0</Text>
            </View>

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
                {usuariosRegistrados.map((usuario, indice) => (
                  <View
                    key={indice}
                    style={estilos.grupoBarra}
                  >

                    <Text style={estilos.valorBarra}>
                      {usuario.cantidad}
                    </Text>

                    <View style={estilos.areaBarra}>
                      <View
                        style={[
                          estilos.barra,
                          {
                            height: calcularAltura(usuario.cantidad),
                          },
                        ]}
                      />
                    </View>

                    <Text style={estilos.etiquetaBarra}>
                      {usuario.mes}
                    </Text>

                  </View>
                ))}
              </View>

            </View>
          </View>

        </View>

        {/* Segunda sección: categorías más demandadas */}
        <View style={estilos.tarjetaEstadistica}>

          <View style={estilos.encabezadoSeccion}>
            <View style={estilos.iconoCategoria}>
              <Text style={estilos.simboloSeccion}>◔</Text>
            </View>

            <View style={estilos.informacionEncabezado}>
              <Text style={estilos.tituloSeccion}>
                Categorías más demandadas
              </Text>

              <Text style={estilos.subtituloSeccion}>
                Distribución de solicitudes por categoría
              </Text>
            </View>
          </View>

          {/* Representación circular de las categorías */}
          <View style={estilos.contenedorDistribucion}>

            <View style={estilos.graficaCircular}>
              <View style={estilos.segmentoSuperiorIzquierdo} />
              <View style={estilos.segmentoSuperiorDerecho} />
              <View style={estilos.segmentoInferiorIzquierdo} />
              <View style={estilos.segmentoInferiorDerecho} />

              <View style={estilos.centroGrafica}>
                <Text style={estilos.porcentajeCentral}>100%</Text>
                <Text style={estilos.textoCentral}>Total</Text>
              </View>
            </View>

            {/* Leyenda de categorías */}
            <View style={estilos.leyendaCategorias}>
              {categorias.map((categoria) => (
                <View
                  key={categoria.id}
                  style={estilos.elementoLeyenda}
                >

                  <View
                    style={[
                      estilos.puntoLeyenda,
                      { backgroundColor: categoria.color },
                    ]}
                  />

                  <Text style={estilos.nombreCategoria}>
                    {categoria.nombre}
                  </Text>

                  <Text style={estilos.valorCategoria}>
                    {categoria.porcentaje}%
                  </Text>

                </View>
              ))}
            </View>

          </View>

        </View>

        {/* Tercera sección: usuarios mejor valorados */}
        <View style={estilos.tarjetaEstadistica}>

          <View style={estilos.encabezadoSeccion}>
            <View style={estilos.iconoValoracion}>
              <Text style={estilos.simboloSeccion}>♟</Text>
            </View>

            <View style={estilos.informacionEncabezado}>
              <Text style={estilos.tituloSeccion}>
                Usuarios mejor valorados
              </Text>

              <Text style={estilos.subtituloSeccion}>
                Usuarios con mejores calificaciones
              </Text>
            </View>
          </View>

          {/* Tarjetas de usuarios */}
          <View style={estilos.contenedorUsuarios}>
            {usuariosMejorValorados.map((usuario) => (
              <View
                key={usuario.id}
                style={estilos.tarjetaUsuario}
              >

                <View
                  style={[
                    estilos.avatarUsuario,
                    { backgroundColor: usuario.color },
                  ]}
                >
                  <Text
                    style={[
                      estilos.simboloAvatar,
                      { color: usuario.colorIcono },
                    ]}
                  >
                    {usuario.icono}
                  </Text>
                </View>

                <Text style={estilos.nombreUsuario}>
                  {usuario.nombre}
                </Text>

                <Text style={estilos.calificacionUsuario}>
                  ★ {usuario.calificacion}
                </Text>

              </View>
            ))}
          </View>

        </View>

        <Text style={estilos.notaDatos}>
          Estadísticas de ejemplo para visualizar el panel administrativo.
        </Text>

      </ScrollView>
    </View>
  );
}

// Esta sección contiene los estilos visuales de la pantalla.
const estilos = StyleSheet.create({

  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },

  encabezado: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
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

  contenido: {
    flex: 1,
    paddingHorizontal: 14,
  },

  // Tarjetas generales de estadísticas.
  tarjetaEstadistica: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    padding: 13,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },

  encabezadoSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  informacionEncabezado: {
    flex: 1,
  },

  tituloSeccion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  subtituloSeccion: {
    fontSize: 9,
    color: '#888888',
  },

  iconoSeccion: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  iconoCategoria: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#E8F7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  iconoValoracion: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#F2EAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  simboloSeccion: {
    fontSize: 20,
    color: '#3978C8',
  },

  // Estilos de la gráfica de barras.
  contenedorGrafica: {
    width: '100%',
    height: 145,
    flexDirection: 'row',
  },

  etiquetasVerticales: {
    width: 23,
    height: 110,
    justifyContent: 'space-between',
  },

  textoEje: {
    fontSize: 8,
    color: '#999999',
  },

  areaGrafica: {
    flex: 1,
    height: 145,
    position: 'relative',
  },

  lineasGrafica: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 110,
    justifyContent: 'space-between',
  },

  lineaHorizontal: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEEEEE',
  },

  contenedorBarras: {
    height: 145,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  grupoBarra: {
    flex: 1,
    height: 145,
    alignItems: 'center',
  },

  valorBarra: {
    fontSize: 9,
    color: '#777777',
    height: 15,
  },

  areaBarra: {
    height: 110,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  barra: {
    width: 22,
    maxHeight: 100,
    backgroundColor: '#3989D8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  etiquetaBarra: {
    fontSize: 9,
    color: '#777777',
    marginTop: 6,
  },

  // Estilos de la gráfica circular.
  contenedorDistribucion: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },

  graficaCircular: {
    width: 112,
    height: 112,
    borderRadius: 56,
    borderWidth: 14,
    borderTopColor: '#3989D8',
    borderRightColor: '#35A879',
    borderBottomColor: '#A17BD5',
    borderLeftColor: '#E6AD52',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '0deg' }],
  },

  segmentoSuperiorIzquierdo: {
    position: 'absolute',
    width: 1,
    height: 1,
  },

  segmentoSuperiorDerecho: {
    position: 'absolute',
    width: 1,
    height: 1,
  },

  segmentoInferiorIzquierdo: {
    position: 'absolute',
    width: 1,
    height: 1,
  },

  segmentoInferiorDerecho: {
    position: 'absolute',
    width: 1,
    height: 1,
  },

  centroGrafica: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  porcentajeCentral: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },

  textoCentral: {
    fontSize: 9,
    color: '#888888',
  },

  leyendaCategorias: {
    flex: 1,
    marginLeft: 13,
  },

  elementoLeyenda: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  puntoLeyenda: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 7,
  },

  nombreCategoria: {
    flex: 1,
    fontSize: 9,
    color: '#666666',
  },

  valorCategoria: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#444444',
  },

  // Estilos de usuarios mejor valorados.
  contenedorUsuarios: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tarjetaUsuario: {
    width: '31%',
    minHeight: 95,
    backgroundColor: '#F8F9FB',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },

  avatarUsuario: {
    width: 39,
    height: 39,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },

  simboloAvatar: {
    fontSize: 24,
  },

  nombreUsuario: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#444444',
    textAlign: 'center',
    marginBottom: 5,
  },

  calificacionUsuario: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#D99B36',
  },

  notaDatos: {
    fontSize: 9,
    color: '#999999',
    textAlign: 'center',
    marginVertical: 16,
  },

});
