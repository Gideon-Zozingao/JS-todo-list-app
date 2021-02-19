// Dagi, trying to create the server
let express = require('express')
let path = require('path')
let app = express()
app.get('/App', function(request, response){
		response.sendFile(path.join(__dirname, 'App.html'))
	}
)

app.use(express.static('./'))

// app.listen(8080)