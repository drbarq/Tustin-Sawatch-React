import React from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import DataTable from './components/DataTable';
import HeaderElements from './components/HeaderElements';

export default function App() {
  return (
    <React.Fragment>
      <HeaderElements />
      <DataTable />
    </React.Fragment>
  );
}

