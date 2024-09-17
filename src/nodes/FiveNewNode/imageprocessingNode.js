import React, { useState } from 'react';
import { BaseNode } from '../baseNode.js';
import { nodeStyles } from '../styles/nodeStyles.js';

export const ImageProcessingNode = ({ id, data }) => {
  const [effect, setEffect] = useState(data?.effect || 'blur');

  return (
    <BaseNode id={id} data={data} inputs={['image']} outputs={['processed']}>
      <div style={nodeStyles.container}>
        <div style={nodeStyles.header}>Image Processing</div>
        <select value={effect} onChange={(e) => setEffect(e.target.value)} style={nodeStyles.select}>
          <option value="blur">Blur</option>
          <option value="sharpen">Sharpen</option>
          <option value="grayscale">Grayscale</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>
    </BaseNode>
  );
};