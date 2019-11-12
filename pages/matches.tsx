import { withApollo } from 'functions/utils/apollo';
import { withAuth } from '@components/WithAuth'
import WithLayout from '@components/WithLayout'
import { colors, font } from 'styles';

interface Props {
    premiumClicked?: () => {}
}

const Page = ({ premiumClicked }: Props) => {

    return (
        <>
            <div>
                <h1 style={{ color: colors.text, fontWeight: font.weights.medium, textAlign: 'center' }}>Coming Soon</h1>
            </div>
        </>
    )

}

export default withApollo(withAuth(WithLayout(Page)))