import React,{Component} from 'react';
const QuestionList= (props)=>{
    return(
        <ul>
            <li onClick={()=>{props.sss("question 1")}}>
               question 1
            </li>
            <li onClick={()=>{props.sss("question 2")}}>
                question 2
            </li>
            <li onClick={()=>{props.sss("question 3")}}>
                question 3
            </li>
        </ul>
    );
}
export default QuestionList;