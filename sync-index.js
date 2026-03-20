#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, 'dist', 'index.html');
const rootIndex = path.join(__dirname, 'index.html');

try {
  const content = fs.readFileSync(distIndex, 'utf-8');
  fs.writeFileSync(rootIndex, content);
  console.log('✓ Synced dist/index.html to index.html');
} catch (err) {
  console.error('✗ Failed to sync index.html:', err.message);
  process.exit(1);
}
