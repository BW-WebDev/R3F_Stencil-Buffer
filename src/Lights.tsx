import { memo } from 'react'

function Lights() {
  return (
    <group>
      <hemisphereLight intensity={0.5} groundColor="gray" />
      <ambientLight intensity={0.25} />
    </group>
  )
}

export default memo(Lights)
