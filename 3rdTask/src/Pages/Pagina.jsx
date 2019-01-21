import React from 'react';

export class Pagina extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            indexImg: 0,
        }
    }
    handleClick(step){
        const {indexImg} = this.state
        var a = indexImg;
        a = a + step;
        this.setState({indexImg:a});
    }
    checkDisabled(step){
        const {indexImg} = this.state;
        const {img, } = this.props;

        if(step > 0){
            if(indexImg >= img.length-1){
            return true;
            }
            return false;
        }
        if(step < 0){
            if(indexImg <= 0){
            return true;
            }
            return false;
        }
    }

    render(){
        const {img, text} = this.props;
        const {indexImg} = this.state;
        console.log(indexImg);
        return(
            <div>
                <p>
                    <button onClick= {()=> this.handleClick(-1)} disabled = {this.checkDisabled(-1)}>Previous Image</button>
                    <button onClick= {()=> this.handleClick(1)} disabled = {this.checkDisabled(1)}>Next Image</button>
                </p>
                <div class = 'container'>
                        <img className = 'ImageStyle' src = {img[indexImg]} />
                    <div>
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}