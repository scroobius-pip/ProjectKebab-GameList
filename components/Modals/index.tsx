import PremiumModal from './PremiumModal'
import WithModal from './WithModal'
import LoginModal from './LoginModal'

const PremiumWithModal = WithModal(PremiumModal)
const LoginWithModal = WithModal(LoginModal)

export {
    PremiumWithModal,
    LoginWithModal
}