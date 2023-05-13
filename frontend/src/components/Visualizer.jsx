import { useRef, useState } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { DynamicReadUsage } from 'three';

export default function Visualizer() {
    return(
        <Canvas camera={{
            position: [3, 2, 3],
            //rotation: [-0.2, 0, 0.5]
        }}
        >
            <axesHelper args={[5]}/>
            <gridHelper args={[10, 10, 'black', 'grey']}/>
                <mesh>
                    <boxBufferGeometry/>
                </mesh>
        </Canvas>
    )
}