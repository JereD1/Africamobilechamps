import { useState, useEffect } from 'react';

const TournamentsList = () => {
  const [tournaments, setTournaments] = useState([]);

  // Fetch tournaments when the component mounts
  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/tournament'); // Fetch tournaments from backend
        const data = await response.json();
        if (response.ok) {
          setTournaments(data); // Store tournaments in state
        } else {
          console.error('Error fetching tournaments:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div>
      <h2>Tournaments</h2>
      {tournaments.length === 0 ? (
        <p>No tournaments found.</p>
      ) : (
        <ul>
          {tournaments.map((tournament) => (
            <li key={tournament._id}>
              <h3>{tournament.name}</h3>
              <p>Teams: {tournament.teams.join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TournamentsList;
