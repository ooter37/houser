module.exports = {
  getHouses: (req, res, next) => {
    const db = req.app.get("db");
    db.get_houses()
      .then((houses) => {
        res.status(200).send(houses);
      })
      .catch((err) => {
        res.status(500).send("problem with get houses");
        console.log(err);
      });
  },
  addHouse: (req, res, next) => {
    const db = req.app.get("db");
    db.add_house(
      req.body.name,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.zip
    ).then(() => res.sendStatus(200))
    .catch(err => {
        res.status(500).send('Problem with add house')
        console.log(err)
    })
  },
  deleteHouse: (req,res,next) => {
      const db = req.app.get('db')
      db.delete_house(req.params.id)
      .then(res.sendStatus(200))
      
  }
};
