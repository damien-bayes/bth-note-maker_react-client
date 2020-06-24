/**
 * API Configurations
 *
 * File: /src/configs/api.js
 * Project: Baythium Note Maker
 * Organization: Baythium Ecosystem: https://baythium.com
 */

// eslint-disable-next-line
"use strict";

/* CUSTOM IMPORTS */
import { IN_BATTLE } from './app';

/* ************************************************************************* */

const DEV_URL = 'http://localhost:3000';
const PROD_URL = 'https://note.baythium.com/api/v1';

export const BASE_URL = IN_BATTLE ? PROD_URL : DEV_URL;