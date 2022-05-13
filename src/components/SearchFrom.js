import {useState} from "react";
import InputField from './form-elements/InputField'

const SearchFrom = () => {
  const [state, setState] = useState({
  value:''
});

const onChange = (e) => {
  setState({
    ...state,
    [e.target.id]: e.target.value,
  });
};
const handleSubmitFrom = (e) => {
  e.preventDefault();
  console.log(state);
};
  return (
    <form className="search" onSubmit={handleSubmitFrom}>
      <InputField
        label=""
        type="text"
        name="search"
        id="searchResult"
        value={state.title}
        placeholder="search todos"
        onChange={onChange}
      />
    </form>
  );
}

export default SearchFrom;
