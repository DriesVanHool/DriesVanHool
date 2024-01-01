import {useCallback, useEffect, useRef} from 'react'
import {useFrame, useLoader} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js'


const HeadModel = () => {
    const modelRef = useRef<THREE.Object3D>(null);

    //Using draco loader to optimize loading speed (Big file for a big head...)
    const gltf = useLoader(GLTFLoader, '/src/assets/models/head.glb', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/src/utils/draco/');
        loader.setDRACOLoader(dracoLoader);
    });


    const initialRotation = useRef<[number, number, number]>([0, -Math.PI / 200 * 5, 0]);
    const minRotation = -Math.PI / 4;
    const maxRotation = Math.PI / 4;

    //Movement sensitivity & damping
    const sensitivity = 0.3;
    const damping = 0.1;

    const prevMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

    // Update update rotation
    const handleMouseMove = useCallback((event: MouseEvent) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        const mouseX = (clientX / innerWidth) * 2 - 1;
        const mouseY = -(clientY / innerHeight) * 2 + 1;

        const deltaMouseX = mouseX - prevMousePos.current.x;
        const deltaMouseY = mouseY - prevMousePos.current.y;

        const targetRotationX = deltaMouseY * sensitivity;
        const targetRotationY = deltaMouseX * sensitivity;

        //Set rotation
        if (modelRef.current) {
            // Apply rotation with constraints
            modelRef.current.rotation.x = Math.min(maxRotation, Math.max(minRotation, modelRef.current.rotation.x - targetRotationX));
            modelRef.current.rotation.y = Math.min(maxRotation, Math.max(minRotation, modelRef.current.rotation.y + targetRotationY));
        }

        prevMousePos.current = { x: mouseX, y: mouseY };
    }, [minRotation, maxRotation]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    //Damping for orientation effect
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x += (initialRotation.current[0] - modelRef.current.rotation.x) * damping;
            modelRef.current.rotation.y += (initialRotation.current[1] - modelRef.current.rotation.y) * damping;
        }
    });

    return (
        <>
            {/*Scene and lighting*/}
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[0, 10, 0]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <PerspectiveCamera
                makeDefault
                fov={30}
                near={0.1}
                far={1000}
                aspect={500 / 500}
            />
            {/*controls*/}
            <OrbitControls />
            {/*Model*/}
            <group position={[0, 0, -20]} rotation={initialRotation.current}>
                <primitive
                    object={gltf.scene}
                    ref={modelRef}
                    scale={[25, 25, 25]}
                />
            </group>
    </>
    );
};


export default HeadModel
