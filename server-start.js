#!/usr/bin/env node

// Simple wrapper to start the server
// This file is used by Electron to start the Express server

import('./server/index.js').catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
