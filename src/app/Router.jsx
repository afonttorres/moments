import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Profile/Profile';
import { Upload } from '../pages/Upload/Upload';
import { MomentDetail } from '../pages/Detail/Detail'
import { Searcher } from '../pages/Searcher/Searcher';
import { Print } from '../pages/Print/Print';
import { Settings } from '../pages/Settings/Settings';
import { Likes } from '../pages/Likes/Likes';
import { Saves } from '../pages/Saves/Saves';
import { AuthService } from '../services/AuthService';

export default function Router() {


    const AuthRoute = ({ children }) => {
        if (AuthService.getAuth().token) return <Navigate to="/" />
        return children;
    }

    const NotAuth = ({ children }) => {
        if (!AuthService.getAuth().token) return <Navigate to="/log-in" />
        return children;
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/search' element={
                    <NotAuth>
                        <Searcher />
                    </NotAuth>
                }>
                </Route>
                <Route path='/log-in'
                    element={
                        <AuthRoute>
                            <Login />
                        </AuthRoute>

                    }>
                </Route>
                <Route path='/sign-in'
                    element={
                        <AuthRoute>
                            <Login />
                        </AuthRoute>
                    }>
                </Route>
                <Route path='/upload'
                    element={
                        <NotAuth>
                            <Upload />
                        </NotAuth>
                    }>

                </Route>
                <Route path='/profile'
                    element={
                        <NotAuth>
                            <Profile />
                        </NotAuth>

                    }>
                </Route>
                <Route path='/profile/:profileId' element={<Profile />}></Route>
                <Route path='/home/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/profile/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/profile/:profileId/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/moments/:momentId/print' element={<Print />}></Route>
                <Route path='/settings'
                    element={
                        <NotAuth>
                            <Settings />
                        </NotAuth>
                    }>
                </Route>
                <Route path='/favorites'
                    element={
                        <NotAuth>
                            <Likes />
                        </NotAuth>
                    }>
                </Route>
                <Route path='/saved'
                    element={
                        <NotAuth>
                            <Saves />
                        </NotAuth>
                    }>
                </Route>
                <Route path='/notifications'
                    element={
                        <NotAuth>
                            <noscript>provisional</noscript>
                            <Home />
                        </NotAuth>
                    }>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


