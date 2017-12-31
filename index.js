
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import QuestionList from './Components/questlist'
import Textarea from './Components/textArea';
import Question from "./Components/queDisplay";
import Timer from "./Components/timer";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            question:'-1',
            list:[],
            seconds:3600,
            mf:0
        };
        this.tf=this.tf.bind(this);
        this.selectquestion=this.selectquestion.bind(this);
        this.tf();
    }
    selectquestion(term){
        this.setState({question:term});
        console.log(this.state.question +" 1st console");
        console.log(this.state.question);
    }

    tf(){

            setInterval(() => {
                {
                    if (this.state.seconds > 0)
                        this.setState({seconds: this.state.seconds - 1});
                }
            }, 1000);

    }
    render(){
        return(
            <div>
                <QuestionList sss={this.selectquestion}/>
                 <Question display={this.state.question}/>
                <Timer td={this.tf()} sec={this.state.seconds}/>
                <Textarea />
            </div>
    )
    }

}

ReactDom.render(<App/>,document.querySelector('.container'));