const express = require('express');
const router = express.Router();

// Temporary sample records for the first release. These reset when the server restarts.
const reports = [
  { id: 1, type: 'Lost', item: 'Water bottle', location: 'Library', date: '2026-11-18', details: 'Blue reusable bottle' },
  { id: 2, type: 'Found', item: 'Notebook', location: 'Student Centre', date: '2026-11-19', details: 'Black spiral notebook' }
];
let nextId = 3;

router.get('/', (req, res) => {
  res.render('index', { title: 'Campus Lost & Found', reports, error: null });
});

router.get('/reports/new', (req, res) => {
  res.render('new-report', { title: 'Post an Item', error: null, values: {} });
});

router.post('/reports', (req, res) => {
  const type = String(req.body.type || '').trim();
  const item = String(req.body.item || '').trim();
  const location = String(req.body.location || '').trim();
  const date = String(req.body.date || '').trim();
  const details = String(req.body.details || '').trim();
  const values = { type, item, location, date, details };

  if (!['Lost', 'Found'].includes(type) || !item || !location ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      item.length > 80 || location.length > 80 || details.length > 300) {
    return res.status(400).render('new-report', {
      title: 'Post an Item', error: 'Please complete the required fields using the limits shown.', values
    });
  }

  reports.unshift({ id: nextId++, type, item, location, date, details });
  res.redirect('/');
});

module.exports = router;
