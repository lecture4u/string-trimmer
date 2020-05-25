let express = require('express')
let app = express()
app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.render('./dist/index.html')
})

let server = app.listen(5134, () => {
    console.log("express server has started on port 5134")
})
