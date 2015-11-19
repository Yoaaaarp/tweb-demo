/**
 * Created by David on 19.11.2015.
 */

var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/partials', router);
};

router.get('/:partialName', function(req,res){
  res.render(req.params.partialName, {});
});
