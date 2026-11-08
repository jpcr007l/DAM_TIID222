// ======================================================
// 1. ZONA DE IMPORTACIONES
// ======================================================


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
// 2. COMPONENTE PRINCIPAL
// ======================================================

export default function RegistroUsuario() {

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

        {/* FLECHA DE REGRESO */}
        <View style={estilos.seccionRegreso}>

          <Text style={estilos.flecha}>
            ‹
          </Text>

        </View>


        {/* LOGOTIPO DEL PROYECTO */}
        <View style={estilos.seccionLogo}>

          <View style={estilos.logo}>

            {/* Grupo de personas */}
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

            {/* Reloj */}
            <View style={estilos.reloj}>
              <View style={estilos.manecillas} />
            </View>

          </View>

          <Text style={estilos.tituloProyecto}>
            Banco de
          </Text>

          <Text style={estilos.tituloProyecto}>
            Tiempo y Talento
          </Text>

          <Text style={estilos.descripcion}>
            Únete al Banco de Tiempo y Talento
            {"\n"}
            y comparte tus habilidades.
          </Text>

        </View>


        {/* ENCABEZADO */}
        <View style={estilos.encabezado}>

          <Text style={estilos.titulo}>
            Crear cuenta
          </Text>

          <Text style={estilos.subtitulo}>
            Regístrate para formar parte de nuestra comunidad
          </Text>

        </View>


        {/* FORMULARIO DE REGISTRO */}
        <View style={estilos.formulario}>

          {/* NOMBRE COMPLETO */}
          <Text style={estilos.etiqueta}>
            Nombre completo
          </Text>

          <View style={estilos.campo}>

            <Text style={estilos.icono}>
              ♙
            </Text>

            <TextInput
              style={estilos.entrada}
              placeholder="Ingresa tu nombre completo"
              placeholderTextColor="#A0A0A0"
            />

          </View>


          {/* CORREO ELECTRÓNICO */}
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
              autoCapitalize="none"
            />

          </View>


          {/* CONTRASEÑA */}
          <Text style={estilos.etiqueta}>
            Contraseña
          </Text>

          <View style={estilos.campo}>

            <Text style={estilos.icono}>
              ▣
            </Text>

            <TextInput
              style={estilos.entrada}
              placeholder="Crea una contraseña"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={true}
            />

            <Text style={estilos.iconoOjo}>
              ◉
            </Text>

          </View>


          {/* CONFIRMAR CONTRASEÑA */}
          <Text style={estilos.etiqueta}>
            Confirmar contraseña
          </Text>

          <View style={estilos.campo}>

            <Text style={estilos.icono}>
              ▣
            </Text>

            <TextInput
              style={estilos.entrada}
              placeholder="Confirma tu contraseña"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={true}
            />

            <Text style={estilos.iconoOjo}>
              ◉
            </Text>

          </View>


          {/* TÉRMINOS Y CONDICIONES */}
          <View style={estilos.seccionTerminos}>

            <View style={estilos.casilla} />

            <Text style={estilos.textoTerminos}>
              Acepto los{' '}
              <Text style={estilos.enlaceTerminos}>
                términos y condiciones
              </Text>
            </Text>

          </View>

        </View>


        {/* BOTÓN CREAR CUENTA */}
        <View style={estilos.boton}>

          <Text style={estilos.textoBoton}>
            Crear cuenta
          </Text>

        </View>


        {/* ACCESO AL INICIO DE SESIÓN */}
        <View style={estilos.seccionInicio}>

          <Text style={estilos.textoInicio}>
            ¿Ya tienes cuenta?
          </Text>

          <Text style={estilos.enlaceInicio}>
            Iniciar sesión
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
    paddingTop: 12,
    paddingBottom: 25,
  },

  // FLECHA DE REGRESO
  seccionRegreso: {
    height: 32,
    justifyContent: 'center',
    marginBottom: 5,
  },

  flecha: {
    fontSize: 32,
    color: '#303030',
    lineHeight: 35,
  },

  // LOGOTIPO
  seccionLogo: {
    alignItems: 'center',
    marginBottom: 22,
  },

  logo: {
    width: 76,
    height: 76,
    backgroundColor: '#F2F3F5',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 9,
  },

  grupoPersonas: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 36,
    gap: 4,
  },

  persona: {
    alignItems: 'center',
    marginTop: 9,
  },

  cabeza: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: '#252525',
  },

  cuerpo: {
    width: 19,
    height: 16,
    backgroundColor: '#252525',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 3,
  },

  personaCentral: {
    alignItems: 'center',
  },

  cabezaCentral: {
    width: 17,
    height: 17,
    borderRadius: 12,
    backgroundColor: '#252525',
  },

  cuerpoCentral: {
    width: 25,
    height: 18,
    backgroundColor: '#252525',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    marginTop: 3,
  },

  reloj: {
    width: 29,
    height: 29,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#252525',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  manecillas: {
    width: 2,
    height: 9,
    backgroundColor: '#252525',
  },

  // NOMBRE DEL PROYECTO
  tituloProyecto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#202124',
    textAlign: 'center',
    lineHeight: 23,
  },

  descripcion: {
    fontSize: 10,
    color: '#858585',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 14,
  },

  // ENCABEZADO
  encabezado: {
    alignItems: 'center',
    marginBottom: 18,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#202124',
    marginBottom: 4,
  },

  subtitulo: {
    fontSize: 10,
    color: '#858585',
    textAlign: 'center',
  },

  // FORMULARIO
  formulario: {
    width: '100%',
  },

  etiqueta: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#303030',
    marginBottom: 5,
    marginTop: 9,
  },

  campo: {
    height: 42,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E1E4E8',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },

  icono: {
    fontSize: 17,
    color: '#777777',
    marginRight: 9,
    width: 20,
    textAlign: 'center',
  },

  entrada: {
    flex: 1,
    fontSize: 11,
    color: '#303030',
    paddingVertical: 5,
  },

  iconoOjo: {
    fontSize: 17,
    color: '#777777',
    marginLeft: 6,
  },

  // TÉRMINOS Y CONDICIONES
  seccionTerminos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },

  casilla: {
    width: 15,
    height: 15,
    borderWidth: 1.5,
    borderColor: '#A0A0A0',
    borderRadius: 3,
    marginRight: 8,
  },

  textoTerminos: {
    fontSize: 10,
    color: '#555555',
  },

  enlaceTerminos: {
    color: '#2165E8',
    fontWeight: 'bold',
  },

  // BOTÓN
  boton: {
    height: 43,
    width: '100%',
    backgroundColor: '#2165E8',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },

  textoBoton: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // INICIO DE SESIÓN
  seccionInicio: {
    alignItems: 'center',
    marginTop: 22,
  },

  textoInicio: {
    fontSize: 10,
    color: '#858585',
    marginBottom: 4,
  },

  enlaceInicio: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2165E8',
  },

});
