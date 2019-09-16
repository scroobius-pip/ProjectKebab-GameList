import TextArea from 'react-textarea-autosize'


interface Props {
    initialValue: string
    onBlur: (value: string) => any
}

const styles: React.CSSProperties = {
    borderRadius: 3,
    backgroundColor: '#3D3F42',
    borderColor: 'transparent',
    color: 'white',
    width: '100%',
    overflow: 'hidden'
}

export default ({ initialValue, onBlur }: Props) => {
    const handleBlur = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const currentValue = e.currentTarget.value
        if (initialValue !== currentValue) {
            onBlur(currentValue)
        }
    }

    return (
        <TextArea style={styles} maxRows={2} defaultValue={initialValue} onBlur={handleBlur} />
    )
}