import { useState } from 'react';

const CreateTournament = () => {
  const [name, setName] = useState('');


  const handleCreateTournament = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/admin/tournament', {  // Update the URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Tournament created successfully!');
        setName('');
      } else {
        console.error('Error creating tournament:', data);
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form onSubmit={handleCreateTournament}>
      <h2>Create Tournament</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tournament Name"
        required
      />
      <button type="submit">Create Tournament</button>
    </form>
  );
};

export default CreateTournament;
