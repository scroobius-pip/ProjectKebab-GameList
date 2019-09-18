// import React from 'react'
import { colors } from '../../styles'
interface Props {
    children: JSX.Element | JSX.Element[],
    heading?: string
}

const sectionStyle: React.CSSProperties = {
    backgroundColor: colors.section,
    color: colors.text,
    padding: 20,
    borderRadius: 5
}

const headingStyle: React.CSSProperties = {
    // fontWeight:
    marginBottom: 20
}


export default ({ children, heading }: Props) => {
    return (
        <section style={sectionStyle}>
            {heading ? <h4 style={headingStyle}><strong>{heading}</strong></h4> : null}
            {children}
        </section>)
}