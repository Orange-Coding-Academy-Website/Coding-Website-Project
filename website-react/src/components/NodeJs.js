import React, { Component } from 'react'

import Question from './QA/Question'
import Answer from './QA/Answer'

export default class NodeJs extends Component {
    render() {
        return (
            <>

<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
<a href="/" style={{float:'right',textDecoration:'none',fontSize:'3em'}} class="material-icons">home</a>

    <h1>NodeJs</h1>
    <p>JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
  </div>           
  

  <Question />

  <Answer />
  
  
  
  
  
  
  
   </>
        )
    }
}
