<template>
  <v-app>
    <v-row justify="center">
      <v-form ref="form" v-model="valid" lazy-validation style="width: 400px">
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="Nome"
            required
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="surname"
            label="Sobrenome"
            required
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="bornDate"
            label="Data de Nascimento"
            required
            outlined
            dense
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            color="#00C20D"
            block
            x-large
            :disabled="!valid"
            dark
            class="mr-4"
            @click="snackbar = true"
          >
            Enviar
          </v-btn>
        </v-col>
      </v-form>
    </v-row>

    <v-snackbar v-model="snackbar" color="green" :timeout="2000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          X
        </v-btn>
      </template>
    </v-snackbar>
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

.titulos {
  line-height: 45px;
}

.v-input__slot {
  background-color: white !important;
}
</style>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    surname: "",
    bornDate: "",
    snackbar: false,
    text: `Cadastrado`,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
