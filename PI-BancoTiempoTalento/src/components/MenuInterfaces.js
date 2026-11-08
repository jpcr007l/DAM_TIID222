
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  StatusBar,
} from 'react-native';

// ======================================================
// 1. IMPORTACIONES DE LAS INTERFACES DE ACCESO
// ======================================================

import InicioSesion from '../screens/Acceso/InicioSesion';
import RegistroUsuario from '../screens/Acceso/RegistroUsuario';


// ======================================================
// 2. IMPORTACIONES DE LAS INTERFACES DEL USUARIO
// ======================================================

import InicioUsuario from '../screens/Usuario/InicioUsuario';
import Aprender from '../screens/Usuario/Aprender';
import InformacionServicio from '../screens/Usuario/InformacionServicio';
import RegistrarServicio from '../screens/Usuario/RegistrarServicio';
import AdministrarServicios from '../screens/Usuario/AdministrarServicios';
import ModificarServicio from '../screens/Usuario/ModificarServicio';
import Favoritos from '../screens/Usuario/Favoritos';
import HistorialSolicitudes from '../screens/Usuario/HistorialSolicitudes';
import MisDatos from '../screens/Usuario/MisDatos';
import TiempoEstudio from '../screens/Usuario/TiempoEstudio';

// ======================================================
// 3. IMPORTACIONES DE LAS INTERFACES DEL ADMINISTRADOR
// ======================================================

import InicioAdministrador from '../screens/Administrador/InicioAdministrador';
import EstadisticasSistema from '../screens/Administrador/EstadisticasSistema';
import GestionarUsuarios from '../screens/Administrador/GestionarUsuarios';
import UsuarioSeleccionado from '../screens/Administrador/UsuarioSeleccionado';
import ModificarDatosUsuario from '../screens/Administrador/ModificarDatosUsuario';
import HistorialUsuario from '../screens/Administrador/HistorialUsuario';
import AdministrarServiciosAprobacion from '../screens/Administrador/AdministrarServiciosAprobacion';

