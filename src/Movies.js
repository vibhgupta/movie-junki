import React, { Component } from 'react';
import './App.css';

class Movies extends Component {
    viewMovie(){
        console.log("Movie traiker opening")
        console.log(this.props.movie.title)

        const url = "https://www.themoviedb.org/movie/"+ this.props.movie.id
        window.location.href= url

    }
    render() {
        return <table key = {this.props.movie.id}>
          <tbody>
            <tr>
              <td><img alt="poster" src={this.props.movie.poster} width="200" /></td>

              <td>
                <tr>
                  <h1>{this.props.movie.title}</h1>
                  <h5>{this.props.movie.overview}</h5>
                
                </tr>
                <input type = "button" onClick= {this.viewMovie.bind(this)} value ="View"/>

              </td>


            </tr>

          </tbody>

        </table>
    }
}

export default Movies