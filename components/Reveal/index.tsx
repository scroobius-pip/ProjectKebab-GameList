import { Collapse } from 'react-bootstrap'

interface Props {
    MainSection: JSX.Element
    HiddenSection: JSX.Element,
    style?: React.CSSProperties,
    open: boolean
}

export default ({ MainSection, HiddenSection, style, open = false }: Props) => {
    return (
        <>
            <div style={style}>
                {MainSection}
                <Collapse timeout={200} in={open}>
                    <div style={{ margin: 0, padding: 0, width: '100%' }}>
                        {HiddenSection}
                    </div>
                </Collapse>
            </div>
        </>

    )
}