import React,{Component} from 'react';
class Textarea extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    onInputChange(term){
        this.setState({text:term});
    }
    render() {
        return(
             <div >
                <textarea value = {this.state.term} onChange = {(event) => this.onInputChange(event.target.value)} rows={20} cols={100}/>
            </div>
        );
    }
}
export default Textarea;