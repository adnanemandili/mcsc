
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { BufferGeometry, Float32BufferAttribute, Points } from 'three';

const SpaceParticles: React.FC = () => {
    const particlesRef = useRef<Points>();

    const { size } = useThree();

    const particles = useMemo(() => {
        const particleCount = 50000;
        const geometry = new BufferGeometry();

        const positions = new Float32BufferAttribute(particleCount * 3, 3);
        const sizes = new Float32BufferAttribute(particleCount, 1);

        for (let i = 0; i < particleCount * 3; i += 3) {
        positions.setXYZ(
            i,
            (Math.random() - 0.5) * size.width,
            (Math.random() - 0.5) * size.height,
            (Math.random() - 0.5) * size.width
        );

        // Set initial size for all particles
        sizes.setX(i / 3, 0.1);
        }

        geometry.setAttribute('position', positions);
        geometry.setAttribute('size', sizes);

        return geometry;
    }, [size]);

    useFrame(() => {
        if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;

        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += 0.01; // Move particles upwards (simulate floating)
            if (positions[i + 1] > size.height / 2) {
            positions[i + 1] = -size.height / 2; // Reset particles to the bottom when they go off the screen
            }

            // Make one particle smaller
            if (i === 9 * 3) {
            sizes[i / 3] = 0.05; // Set the size of the specific particle to 0.05
            } else {
            sizes[i / 3] = 0.1; // Set the size of other particles to 0.1
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;
        particlesRef.current.geometry.attributes.size.needsUpdate = true;
        }
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 900px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    return (
        <points ref={particlesRef as React.RefObject<THREE.Points>}>
        <pointsMaterial size={isMobile ? 1 : 0.5} color="#00ff41" sizeAttenuation={false} vertexColors={false}>
            <color attach="color" args={['#00ff41']} />
        </pointsMaterial>
        <primitive object={particles} />
        </points>
    );
};

export default SpaceParticles;
