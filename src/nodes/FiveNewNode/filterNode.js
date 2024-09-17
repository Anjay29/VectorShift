import React, { useState } from 'react';
import { BaseNode } from '../baseNode.js';
import { nodeStyles } from '../styles/nodeStyles.js';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  return (
    <BaseNode id={id} data={data} inputs={['input']} outputs={['filtered']}>
      <div style={nodeStyles.container}>
        <div style={nodeStyles.header}>Filter</div>
        <input 
          type="text" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Enter filter condition"
          style={nodeStyles.input}
        />
      </div>
    </BaseNode>
  );
};