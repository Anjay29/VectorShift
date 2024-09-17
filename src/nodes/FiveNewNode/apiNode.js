import React, { useState } from 'react';
import { BaseNode } from '../baseNode.js';
import { nodeStyles } from '../styles/nodeStyles.js';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode id={id} data={data} inputs={['params']} outputs={['response']} width={240} height={120}>
      <div style={nodeStyles.container}>
        <div style={nodeStyles.header}>API Request</div>
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter API URL"
          style={nodeStyles.input}
        />
        <select 
          value={method} 
          onChange={(e) => setMethod(e.target.value)}
          style={nodeStyles.select}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
    </BaseNode>
  );
};
