
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

// ======================================================
// 1. ZONA DE IMPORTACIONES
// Esta sección es para importar los componentes nativos
// que utilizaremos para construir la página principal.
// ======================================================


// ======================================================
// 2. COMPONENTE PRINCIPAL
// Esta sección es para diseñar el panel principal del
// usuario del Banco de Tiempo y Talento.
// ======================================================

export default function InicioUsuario() {

  return (

    <SafeAreaView style={estilos.contenedor}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      {/* CONTENIDO PRINCIPAL */}
      <ScrollView
        style={estilos.scroll}
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* ENCABEZADO DEL USUARIO */}
        <View style={estilos.encabezado}>

          <View style={estilos.avatar}>
            <Text style={estilos.iconoAvatar}>
              👤
            </Text>
          </View>

          <View style={estilos.informacionUsuario}>

            <Text style={estilos.saludo}>
              ¡Hola, Usuario!
            </Text>

            <Text style={estilos.mensajeBienvenida}>
              Bienvenido de nuevo.
            </Text>

          </View>

        </View>


        {/* BUSCADOR */}
        <View style={estilos.buscador}>

          <Text style={estilos.iconoBuscador}>
            ⌕
          </Text>

          <TextInput
            style={estilos.entradaBusqueda}
            placeholder="Buscar servicios, habilidades o personas..."
            placeholderTextColor="#999999"
          />

        </View>


        {/* TARJETA DE CRÉDITOS */}
        <View style={estilos.tarjetaCreditos}>

          <View style={estilos.iconoCreditos}>
            <Text style={estilos.simboloCreditos}>
              ◉
            </Text>
          </View>

          <View style={estilos.informacionCreditos}>

            <Text style={estilos.tituloCreditos}>
              Mi cuenta de tiempo
            </Text>

            <View style={estilos.filaCreditos}>

              <Text style={estilos.cantidadCreditos}>
                12
              </Text>

              <Text style={estilos.textoCreditos}>
                créditos
              </Text>

            </View>

          </View>

          <Text style={estilos.flechaCreditos}>
            ›
          </Text>

        </View>


        {/* SECCIÓN DE ACCIONES */}
        <View style={estilos.seccionAcciones}>

          <Text style={estilos.tituloSeccion}>
            ¿Qué te gustaría hacer hoy?
          </Text>

          <Text style={estilos.descripcionSeccion}>
            Elige una opción para comenzar
          </Text>


          <View style={estilos.contenedorAcciones}>

            {/* TARJETA COMPARTIR */}
            <View style={estilos.tarjetaCompartir}>

              <Text style={estilos.iconoCompartir}>
                👥
              </Text>

              <Text style={estilos.tituloCompartir}>
                Compartir
              </Text>

              <Text style={estilos.descripcionTarjeta}>
                Comparte tus conocimientos y habilidades con la comunidad.
              </Text>

              <View style={estilos.filaFlechaCompartir}>
                <Text style={estilos.flechaCompartir}>
                  +
                </Text>
              </View>

            </View>


            {/* TARJETA APRENDER */}
            <View style={estilos.tarjetaAprender}>

              <Text style={estilos.iconoAprender}>
                📖
              </Text>

              <Text style={estilos.tituloAprender}>
                Aprender
              </Text>

              <Text style={estilos.descripcionTarjeta}>
                Encuentra conocimientos y servicios que necesitas.
              </Text>

              <View style={estilos.filaFlechaAprender}>
                <Text style={estilos.flechaAprender}>
                  +
                </Text>
              </View>

            </View>

          </View>

        </View>


        {/* SERVICIOS DESTACADOS */}
        <View style={estilos.seccionServicios}>

          <View style={estilos.encabezadoServicios}>

            <Text style={estilos.tituloSeccion}>
              Servicios destacados
            </Text>

            <Text style={estilos.verTodos}>
              Ver todos ›
            </Text>

          </View>


          <View style={estilos.contenedorServicios}>

            {/* SERVICIO 1 */}
            <View style={estilos.tarjetaServicio}>

              <View style={estilos.iconoServicioProgramacion}>
                <Text style={estilos.simboloServicio}>
                  💻
                </Text>
              </View>

              <Text style={estilos.nombreServicio}>
                Apoyo de Programación
              </Text>

              <Text style={estilos.datoServicio}>
                ◉  Programación
              </Text>

              <Text style={estilos.datoServicio}>
                ◷  1 crédito / hora
              </Text>

            </View>


            {/* SERVICIO 2 */}
            <View style={estilos.tarjetaServicio}>

              <View style={estilos.iconoServicioConocimiento}>
                <Text style={estilos.simboloServicio}>
                  📗
                </Text>
              </View>

              <Text style={estilos.nombreServicio}>
                Conocimiento Funcional
              </Text>

              <Text style={estilos.datoServicio}>
                ◉  Conocimiento
              </Text>

              <Text style={estilos.datoServicio}>
                ◷  1 crédito / hora
              </Text>

            </View>


            {/* SERVICIO 3 */}
            <View style={estilos.tarjetaServicio}>

              <View style={estilos.iconoServicioDiseno}>
                <Text style={estilos.simboloServicio}>
                  🖌️
                </Text>
              </View>

              <Text style={estilos.nombreServicio}>
                Diseño Gráfico
              </Text>

              <Text style={estilos.datoServicio}>
                ◉  Diseño
              </Text>

              <Text style={estilos.datoServicio}>
                ◷  1 crédito / hora
              </Text>

            </View>

          </View>

        </View>

      </ScrollView>


      {/* BARRA DE NAVEGACIÓN INFERIOR */}
      <View style={estilos.barraNavegacion}>

        <View style={estilos.elementoNavegacion}>

          <Text style={estilos.iconoNavegacionActivo}>
            ⌂
          </Text>

          <Text style={estilos.textoNavegacionActivo}>
            Inicio
          </Text>

        </View>


        <View style={estilos.elementoNavegacion}>

          <Text style={estilos.iconoNavegacion}>
            ▦
          </Text>

          <Text style={estilos.textoNavegacion}>
            Categorías
          </Text>

        </View>


        <View style={estilos.elementoNavegacion}>

          <Text style={estilos.iconoNavegacion}>
            ◷
          </Text>

          <Text style={estilos.textoNavegacion}>
            Historial
          </Text>

        </View>


        <View style={estilos.elementoNavegacion}>

          <Text style={estilos.iconoNavegacion}>
            ♙
          </Text>

          <Text style={estilos.textoNavegacion}>
            Perfil
          </Text>

        </View>

      </View>

    </SafeAreaView>

  );

}


