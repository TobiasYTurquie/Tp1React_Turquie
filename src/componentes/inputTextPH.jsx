
const inputTextPH = ({ label, name, placeholder, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input 
        type="text" 
        name={name} 
        className="u-full-width" 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default inputTextPH;