import React from 'react';
import './App.css';
import Figure from "./Figure";
import Box from "./Card";
import BasicCard from './Card';
import  Radio  from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './saveinfo.php';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            figures : [],
            currentFigureIndex: 0,
            figuresLoaded: false
        };
        this.changeFigure = this.changeFigure.bind(this);
    }
    

    componentDidMount() {
        fetch("https://files.catbox.moe/7dvpgw.json")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    figures: res,
                    figuresLoaded: true
                })
            })
    }

    changeFigure(increment) {
        if (increment === true) {
            if (this.state.currentFigureIndex === 29688) {
                this.setState({currentFigureIndex: 0});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex + 1});
            }
        } else {
            if (this.state.currentFigureIndex === 0) {
                this.setState({currentFigureIndex: 29688});
            } else {
                this.setState({currentFigureIndex: this.state.currentFigureIndex - 1});
            }
        }
    }

    getFigureInfo(index) {
        if (!this.state.figuresLoaded) {
            return {name: "",
                    doi: "",
                    year: ""};
        } else {
            return {name: this.state.figures["in"][index]["name"],
                    doi: this.state.figures["in"][index]["doi"],
                    year: this.state.figures["in"][index]["year"]};
        }
    }

    getImgURL(index) {
        if (!this.state.figuresLoaded) {
            return "https://i.imgur.com/llF5iyg.gif";
        } else {
            return this.state.figures["in"][index]["url"];
        }
    }

    

    render() {
        document.title = "Figure Viewer";
        let figureInfo = this.getFigureInfo(this.state.currentFigureIndex);
        return (
            <div className="App">
                <div className="metadata">
                    <p>Title: {figureInfo.name}</p>
                    <p>Year: {figureInfo.year}</p>
                    <p>DOI: {figureInfo.doi}</p>
                </div>
                <button className="buttons" onClick={() => this.changeFigure(false)}>Previous</button>
                <div className="Figure">
                    <Figure imgUrl={this.getImgURL(this.state.currentFigureIndex)}/>
                    <p id={"figure-label"}>Figure {this.state.currentFigureIndex + 1}</p>
                </div>
                <button className="buttons" onClick={() => this.changeFigure(true)}>Next</button>

                <form action = "/saveinfo.php" onsubmit = "/saveinfo.php">
                <p>What figure number are you annotating?</p>
                <input 
                type = "text"
                name = "fignum"
                id = "finum"
                />
                <p>Is the image black and white, greyscale or colour?</p>
                <input 
                type = "text"
                name = "imgC"
                id = "imgC"
                />
                    <p>Is the colour used for aesthetics or data visualisation (n/a if not colour)?</p>
                    <input 
                type = "text"
                name = "colUse"
                id = "colUse"
                />
                    <p>Is a colour mapping legend shown?</p>
                    <input 
                type = "text"
                name = "mapL"
                id = "mapL"
                />
                    <p>how many colours are used?</p>
                    <input 
                type = "text"
                name = "colN"
                id = "colN"
                />
                    <p>Is the colour mapping categorical or continuous?</p>
                    <input 
                type = "text"
                name = "colMap"
                id = "colMap"
                />
                    <p>On a scale of 1 to 5 how difficult is it to annotate this image?</p>
                    <input 
                type = "text"
                name = "diff"
                id = "diff"
                />
                    <input type = "submit" onClick={e => this.handleFormSubmit(e)} value = "Submit Annotations"/>
                </form>
            </div>
        );


        
    }


    
}

export default App;
