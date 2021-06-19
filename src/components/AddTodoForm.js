import {useState} from "react";
import InputField from './form-elements/InputField'

const AddTodoForm = () => {
  const [state, setState] = useState({
    title: ''
  });


  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitFrom = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
    <form className='add text-center my-4' onSubmit={handleSubmitFrom}>
      <InputField
        label='Title'
        id='title'
        type='text'
        name='title'
        value={state.title}
        onChange={onChange}
      />

      <button className="btn btn-success mt-4">Submit</button>
    </form>
  )
}

export default AddTodoForm
