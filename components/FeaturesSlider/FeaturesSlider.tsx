export default () => {


    return (
        <>

            <div className='feature-card' style={{
                position: 'relative',
                textAlign: 'center',
                backgroundColor: 'rgb(41, 43, 47)',
                padding: 20,
                paddingTop: 40
            }}>
                <div
                    className='icon-circle'
                    style={{ position: 'absolute', backgroundColor: 'rgb(41, 43, 47)', display: 'table' }}
                >
                    <div className='icon-circle-inner' style={{ backgroundColor: '#4A4C4F' }}></div>

                </div>
                <div>
                    <h1 style={{ fontWeight: 'bolder' }}>Matching</h1>
                    <p style={{ marginTop: 15, color: '#AEAEAE' }}>Nakama makes trading your games easier and safe</p>
                </div>
                <style jsx>
                    {`

                    .feature-card {
                      
                        border-radius:10px;
                        width:70%;
                        height:20vh;
                    }
                    
                    .icon-circle {
                        width:8vh;
                        height:8vh;
                        top:-4vh;
                        border-radius:50%;
                        
                        left:50%;
                        margin-left: -4vh;
                        padding:10px;
                        
                    }

                    .icon-circle-inner {
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        display:table-cell
                    }
                    
                    `}
                </style>
            </div>



        </>

    )

}