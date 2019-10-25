import LoginModal from '@components/Modals/LoginModal';
import { LoginWithModal } from '@components/Modals';
import { useRouter } from 'next/router';
import redirect from 'functions/utils/redirect';
import WithLayout from '@components/WithLayout';

const Page = () => {
    const router = useRouter()
    const { error } = router.query
    // const ctx = router.
    return <LoginWithModal errorMessage={error || ''} visible={true} close={() => { }} />
}


Page.getInitialProps = ({ query, ...ctx }) => {
    if (query.token) {
        redirect(ctx, '/token/' + query.token)
    }
    return {}
}

export default WithLayout(Page)