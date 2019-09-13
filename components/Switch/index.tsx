import './index.css'

interface Props {
    isOn: boolean
    handleToggle: () => any
    id: string
}

export default ({ isOn, handleToggle, id }: Props) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className="react-switch-checkbox"
                id={id}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={id}
                style={{ background: isOn && 'rgb(109, 123, 212)' }}
            >
                <span className={`react-switch-button`} />
            </label>
        </>
    )
}