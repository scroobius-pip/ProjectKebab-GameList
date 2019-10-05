import Router from 'next/router'

function redirect(ctx: any, location: string) {
    if (ctx && ctx.res) {
        ctx.res.writeHead(302, {
            Location: location,
            'Content-Type': 'text/html; charset=utf-8',
        })
        ctx.res.end()

    }

    Router.replace(location)
}

export default redirect