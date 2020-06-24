/**
 * Route: Home
 *
 * File: /src/routes/Home.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* THIRD-PARTY IMPORTS */
import React from 'react';

/* Components */
import { Card } from 'antd';

/* CUSTOM IMPORTS */
import Workspace from '../components/Workspace';

/* Styles */
import '../styles/routes/home.css';

/* ************************************************************************* */

export default function Home() {
  return(
    <div className="home">
      <Card title="Home" bordered={false} style={{ margin: '16px' }}>
        <Workspace/>
      </Card>
    </div>
  )
}