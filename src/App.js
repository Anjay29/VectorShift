import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  const nodes = [
    { id: 'node1', data: { name: 'Node 1' } },
    { id: 'node2', data: { name: 'Node 2' } },
  ];
  
  const edges = [
    { source: 'node1', target: 'node2' },
  ];
  
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
