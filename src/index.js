import React from 'react';
import {createRoot} from 'react-dom/client';
import MyNotesApp from './components/MyNotesApp';
import './assets/styles/style.css';
const root = createRoot(document.getElementById('root'));
root.render(<MyNotesApp/>);