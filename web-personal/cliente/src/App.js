import React from 'react';
import {DatePicker, Card} from 'antd';
import './App.scss';

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className="app">
      <h1>Te amo ana</h1>
      <h2>Te Casas conmigo?</h2>

      
      <DatePicker onChange={test} />

      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

    </div>
  );
}

export default App;
