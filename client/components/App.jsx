import React from 'react'
import {getAllCountries} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  componentDidMount () {
    getAllCountries()
      .then(countries => {
        this.setState({countries})
      })
  }

  render () {
    return (
      <div>
        <h1>Worldcup countries!</h1>
        <ul>
          {this.state.countries.map(country => {
            return <li key={country.country_id}>{country.country_name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
