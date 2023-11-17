const ejs = require("express")
const app = ejs()

app.use(ejs.json());

app.get("/:cmpId/locations", require("./location.js").listLocs)
app.get("/:cmpId/locations/:locId", require("./location.js").locInfo)

app.post("/authorize", require("./auth.js"))
app.get("/people/me", require("./people.js").getMe)

let port = 2019
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })