import './styles/InputSearch.css'

const InputSearch = ({ handleSubmit}) => {

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
      className='input_form' 
      type="text" 
      name="inputLocation" 
      />
      <button className='btn_form'>search</button>
    </form>
  );
};

export default InputSearch;
