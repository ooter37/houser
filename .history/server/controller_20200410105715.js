module.exports = {
    getHouses: (req,res,next) => {
        const db = req.app.get('db')
        db.get_houses().then(houses => {
            console.log(houses)
            res.status(200).send(houses)
        }).catch(err => {
            res.status(500).send('problem with get houses endpoint')
            console.log(err)
        })
    }
}