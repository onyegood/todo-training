const InputField = ({ label, name, type, onChange, id, value }) => {
  return (
    <>
      <label className='text-light'>{label}</label>
      <input
        className='form-control m-auto'
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
