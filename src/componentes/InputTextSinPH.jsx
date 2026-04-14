
const InputTextSinPH = ({ label, name, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <textarea 
        name={name} 
        className="u-full-width"
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};

export default InputTextSinPH;