var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// GET /skills (index functionality)
router.get('/', skillsCtrl.index);
// GET /skills/ new (new functionality)
router.get('/new', skillsCtrl.new);
// GET /todos/:no (show functionality)
router.get('/:no', skillsCtrl.show);
// POST  /skills
router.post('/', skillsCtrl.create);
// DELETE .todos/:no
router.delete('/:no', skillsCtrl.delete);
// PUT /todos/:no
// router.put('/:no', skillsCtrl.update);

module.exports = router;
