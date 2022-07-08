import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { dataService } from './services/dataServices';

export function App() {

  return (
    <Home />
  );
}
