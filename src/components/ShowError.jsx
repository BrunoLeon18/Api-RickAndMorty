
import './styles/ShowError.css'

const ShowError = () => {
  return (
    <div className="error">
      <i className='bx bx-error'></i>
        <h2 className="error_title">  
          Hey, you must provide an id from 1 to 126!
          </h2>
    </div>
  )
}

export default ShowError