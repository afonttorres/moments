import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/search' element={<Searcher />}></Route>
                <Route path='/log-in' element={<Login />}></Route>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/upload' element={<Upload />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/profile/:profileId' element={<Profile />}></Route>
                <Route path='/home/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/profile/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/profile/:profileId/detail/:momentId' element={<MomentDetail />}></Route>
                <Route path='/moments/:momentId/print' element={<Print />}></Route>
                <Route path='/settings' element={<Settings />}></Route>
                <Route path='/favorites' element={<Likes />}></Route>
                <Route path='/saved' element={<Saves />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


