
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import QuestionList from './Components/questlist'
import Textarea from './Components/textArea';
import Question from "./Components/queDisplay";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            question:'-1',
            list:[]
        };
        this.selectquestion=this.selectquestion.bind(this);
    }
    selectquestion(term){
        this.setState({question:term});
        console.log(this.state.question +" 1st console");
        console.log(this.state.question);
    }
    render(){
        return(
            <div>
                <QuestionList sss={this.selectquestion}/>
                 <Question display={this.state.question}/>
                <Textarea />
            </div>
    )
    }

}

ReactDom.render(<App/>,document.querySelector('.container'));