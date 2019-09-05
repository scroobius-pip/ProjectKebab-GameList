interface socialLink {
    platform: 'reddit'
    link: string
}


export default ({ sociallinks }: { sociallinks: socialLink[] }) => {
    return <div style={{ marginBottom: 10 }}>
        {
            sociallinks.map(sociallink => {
                return <span style={{ marginRight: 5, }}>
                    <a href={sociallink.link} target='_blank'>
                        <img style={{ width: '2em' }} src={require('../assets/icons/reddit.svg')} />
                    </a>
                </span>
            })
        }
    </div>
}