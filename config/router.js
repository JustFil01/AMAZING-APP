const router = require('express').Router();
const venues = require('../controllers/venues');

router.route('/venues')
  .get(venues.index)
  .post(venues.create);

router.route('/venues/:id')
  .get(venues.show)
  .put(venues.update)
  .delete(venues.remove);

module.exports = router;