// ======================================================
// 3. ZONA DE ESTILOS
// Esta sección es para establecer los colores, tamaños,
// espacios y distribución de todos los componentes.
// ======================================================

const estilos = StyleSheet.create({

  // CONTENEDOR GENERAL
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll: {
    flex: 1,
  },

  contenido: {
    paddingHorizontal: 16,
    paddingTop: 95,
    paddingBottom: 15,
  },


  // ENCABEZADO DEL USUARIO
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 25,
    backgroundColor: '#EDF1F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconoAvatar: {
    fontSize: 23,
  },

  informacionUsuario: {
    marginLeft: 10,
  },

  saludo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#252525',
  },

  mensajeBienvenida: {
    fontSize: 10,
    color: '#888888',
    marginTop: 3,
  },


  // BUSCADOR
  buscador: {
    height: 43,
    borderWidth: 1,
    borderColor: '#E8EAED',
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    marginBottom: 17,
  },

  iconoBuscador: {
    fontSize: 23,
    color: '#888888',
    marginRight: 9,
  },

  entradaBusqueda: {
    flex: 1,
    fontSize: 11,
    color: '#333333',
    paddingVertical: 5,
  },


  // TARJETA DE CRÉDITOS
  tarjetaCreditos: {
    height: 77,
    backgroundColor: '#F8F9FB',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: '#F0F1F3',
  },

  iconoCreditos: {
    width: 43,
    height: 43,
    borderRadius: 9,
    backgroundColor: '#E4F0FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  simboloCreditos: {
    fontSize: 27,
    color: '#2583C5',
  },

  informacionCreditos: {
    flex: 1,
    marginLeft: 11,
  },

  tituloCreditos: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
  },

  filaCreditos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  cantidadCreditos: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#252525',
  },

  textoCreditos: {
    fontSize: 12,
    color: '#555555',
    marginLeft: 6,
  },

  flechaCreditos: {
    fontSize: 27,
    color: '#888888',
  },


  // SECCIÓN DE ACCIONES
  seccionAcciones: {
    marginBottom: 22,
  },

  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#252525',
  },

  descripcionSeccion: {
    fontSize: 10,
    color: '#888888',
    marginTop: 4,
    marginBottom: 12,
  },

  contenedorAcciones: {
    flexDirection: 'row',
    gap: 10,
  },


  // TARJETA COMPARTIR
  tarjetaCompartir: {
    flex: 1,
    minHeight: 155,
    backgroundColor: '#E7F6E9',
    borderRadius: 11,
    padding: 11,
  },

  iconoCompartir: {
    fontSize: 30,
    marginBottom: 5,
  },

  tituloCompartir: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#277D43',
    marginBottom: 5,
  },

  descripcionTarjeta: {
    fontSize: 10,
    lineHeight: 14,
    color: '#55765D',
  },

  filaFlechaCompartir: {
    alignItems: 'flex-end',
    marginTop: 5,
  },

  flechaCompartir: {
    width: 23,
    height: 23,
    borderRadius: 15,
    backgroundColor: '#D0EED4',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#278A47',
    fontSize: 19,
    fontWeight: 'bold',
  },


  // TARJETA APRENDER
  tarjetaAprender: {
    flex: 1,
    minHeight: 155,
    backgroundColor: '#FFF1DF',
    borderRadius: 11,
    padding: 11,
  },

  iconoAprender: {
    fontSize: 30,
    marginBottom: 5,
  },

  tituloAprender: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#A66A24',
    marginBottom: 5,
  },

  filaFlechaAprender: {
    alignItems: 'flex-end',
    marginTop: 5,
  },

  flechaAprender: {
    width: 23,
    height: 23,
    borderRadius: 15,
    backgroundColor: '#F9E2C4',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#B4772D',
    fontSize: 19,
    fontWeight: 'bold',
  },


  // SERVICIOS DESTACADOS
  seccionServicios: {
    marginBottom: 12,
  },

  encabezadoServicios: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 11,
  },

  verTodos: {
    fontSize: 10,
    color: '#2165E8',
    fontWeight: 'bold',
  },

  contenedorServicios: {
    flexDirection: 'row',
    gap: 8,
  },

  tarjetaServicio: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9EBEF',
    borderRadius: 9,
    padding: 8,
  },

  iconoServicioProgramacion: {
    height: 48,
    backgroundColor: '#F0ECFA',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  iconoServicioConocimiento: {
    height: 48,
    backgroundColor: '#EAF6EF',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  iconoServicioDiseno: {
    height: 48,
    backgroundColor: '#FCECEF',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },

  simboloServicio: {
    fontSize: 25,
  },

  nombreServicio: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    minHeight: 29,
    marginBottom: 5,
  },

  datoServicio: {
    fontSize: 8,
    color: '#777777',
    marginTop: 4,
  },


  // BARRA DE NAVEGACIÓN INFERIOR
  barraNavegacion: {
    height: 62,
    borderTopWidth: 1,
    borderTopColor: '#E9EBEF',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  elementoNavegacion: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconoNavegacion: {
    fontSize: 22,
    color: '#777777',
  },

  iconoNavegacionActivo: {
    fontSize: 23,
    color: '#2165E8',
  },

  textoNavegacion: {
    fontSize: 9,
    color: '#777777',
    marginTop: 3,
  },

  textoNavegacionActivo: {
    fontSize: 9,
    color: '#2165E8',
    fontWeight: 'bold',
    marginTop: 3,
  },

});
