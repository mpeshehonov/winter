import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../shared/lib/supabase';
import MainPage from '../pages/MainPage';
import MainLayout from './layouts/MainLayout';
import PlainLayout from './layouts/PlainLayout';
import InfoPage from '../pages/InfoPage';
import ProjectsPage from '../pages/ProjectsPage';
import TeamPage from '../pages/TeamPage';
import ContactPage from '../pages/ContactPage';
import BackgroundVideo from '../widgets/BackgroundVideo';
import styled from '@emotion/styled';

const VideoVisibility = styled.div<{ hidden?: boolean }>`
  display: ${({ hidden }) => hidden ? 'none' : 'block'};
`;

function App() {
  const location = useLocation();
  const isInfo = location.pathname === '/info';
  useEffect(() => {
    supabase.from('members').select('*').then(({ data }) => {
      console.log('Test Supabase data:', data);
    });
  }, []);

  return (
    <>
      <VideoVisibility hidden={isInfo}>
        <BackgroundVideo />
      </VideoVisibility>
      <Routes>
        <Route element={<MainLayout variant="default" />}> 
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Route>
        <Route element={<MainLayout variant="inverted" backgroundColor="#ffffff" />}> 
          <Route path="/info" element={<InfoPage />} />
        </Route>
        <Route element={<PlainLayout />}>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
