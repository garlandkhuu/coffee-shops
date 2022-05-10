import { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppWrapper, PageWrapper } from './App.styles';
import Header from './components/Header';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';
import store from './store';
import './App.css';

const App = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>();

  return (
    <Provider store={store}>
      <Router>
        <AppWrapper>
          <Header />
          <PageWrapper>
            <Routes>
              <Route
                path="/"
                element={<SearchPage setPlaceId={setSelectedPlaceId} />}
              />
              <Route
                path="/details"
                element={<DetailsPage placeId={selectedPlaceId} />}
              />
            </Routes>
          </PageWrapper>
        </AppWrapper>
      </Router>
    </Provider>
  );
};

export default App;
