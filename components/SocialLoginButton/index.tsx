interface Props {
    color: string
    image: any
    onClick?: () => Promise<any> | any
}

export default ({ color, image, onClick }: Props) => {
    return <div className='social-button' onClick={onClick}>
        <img style={{ height: '80%', width: '80%' }} src={image} />
        <style jsx>
            {`
            .social-button {
                background-color:${color};
                border-radius: 5px;
                display: flex;
                padding: 20px;
               max-height:100px;
               max-width:100px;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                opacity:0.8
            }

            .social-button:hover {
                transform: translate(0px, -1px);
               
           opacity:1;
            }
            
            `}
        </style>
    </div>
}