import {FunctionComponent, useRef} from 'react'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {useFrame, useLoader} from '@react-three/fiber'

interface HeadModelProps {
    path: string
}

const GltfLoader: FunctionComponent<HeadModelProps> = ({path}) => {
    const gltf = useLoader(GLTFLoader, path);
    const modelRef = useRef();

    useFrame(() => {

    });

    return <primitive object={gltf.scene} ref={modelRef}  scale={[20, 20, 20]} rotation={[0, Math.PI, 0]}/>;
}

export default GltfLoader
