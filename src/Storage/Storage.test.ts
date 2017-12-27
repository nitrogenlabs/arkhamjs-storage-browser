/**
 * Copyright (c) 2018, Nitrogen Labs, Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

import {BrowserStorage} from './Storage';

describe('Storage', () => {
  it('check if localStorage exists', () => {
    const localStorage = BrowserStorage.getLocalStorage();
    expect(window.localStorage).toBe(localStorage);
  });

  it('check if sessionStorage exists', () => {
    const sessionStorage = BrowserStorage.getLocalStorage();
    expect(window.sessionStorage).toBe(sessionStorage);
  });
});
