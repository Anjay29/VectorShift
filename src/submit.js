// submit.js

// export const SubmitButton = () => {

//     return (
//         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <button type="submit">Submit</button>
//         </div>
//     );
// }


export const SubmitButton = ({ nodes, edges }) => {

console.log(JSON.stringify({ nodes, edges }));

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nodes, edges }),
        
      });

      console.log(res);
      
      if (!res.ok) throw new Error('Something wrong');
      
      const data = await res.json();
      console.log(data);

      alert(`Number of nodes: ${data.num_nodes}\n Number of edges: ${data.num_edges}\n Is DAG: ${data.is_dag}`);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};