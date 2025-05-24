import React from 'react';
import './App.css';

// Import your dashboard components
import CalendarView from './components/dashboard/CalendarView';
import UpcomingSchedule from './components/dashboard/UpcomingSchedule';
import ActivityFeed from './components/dashboard/ActivityFeed';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Healthcare Dashboard</h1>
      </header>

      <main>
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </main>
    </div>
  );
}

export default App;
