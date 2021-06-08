const router = require("express").Router();

// router.use("/test", require("./tests"));

router.use(function (req, res, next) {
  const err = new Error("Get Outta Here! Link Not Found!");
  err.status = 404;
  next(err);
});

module.exports = router;
