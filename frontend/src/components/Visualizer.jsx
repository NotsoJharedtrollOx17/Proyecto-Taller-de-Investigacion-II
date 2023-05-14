import { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { DynamicReadUsage } from 'three';
import PropTypes from 'prop-types';

export default function Visualizer({ props }) {
    const ref = useRef()

    useFrame((_, isVisible) => {
        if (isVisible) {
            ref.current.rotation.x += 1 * 0.001 * 10;
            ref.current.rotation.y += 0.5 * 0.001 * 10;
        }
    })
    
    return(
        <mesh {...props} ref={ref}>
            <boxGeometry/>
            <meshBasicMaterial color={0x00ff00} wireframe />
        </mesh>
    )
}

Visualizer.propTypes = {
    isVisible: PropTypes.bool.isRequired
};