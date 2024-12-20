import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import PlayerList from './components/PlayerList';
import AddPlayerForm from './components/AddPlayerForm';
import GameSummary from './components/GameSummary';
import RandomizeButton from './components/RandomizeButton';
import { useGameState } from './hooks/useGameState';
import PlayerView from './components/Playerview';

function App() {
  const {
    players,
    availableRoles,
    handleAddPlayer,
    handleRemovePlayer,
    handleAssignRole,
    handleRandomizeRoles,
  } = useGameState();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Routes>
              {/* Main Page */}
              <Route
                path="/"
                element={
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <Header />
                    
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">Add Players</h2>
                      <AddPlayerForm onAddPlayer={handleAddPlayer} />
                    </div>

                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Players</h2>
                        <RandomizeButton 
                          players={players}
                          availableRoles={availableRoles}
                          onAssignRoles={handleRandomizeRoles}
                        />
                      </div>
                      <PlayerList
                        players={players}
                        onRemovePlayer={handleRemovePlayer}
                        onAssignRole={handleAssignRole}
                        availableRoles={availableRoles}
                      />
                    </div>

                    <GameSummary players={players} />
                  </div>
                }
              />
              
              {/* Player View Page */}
              <Route path="/playerview" element={<PlayerView players={players} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
