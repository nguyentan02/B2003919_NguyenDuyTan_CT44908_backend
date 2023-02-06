exports.create = (req, res) => {
    res.send({ messege: "create handler" });
};
exports.findAll = (req, res) => {
    res.send({ messege: "findAll handler" });
};
exports.findOne = (req, res) => {
    res.send({ messege: "findOne handler" });
};
exports.update = (req, res) => {
    res.send({ messege: "update handler" });
};
exports.delete = (req, res) => {
    res.send({ messege: "delete handler" });
};
exports.deleteAll = (req, res) => {
    res.send({ messege: "deleteAll handler" });
};
exports.findAllFavorite = (req, res) => {
    res.send({ messege: "findAllFavorite handler" });
};
