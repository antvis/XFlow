export interface IDepAnalyzeResult {
  dependencies: Record<
    string,
    {
      version: string
      css?: string
    }
  >
  files: Record<string, { import: string; fileAbsPath: string }>
}

export interface ICbsData {
  'sandbox.config.json': {
    template: string
    [key: string]: any
  }
  'package.json': {
    name: string
    description: string
    main: string
    dependencies: Record<string, string>
    devDependencies: Record<string, string>
  }
  'index.html': string
  [key: string]: any
}

export interface IPreviewerComponentProps {
  title?: string
  description?: string
  sources:
    | {
        /**
         * self source code for demo
         * @note  jsx exsits definitely, tsx exists when the source code language is tsx
         */
        _: { jsx: string; tsx?: string }
      }
    | Record<
        string,
        {
          import: string
          content: string
          path?: string
          tsx?: string
        }
      >
  /**
   * third-party dependencies of demo
   */
  dependencies: IDepAnalyzeResult['dependencies']
  /**
   * global identifier for demo
   */
  identifier: string
  /**
   * the component which demo belongs to
   */
  componentName?: string
  /**
   * motions of current demo, for snapshot or preview
   */
  motions?: string[]
  /**
   * mark demo as debug demo, will be discarded in production mode
   */
  debug?: true
  /**
   * optional fields
   */
  className?: string[]
  [key: string]: any
}

export interface IApiComponentProps {
  /**
   * api data identifier
   * @note  it is the component identifier by default
   *        will fallback to the src path on <code> element if component identifier is not available
   */
  identifier: string
  /**
   * which export should be displayed
   */
  export: string
  /**
   * whether the title is hidden when compiling
   */
  hideTitle: boolean
}
