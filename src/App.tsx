import { HelmetProvider } from 'react-helmet-async';
import { SearchProvider } from './context/SearchContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <HelmetProvider>
      <SearchProvider>
        <AppRouter />
      </SearchProvider>
    </HelmetProvider>
  );
}

export default App;
