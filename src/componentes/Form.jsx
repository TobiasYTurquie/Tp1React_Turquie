import InputTextPH from './inputTextPH';
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputTextSinPH from './InputTextSinPH';
import './Form.css';
import { useState } from 'react';

const Form = ({ onAgregarCita }) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaCita = {
      mascota,
      dueño: propietario,
      fecha,
      hora,
      sintomas
    };
    onAgregarCita(nuevaCita);
    // Reset form
    setMascota('');
    setPropietario('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <>
      <h2>Crear mi Cita</h2>
      <form onSubmit={handleSubmit}>
        <InputTextPH 
          label="Nombre Mascota" 
          name="mascota" 
          placeholder="Nombre Mascota"
          value={mascota}
          onChange={(e) => setMascota(e.target.value)}
        />
        
        <InputTextPH 
          label="Nombre Dueño" 
          name="propietario" 
          placeholder="Nombre dueño de la mascota"
          value={propietario}
          onChange={(e) => setPropietario(e.target.value)}
        />
        
        <InputDate 
          label="Fecha" 
          name="fecha"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        
        <InputTime 
          label="Hora" 
          name="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
        
        <InputTextSinPH 
          label="Síntomas" 
          name="sintomas"
          value={sintomas}
          onChange={(e) => setSintomas(e.target.value)}
        />

        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </>
  );
};

export default Form;