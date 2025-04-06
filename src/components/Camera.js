import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import * as THREE from "three";

const Camera = () => {
	const ref = useRef();
	useFrame(() => {
		if (ref.current) {
			const origin = new THREE.Vector3(0, 0, 0);
			ref.current.lookAt(origin);
		}
	});
	return (
		<PerspectiveCamera
			makeDefault
			ref={ref}
			position={[0, 3, 3]}
			fov={70}
			near={0.1}
		/>
	);
};

export default Camera;
