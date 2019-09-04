import React, { Component } from 'react'

import Question from './QA/Question'
import Answer from './QA/Answer'

export default class Mongo extends Component {
    render() {
        return (
            <>

<div className="jumbotron" style={{height:'200px',marginTop:'-30px'}}>
<a href="/" style={{float:'right',textDecoration:'none',fontSize:'3em'}} class="material-icons">home</a>

    <h1>Mongo DB</h1>
    <p>Document database with the scalability and flexibility that you want with the querying and indexing that you need.</p>
  </div>           
  

  <Question />

  <Answer />
  
  
  
  
  
  
  
   </>
        )
    }
}
