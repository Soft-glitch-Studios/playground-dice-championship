import React from 'react';
import Game from './components/Game';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-4">
        <Game />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;