
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function MisDatos() {

  // Esta sección contiene la información personal del usuario.
  const usuario = {
    nombreUsuario: 'Usuario',
    nombreCompleto: 'Carlos Ruiz',
    correo: 'carlos.ruiz@email.com',
    tipoUsuario: 'Estudiante',
    fechaRegistro: '15 de septiembre de 2026',
    contrasena: '••••••••',
    creditos: 250,
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Mis datos
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Información general del usuario */}
        <View style={estilos.tarjetaUsuario}>

          <View style={estilos.avatar}>
            <Text style={estilos.simboloAvatar}>♙</Text>
          </View>

          <View style={estilos.informacionUsuario}>
            <Text style={estilos.nombreUsuario}>
              {usuario.nombreUsuario}
            </Text>

            <Text style={estilos.textoSecundario}>
              Información personal
            </Text>
          </View>

        </View>

        {/* Nombre completo */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Nombre completo
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>♙</Text>

            <Text style={estilos.textoCampo}>
              {usuario.nombreCompleto}
            </Text>
          </View>
        </View>

        {/* Correo electrónico */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Correo electrónico
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>✉</Text>

            <Text style={estilos.textoCampo}>
              {usuario.correo}
            </Text>
          </View>
        </View>

        {/* Tipo de usuario */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Tipo de usuario
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>♙</Text>

            <Text style={estilos.textoCampo}>
              {usuario.tipoUsuario}
            </Text>

            <Text style={estilos.flechaCampo}>⌄</Text>
          </View>
        </View>

        {/* Fecha de registro */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Fecha de registro
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>▦</Text>

            <Text style={estilos.textoCampo}>
              {usuario.fechaRegistro}
            </Text>
          </View>
        </View>

        {/* Contraseña protegida */}
        <View style={estilos.seccionCampo}>
          <Text style={estilos.etiquetaCampo}>
            Contraseña
          </Text>

          <View style={estilos.campoInformacion}>
            <Text style={estilos.iconoCampo}>♙</Text>

            <Text style={estilos.textoCampo}>
              {usuario.contrasena}
            </Text>

            <Text style={estilos.iconoSeguridad}>◉</Text>
          </View>
        </View>

        {/* Saldo de créditos del usuario */}
        <View style={estilos.seccionCreditos}>
          <Text style={estilos.etiquetaCampo}>
            Mis créditos
          </Text>

          <View style={estilos.tarjetaCreditos}>

            <View style={estilos.iconoCreditos}>
              <Text style={estilos.simboloCreditos}>◉</Text>
            </View>

            <View style={estilos.informacionCreditos}>
              <Text style={estilos.cantidadCreditos}>
                {usuario.creditos}
              </Text>

              <Text style={estilos.textoCreditos}>
                créditos disponibles
              </Text>
            </View>

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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
  },

  espacioEncabezado: {
    width: 25,
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  tarjetaUsuario: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 18,
  },

  avatar: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  simboloAvatar: {
    fontSize: 34,
    color: '#3978C8',
  },

  informacionUsuario: {
    flex: 1,
  },

  nombreUsuario: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  textoSecundario: {
    fontSize: 12,
    color: '#888888',
  },

  seccionCampo: {
    width: '100%',
    marginBottom: 16,
  },

  etiquetaCampo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 7,
  },

  campoInformacion: {
    width: '100%',
    height: 43,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
  },

  iconoCampo: {
    fontSize: 16,
    color: '#888888',
    marginRight: 11,
  },

  textoCampo: {
    flex: 1,
    fontSize: 12,
    color: '#555555',
  },

  flechaCampo: {
    fontSize: 19,
    color: '#888888',
  },

  iconoSeguridad: {
    fontSize: 16,
    color: '#888888',
  },

  seccionCreditos: {
    width: '100%',
    marginTop: 3,
    marginBottom: 25,
  },

  tarjetaCreditos: {
    width: '100%',
    minHeight: 75,
    backgroundColor: '#EAF8F0',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
  },

  iconoCreditos: {
    width: 42,
    height: 42,
    borderRadius: 22,
    backgroundColor: '#D2F0DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloCreditos: {
    fontSize: 22,
    color: '#29945A',
  },

  informacionCreditos: {
    flex: 1,
  },

  cantidadCreditos: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#29945A',
  },

  textoCreditos: {
    fontSize: 11,
    color: '#5F8C70',
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
