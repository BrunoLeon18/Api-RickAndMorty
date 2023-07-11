
import './App.css'
import { useState, useEffect } from 'react'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import InputSearch from './components/InputSearch'
import ShowError from './components/ShowError'
import Loader from './components/Loader'
import Pagination from './components/Pagination'
import useFetch from './hooks/useFetch'

function App() {

  
  const [inputValue, setInputValue] = useState(getRandomNumber(126))
  const [page, setPage] = useState(1)
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, getLocation, isLoading, showError]=useFetch(url)
  
useEffect(() => {
  getLocation()
}, [inputValue])


const handleSubmit = e => {
  e.preventDefault()
  const inputItem = e.target.inputLocation.value.trim()

  if (inputItem === "" || inputItem === '0') {
    setInputValue(getRandomNumber(126))
  }else{
    setInputValue(inputItem) 
  }
  e.target.inputLocation.value = ''

  setPage(1)
}

const perPage = 6
const quantyPage = Math.ceil(location?.residents.length / perPage )
const firstIndex = (page - 1) * perPage
const residents = location?.residents?.slice(firstIndex, firstIndex + perPage)


  return (
    <div className="container">
      <header className='header'>
        <div className="header_bg"></div>
      </header>
      <InputSearch
      handleSubmit={handleSubmit}
      />

      {
        isLoading
        ?
        (<Loader />)
        :
          ( showError
            ?
            (<ShowError />)
            :
            (<>
              <LocationInfo
              location={location}
              />
              <div className="resident-container">
                {
              residents?.map(( url )=>(
                    <ResidentCard
                    key={url}
                    url={url}
                    />
                  ))
                }
            </div>
            </>
          ))
      }
              <Pagination
              page={page}
              setPage={setPage}
              quantyPage={quantyPage}
              />

    </div>
  )
}

export default App
