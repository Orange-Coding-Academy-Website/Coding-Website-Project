import React, { Component } from 'react'
import Question from './QA/Question'
import Answer from './QA/Answer'


export default class Css extends Component {
    render() {
        return (
            <>


<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
<a href="/" style={{float:'right',textDecoration:'none',fontSize:'3em'}} class="material-icons">home</a>

    <h1>CSS</h1>
    <p>The language for designing web pages.</p>
  </div>           
  

  <Question />

  <Answer addQ={[]} />
  
  
  
  
  
  
  
   </>
        )
    }
}
