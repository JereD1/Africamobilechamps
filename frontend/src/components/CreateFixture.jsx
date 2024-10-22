import { useState } from 'react';

const CreateFixture = () => {
  const [tournamentId, setTournamentId] = useState('');
  const [teamIds, setTeamIds] = useState('');
  const [date, setDate] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [map, setMap] = useState('');
  const [round, setRound] = useState('');

  const handleCreateFixture = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/fixture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tournamentId, teamIds: teamIds.split(','), date, gameMode, map, round }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Fixture created successfully!');
        setTournamentId('');
        setTeamIds('');
        setDate('');
        setGameMode('');
        setMap('');
        setRound('');
      } else {
        console.error('Error creating fixture:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleCreateFixture}>
      <h2>Create Fixture</h2>
      <input
        type="text"
        value={tournamentId}
        onChange={(e) => setTournamentId(e.target.value)}
        placeholder="Tournament ID"
        required
      />
      <input
        type="text"
        value={teamIds}
        onChange={(e) => setTeamIds(e.target.value)}
        placeholder="Team IDs (comma-separated)"
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={gameMode}
        onChange={(e) => setGameMode(e.target.value)}
        placeholder="Game Mode (e.g., Search & Destroy)"
        required
      />
      <input
        type="text"
        value={map}
        onChange={(e) => setMap(e.target.value)}
        placeholder="Map Name"
        required
      />
      <input
        type="text"
        value={round}
        onChange={(e) => setRound(e.target.value)}
        placeholder="Round (e.g., Quarterfinal)"
        required
      />
      <button type="submit">Create Fixture</button>
    </form>
  );
};

export default CreateFixture;
