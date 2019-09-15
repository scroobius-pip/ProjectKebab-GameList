import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './index.css'
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';


interface Props {
    initialContent: string
}

export default ({ initialContent }: Props) => {

    const [editor, setEditor] = useState(false)
    useEffect(() => {
        setEditor(true)
    })

    return (
        editor ? <Editor toolbar={
            {
                options: ['inline', 'list'],
                inline: {
                    options: ['bold', 'italic', 'underline', 'strikethrough',]
                },
                list: {
                    options: ['unordered', 'ordered']
                }
            }
        }
            editorStyle={{
                backgroundColor: '#3D3F42',
                borderRadius: 5,
                padding: '5px 10px 5px 10px',
                color: '#EAEBEB',
            }}

            toolbarStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                padding: 0,
                marginBottom: 10
            }}
        /> : <Spinner animation="grow" variant="secondary" />

    )


}