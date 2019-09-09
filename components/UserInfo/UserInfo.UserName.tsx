export default ({ userName, isPremium }: { userName: string, isPremium: boolean }) => {
    return (
        <div>
            <h4 style={{ marginBottom: 0 }}>
                {userName}
                <span> {isPremium ? <img style={{ width: '1em', marginBottom: 10 }} src={require('../../assets/icons/premium.svg')} /> : null}</span>
            </h4>

        </div>
    )
}