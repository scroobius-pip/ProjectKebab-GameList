import { ReactChildren } from 'react';

interface Props {
    children: string
    onClick: () => any
}


export default ({ children, onClick }: Props) => {
    return (
        <>

            <span onClick={onClick} className='text-button'>{children}</span>
            <style jsx>
                {`
.text-button {
    cursor: pointer;   
    color:#8B8B8B;
    font-weight:600;
   }
   
   .text-button:hover {
   color:white;
   }
`}
            </style>
        </>
    )
}