import './InputDate.css';

const InputDate = ({ label, name, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="date" 
        name={name} 
        className="u-full-width"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputDate;   