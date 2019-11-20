const users = [{name: 'Rob'}]


module.exports = {
    getUsers (req, res) {
        res.status(200).send(users)
    },
    addUser (req, res){
        console.log(req.body)
        users.push(req.body)
        console.log(users)
        res.status(200).send(users)
    },
    // updateUser (req, res)
}