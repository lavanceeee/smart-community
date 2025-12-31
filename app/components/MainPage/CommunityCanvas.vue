<script setup lang="ts">
import * as THREE from 'three'

// 获取模型后的处理函数
const onModelLoaded = (model: any) => {
  // 自动调整模型到中心
  const box = new THREE.Box3().setFromObject(model.scene)
  const center = box.getCenter(new THREE.Vector3())
  model.scene.position.x += (model.scene.position.x - center.x)
  model.scene.position.z += (model.scene.position.z - center.z)
}
</script>

<template>
  <div class="w-full h-[600px] bg-[oklch(13%_0.028_261.692)] relative">
    <TresCanvas shadows alpha>
      <TresOrthographicCamera 
        :position="[200, 200, 200]" 
        :zoom="1" 
        :look-at="[0, 0, 0]" 
      />

      <Suspense>
        <GLTFModel 
          path="/models/model.gltf" 
          draco 
          @load="onModelLoaded"
        />
      </Suspense>

      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight :position="[100, 100, 100]" :intensity="3" color="#60a5fa" />
      <TresPointLight :position="[-50, 50, -50]" :intensity="2" color="#ff5000" /> </TresCanvas>
  </div>
</template>