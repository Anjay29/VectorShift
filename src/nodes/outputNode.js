// // outputNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const OutputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
//   const [outputType, setOutputType] = useState(data.outputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setOutputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-value`}
//       />
//       <div>
//         <span>Output</span>
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
//           <select value={outputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">Image</option>
//           </select>
//         </label>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { BaseNode } from './baseNode.js';
import { nodeStyles } from './styles/nodeStyles.js';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || id.replace('customOutput-', 'output_'));
  const [dataType, setDataType] = useState(data?.dataType || 'Text');

  return (
    <BaseNode id={id} data={data} inputs={['value']} width={240} height={120}>
      <div style={nodeStyles.container}>
        <span style={nodeStyles.header}>Output</span>

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
    </BaseNode>
  );
};


// import { BaseNode } from './baseNode.js';

// export const OutputNode = ({ id, data }) => {
//   const defaultOutputName = data?.outputName || id.replace('customOutput-', 'output_');
  
//   const inputs = [
//     { name: 'outputName', type: 'text', defaultValue: defaultOutputName },
//     { name: 'outputType', type: { options: ['Text', 'File'] }, defaultValue: 'Text' },
//   ];

//   const handleInputs = [{ id: 'value' }];

//   return (
//     <BaseNode
//       id={id}
//       data={data}
//       label="Output"
//       inputs={inputs}
//       handleInputs={handleInputs}
//     />
//   );
// };