export default function MenuInterfaces() {

  // ======================================================
  // 4. CONTROL DE LA PANTALLA ACTUAL
  // ======================================================

  const [pantallaActual, setPantallaActual] = useState(null);

  // ======================================================
  // 5. LISTA DE INTERFACES DE ACCESO
  // ======================================================

  const interfacesAcceso = [
    { nombre: 'Inicio de sesión', componente: InicioSesion },
    { nombre: 'Registro de usuario', componente: RegistroUsuario },
  ];

  // ======================================================
  // 6. LISTA DE INTERFACES DEL USUARIO
  // ======================================================

  const interfacesUsuario = [
    { nombre: 'Inicio', componente: InicioUsuario },
    { nombre: 'Aprender', componente: Aprender },
    { nombre: 'Información del servicio', componente: InformacionServicio },
    { nombre: 'Registrar servicio', componente: RegistrarServicio },
    { nombre: 'Administrar servicios', componente: AdministrarServicios },
    { nombre: 'Modificar servicio', componente: ModificarServicio },
    { nombre: 'Favoritos', componente: Favoritos },
    { nombre: 'Historial de solicitudes', componente: HistorialSolicitudes },
    { nombre: 'Mis datos', componente: MisDatos },
    { nombre: 'Tiempo de estudio', componente: TiempoEstudio },
  ];

  // ======================================================
  // 7. LISTA DE INTERFACES DEL ADMINISTRADOR
  // ======================================================

  const interfacesAdministrador = [
    { nombre: 'Inicio del administrador', componente: InicioAdministrador },
    { nombre: 'Estadísticas del sistema', componente: EstadisticasSistema },
    { nombre: 'Gestionar usuarios', componente: GestionarUsuarios },
    { nombre: 'Usuario seleccionado', componente: UsuarioSeleccionado },
    { nombre: 'Modificar datos del usuario', componente: ModificarDatosUsuario },
    { nombre: 'Historial del usuario', componente: HistorialUsuario },
    { nombre: 'Administrar servicios (aprobación)', componente: AdministrarServiciosAprobacion },
  ];

  // ======================================================
  // 8. FUNCIÓN PARA ABRIR UNA INTERFAZ
  // ======================================================

  const abrirInterfaz = (Componente) => {
    // Se guarda la función del componente sin ejecutarla.
    setPantallaActual(() => Componente);
  };

  // ======================================================
  // 9. FUNCIÓN PARA REGRESAR AL MENÚ
  // ======================================================

  const regresarMenu = () => {
    setPantallaActual(null);
  };

  // ======================================================
  // 10. MOSTRAR LA INTERFAZ SELECCIONADA
  // ======================================================

  if (pantallaActual !== null) {
    const PantallaSeleccionada = pantallaActual;

    return (
      <View style={estilos.contenedorPantalla}>
        <PantallaSeleccionada />

        {/* Botón para regresar al menú de interfaces */}
        <Pressable
          style={estilos.botonRegresar}
          onPress={regresarMenu}
        >
          <Text style={estilos.textoBotonRegresar}>
            Volver al menú
          </Text>
        </Pressable>
      </View>
    );
  }

  // ======================================================
  // 11. FUNCIÓN PARA MOSTRAR UNA SECCIÓN DE INTERFACES
  // ======================================================

  const mostrarSeccion = (titulo, interfaces, numero) => {
    return (
      <View style={estilos.seccion}>

        <Text style={estilos.tituloSeccion}>
          {numero}. {titulo}
        </Text>

        {interfaces.map((interfaz, indice) => (
          <Pressable
            key={indice}
            style={estilos.botonInterfaz}
            onPress={() => abrirInterfaz(interfaz.componente)}
          >
            <Text style={estilos.numeroInterfaz}>
              {String(indice + 1).padStart(2, '0')}
            </Text>

            <Text style={estilos.nombreInterfaz}>
              {interfaz.nombre}
            </Text>

            <Text style={estilos.flechaInterfaz}>
              ›
            </Text>
          </Pressable>
        ))}

      </View>
    );
  };

  // ======================================================
  // 12. MENÚ PRINCIPAL
  // ======================================================

  return (
    <View style={estilos.contenedorPrincipal}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Encabezado general */}
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloPrincipal}>
          Banco de Tiempo y Talento
        </Text>

        <Text style={estilos.subtituloPrincipal}>
          Menú de interfaces
        </Text>
      </View>

      <ScrollView
        style={estilos.contenido}
        showsVerticalScrollIndicator={false}
      >

        {/* Sección de acceso */}
        {mostrarSeccion('Acceso', interfacesAcceso, '01')}

        {/* Sección del usuario */}
        {mostrarSeccion('Usuario', interfacesUsuario, '02')}

        {/* Sección del administrador */}
        {mostrarSeccion('Administrador', interfacesAdministrador, '03')}

        <Text style={estilos.textoFinal}>
          Banco de Tiempo y Talento
        </Text>

      </ScrollView>
    </View>
  );
}

// ======================================================
// 13. ESTILOS VISUALES DEL MENÚ
// ======================================================

const estilos = StyleSheet.create({

  contenedorPrincipal: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },

  encabezado: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },

  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtituloPrincipal: {
    fontSize: 12,
    color: '#888888',
    marginTop: 5,
  },

  contenido: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  // Estilos generales de cada sección.
  seccion: {
    marginBottom: 20,
  },

  tituloSeccion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 11,
  },

  // Botones de las interfaces.
  botonInterfaz: {
    width: '100%',
    minHeight: 47,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 7,
  },

  numeroInterfaz: {
    width: 32,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#3989D8',
  },

  nombreInterfaz: {
    flex: 1,
    fontSize: 11,
    color: '#444444',
  },

  flechaInterfaz: {
    fontSize: 22,
    color: '#AAAAAA',
  },

  textoFinal: {
    fontSize: 10,
    color: '#AAAAAA',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 25,
  },

  // Contenedor de las pantallas seleccionadas.
  contenedorPantalla: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  botonRegresar: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#1675E8',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5,
  },

  textoBotonRegresar: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

});
