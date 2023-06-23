/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Suspense } from 'react'
import Lights from './Lights'
import './styles.css'
import { Frame } from './components/Frame'
import { PlaneMask } from './components/PlaneMask'
import Ladies from './components/Ladies'
import { useControls, Leva } from 'leva'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  GizmoHelper,
  GizmoViewcube,
  ArcballControls,
} from '@react-three/drei'
import { City } from './assets'

const portraitMode = window.matchMedia('(orientation: portrait)').matches

const modelOptions = (Key) => {
  const mainObj = {
    Standing: 1,
    Ducking: 2,
    PointingGun: 3,
    Running: 4,
  }

  const returnOBJ = mainObj[Key]
    ? { ...{ [Key]: mainObj[Key] }, ...mainObj }
    : mainObj

  return {
    options: returnOBJ,
  }
}

export default function App() {
  const front = useControls(
    'Front',
    {
      model: modelOptions('Standing'),
      color: '#ffadad',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  const right = useControls(
    'Right',
    {
      model: modelOptions('Ducking'),
      color: '#caffbf',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  const back = useControls(
    'Back',
    {
      model: modelOptions('Running'),
      color: '#a0c4ff',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  const left = useControls(
    'Left',
    {
      model: modelOptions('PointingGun'),
      color: '#fdffb6',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  const top = useControls(
    'Top',
    {
      model: modelOptions('PointingGun'),
      color: '#bdb2ff',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  const bottom = useControls(
    'Bottom',
    {
      model: modelOptions('PointingGun'),
      color: '#ffc6ff',
      floor: { value: true, label: 'Show Floor' },
    },
    { collapsed: true },
  )

  return (
    <>
      <Leva />
      <Canvas
        camera={{ position: [0, 0, portraitMode ? 5 : 3] }}
        shadows
        dpr={[1, 2]}
      >
        <OrbitControls makeDefault />
        <Lights />
        <Suspense fallback={null}>
          <Frame />
          {/* Front */}
          <PlaneMask stencilRef={1} position={[0, 0, 1]}>
            <Ladies stencilRef={1} {...front} />
          </PlaneMask>
          {/* Back */}
          <PlaneMask
            stencilRef={2}
            position={[0, 0, -1]}
            rotation={[0, Math.PI, 0]}
          >
            <Ladies stencilRef={2} {...back} />
          </PlaneMask>
          {/* Left */}
          <PlaneMask
            stencilRef={3}
            position={[-1, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <Ladies stencilRef={3} {...left} />
          </PlaneMask>
          {/* Right */}
          <PlaneMask
            stencilRef={4}
            position={[1, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <Ladies stencilRef={4} {...right} />
          </PlaneMask>

          {/* Top */}
          <PlaneMask
            stencilRef={5}
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <Ladies stencilRef={5} {...top} />
          </PlaneMask>

          {/* Bottom */}
          <PlaneMask
            stencilRef={6}
            position={[0, -1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <Ladies stencilRef={6} {...bottom} />
          </PlaneMask>
          <Environment files={City} />
          {/*
          <GizmoHelper
            alignment="bottom-right"
            margin={[80, 80]}
            renderPriority={2}
            faces={['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']}
          >
            <GizmoViewcube
              axisColors={['red', 'green', 'blue']}
              labelColor="black"
            />
          </GizmoHelper>

          <ArcballControls enableZoom={false} enablePan={false} makeDefault />

          <GizmoHelper
            alignment="bottom-right"
            color="white"
            colorX="red"
            colorY="green"
            colorZ="blue"
            controls="OrbitControls"
            faces={['Right', 'Left', 'Top', 'Bottom', 'Front', 'Back']}
            gizmo="GizmoViewcube"
            hoverColor="lightgray"
            labelColor="black"
            marginX={80}
            marginY={80}
            opacity={1}
            strokeColor="gray"
            textColor="black"
          >
            <GizmoViewcube
              axisColors={['red', 'green', 'blue']}
              labelColor="black"
            />
          </GizmoHelper> */}
        </Suspense>
      </Canvas>
    </>
  )
}
