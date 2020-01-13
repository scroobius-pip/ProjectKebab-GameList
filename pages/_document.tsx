import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script dangerouslySetInnerHTML={webPushrCode} />
                </body>
            </Html>
        )
    }
}

const webPushrCode = {
    __html: `
    <!-- start webpushr code --> <script>(function(w,d, s, id) 
    {w.webpushr=w.webpushr||function(){(w.webpushr.q=w.webpushr.q||[]).push(arguments)};var js, fjs = d.getElementsByTagName(s)[0];js = d.createElement(s); js.id = id;js.src = "https://cdn.webpushr.com/app.min.js";fjs.parentNode.appendChild(js);}(window,document, 'script', 'webpushr-jssdk'));webpushr('init','BEYM7rmfL1x19yjxpqa4Unjyw06o5X-8UMpO1IiFUyG-G36vMzACLbk5oVV4NoVpXn056QsTyza7YIeNsuqzTTY');</script><!-- end webpushr code -->
    `
}

export default MyDocument