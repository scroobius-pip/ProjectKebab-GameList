interface socialLink {
    platform: string
    link: string
}


export default ({ socialLinks }: { socialLinks: socialLink[] }) => {
    return <div style={{ marginBottom: 10 }}>
        {
            socialLinks.map(sociallink => {
                return <span key={sociallink.link} style={{ marginRight: 5, }}>
                    <a href={sociallink.link} target='_blank'>
                        <img style={{ width: '2em' }} src={sociallink.platform === 'reddit' ? require('../../assets/icons/reddit.svg') : require('../../assets/icons/steam.svg')} />
                    </a>
                </span>
            })
        }
    </div>
}