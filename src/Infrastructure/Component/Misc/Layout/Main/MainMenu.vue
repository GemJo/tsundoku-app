<template>
  <v-app-bar color="grey-lighten-4 main-menu" flat>
    <v-app-bar-title class="text-primary">
      Tsundoku
    </v-app-bar-title>
    <v-spacer />
    <template v-slot:append>
      <t-icon-btn size="small">
        <v-icon class="material-symbols-rounded main-menu__logout-icon">logout</v-icon>
      </t-icon-btn>
    </template>
  </v-app-bar>
</template>