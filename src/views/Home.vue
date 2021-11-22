<template>
  <v-app>
    <v-row justify="center" no-gutters>
      <v-form>
        <v-col>
          <v-btn
            to="/atividade-2"
            class="mx-2"
            fab
            dark
            x-large
            tile
            color="pink"
          >
            <v-icon dark> mdi-heart </v-icon>
          </v-btn>
          <v-btn
            to="/atividade-2"
            class="mx-2"
            fab
            dark
            x-large
            tile
            color="green"
            disabled
          >
            <v-icon dark> mdi-star </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            to="/atividade-2"
            class="mx-2"
            fab
            dark
            x-large
            tile
            color="purple"
            disabled
          >
            <v-icon dark> mdi-cached </v-icon>
          </v-btn>
          <v-btn
            to="/atividade-2"
            class="mx-2"
            fab
            dark
            x-large
            tile
            color="blue"
            dislabed
          >
            <v-icon dark> mdi-thumb-up </v-icon>
          </v-btn>
        </v-col>
      </v-form>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
