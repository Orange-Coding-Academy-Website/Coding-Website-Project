import React, { PureComponent } from "react";

import Header from "./component/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialCode from "./component/MaterialCode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HTMLBasic from './component/TransferToMaterial/HTMLBasic'
// import HTMLIntermediate from './component/TransferToMaterial/HTMLIntermediate'
// import HTMLAdvanced from './component/TransferToMaterial/HTMLAdvanced'
// import CssBasic from './component/TransferToMaterial/CssBasic'
// import CssIntermediate from './component/TransferToMaterial/CssIntermediate'
// import CssAdvanced from './component/TransferToMaterial/CssAdvanced'
// import JSBasic from './component/TransferToMaterial/JSBasic'
// import JSIntermediate from './component/TransferToMaterial/JSIntermediate'
// import JSAdvance from './component/TransferToMaterial/JSAdavance'

export class AppTamimi extends PureComponent {
  state = { HeaderShow: true };
  render() {
    return (
      <div>
        <Router>
          {/* <Header/> */}

          <Switch>
            {/* <Route path="/" exact component={Home}/> */}
            <Route path="/material" exact component={MaterialCode} />
            {/* <Route path="/material/0" component={HTMLBasic}/>
                  <Route path="/material/1" component={HTMLIntermediate}/>
                  <Route path="/material/2" component={HTMLAdvanced}/>

                  <Route path="/material/3" component={CssBasic}/>
                  <Route path="/material/4" component={CssIntermediate}/>
                  <Route path="/material/5" component={CssAdvanced}/>
                  <Route path="/material/6" component={JSBasic}/>
                  <Route path="/material/7" component={JSIntermediate}/>
                  <Route path="/material/8" component={JSAdvance}/> */}
          </Switch>
        </Router>

        {/* < /> */}
      </div>
    );
  }
}
// const Home =()=>(
//   <div>
//     <h1>Home page</h1>
//     </div>

// )
export default AppTamimi;
