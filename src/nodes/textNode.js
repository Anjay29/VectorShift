// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { BaseNode } from './baseNode.js';
import { nodeStyles } from './styles/nodeStyles.js';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);

  // Extract variables in {{ variable }} format and update handles
  useEffect(() => {
    const variablePattern = /\{\{\s*(\w+)\s*\}\}/g;
    const matchedVariables = [...text.matchAll(variablePattern)].map(match => match[1]);
    setHandles(matchedVariables); // Update handles with variables
  }, [text]);

  return (
    <BaseNode 
      id={id} 
      data={data} 
      inputs={handles} 
      outputs={['output']}
      width={240} 
      height={90 + handles.length * 8}  // Adjust height based on number of handles
    >
      <span style={nodeStyles.header}>Text</span>
      <div style={{ ...nodeStyles.container, height: '90%', overflow: 'hidden'}}>
        <label style={nodeStyles.label}>
          Text :
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ 
              ...nodeStyles.input,
              width: '90%', 
              height: '75%',
              maxHeight: '85%',
              overflow: 'auto',
              resize: 'none',
              padding: '5px',
              marginLeft: '6px',
              marginTop: '6px',
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};