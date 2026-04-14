import './InputTime.css';

const InputTime = ({ label, name, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="time" 
        name={name} 
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputTime;