import { colors } from 'styles'

interface Props {
    textOnclick: () => any
    redditOnclick: () => any
}

interface ExportOptionProps {
    onClick: () => any
    source: any
}

const ExportOption = ({ onClick, source }: ExportOptionProps) => {
    return <>

        <img
            onClick={onClick}
            className='export-image'
            src={source}
            style={{


                cursor: 'pointer',

            }}
        // width={'1em'}

        />
        <style jsx>
            {`
            .export-image {
                opacity:0.8;
                transition: all 0.4s;
            }
           
            .export-image:hover {
                opacity:1;
            }
            `}
        </style>
    </>
}

const Divider = () => {
    return <div
        style={{
            display: 'inline',
            borderRight: `.5px solid white`,
            opacity: .4,
            lineHeight: '.1em',
            width: 0,
            marginLeft: 10,
            marginRight: 10

        }}
    >

    </div>
}

export default (props: Props) => {
    return <div>
        {/* <span>Export</span> */}
        <div
            style={{
                padding: 10,
                backgroundColor: colors.primary,
                borderRadius: 5,
                display: 'flex'
            }}

        >

            <ExportOption source={require('../../assets/icons/text-export.svg')} onClick={props.textOnclick} />
            <Divider />
            <ExportOption source={require('../../assets/icons/reddit-export.svg')} onClick={props.redditOnclick} />

        </div>
    </div>
}