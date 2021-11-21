<template>
  <v-app>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" lazy-validation style="width: 400px">
        <v-col cols="12" class="mt-10 titulos text-center">
          <span class="d-block titulo">Atvidade 2</span>
          <span class="subtitulo">{{ $route.meta.subtitulo }}</span>
        </v-col>
      </v-form>
    </v-row>
    <v-row>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<style lang="stylus">
.titulo {
  font-size: 70px;
  font-font-family: 'Nunito', cursive;
  color: #707070;
  font-weight: 1000;
}

.subtitulo {
  font-size: 31px;
  font-font-family: 'Nunito', cursive;
  color: #707070;
  font-weight: 200;
  font-style: italic;
}

.v-application {
  background-color: #FFF3F3 !important;
}

.titulos {
  line-height: 45px;
}

.v-input__slot {
  background-color: white !important;
}
</style>
