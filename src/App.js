import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Screen from './Screen';
import { useState } from 'react';
import { SelectButton } from 'primereact/selectbutton';

function App() {

  const options = ['Screen1', 'Screen2'];
  const [value, setValue] = useState(options[0])

  return (
    <div className='container-fluid'>
      <div className='row mt-3 mb-3'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4 text-center'>
          <div className="flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
          </div>
        </div>
      </div>
      <Screen value={value} />
    </div>
  );
}

export default App;
