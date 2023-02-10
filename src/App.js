import React from 'react';
import './App.css';
import Figure from "./Figure";
import Box from "./Card";
import BasicCard from './Card';


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


    forms(){
        <form action="signup.html" method="post" id="signup">
	<h1>Sign Up</h1>
	<div class="field">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" placeholder="Enter your fullname" />
		<small></small>
	</div>
	<div class="field">
		<label for="email">Email:</label>
		<input type="text" id="email" name="email" placeholder="Enter your email address" />
		<small></small>
	</div>
	<button type="submit">Subscribe</button>
</form>
    }

    
}

export default App;
