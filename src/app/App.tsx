import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from '../shared/lib/supabase';
import MainPage from '../pages/MainPage';
import MainLayout from './layouts/MainLayout';
import PlainLayout from './layouts/PlainLayout';
import InfoPage from '../pages/InfoPage';
import ProjectsPage from '../pages/ProjectsPage';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';

function App() {
  useEffect(() => {
    supabase.from('members').select('*').then(({ data }) => {
      console.log('Test Supabase data:', data);
    });
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Route>
      <Route element={<PlainLayout />}>
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
