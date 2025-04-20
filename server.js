const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3001

let movies = ['Hangover', 'Harry Porter','Avengers', 'Wonder woman']
let series = ['Game of Thrones', 'The middle', 'Suits', 'Veep']
let songs =  ['I love you', 'Superstar', 'Train on track', 'Where do broken hearts go']

const handleMovisEndpoint = (req, res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'created'}))
    }else if(req.method === 'DELETE'){
        movies.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'deleted', movies: movies}))
    }else if(req.method === 'PUT'){
        movies[0] = 'Matrix'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'updated', movies: movies}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ movies: movies}))
    }else{
        res.statusCode = 404
        res.end()
    }

}

const handleSeriesEndpoint = (req, res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'created'}))
    }else if(req.method === 'DELETE'){
        series.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'deleted', series: series}))
    }else if(req.method === 'PUT'){
        series[0] = 'Big bang theory'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'updated', series: series}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ series: series}))
    }else{
        res.statusCode = 404
        res.end()
    }

}

const handleSongsEndpoint = (req ,res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'created'}))
    }else if(req.method === 'DELETE'){
        songs.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'deleted', songs: songs}))
    }else if(req.method === 'PUT'){
        songs[0] = 'Missing you'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message: 'updated', songs: songs}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ songs: songs}))
    }else{
        res.statusCode = 404
        res.end()
    }

}
const server = http.createServer((req, res) => {

    console.log(req.url);
    if(req.url == '/movies'){ 
        handleMovisEndpoint(req, res)   
    }else if(req.url == '/songs'){
        handleSongsEndpoint(req, res)
    }else if (req.url == '/series'){
        handleSeriesEndpoint(req, res)
    }
})

server.listen(port, hostname, () => {
    console.log('server running');
})