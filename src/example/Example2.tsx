import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import { useRef } from 'react'
import { Mesh } from 'three'
import { Fluid, useConfig } from '../../lib'
import { ThreeTunnel } from './tunel'
import App from '../App.jsx'

import Text from './Text'

const Torus = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (!meshRef.current) return

    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x += 0.005
  })
  return (
    <>
      <ambientLight intensity={10.1} />
      <directionalLight position={[2, 20, 10]} />
      <Environment preset="warehouse" />

      <mesh position-z={-4} ref={meshRef}>
        <torusGeometry attach="geometry" args={[2.8, 0.8, 100, 100]} />

        <MeshTransmissionMaterial transmission={1} samples={1} anisotropy={0} chromaticAberration={0} />
      </mesh>
    </>
  )
}

const Example2 = () => {
  // const { ...config } = useConfig();

  return (
    <ThreeTunnel.In>
      {/* <Text /> */}
      {/* <Torus /> */}
      <App scale={1} />
      <EffectComposer>
        <Fluid
          radius={0.1}
          curl={2}
          swirl={1}
          distortion={1}
          force={1}
          pressure={0.94}
          densityDissipation={0.98}
          velocityDissipation={0.99}
          intensity={0.3}
          rainbow={false}
          blend={0}
          showBackground={true}
          backgroundColor="#0b0b0b"
          fluidColor="#0b0b0b"
        />
      </EffectComposer>
    </ThreeTunnel.In>
  )
}

export default Example2
