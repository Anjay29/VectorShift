// // inputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Input</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input 
//             type="text" 
//             value={currName} 
//             onChange={handleNameChange} 
//           />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-value`}
//       />
//     </div>
//   );
// }


import React, { useState } from 'react';
import { BaseNode } from './baseNode.js';
import { nodeStyles } from './styles/nodeStyles.js';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || id.replace('customInput-', 'input_'));
  const [dataType, setDataType] = useState(data?.dataType || 'Text');

  return (
    <BaseNode id={id} data={data} outputs={['value']} width={240} height={120}>
      <div style={nodeStyles.container}>
        <span style={nodeStyles.header}>Input</span>

        <div style={nodeStyles.container}>
          <label style={nodeStyles.label}>
            Name : {" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={nodeStyles.input}
            />
          </label>

          <label style={nodeStyles.label}>
            Type : {" "}
            <select
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              style={nodeStyles.select}
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
    </BaseNode>
  );
};

// InputNode.js
// import { BaseNode } from './baseNode.js';

// export const InputNode = ({ id, data }) => {
//   const inputs = [
//     { name: 'inputName', type: 'text', defaultValue: id.replace('customInput-', 'input_') },
//     { name: 'inputType', type: { options: ['Text', 'File'] }, defaultValue: 'Text' },
//   ];

//   const outputs = [{ id: 'value' }];

//   return (
//     <BaseNode
//       id={id}
//       data={data}
//       label="Input"
//       inputs={inputs}
//       handleOutputs={outputs}
//     />
//   );
// };