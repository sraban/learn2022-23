<template>
  <div class="about">
      <Scene>
        <Camera></Camera>
        <HemisphericLight diffuse="#0000FF"></HemisphericLight>
        

        <Entity :position="[0, 0, 5]">
          
          <Animation property="rotation.x" :duration="5">
            <Key frame="0%" :value="0"></Key>
            <Key frame="100%" :value="Math.PI * 2"></Key>
          </Animation>

          <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation>
          <PointLight diffuse="#FF0000"></PointLight>

          <template v-for="x in [0, 4, -4]">
            <template v-for="y in [0, 4, -4]">
              <Box v-for="z in [0, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`"></Box>
            </template>
          </template>

        </Entity>

        
      </Scene>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return { testScene: null, testSphere: null };
  },
}
</script>