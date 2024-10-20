import { useState } from 'react';

const CreateTeam = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');
  const [game, setGame] = useState('');

  const handleCreateTeam = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/admin/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, players: players.split(','), game }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Team created successfully!');
        setName('');
        setPlayers('');
        setGame('');
      } else {
        console.error('Error creating team:', data);
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleCreateTeam}>
      <h2>Create Team</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Team Name"
        required
      />
      <input
        type="text"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
        placeholder="Player IDs (comma-separated)"
        required
      />
      <select
        value={game}
        onChange={(e) => setGame(e.target.value)}
        required
      >
        <option value="">Select a Game</option>
        <option value="Call of Duty">Call of Duty</option>
        <option value="PUBG">PUBG</option>
        <option value="Blood Strike">Blood Strike</option>
      </select>
      <button type="submit">Create Team</button>
    </form>
  );
};

export default CreateTeam;
