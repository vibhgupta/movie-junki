import React, { Component } from 'react';
import './App.css';
import Movies from './Movies.js';
import $ from 'jquery'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    console.log("this is the inistializer")
    // const movies = [
    //   { id: 0, poster: "https://www.screengeek.net/wp-content/uploads/2017/04/avengers-infinity-war-2.jpg", title: "Avengers  Infinity War", overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. " },
    //   { id: 1, poster: "http://images2.fanpop.com/image/photos/12800000/Avengers-desktop-the-avengers-12876230-1920-1200.jpg", title: "Avengers ", overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. " },]

        


    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow =<Movies  movie = {movie} />

     
        
    //   movieRows.push(movieRow)
    // })

    // this.state = { rows: movieRows }

    this.onSearch()
   
  }

  onSearch(searchTerm)  {
      console.log("search is precessing")
      
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=46f6c8aaf21c5eeb634865b3b08358df&query=" + searchTerm
      $.ajax({
          url : urlString ,
          success : (serachResults) => {
            console.log("Succes data fetched")

            const results = serachResults.results

            var movieRows = []

            results.forEach((movie)=> {

              movie.poster = "https://image.tmdb.org/t/p/w185"+ movie.poster_path
              console.log(movie.title)
              const movieOne = <Movies key={movie.id} movie = {movie} />
              movieRows.push(movieOne)
            })
            this.setState({rows : movieRows})
          } , 
          error : (xhr , status , err) => {
            console.log("Error occurred  data  not fetched")
           
          }
      })
    }
    searchTermHandler(event){
      console.log(event.target.value)
      const bindObject = this
      const searchTerm = event.target.value
      bindObject.onSearch(searchTerm)
    }
  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td><img alt="app icon" src="videocamera.svg" width="50" /></td>
              <td width="20"></td>
              <td><h1>Movie Junkie </h1></td>

            </tr>

          </tbody>
        </table>

        <input className="searchBar" type="text" 
        
        onChange = {this.searchTermHandler.bind(this)}placeholder="Enter your movies name" />
        {/* <input className = "buttonSearch" type="button" value="Search"/> */}


        {this.state.rows}

      </div>

    );
  }
}

export default App;
