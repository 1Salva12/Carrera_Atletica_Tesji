import { useEffect, useState } from "react";
import { getUsuarios } from "./api"; // Asegúrate de que esta función haga el fetch a tu API
import React from 'react';
import './App.css';
import './style.css';
import Tec from './imagenen/Tec.png';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Aquí se hace la llamada a la API
    getUsuarios()
      .then(data => {
        console.log('Usuarios desde API:', data);
        setUsuarios(data);
      })
      .catch(err => console.error('Error al consumir API:', err));
  }, []);

  return (
    <>
      <div className="Estilo">
        <div>
          <img src={Tec} alt="logo1" style={{ float: 'left' }} width={110} height={130} />
          <p>
            <strong>
              <p><strong><font size="5" > CONTROL Y REGISTRO </font></strong></p>
              <p><strong><font size="5" > DE LA CARRERA ATLÉTICA </font></strong></p>
            </strong>
          </p>
        </div>
        <div>
          <a href="#">Inicio</a>
          <a href="#">Registros de Entrada</a>
          <a href="#">Corredores</a>
        </div>
      </div>
      <div className="container">
        <h2>Entrada de Registros</h2>
        <strong>BÚSQUEDA</strong>

        <table id="tablaRegistros">
          <thead>
            <tr>
              <th>Posición</th>
              <th>KIID</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Carrera</th>
              <th>Categoría</th>
              <th>Tiempo Inicio</th>
              <th>Tiempo Final</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u, i) => (
              <tr key={u.kiid}>
                <td>{i + 1}</td>
                <td>{u.kiid}</td>
                <td>{u.nombre}</td>
                <td>{u.apellidoPaterno}</td>
                <td>{u.apellidoMaterno}</td>
                <td>{u.carrera}</td>
                <td>{u.categoria}</td>
                <td>{u.tiempoInicio}</td>
                <td>{u.tiempoFinal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
