import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { FavoriteAlbumsPage, FavoriteArtistsPage, FavoriteTracksPage, SearchResultsPage, TopTracksPage, Home, TopAlbumsPage, TopArtistsPage } from './pages'
import TracksContextProvider from './context/TracksContext'
import TopAlbumsContextProvider from './context/TopAlbumsContext'
import AudioContextProvider from './context/AudioContext'
import { ReactQueryDevtools } from 'react-query-devtools'
import { QueryCache, ReactQueryCacheProvider } from "react-query"
import TopArtistsContextProvider from './context/TopArtistsContext'
import SearchContextProvider from './context/SearchContext'
import UserContextProvider from './context/UserContext'
import FavoriteTracksContextProvider from './context/FavoriteTracksContext'


const queryCache = new QueryCache();

function App() {
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <UserContextProvider>
          <AudioContextProvider>
            <TopAlbumsContextProvider>
              <TracksContextProvider>
                <TopArtistsContextProvider>
                  <SearchContextProvider>
                    <FavoriteTracksContextProvider>
                      <BrowserRouter>
                        <Header />
                        <main>
                          <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/favoriteAlbums' component={FavoriteAlbumsPage} />
                            <Route path='/favoriteTracks' component={FavoriteTracksPage} />
                            <Route path='/favoriteArtists' component={FavoriteArtistsPage} />
                            <Route path='/tracks' component={TopTracksPage} />
                            <Route path='/albums' component={TopAlbumsPage} />
                            <Route path='/artists' component={TopArtistsPage} />
                            <Route path='/search' component={SearchResultsPage} />
                          </Switch>
                        </main>
                      </BrowserRouter>
                    </FavoriteTracksContextProvider>
                  </SearchContextProvider>
                </TopArtistsContextProvider>
              </TracksContextProvider>
            </TopAlbumsContextProvider>
          </AudioContextProvider>
        </UserContextProvider>
        <ReactQueryDevtools initialIsOpen />
      </ReactQueryCacheProvider>
    </>
  );
}

export default App;
