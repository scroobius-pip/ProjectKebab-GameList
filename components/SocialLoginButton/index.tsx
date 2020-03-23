interface Props {
    color: string
    image: any
    onClick?: () => Promise<any> | any
    
}

export default ({ color, image, onClick }: Props) => {
    const enabled = !!onClick
    return <span className={`social-button ${enabled&&'enabled'}`} onClick={onClick}>
        <img style={{ height: '80%', width: '80%' }} src={image} />
      
        <style jsx>
            {`



            .social-button {
                background-color:${color};
                border-radius: 5px;
                display: inline-flex;
                padding: 20px;
               max-height:100px;
               max-width:100px;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                opacity:0.2
            }

            .social-button.enabled {
                opacity:0.8
            }
          

            .social-button.enabled:hover {
                transform: translate(0px, -1px);
               
           opacity:1;
            }
            
            `}
        </style>
    </span>
}