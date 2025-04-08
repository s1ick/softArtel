import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

export function provideLocale() {
  registerLocaleData(localeRu, 'ru');
  return { provide: LOCALE_ID, useValue: 'ru' };
}