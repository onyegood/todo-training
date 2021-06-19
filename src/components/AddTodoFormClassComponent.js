import { Component } from 'react'
import InputField from './form-elements/InputField'

class AddTodoFormClassComponent extends Component {
  state = {
    title: '',
    loading: true
  }

  onChange = e => this.setState({[e.target.name]: e.target.value })

  handleSubmitFrom = e => {
    e.preventDefault()
    console.log(this.state)
  }

  changeLoading = () => {
    this.setState({ loading: !this.state.loading })
  }

  

  render () {
    const {title} = this.state;

    return (
      <form className='add text-center my-4' onSubmit={this.handleSubmitFrom}>
        <InputField
          label='Title'
          id='title'
          type='text'
          name='title'
          value={title}
          onChange={this.onChange}
        />

        <button className='btn btn-success mt-4'>Submit</button>
      </form>
    )
  }
}

export default AddTodoFormClassComponent
