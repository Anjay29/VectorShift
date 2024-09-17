import React, { useState } from 'react';
import { BaseNode } from '../baseNode.js';
import { nodeStyles } from '../styles/nodeStyles.js';

export const TranslationNode = ({ id, data }) => {
  const [targetLanguage, setTargetLanguage] = useState(data?.targetLanguage || 'en');

  return (
    <BaseNode id={id} data={data} inputs={['text']} outputs={['translated']}>
      <div style={nodeStyles.container}>
        <div style={nodeStyles.header}>Translate</div>
        <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} style={nodeStyles.select}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>
    </BaseNode>
  );
};

// // TranslationNode.js
// import { BaseNode } from '../baseNode.js';

// export const TranslationNode = ({ id, data }) => {
//   const inputs = [
//     { name: 'textInput', type: 'text', defaultValue: 'Enter text here' }, // Input for the text to translate
//     { name: 'targetLanguage', type: { options: ['English', 'Spanish', 'French', 'German'] }, defaultValue: 'English' } // Dropdown for selecting target language
//   ];

//   const handleInputs = [{ id: 'inputText' }];  // Input handle for receiving text to translate
//   const outputs = [{ id: 'translatedText' }];  // Output handle for translated text

//   return (
//     <BaseNode
//       id={id}
//       data={data}
//       label="Translation"
//       inputs={inputs}
//       handleInputs={handleInputs}
//       handleOutputs={outputs}
//     />
//   );
// };
