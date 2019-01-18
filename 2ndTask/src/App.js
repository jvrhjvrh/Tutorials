import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      aux:0,
      people:[
        {
          name: 'AAAa',
          img: ['https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4560591.jpg', 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4649705.jpg'],
        }
      ],
    }
  }
  handleClick(step){
    var a = this.state.aux
    a = a + step
    this.setState({aux:a});
  }
  checkDisabled(step){
    if(step > 0){
      if(this.state.aux >= this.state.people[0].img.length-1){
        return true;
      }
      return false;
    }
    if(step < 0){
      if(this.state.aux <= 0){
        return true;
      }
      return false;
    }
  }
  render() {
    return (
      <div className="App">
        <body>
          <h1>
              My Web Page
          </h1>
          <button onClick= {()=> this.handleClick(-1)} disabled = {this.checkDisabled(-1)}>Previous Image</button>
          <button onClick= {()=> this.handleClick(1)} disabled = {this.checkDisabled(1)}>Next Image</button>
          <div class="container">
              <img src ={this.state.people[0].img[this.state.aux]}/>
              <p>
                {this.state.people[0].name}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id enim nec elit interdum rhoncus ac id libero. Curabitur sit amet mauris id velit scelerisque varius. Fusce vehicula nunc sed dolor sagittis, et molestie arcu efficitur. Proin in condimentum felis, quis eleifend ex. Nullam quis gravida massa. Praesent ligula est, luctus sollicitudin consectetur tempus, tincidunt at felis. Nam vel sem quis eros scelerisque efficitur vitae id purus.
                Suspendisse mattis metus ut arcu pellentesque ullamcorper. Phasellus iaculis neque id consequat finibus. Praesent tincidunt quam at sapien dictum, ut posuere quam lobortis. Phasellus egestas eget neque a lacinia. Nullam a laoreet augue. Aenean ut neque rhoncus, rutrum erat eu, porta nulla. Vestibulum sit amet dolor maximus, sodales mi at, suscipit nibh. Nulla sit amet consectetur augue.
                Morbi vel massa porttitor, varius magna vitae, laoreet purus. Pellentesque elit ligula, finibus quis mattis sed, laoreet nec nibh. Ut consectetur nulla ex, sit amet mattis quam imperdiet ac. In sit amet ex vitae nulla bibendum iaculis. Ut eu scelerisque neque. Vestibulum ornare lacus eu ipsum vulputate hendrerit. Cras tempus felis id sapien fermentum, at commodo sapien fringilla. Praesent ultricies odio a quam maximus, volutpat scelerisque lacus placerat.
                Aliquam ex urna, condimentum vel fringilla vel, dictum ut ante. Nam pharetra enim ultrices, egestas tortor sed, placerat lacus. Curabitur pharetra sapien nec libero sodales, ac facilisis magna efficitur. Suspendisse in convallis mauris, eu auctor arcu. Suspendisse convallis, arcu ac cursus varius, quam felis faucibus risus, at dapibus arcu mauris ac nulla. Curabitur eget placerat enim, vel tempus nisl. Sed eget justo eu urna fermentum auctor ut at justo. Cras dictum rutrum ex. Nullam mauris sapien, consequat et fermentum et, malesuada ut lorem. Proin quis laoreet enim, ac suscipit enim. Pellentesque a mollis augue. Sed et sapien nisi. Integer tempor, ante sed scelerisque imperdiet, sem dui ultrices diam, nec blandit neque ipsum non libero. Praesent leo elit, vehicula sed augue non, commodo aliquet dolor. Phasellus id nibh dictum, auctor lorem eget, tempus dolor. Sed ac nunc ac odio eleifend fermentum ac eu metus.
                Nunc est metus, rhoncus a erat lobortis, auctor malesuada ex. Etiam accumsan urna vel nunc feugiat, vitae dictum lacus fringilla. Praesent arcu orci, dignissim non nulla et, imperdiet imperdiet leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mi lorem, aliquam a nunc id, sodales laoreet augue. Fusce a nunc non ante maximus pretium. Suspendisse potenti. Nunc egestas eget dui nec accumsan. Nunc volutpat quam in lectus scelerisque, eget semper nisi tincidunt. Nunc ac lacinia libero. Cras viverra mattis lectus, id accumsan mi faucibus id. Vivamus quis elementum nunc, at dignissim ante.
              </p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
