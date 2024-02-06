import UpdateTable from './UpdateTable/UpdateTable'
import Component from './Apifolder/Api\'s';
import MyComponent from './Apifolder/Api\'s';
import './App.css';
import DynamicTable from './Project/StaticTable';
import StaticTable from './Project/StaticTable';
import SignUp from './register/Register';
import Register from './register/Register';
import AlertRegister from './register/AlertRegister';
import UpdateRegisterForm from './register/UpdateRegisterForm';
import ErrorInOne from './register/ErrorInOne';
import AllErrorInOne from './register/ErrorInOne';
import UpdateRegisterForms from './register/ErrorInOne';

function App() {
  return (
    <div className="App">
   {/* <DynamicTable/>
   <SignUp/>
   <Component/> */}
{/* <MyComponent/> */}
{/* <UpdateTable/> */}
<Register/>
<AlertRegister/>
<UpdateRegisterForms/>
    </div>
    
  );
}

export default App;
