import React from 'react'
import { News } from './components/News'
//import {AddNew} from './components/buttonAd';
import  {Add}  from './components/Add' 
import './App.css'

class App extends React.Component {
  state = {
    news: null,
    isLoading: false
    }
    componentDidMount() {
      fetch('/api/items')
      .then(response => {
        return response.json()
      })
      .then(data => {
          setTimeout(() => { // добавили задержку
            this.setState({ isLoading: false, news: data })
          }, 2000)
      })
  }
  handleAddNews = data => {
    const nextNews = [data, ...this.state.news]
    this.setState({ news: nextNews })
  }
  render() {
    const { news, isLoading } = this.state // все необходимое взяли из state
    return (
      <React.Fragment >
        
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}
        {<Add onAddNews={this.handleAddNews} />}
      </React.Fragment>
    )
  }
}
export default App
