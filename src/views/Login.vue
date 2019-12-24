<template>
  <div class="app">
    <v-app>
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-5">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      outlined
                      label="Username"
                      :autofocus="true"
                      :counter="25"
                      name="login"
                      type="text"
                    />
                    <v-text-field
                      outlined
                      id="password"
                      label="Password"
                      :counter="25"
                      name="password"
                      type="password"
                    />
                  </v-form>
                  <v-spacer />
                  <div class="text-center">
                    <v-btn color="primary">Login</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>
