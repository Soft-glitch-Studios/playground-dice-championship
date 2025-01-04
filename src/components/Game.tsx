import React, { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Dice6 } from 'lucide-react';

const Game = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const { toast } = useToast();

  const guestName = `Guest_${Math.floor(Math.random() * 1000)}`;
  
  const rollDice = () => {
    setIsRolling(true);
    console.log('Rolling dice...');
    
    // Simulate dice roll
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    
    setTimeout(() => {
      setDice1(newDice1);
      setDice2(newDice2);
      const newScore = newDice1 + newDice2;
      setScore(prevScore => prevScore + newScore);
      setIsRolling(false);
      
      console.log(`Rolled: ${newDice1} and ${newDice2}`);
      toast({
        title: "Dice Rolled!",
        description: `You rolled ${newDice1} and ${newDice2} for a total of ${newScore}`,
      });
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Dice Game</h1>
        <p className="text-gray-600">Playing as: {guestName}</p>
        <Button variant="outline" className="mt-2">
          Sign In
        </Button>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <div className="dice-container">
          <Dice6 
            className={`w-16 h-16 ${isRolling ? 'animate-spin' : ''}`} 
            data-value={dice1}
          />
          <span className="block text-center mt-2">{dice1}</span>
        </div>
        <div className="dice-container">
          <Dice6 
            className={`w-16 h-16 ${isRolling ? 'animate-spin' : ''}`} 
            data-value={dice2}
          />
          <span className="block text-center mt-2">{dice2}</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-xl font-bold">Total Score: {score}</p>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={rollDice} 
          disabled={isRolling}
          className="bg-blue-500 hover:bg-blue-700"
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </Button>
      </div>

      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">High Scores</h2>
        <div className="space-y-2">
          <p className="text-gray-600">No scores yet</p>
        </div>
      </div>
    </div>
  );
};

export default Game;