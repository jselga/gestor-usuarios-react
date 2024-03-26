import './Input.css'
const Input = ({label,...rest}) => {
  return (
    <div className='field'>
        <label>{label}</label>
        <input {...rest} />
           {/* // <input
    //   type="text"
    //   name="name"
    //   placeholder="Nombre"
    //   value={formulario.name}
    //   onChange={handleChange}
    /> */}
    </div>

  );
};
export default Input
