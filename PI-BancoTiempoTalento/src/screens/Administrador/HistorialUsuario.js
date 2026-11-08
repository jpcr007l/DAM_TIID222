
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function HistorialUsuario() {

  // Esta sección contiene la información del usuario consultado.
  const usuario = {
    nombre: 'Usuario 1',
    correo: 'usuario1@email.com',
    tipo: 'Usuario activo',
  };

  // Esta sección contiene los servicios que el usuario ha cursado.
  const serviciosCursados = [
    {
      id: 1,
      nombre: 'Servicio 1',
      periodo: '10 ene 2026 - 20 ene 2026',
    },
    {
      id: 2,
      nombre: 'Servicio 2',
      periodo: '05 feb 2026 - 15 feb 2026',
    },
    {
      id: 3,
      nombre: 'Servicio 3',
      periodo: '10 mar 2026 - 25 mar 2026',
    },
  ];

  // Esta sección contiene los servicios que el usuario ha impartido.
  const serviciosImpartidos = [
    {
      id: 1,
      nombre: 'Servicio A',
      periodo: '01 abr 2026 - 20 abr 2026',
    },
    {
      id: 2,
      nombre: 'Servicio B',
      periodo: '05 may 2026 - 20 may 2026',
    },
    {
      id: 3,
      nombre: 'Servicio C',
      periodo: '01 jun 2026 - 15 jun 2026',
    },
  ];

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado de la pantalla */}
      <View style={estilos.encabezado}>
        <Text style={estilos.flechaRegreso}>‹</Text>

        <Text style={estilos.tituloPrincipal}>
          Historial de usuario
        </Text>

        <View style={estilos.espacioEncabezado} />
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Información general del usuario */}
        <View style={estilos.tarjetaUsuario}>

          <View style={estilos.avatarUsuario}>
            <Text style={estilos.simboloAvatar}>♟</Text>
          </View>

          <View style={estilos.informacionUsuario}>
            <Text style={estilos.nombreUsuario}>
              {usuario.nombre}
            </Text>

            <Text style={estilos.correoUsuario}>
              {usuario.correo}
            </Text>

            <Text style={estilos.estadoUsuario}>
              {usuario.tipo}
            </Text>
          </View>

        </View>

        {/* Sección de servicios cursados */}
        <View style={estilos.seccionServicios}>

          <View style={estilos.encabezadoSeccion}>
            <View style={estilos.iconoCursados}>
              <Text style={estilos.simboloCursados}>▤</Text>
            </View>

            <Text style={estilos.tituloSeccion}>
              Servicios cursados
            </Text>
          </View>

          {serviciosCursados.map((servicio) => (
            <View
              key={servicio.id}
              style={estilos.tarjetaServicio}
            >

              <View style={estilos.iconoServicioCursado}>
                <Text style={estilos.simboloServicioCursado}>▤</Text>
              </View>

              <View style={estilos.informacionServicio}>
                <Text style={estilos.nombreServicio}>
                  {servicio.nombre}
                </Text>

                <Text style={estilos.periodoServicio}>
                  {servicio.periodo}
                </Text>
              </View>

              <Text style={estilos.flechaServicio}>›</Text>

            </View>
          ))}

        </View>

        {/* Sección de servicios impartidos */}
        <View style={estilos.seccionServicios}>

          <View style={estilos.encabezadoSeccion}>
            <View style={estilos.iconoImpartidos}>
              <Text style={estilos.simboloImpartidos}>▤</Text>
            </View>

            <Text style={estilos.tituloSeccion}>
              Servicios impartidos
            </Text>
          </View>

          {serviciosImpartidos.map((servicio) => (
            <View
              key={servicio.id}
              style={estilos.tarjetaServicio}
            >

              <View style={estilos.iconoServicioImpartido}>
                <Text style={estilos.simboloServicioImpartido}>▤</Text>
              </View>

              <View style={estilos.informacionServicio}>
                <Text style={estilos.nombreServicio}>
                  {servicio.nombre}
                </Text>

                <Text style={estilos.periodoServicio}>
                  {servicio.periodo}
                </Text>
              </View>

              <Text style={estilos.flechaServicio}>›</Text>

            </View>
          ))}

        </View>

      </ScrollView>
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
    fontSize: 15,
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

  // Información general del usuario.
  tarjetaUsuario: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 10,
  },

  avatarUsuario: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  simboloAvatar: {
    fontSize: 28,
    color: '#3978C8',
  },

  informacionUsuario: {
    flex: 1,
  },

  nombreUsuario: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },

  correoUsuario: {
    fontSize: 10,
    color: '#888888',
    marginBottom: 4,
  },

  estadoUsuario: {
    fontSize: 9,
    color: '#29945A',
  },

  // Secciones de servicios.
  seccionServicios: {
    width: '100%',
    marginBottom: 20,
  },

  encabezadoSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  tituloSeccion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },

  // Iconos de las secciones.
  iconoCursados: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },

  simboloCursados: {
    fontSize: 17,
    color: '#3978C8',
  },

  iconoImpartidos: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: '#E8F7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },

  simboloImpartidos: {
    fontSize: 17,
    color: '#29945A',
  },

  // Tarjetas de los servicios.
  tarjetaServicio: {
    width: '100%',
    minHeight: 59,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  iconoServicioCursado: {
    width: 33,
    height: 33,
    borderRadius: 7,
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  simboloServicioCursado: {
    fontSize: 17,
    color: '#3978C8',
  },

  iconoServicioImpartido: {
    width: 33,
    height: 33,
    borderRadius: 7,
    backgroundColor: '#E8F7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  simboloServicioImpartido: {
    fontSize: 17,
    color: '#29945A',
  },

  informacionServicio: {
    flex: 1,
  },

  nombreServicio: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },

  periodoServicio: {
    fontSize: 9,
    color: '#888888',
  },

  flechaServicio: {
    fontSize: 22,
    color: '#AAAAAA',
    marginLeft: 8,
  },

});
