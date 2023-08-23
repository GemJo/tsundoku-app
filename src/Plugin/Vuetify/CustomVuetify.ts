// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md } from 'vuetify/iconsets/md';

import Theme from "@/Plugin/Vuetify/Theme";
import Button from "@/Plugin/Vuetify/Button";
import Form from "@/Plugin/Vuetify/Form";

export default class CustomVuetify {
  public static generate(): any {
    return createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'md',
        aliases,
        sets: {
          md,
        },
      } ,
      ...this.getCustomComponents(),
      theme: Theme.get(),
    })
  }

  private static getCustomComponents() {
    return {
      aliases: {
        ...Button.getAliases(),
        ...Form.getAliases(),
      },
      defaults: {
        ...Button.getDefaults(),
        ...Form.getDefaults(),
      }
    }
  }
}