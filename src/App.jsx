import { useState } from 'react'
import {Route,Routes} from 'react-router';
import {
  Create,
  NowPlaying,
  Popular,
  TopRated
} from './pages/movies';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import { theme } from './utils/constants/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            {/* <Route path='/movie/create' element={<Create />}></Route> */}
            <Route path='/movie/popular' element={<Popular />}></Route>
            <Route path='/movie/now_playing' element={<NowPlaying />}></Route>
            <Route path='/movie/top_rated' element={<TopRated />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
