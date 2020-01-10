import './index.css'
import { Spinner } from 'react-bootstrap'
import { useState } from 'react'

interface Props {
  initialState: boolean
  handleToggle: (currentState: boolean) => Promise<void> | void
  id: string
}


export default ({ handleToggle, id, initialState }: Props) => {
  const [isOn, setIsOn] = useState(initialState || false)
  const [isLoading, setIsLoading] = useState(false)

  const onChange = async () => {
    try {
      setIsLoading(true)
      await handleToggle(isOn)
      setIsOn(!isOn)
    } catch (error) {
      console.error(error)
      setIsOn(isOn)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <input
        checked={isOn}
        onChange={onChange}
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
        {isLoading && <Spinner variant='light' animation='border' className='spinner' />}
      </label>
      <style jsx global>
        {`

.react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  
  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 80px;
    height: 40px;
    background: grey;
    border-radius: 5px;
    position: relative;
    transition: background-color .2s;
  }
  
  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    width: 25px;
    height: 25px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 8px);
    transform: translateX(-100%);
  }
  
  .react-switch-label:active .react-switch-button {
    width: 35px;
  }

  .spinner {
    position:absolute;
   right:8px;
   transition: opacity .2s;

  }

  .react-switch-checkbox:checked + .react-switch-label  .spinner {
    left:8px;
  }

  .spinner-border {
    width:1.5rem;
    height:1.5rem;
  }
 
`}
      </style>
    </>
  )
}