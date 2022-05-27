import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import deg2rad from "../utils/deg2rad";

//forward ref
//https://stackoverflow.com/questions/54331855/possible-to-forward-a-ref-using-react-suspense-and-react-lazy

const RxModel = ({ innerRef, ...props }) => {
  // do not include leading '.' on the target path "/gltf/xxxxx.gltf"
  const gltf = useLoader(GLTFLoader, "/gltf/fc3sCarOnly2.gltf");

  //https://stackoverflow.com/questions/62280231/castshadow-and-recieveshadow-is-not-rendering-in-the-scene
  // FOR GLTF SHADOWS DONT FORGET THIS!!
  gltf.scene.traverse(function (object) {
    if (object.isMesh) object.castShadow = true;
  });

  return (
    <mesh castShadow receiveShadow ref={innerRef} {...props} name={"rx model"}>
      <primitive
        object={gltf.scene}
        scale={1}
        position={[0.15, -2, 0]}
        rotation={[0, deg2rad(-90), 0]}
      />
    </mesh>
  );
};

// https://stackoverflow.com/questions/70300337/load-gltf-model-in-next-js-error-could-not-load-url-response-body-getreader
// lazy import model

export default RxModel;


// const NewCarModel = forwardRef( ({ innerRef, ...props }) => {
//   // do not include leading '.' on the target path "/gltf/xxxxx.gltf"
//   const gltf = useLoader(GLTFLoader, "/gltf/fc3sCarOnly2.gltf");
//   // const mesh = useRef();

//   //https://stackoverflow.com/questions/62280231/castshadow-and-recieveshadow-is-not-rendering-in-the-scene
//   // FOR GLTF SHADOWS DONT FORGET THIS!!
//   gltf.scene.traverse(function (object) {
//     if (object.isMesh) object.castShadow = true;
//   });

//   // useFrame(() => (mesh.current.rotation.y += 0.0));

//   return (
//     <mesh {...props} castShadow receiveShadow ref={innerRef}>
//       <primitive object={gltf.scene} scale={1} position={[0, -2, 0]} />
//     </mesh>
//   );
// });
