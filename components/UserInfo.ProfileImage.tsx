import { Image } from 'react-bootstrap';

export default ({ src }) => {
    return <Image src={src} style={{ width: 60, height: 60, marginBottom: 10 }} rounded />
}