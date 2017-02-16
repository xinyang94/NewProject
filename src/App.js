import React, {Component} from 'react';
import {react} from 'react-dom';

class LikeButton extends Component{
  constructor(){
    super()
    this.state = {
      liked: false,
    };
  }

  handleClick(e){
    this.setState({liked: !this.state.liked})
  }

  render(){
    const text = this.state.liked ? 'like':'haven\'t like';
    return (
        <div onClick = {this.handleClick.bind(this)}>
          You {text} this.<br />Click to toggle.
        </div>
    );
  }
}

class tick extends Component{
  constructor(){
    super()
    this.state = {
      seconds : 0
    }
  }

  tick(){
    this.setState({seconds: this.state.seconds + 1})
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnMount(){
    clearInterval(this.interval)
  }

  render(){
    return(
      <div> {this.state.seconds} </div>
    )
  }

}

export default LikeButton
