import { Image } from 'react-bootstrap';

export default ({ src, size = 60 }) => {
    return <Image src={src} style={{ width: size, height: size, marginBottom: 10 }} rounded />
}