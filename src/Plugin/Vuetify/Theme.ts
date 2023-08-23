export default class Theme {
  public static get(): object {
    return {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#FF7A65',
            'primary-darken-1': '#E7614C',
            'primary-darken-2': '#D04833',
            'primary-darken-3': '#B82E19',
            'primary-darken-4': '#A01500',
            'primary-lighten-1': '#FF9787',
            'primary-lighten-2': '#FFB5A9',
            'primary-lighten-3': '#FFD2CB',
            'primary-lighten-4': '#FFEFED',
            secondary: '#CFA987',
            'secondary-darken-1': '#BD946F',
            'secondary-darken-2': '#AA7E58',
            'secondary-darken-3': '#986940',
            'secondary-lighten-1': '#DFBFA2',
            'secondary-lighten-2': '#EFD4BC',
            'secondary-lighten-3': '#FFEAD7',
            'text-muted': '#BDBDBD',
            error: '#f94144',
            success: '#90be6d',
            warning: '#f8961e',
            info: '#277da1',
          }
        }
      }
    }
  }
}
