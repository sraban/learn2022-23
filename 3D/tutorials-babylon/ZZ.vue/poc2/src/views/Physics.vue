<template>
  <div class="about">
      <Scene>
        <Camera type="arcRotate" :radius="10" :beta="Math.PI / 4"></Camera>

        <HemisphericLight>
          <property name="intensity" :float="2"></property>
        </HemisphericLight>

        <Ground :options="{ width: 10, height: 10 }">
          <Physics></Physics>
        </Ground>

        <Entity v-for="(_, i) in Array(81).fill()" :key="i" :position="[(i % 3) - 1, 2 + Math.floor(i / 9), (Math.floor(i / 3) % 3) - 1]" :scaling="[1, 1, 0.3]">
          <Physics :mass="1"></Physics>
          <Entity :scaling="[1, 1, 1 / 0.3]">
            <HelloWorld></HelloWorld>
            <Entity :scaling="[-1, 1, 1]">
              <HelloWorld></HelloWorld>
            </Entity>
          </Entity>
        </Entity>
      </Scene>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'About',
  components: {
    HelloWorld,
  },
  data() {
    return { testScene: null, testSphere: null };
  },
}
</script>