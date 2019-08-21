import React, { Component } from 'react';
import Header from './components/Header/header';
import Cards from './components/Cards/cards';
import Footer from './components/Footer/footer';
import { Row } from './components/Grid/grid';
import albums from "./albums.json";


class App extends Component {
  
    state = {
      albums: albums,
      score: 0,
      topScore: 0,
      maxScore: 12
    };
  
    shuffle = (array) => {
      let i = array.length;
      let randNum;
      let value;
      while (0 !== i) {

      randNum = Math.floor(Math.random() * i);
      i -= 1;
      value = array[i];
      array[i] = array[randNum];
      array[randNum] = value;
      }
      return array;
    }
  
    goodChoice = () => {
      if (this.state.score + 1 > this.state.topScore) {
        this.setState({
          topScore: this.state.topScore + 1
        })
      }
      if (this.state.score + 1 === this.state.maxScore) {
        this.setState({
          score: this.state.score + 1
        })
      }else{
        this.setState({
          score: this.state.score + 1
        })
      }
    }
  
    winner = (currentAlbums) => {
      if (this.state.score + 1 === this.state.maxScore) {
        this.setState({
          score: 0, 
          topScore: 0
        })
        const updatedAlbums = currentAlbums.map(album => (true) ? { ...album, doneBeenClicked: false } : album)
        return updatedAlbums
      }else{
        return currentAlbums
      }
    }
  
    badChoice = () => {
      this.setState({
        score: 0
      })
      const updatedAlbums = this.state.albums.map(album => album.doneBeenClicked === true ? { ...album, doneBeenClicked: false } : album)
      return updatedAlbums
    }
  
  
    shuffleAlbums = (name) => {
      var reset = false;
      const albums = this.state.albums.map(album => {
        if(album.name === name) {
          if (album.doneBeenClicked === false) {
            this.goodChoice()
            return { ...album, doneBeenClicked: true}
          }else{
            reset = true
            return { ...album, doneBeenClicked: false}
          }
        }
        return album
      })
  
      if (reset) {
        this.setState({
          albums: this.shuffle(this.badChoice()),
        })
        
      }else{
        this.setState({ 
          albums: this.shuffle(this.winner(albums)) 
        })
      }
      
    }
  
    render() {
      return (
        <div className="top-div">
          <Header 
            score={this.state.score}
            topScore={this.state.topScore}
          />
          <div className="content">
          <Row>
            {this.state.albums.map(album =>(
              <Cards 
                image={album.image}
                name={album.name}
                id={album.id}
                key={album.id}
                onClick={this.shuffleAlbums}
                
              />
            ))}
            </Row>
          </div>
          <Footer />
        </div>
      );
    }
  }
  
  export default App;