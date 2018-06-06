const Venue = require('../models/venue');

function index(req, res, next) {
  Venue
    .find()
    .exec()
    .then(venues => res.json(venues))
    .catch(next);
}

function create(req, res, next) {
  Venue
    .create(req.body)
    .then(venue => res.json(venue))
    .catch(next);
}

function update(req, res, next) {
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => {
      Object.assign(venue, req.body);
      return venue.save();
    })
    .then(venue => res.json(venue))
    .catch(next);
}

function show(req, res, next) {
  Venue.findById(req.params.id)
    .exec()
    .then(venue => res.json(venue))
    .catch(next);
}

function remove(req, res, next) {
  Venue.findById(req.params.id)
    .exec()
    .then(venue => venue.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index,
  create,
  update,
  show,
  remove
};
