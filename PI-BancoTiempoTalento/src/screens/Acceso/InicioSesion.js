
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
// ======================================================


// ======================================================
// 2. COMPONENTE PRINCIPAL
// ======================================================

export default function InicioSesion() {

  return (
    <SafeAreaView style={estilos.contenedor}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <ScrollView
        contentContainerStyle={estilos.contenido}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* LOGOTIPO DEL PROYECTO */}
        <View style={estilos.seccionLogo}>

          <View style={estilos.logo}>

            {/* Personas del logotipo */}
            <View style={estilos.grupoPersonas}>

              <View style={estilos.persona}>
                <View style={estilos.cabeza} />
                <View style={estilos.cuerpo} />
              </View>

              <View style={estilos.personaCentral}>
                <View style={estilos.cabezaCentral} />
                <View style={estilos.cuerpoCentral} />
              </View>

              <View style={estilos.persona}>
                <View style={estilos.cabeza} />
                <View style={estilos.cuerpo} />
              </View>

            </View>

            {/* Reloj del logotipo */}
            <View style={estilos.reloj}>
              <View style={estilos.manecillas} />
            </View>

          </View>

          <Text style={estilos.nombreProyecto}>
            Banco de
          </Text>

          <Text style={estilos.nombreProyecto}>
            Tiempo y Talento
          </Text>

          <Text style={estilos.descripcion}>
            Comparte tu conocimiento y fortalece tu comunidad.
          </Text>

        </View>


        {/* ENCABEZADO DE INICIO DE SESIÓN */}
        <View style={estilos.encabezado}>

          <Text style={estilos.titulo}>
            Iniciar sesión
          </Text>

          <Text style={estilos.subtitulo}>
            Ingresa tus credenciales para continuar
          </Text>

        </View>


        {/* FORMULARIO VISUAL */}
        <View style={estilos.formulario}>

          {/* CAMPO DE CORREO ELECTRÓNICO */}
          <Text style={estilos.etiqueta}>
            Correo electrónico
          </Text>

          <View style={estilos.campo}>

            <Text style={estilos.icono}>
              ✉
            </Text>

            <TextInput
              style={estilos.entrada}
              placeholder="Ingresa tu correo electrónico"
              placeholderTextColor="#A0A0A0"
              keyboardType="email-address"
              editable={false}
            />

          </View>


          {/* CAMPO DE CONTRASEÑA */}
          <Text style={estilos.etiqueta}>
            Contraseña
          </Text>

          <View style={estilos.campo}>

            <Text style={estilos.icono}>
              ▣
            </Text>

            <TextInput
              style={estilos.entrada}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={true}
              editable={false}
            />

            <Text style={estilos.iconoOjo}>
              ◉
            </Text>

          </View>


          {/* RECUPERAR CONTRASEÑA */}
          <Text style={estilos.recuperar}>
            ¿Olvidaste tu contraseña?
          </Text>

        </View>


        {/* BOTÓN DE INICIO DE SESIÓN */}
        <View style={estilos.boton}>

          <Text style={estilos.textoBoton}>
            Iniciar sesión
          </Text>

        </View>


        {/* REGISTRO DE USUARIO */}
        <View style={estilos.seccionRegistro}>

          <Text style={estilos.textoRegistro}>
            ¿No tienes cuenta?
          </Text>

          <Text style={estilos.enlaceRegistro}>
            Regístrate
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


// ======================================================
// 3. ZONA DE ESTILOS
// ======================================================

const estilos = StyleSheet.create({

  // CONTENEDOR GENERAL
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

contenido: {
  flexGrow: 1,
  paddingHorizontal: 25,
  paddingTop: 90,
  paddingBottom: 30,
},

  // LOGOTIPO
  seccionLogo: {
    alignItems: 'center',
    marginBottom: 35,
  },

  logo: {
    width: 90,
    height: 90,
    backgroundColor: '#F2F3F5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  grupoPersonas: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 42,
    gap: 5,
  },

  persona: {
    alignItems: 'center',
    marginTop: 10,
  },

  cabeza: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#252525',
  },

  cuerpo: {
    width: 23,
    height: 19,
    backgroundColor: '#252525',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 3,
  },

  personaCentral: {
    alignItems: 'center',
  },

  cabezaCentral: {
    width: 19,
    height: 19,
    borderRadius: 12,
    backgroundColor: '#252525',
  },

  cuerpoCentral: {
    width: 29,
    height: 22,
    backgroundColor: '#252525',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 3,
  },

  reloj: {
    width: 33,
    height: 33,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#252525',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  manecillas: {
    width: 2,
    height: 11,
    backgroundColor: '#252525',
  },

  // NOMBRE DEL PROYECTO
  nombreProyecto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#202124',
    textAlign: 'center',
    lineHeight: 25,
  },

  descripcion: {
    fontSize: 11,
    color: '#858585',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
    paddingHorizontal: 8,
  },

  // ENCABEZADO
  encabezado: {
    alignItems: 'center',
    marginBottom: 30,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 5,
  },

  subtitulo: {
    fontSize: 11,
    color: '#858585',
    textAlign: 'center',
  },

  // FORMULARIO
  formulario: {
    width: '100%',
  },

  etiqueta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#303030',
    marginBottom: 7,
    marginTop: 10,
  },

  campo: {
    height: 49,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E1E4E8',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },

  icono: {
    fontSize: 19,
    color: '#777777',
    marginRight: 10,
    width: 22,
    textAlign: 'center',
  },

  entrada: {
    flex: 1,
    fontSize: 12,
    color: '#303030',
    paddingVertical: 8,
  },

  iconoOjo: {
    fontSize: 19,
    color: '#777777',
    marginLeft: 8,
  },

  recuperar: {
    fontSize: 11,
    fontWeight: '500',
    color: '#2165E8',
    textAlign: 'right',
    marginTop: 10,
  },

  // BOTÓN
  boton: {
    height: 49,
    width: '100%',
    backgroundColor: '#2165E8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  textoBoton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // REGISTRO
  seccionRegistro: {
    alignItems: 'center',
    marginTop: 35,
  },

  textoRegistro: {
    fontSize: 11,
    color: '#858585',
    marginBottom: 5,
  },

  enlaceRegistro: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2165E8',
  },

});
