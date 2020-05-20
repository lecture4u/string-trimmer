let express = require('express')
let app = express()
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.render('./dist/index.html')
})

let server = app.listen(3000, () => {
    console.log("express server has started on port 3000")
})