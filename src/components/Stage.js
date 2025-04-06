import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Cube from "./Cube";
import { useRef } from "react";
import Camera from "./Camera";

const Stage = () => {
	return (
		<Canvas>
			<ambientLight intensity={1} />
			<directionalLight position={[1, 1, 0]} intensity={1.5} />
			<Camera />
			{/* <OrbitControls /> */}
			<Cube />
		</Canvas>
	);
};

export default Stage;
