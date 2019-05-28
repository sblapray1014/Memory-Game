/*eslint no-unused-expressions: ["error", { "allowTernary": true }]*/
import React, { Component } from 'react';
import Card from './components/Cards';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import 'babel-polyfill';
let Characters = require('./characters.json');


class App extends Component {
  state = {
    characters: [],
    picked: [],
    highScore: 0,
    prompt: "Click an image to get started!",
    score: 0,
    correct: false
  };

  componentDidMount() {
    this.prepareToShuffle();
  };

  prepareToShuffle() {
    this.setState({
      characters: []
    }, this.shuffle());
  }

  shuffle() {
    Characters.forEach(character => {
      Math.floor((Math.random() * 20) + 1)% 2 ? this.push(character) : this.unshift(character);
    });
    Characters = this.state.characters;
  };

  push(character) {
    let arr = this.state.characters;
    arr.push(character);
    this.setState({
      characters: arr
    });
  };

  unshift(character) {
    let arr = this.state.characters;
    arr.unshift(character);
    this.setState({
      characters: arr
    });
  };

  incorrect() {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
    this.setState({
      picked: [],
      score: 0,
      correct: false,
      prompt: "You guessed incorrectly!"
    });

    this.prepareToShuffle();
  };

  correct(value) {

    this.setState({
      picked: this.state.picked.concat(value),
      correct: true,
      score: this.state.score + 1,
      prompt: "You guessed correctly!"
    });

    this.prepareToShuffle();
  };


  handleInput(value) {
    this.state.picked.includes(value) ? this.incorrect() : this.correct(value);
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} highscore={this.state.highScore} prompt={this.state.prompt} />
        <Jumbotron />
        <div className='row'>
          <div className='col-md-12'>
            <div className="container">
              {Characters.map(({ id, name, image }) => {
                return (
                  <Card
                    key={name}
                    click={() => { this.handleInput(id) }}
                    img={image}
                    name={name}
                  />)
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default App;
