
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";



const DropDown = ({ options }) => {
  const [selected, setSelected] = useState([]);


  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected.label)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default DropDown;



// import React from 'react';
// import Select from '@atlaskit/select';
// //import { cities } from '../common/data';

// const SelectMultiExample = () => (
//   <>
//     <label htmlFor="multi-select-example">Assign to:</label>
//     <Select
//       inputId="multi-select-example"
//       className="multi-select dropdown"
//       classNamePrefix="react-select"
//       options={[
//         { label: 'Adelaide', value: 'adelaide', extra: 'extra' },
//         { label: 'Brisbane', value: 'brisbane' },
//         { label: 'Canberra', value: 'canberra' },
//         { label: 'Darwin', value: 'darwin' },
//         { label: 'Hobart', value: 'hobart' },
//         { label: 'Melbourne', value: 'melbourne' },
//         { label: 'Perth', value: 'perth' },
//         { label: 'Sydney', value: 'sydney' }
//       ]
//       }
//       isMulti
//       isSearchable={false}
//       placeholder="Choose Amongst Your Teammates"
//     />
//   </>
// );

// export default SelectMultiExample;