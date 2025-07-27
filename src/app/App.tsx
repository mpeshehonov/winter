import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from '../shared/lib/supabase';
import MainPage from '../pages/MainPage';

function App() {
  useEffect(() => {
    supabase.from('members').select('*').then(({ data }) => {
      console.log('Test Supabase data:', data);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
