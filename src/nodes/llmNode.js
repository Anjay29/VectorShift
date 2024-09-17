// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

// LLMNode.js
import React from 'react';
import { BaseNode } from './baseNode.js';
import { nodeStyles } from './styles/nodeStyles.js';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} inputs={['system', 'prompt']} outputs={['response']}>
      <div style={nodeStyles.container}>
        <span style={nodeStyles.header}>LLM</span>
        <span style={nodeStyles.label}>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};


// LLMNode.js
// import { BaseNode } from './baseNode.js';

// export const LLMNode = ({ id, data }) => {
//   const inputs = [];
//   const handleInputs = [
//     { id: 'system' },
//     { id: 'prompt' },
//   ];

//   const outputs = [{ id: 'response' }];

//   return (
//     <BaseNode
//       id={id}
//       data={data}
//       label="LLM"
//       inputs={inputs}
//       handleInputs={handleInputs}
//       handleOutputs={outputs}
//     />
//   );
// };