import logo from './logo.svg';
import './App.css';
import { TableContainer } from './Components/TableContainer';
import { Data } from './TestData';
import { Data2 } from './TestData2';

import {VHPapp} from './Components/VHP/AppBox';


/* Template App
  Extends an AppBox to enherit functionality used in all applications (or not
  used if not needed), as well as inherit the react Component class. This should
  mean a shared state as well.

  Config files can be created for each created App to notify what parts of the
  AppBox will be required. Parts that are not required can simply be ignored.
  It may be useful to then store that config in state to be available for change
  by the App


*/
class DevApp extends VHPapp{
  constructor(props){
    super(props);
  }

  renderApp(props){
    return(
      <>
      {this.deliverTools()}
      <div>
        App content
      </div>
      </>
    )
  }
  render(){
    return(
      <div>
        <>
        {this.userLogIO() || this.renderApp()}
        </>
      </div>
    );
  }
}


var configdefault = {
  tb:{
    qacts:[],
    macts:[
      {
        key:'save',
        id:'wo-save-button',
        src:'http://vhpportal.com/Tech/bin/repo/assets/icons/disk.png',
        title:'Save WO',
        onClick:(ele)=>{
          console.log('Save Page');
        }
      },
      {
        key:'refresh',
        id:'wo-refresh-button',
        src:'http://vhpportal.com/Tech/bin/repo/assets/icons/refresh.png',
        title:'Refresh WO',
        onClick:(ele)=>{   // Refresh info
          console.log('Refresh Page')
        }
      }
    ]
  },
  user:{
  }
}
function App() {
  return (
    <DevApp config={configdefault}/>
  );
}

export default App;
