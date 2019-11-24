
function FeatureCard() {
    return <div className='feature-card' style={{
        position: 'relative',
        textAlign: 'center',
        // backgroundColor: 'rgba(41, 43, 47,0.5)',
        padding: 20,
        paddingTop: 40,
        marginTop: 80,

    }}>
        <div className='icon-circle' style={{ position: 'absolute', backgroundColor: 'rgb(41, 43, 47)', display: 'table' }}>
            <div className='icon-circle-inner' style={{ backgroundColor: '#4A4C4F' }}></div>

        </div>
        <div>
            <h2 style={{ fontWeight: 'bold', marginTop: 10 }}>Matching</h2>
            <p style={{ marginTop: 15, color: '#AEAEAE' }}>Nakama makes trading your games easier and safe Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, delectus.</p>
        </div>
        <style jsx>
            {`

                    .feature-card {
                       
                        border-radius:10px;
                        width:90vw;
                       height:30vh;
                        margin:auto;
                        min-height:30vh;
                        max-width:350px;
                        // box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.22);
                    }

                    .feature-card:hover {
                        // box-shadow:0 5px 20px 4px rgba(0, 0, 0, 0.22);
                        background-color: rgba(41, 43, 47,0.8);
                    }
                    
                    .icon-circle {
                        width:8vh;
                       
                        height:8vh;
                        top:-4vh;
                        border-radius:50%;
                        left:50%;
                        margin-left: -4vh;
                        padding:5px;
                        // box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.22);
                    }


                    .icon-circle-inner {
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        display:table-cell;
                    }

                 
                    
                    `}
        </style>
    </div>;
}


export default FeatureCard