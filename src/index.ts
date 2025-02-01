const server = Bun.serve({
    port: 3000,
    fetch(req) {
        // req.url = "/audio/2"
        // ====================
        // url = ["audio", "2"]
        const url = new URL(req.url).pathname.split('/').filter(x => x !== '')
        switch(req.method) {
            case 'GET':
                switch(url[0]) {
                    case undefined:
                        // Check auth, return index.html or login.html
                        return new Response('Hello World!')
                    case 'alarm':
                        return new Response('Hello World!')
                    case 'audio':
                        // Check auth, check url[1] for action, return list of audio ids or single audio
                        return new Response('Hello World!')
                    default:
                        // Static files or 404
                        return new Response('Not found', { status: 404 })
                }
            case 'POST':
                switch(url[0]) {
                    case 'audio':
                        // Upload new audio
                        return new Response('Hello World!')
                    default:
                        // Static files or 404
                        return new Response('Path Not found', { status: 404 })
                }
            case 'DELETE':
                if(isNaN(parseInt(url[1])))
                    return new Response('Missing id to DELETE', { status: 400 })
                switch(url[0]) {
                    case 'audio':
                        // Delete audio from url[1]
                        return new Response('Hello World!')
                    default:
                        return new Response('Path Not found', { status: 404 })
                }
            case 'PATCH':
                switch(url[0]) {
                    case 'alarm':
                        // Modify alarm volume
                        return new Response('Hello World!')
                    case 'audio':
                        if(isNaN(parseInt(url[1])))
                            return new Response('Missing id to PATCH', { status: 400 })
                        // Modify audio details
                        return new Response('Hello World!')
                    default:
                        // Static files or 404
                        return new Response('Path Not found', { status: 404 })
                }
            default:
                return new Response('Method unknown', { status: 405 })
        }
    }
})

console.log(`Listening on http://localhost:${server.port}`)