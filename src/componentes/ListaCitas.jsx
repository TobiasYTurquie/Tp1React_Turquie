import Cita from './Cita';
import './ListaCitas.css';

const ListaCitas = ({ citas, onEliminarCita }) => {
  return (
    <>
      <h2>Administra tus citas</h2>
      <div className="lista-citas">
        {citas.map((cita, index) => (
          <Cita 
            key={index}
            cita={cita}
            onEliminar={() => onEliminarCita(index)}
          />    
        ))}
      </div>
    </>
  );
};

export default ListaCitas; 