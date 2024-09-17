// BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';

const baseStyles = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '8px',
  background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
};

const handleStyles = {
  width: '8px',
  height: '8px',
  background: '#784be8',
  border: '2px solid #ffffff',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
};

export const BaseNode = ({ id, children, inputs = [], outputs = [], width = 200, height = 80 }) => {
  return (
    <div style={{ ...baseStyles, width, height }}>

      {inputs.map((input, index) => (
        <Handle
          key={`input-${id}-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{
            ...handleStyles,
            left: '-6px',
            top: `${((index + 1) / (inputs.length + 1)) * 100}%`,
          }}
        />
      ))}
      

      {children}


      {outputs.map((output, index) => (
        <Handle
          key={`output-${id}-${index}`} // Unique key for output handles
          type="source"
          position={Position.Right}
          id={`${id}-${output}`} // Ensure unique id for output handles
          style={{
            ...handleStyles,
            right: '-6px',
            top: `${((index + 1) / (outputs.length + 1)) * 100}%`,
          }}
        />
      ))}
    </div>
  );
};