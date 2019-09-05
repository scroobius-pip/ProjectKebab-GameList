import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Section from '../components/Section'

storiesOf('Section', module)
    .add('with heading', () => {
        return <Section heading='Description.'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, eius?</p>
        </Section>
    })
    .add('without heading', () => {
        return <Section  >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, impedit!</p>
        </Section>
    })