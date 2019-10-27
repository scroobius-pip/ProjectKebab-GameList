import SortButton from '../SortButton';

export default ({ editable = false }) => (
    <>
        <tr>
            {editable ? null : <th style={{ width: 60 }} ></th>}

            <th style={{}}>NAME</th>
            <th style={{}}>PLATFORM</th>
            <th style={{}}>TYPE</th>
            <th style={{}}>DESCRIPTION</th>
            {editable ? <th style={{}}></th> : null}
        </tr>
    </>
)