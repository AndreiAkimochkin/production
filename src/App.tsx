import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './styles/index.css'
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

  const {theme, toggleTheme} = useTheme()

    const AboutPageChunk = React.lazy(() => import('./pages/AboutPage/AboutPage'))
    const MainPageChunk = React.lazy(() => import('./pages/MainPage/MainPage'))
    return (
        <div className={classNames('app', {},[ theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageChunk/>}/>
                    <Route path={'/'} element={<MainPageChunk/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;