import React, { Component } from 'react'
import Question from './QA/Question'
import Answer from './QA/Answer'


export default class Css extends Component {

    state = {
        addQ: [],
        DATA:[]
      };
    
       add =  async (title, subject,priority) => {
        const newQ = {
          title,
          subject,
          priority,
          name:'CSS'
        };
          await this.setState({
           addQ: [...this.state.addQ, newQ]
        });
    
        this.props.addPost(this.state.addQ[0].title,this.state.addQ[0].subject,this.state.addQ[0].priority,this.state.addQ[0].name)
      };
    

    render() {
        return (
            <>


<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
<a href="/" style={{float:'right',textDecoration:'none',fontSize:'3em'}} class="material-icons">home</a>

    <h1>CSS</h1>
    <p>The language for designing web pages.</p>
  </div>           
  

  <Question add={this.add} />

  <Answer CSS={this.props.CSS} nam = {"CSS"} />
  
  
  
  
  
  
  
   </>
        )
    }
}
