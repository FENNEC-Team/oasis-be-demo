const config = require("./config.js")

module.exports = (req, res) => {
    let bd = req.body
    let resp = {}
    if (bd.user == config.correctUName && bd.password == config.correctPwd) {
        resp.success = true
        resp.data = {
            token: config.correctToken
        }
        res.status(200)
        res.send(resp)
    } else {
        res.status(403)
        resp = {
            success: false,
            error: "Wrong credentials"
        }
        res.send(resp)
    }
}