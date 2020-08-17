const router = require("express").Router();

const {
    getAll,
    getOneById,
    findOne,
    postData,
    deleteOne,
    patchOne
    } = require("../controllers/controllers");

router.route("/foods").get(getAll);
router.route("/foods/:id").get(getOneById);
router.route("/food").get(findOne)
router.route("/foods").post(postData);
router.route("/foods/:id").delete(deleteOne);
router.route("/foods/:id").patch(patchOne);

module.exports = router