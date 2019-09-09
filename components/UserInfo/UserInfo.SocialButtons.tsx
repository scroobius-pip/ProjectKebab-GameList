interface socialLink {
    platform: 'reddit'
    link: string
}


export default ({ socialLinks }: { socialLinks: socialLink[] }) => {
    return <div style={{ marginBottom: 10 }}>
        {
            socialLinks.map(sociallink => {
                return <span key={sociallink.link} style={{ marginRight: 5, }}>
                    <a href={sociallink.link} target='_blank'>
                        <img style={{ width: '2em' }} src={require('../../assets/icons/reddit.svg')} />
                    </a>
                </span>
            })
        }
    </div>
}