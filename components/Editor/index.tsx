import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// import cssStyles from './index.css'
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
        <>
            {editor ? <Editor toolbar={
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
            /> : <Spinner animation="grow" variant="secondary" />}
            <style jsx global>
                {`
                .public-DraftStyleDefault-block { margin: .3em 0; }

                .rdw-option-wrapper >img {
                    filter:invert(1.0)
                }
                
                .rdw-option-wrapper{
                    background: transparent;
                    border-color: transparent;
                    padding:20px
                }
                
                .rdw-option-wrapper:hover {
                    box-shadow: none;
                    background-color: #ffffff0a;
                
                }
                
                .rdw-option-active{
                box-shadow: none;
                background-color: #ffffff0a;
                }
                
                .rdw-option-active:nth-of-type(1) {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                }
                
                .rdw-option-active:last-of-type {
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
                `}
            </style>

        </>
    )

}