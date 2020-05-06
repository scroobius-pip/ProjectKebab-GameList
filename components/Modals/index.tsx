import PremiumModal from './PremiumModal'
import WithModal from './WithModal'
import LoginModal from './LoginModal'
import ExportListModal from './ExportListModal'

const PremiumWithModal = WithModal(PremiumModal)
const LoginWithModal = WithModal(LoginModal)
const ExportListWithModal = WithModal(ExportListModal)

export {
    PremiumWithModal,
    LoginWithModal,
    ExportListWithModal
}