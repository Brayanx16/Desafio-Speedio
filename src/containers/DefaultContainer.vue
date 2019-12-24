<template>
  <div class="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-container pa-8>
          <v-img
            max-width="210"
            src="https://www.speedio.com.br/wp-content/uploads/2018/05/speedio-logo1-1024x271.png"
          />
        </v-container>
        <v-divider></v-divider>
        <v-list dense>
          <router-link style="text-decoration: none;" :to="{ name: 'Home' }">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
          <router-link
            style="text-decoration: none;"
            :to="{ name: 'Usuarios' }"
          >
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-contact-mail</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Usuários</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn text color="error" block>Sair</v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Speedio</v-toolbar-title>
      </v-app-bar>
      <div>
        <router-view />
      </div>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "DefaultContainer",

  data: () => ({
    drawer: null
  })
};
</script>
