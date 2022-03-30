import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

// import { useFrame } from "@react-three/fiber";

import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing'

const Model = () => {

    // do not include '.' on the target path "/gltf/fc3sbetaRoom1.gltf"
    const gltf = useLoader(GLTFLoader, "/gltf/fc3sbetaRoom1.gltf")
    const mesh = useRef()

    //https://stackoverflow.com/questions/62280231/castshadow-and-recieveshadow-is-not-rendering-in-the-scene
    ///////////// FOR GLTF SHADOWS DONT FORGET THIS!!//////////////
    gltf.scene.traverse( function( object ){
        if( object.isMesh ) object.castShadow = true;
    })

    /* useFrame( () => (
        mesh.current.rotation.y += 0.00
    )) */

    return <mesh castShadow receiveShadow /* ref={mesh} */>
        <primitive object={gltf.scene} scale={1} position={[0, -2, 0]}  />
    </mesh>
}


// shadows and point light always cast shadows even without intensity!
// --- point light simulate shadow of roomlight model

// Suspense fallback={null} is needed for loading model


const ScenelLoader = () => {

    const roomPointPosition = [0, 6, 4]

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [10, 3, 10], fov: 60 }}
            >
            <Suspense fallback={null}>
                <pointLight
                    castShadow
                    position={roomPointPosition} 
                    intensity={0} />
                                
                <Model  />
                <OrbitControls 
                    autoRotate
                    autoRotateSpeed={1}
                    maxPolarAngle={Math.PI / 1.9}
                    maxDistance={15}
                    minDistance={8}
                    enablePan={false}
                    />

                {/* ----------- plane */}
                <mesh
                    receiveShadow
                    rotation={[-0.5 * Math.PI, 0, 0]} 
                    position={[0, -2, 0]}>
                    <planeBufferGeometry args={[100, 100, 1, 1]} /> 
                    <shadowMaterial opacity={0.2}/>
                </mesh>

                

            </Suspense>

            <EffectComposer>
                    <Bloom
                        intensity={.3}
                        height={900}
                        opacity={3}
                        luminanceThreshold={0}
                        luminanceSmoothing={1}
                        />
            </EffectComposer>
        </Canvas>
    );
}

export default ScenelLoader;