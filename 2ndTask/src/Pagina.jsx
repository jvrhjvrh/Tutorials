import React from 'react';

export class Pagina extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            indexImg: [0,],
        }
    }
    componentDidUpdate(){
        const {index} = this.props;
        const {indexImg} = this.state;

        var a = indexImg;
        if(a[index] === undefined){
            a[index] = 0;
            this.setState({indexImg:a});
        }
    }
    handleClick(step){
        const {indexImg} = this.state
        const{index} = this.props;
        var a = indexImg;
        a[index] = a[index]+ step;
        this.setState({indexImg:a});
    }
    checkDisabled(step){
        const {indexImg} = this.state;
        const {img, index} = this.props;

        if(step > 0){
            if(indexImg[index] >= img.length-1){
            return true;
            }
            return false;
        }
        if(step < 0){
            if(indexImg[index] <= 0){
            return true;
            }
            return false;
        }
    }

    render(){
        const {name, img, text, index} = this.props;
        const {indexImg} = this.state;
        console.log(indexImg);
        return(
            <div>
                <p>
                    <button onClick= {()=> this.handleClick(-1)} disabled = {this.checkDisabled(-1)}>Previous Image</button>
                    <button onClick= {()=> this.handleClick(1)} disabled = {this.checkDisabled(1)}>Next Image</button>
                </p>
                <div class = 'container'>
                        <img className = 'ImageStyle' src = {img[indexImg[index]]} />
                    <div>
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}