<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenido',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Perfil',
          to: '/perfil'
        },
        {
          icon: 'mdi-qrcode-scan',
          title: 'Código QR',
          to: '/codigo-qr'
        },
        {
          icon: 'mdi-briefcase',
          title: 'Trabajos',
          to: '/trabajos'
        },
        {
          icon: 'mdi-laptop',
          title: 'Eterno Oriente',
          to: '/eterno-oriente'
        },
        {
          icon: 'mdi-office-building',
          title: 'Gran Logia',
          to: '/gran-logia'
        },
        {
          icon: 'mdi-greenhouse',
          title: 'Logias',
          to: '/logias'
        },
        {},
        {
          icon: 'mdi-wallet-membership',
          title: 'Miembros',
          to: '/miembros'
        },
        {
          icon: 'mdi-book-clock',
          title: 'Asistencia',
          to: '/asistencia'
        },
        {
          icon: 'mdi-vote',
          title: 'Votación',
          to: '/votacion'
        },
        {},
        {
          icon: 'mdi-desk',
          title: 'Secretaria',
        },
        {
          icon: 'mdi-car-brake-low-pressure',
          title: 'Planchas',
          to: '/planchas'
        },
        {
          icon: 'mdi-certificate',
          title: 'Diplomas',
          to: '/diplomas'
        },
        {},
        {
          icon: 'mdi-bookshelf',
          title: 'Biblioteca',
        },
        {
          icon: 'mdi-file-document',
          title: 'Base de Conocimiento',
          to: '/base-de-conocimiento'
        },
        {},
        {
          icon: 'mdi-exit-to-app',
          title: 'Salir',
          to: '/logout'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'E-M@son'
    }
  }
}
</script>
