import { VTextField } from "vuetify/components/VTextField";
import { VCheckbox } from "vuetify/components/VCheckbox";
import { VRadio } from "vuetify/components/VRadio";
import { VTextarea } from "vuetify/components/VTextarea";

export default class Form {
  public static getAliases(): object {
    return {
      TTextField: VTextField,
      TTextarea: VTextarea,
      TCheckbox: VCheckbox,
      TRadio: VRadio,
    };
  }

  public static getDefaults(): object {
    return {
      TTextField: {
        color: 'primary',
        variant: 'outlined',
        baseColor: 'primary',
        density: 'compact',
        validateOn: 'blur',
      },
      TTextarea: {
        color: 'primary',
        variant: 'outlined',
        baseColor: 'primary',
        density: 'compact',
        autoGrow: true,
        rows: 3,
        validateOn: 'blur',
      },
      TCheckbox: {
        color: 'primary',
        density: 'comfortable',
        ripple: false,
        class: 't-checkbox'
      },
      TRadio: {
        color: 'primary',
        density: 'comfortable',
        ripple: false,
        class: 't-checkbox'
      },
    };
  }
}
