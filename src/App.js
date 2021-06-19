import SearchFrom from './components/SearchFrom'
import ListItem from './components/ListItem'
// import AddTodoForm from './components/AddTodoForm'
import AddTodoFormClassComponent from './components/AddTodoFormClassComponent'

const App = () => {
  const handleClickable = params => {
    console.log(params)
  }

  return (
    <div className='Ap'>
      <div className='container'>
        <header className='text-center text-light my-4'>
          <h1 className='mb-4'>Todo List</h1>
          <SearchFrom />
        </header>
        <ul className='list-group todos mx-auto text-light'>
          <ListItem
            title='sggdhhj sjjjd'
            status='Done'
            clickable={handleClickable}
            id={1}
          />
        </ul>

        <AddTodoFormClassComponent />
        {/* <AddTodoForm /> */}
      </div>
    </div>
  )
}

export default App
