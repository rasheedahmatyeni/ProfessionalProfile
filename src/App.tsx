import { Layout } from './components/Layout';
import { useRoute } from './router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';
import { CVPage } from './pages/CVPage';

function App() {
  const route = useRoute();

  const page = (() => {
    switch (route.name) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'education':
        return <EducationPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'contact':
        return <ContactPage />;
      case 'cv':
        return <CVPage />;
      default:
        return <HomePage />;
    }
  })();

  return <Layout>{page}</Layout>;
}

export default App;
