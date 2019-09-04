import React, { Component } from 'react'

export default class Answer extends Component {
    render() {

      const {addQ} = this.props;

        return (

          

            <div>
                <br></br>
                <ul class="list-group" style={{width:'95%',margin:'auto'}}>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <span class="badge badge-primary badge-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <span class="badge badge-primary badge-pill">1</span>
  </li>


  {  addQ.map((elem)=>(
        <li class="list-group-item d-flex justify-content-between align-items-center"> {elem.title} 
        <span class="badge badge-primary badge-pill">4</span>
        </li>
        
       ))       }

</ul>




            </div>
        )
    }
}
