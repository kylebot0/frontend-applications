const dotenv = require('dotenv').config()

const port = process.env.PORT

app
    .use('/', express.static(path.join(__dirname, 'public')))
    .use(require('./routes/router'))
    .listen(port, () => console.log(`Server listening on port: ${port}`))
    ;
