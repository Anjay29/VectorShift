import React, { useState } from 'react';
import { BaseNode } from '../baseNode.js';
import { nodeStyles } from '../styles/nodeStyles.js';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <BaseNode id={id} data={data} inputs={['a', 'b']} outputs={['result']}>
      <div style={nodeStyles.container}>
        <div style={nodeStyles.header}>Math Operation</div>
        <select value={operation} onChange={(e) => setOperation(e.target.value)} style={nodeStyles.select}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </div>
    </BaseNode>
  );
};
