
function FeatureCard({ title = '', body = '', icon }) {
    return <div className='feature-card' style={{
        position: 'relative',
        textAlign: 'center',
        // backgroundColor: 'rgba(41, 43, 47,0.5)',
        padding: 20,
        paddingTop: 40,
        marginTop: 60,

    }}>
        <div className='icon-circle' style={{ position: 'absolute' }}>
            <img className='icon' src={icon} />
        </div>
        <div>
            <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>{title}</h2>
            <p style={{ marginTop: 15, }}>{body}</p>
        </div>
        <style jsx>
            {`

                    .feature-card {
                       transition: background 200ms ease;
                       border-radius:10px;
                       width:90vw;
                    //    height:30vh;
                    color: #AEAEAE;
                    margin:auto;
                        // min-height:30vh;
                        max-width:350px;
                        // box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.22);
                    }

                    .feature-card:hover {
                        // box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.22);
                        background-color: rgba(41, 43, 47,0.8);
                        color: #FFF;
                    }
                    
                    .icon-circle {
                        
                        transition: background 600ms ease;
                        width:8vh;
                        background-color: rgb(41, 43, 47);
                        height:8vh;
                        top:-4vh;
                        border-radius:50%;
                        left:50%;
                        margin-left: -4vh;
                        padding:5px;
                        box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.22);
                        display:flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .icon {
                        width:80%;
                        height:80%;
                    }

                    .feature-card:hover > .icon-circle {
                        background-color:rgb(109, 123, 212);
                    }


                
                 
                    
                    `}
        </style>
    </div>;
}


export default FeatureCard