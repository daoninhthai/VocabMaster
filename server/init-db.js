import db from './database.js';

console.log('Initializing database...');

// Ensure the data structure exists
db.data ||= { words: [], nextId: 1 };

// Write to file
await db.write();

console.log('Database initialized successfully!');
console.log('Database file: server/db.json');
console.log('Structure: { words: [], nextId: 1 }');
