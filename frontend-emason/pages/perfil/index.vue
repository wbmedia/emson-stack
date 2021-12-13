<template>
  <v-container fluid>
    <h1 class="text-center">Perfil</h1>
    <v-row>
      <v-col cols="12" md="12">
        <v-form>
          <v-container>
            <h3>Datos Generales</h3>
            <v-divider></v-divider>
            <v-row class="mt-5">
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="100"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="100"
                  label="Apellido"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Lugar de Nacimiento"
                  v-model="birthplace"
                  required
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Fecha de Nacimiento"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    :active-picker.sync="activePicker"
                    :max="
                      new Date(
                        Date.now() - new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .substr(0, 10)
                    "
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <h3>Grados</h3>
            <v-divider></v-divider>
            <v-row class="mt-5">
              <v-col>
                <v-text-field
                  label="Dirección"
                  placeholder="Dirección"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Código Postal"
                  placeholder="Código Postal"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select :items="items" label="Zona"></v-select>
              </v-col>
            </v-row>
            <h3>Contacto</h3>
            <v-divider></v-divider>
            <v-row class="mt-5">
              <v-col>
                <v-text-field
                  label="Teléfono"
                  placeholder="Numero Telefonico"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Email"
                  type="email"
                  placeholder="Correo Eléctronico"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-btn depressed color="primary" class="mr-1"> Guardar </v-btn>
              <v-btn depressed color="primary"> Volver </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
