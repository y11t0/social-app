import {APP_LANGUAGES, AppLanguage} from '../languages'

describe('APP_LANGUAGES', () => {
  it('labels English variants by region and lists them side by side', () => {
    const enIndex = APP_LANGUAGES.findIndex(l => l.code2 === AppLanguage.en)

    expect(APP_LANGUAGES[enIndex]).toEqual({
      code2: AppLanguage.en,
      name: 'English (United States)',
    })
    expect(APP_LANGUAGES[enIndex + 1]).toEqual({
      code2: AppLanguage.en_GB,
      name: 'English (United Kingdom)',
    })
    expect(
      APP_LANGUAGES.filter(l => l.code2 === AppLanguage.en_GB),
    ).toHaveLength(1)
  })
})
