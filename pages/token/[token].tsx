import { setAuthToken } from 'functions/authToken';
import redirect from 'functions/redirect';
import { Spinner } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { async } from 'q';

const Page = ({ signIn }) => {
    const router = useRouter()

    useEffect(() => {
        const { token } = router.query
        signIn(token)
    }, [])




    return <Spinner animation='grow' />

}




export default Page
