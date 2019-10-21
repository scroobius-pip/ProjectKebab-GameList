import { Spinner } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import redirect from 'functions/utils/redirect';
// import { async } from 'q';

const Page = ({ signIn, token }) => {
    useEffect(() => {
        console.log(token)
        signIn(token)
    }, [])




    return <Spinner animation='grow' />

}


Page.getInitialProps = async ({ query, ...ctx }) => {
    if (query.token) {
        return { token: query.token }
    }

    redirect(ctx, '/login')


}




export default Page
