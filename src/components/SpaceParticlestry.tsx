import { useMemo, useRef } from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

const SpaceParticles = () => {
    const particlesRef = useRef<THREE.Points>();

    const { size } = useThree();

    const particles = useMemo(() => {
        const particleCount = 5000;
        const particles = new THREE.BufferGeometry();

        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * size.width;
        positions[i + 1] = (Math.random() - 0.5) * size.height;
        positions[i + 2] = (Math.random() - 0.5) * size.width;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        return particles;
    }, [size]);


    return (
        <points ref={particlesRef as React.RefObject<THREE.Points>}>
            <pointsMaterial size={0.1} color="white" sizeAttenuation={false} />
            <primitive object={particles} />
        </points>
    );
};

export default SpaceParticles;
