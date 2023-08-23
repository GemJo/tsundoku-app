import { VBtn } from "vuetify/components/VBtn";

export default class Button {
  public static getAliases(): object {
    return {
      TBtn: VBtn,
      TTextBtn: VBtn,
      TSecondaryBtn: VBtn,
      TTextSecondaryBtn: VBtn,
    };
  }

  public static getDefaults(): object {
    return {
      VBtn: {
        ...this.getDefaultAttributes(),
      },
      TBtn: {
        color: 'primary',
        ...this.getDefaultAttributes(),
      },
      TTextBtn: {
        color: 'primary',
        variant: 'text',
        ...this.getDefaultAttributes(),
      },
      TSecondaryBtn: {
        color: 'secondary',
        ...this.getDefaultAttributes(),
      },
      TTextSecondaryBtn: {
        color: 'secondary',
        variant: 'text',
        ...this.getDefaultAttributes(),
      },
    };
  }

  private static getDefaultAttributes(): object {
    return {
      'min-height': '40px',
      flat: true,
      class: 'rounded-sm t-btn',
    }
  }
}
