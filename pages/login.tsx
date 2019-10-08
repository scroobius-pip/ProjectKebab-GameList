import LoginModal from '@components/Modals/LoginModal';
import { LoginWithModal } from '@components/Modals';
import { useRouter } from 'next/router';
import redirect from 'functions/utils/redirect';

const Page = () => {
    const router = useRouter()
    const { error } = router.query
    return <LoginWithModal errorMessage={error || ''} visible={true} close={() => { }} />
}


Page.getInitialProps = ({ query, ...ctx }) => {
    if (query.token) {
        redirect(ctx, '/token/' + query.token)
    }
}

export default Page