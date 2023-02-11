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

                <div>
    <form action="/saveinfo.php">
    <label>First Name</label>
    <input type="text" id="fignum" name="fignum" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    
            </div>
        );


        
    }


    
}

export default App;
