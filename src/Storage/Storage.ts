/**
 * Copyright (c) 2018, Nitrogen Labs, Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

export class BrowserStorage {
  static window: any = window || {};

  static getLocalStorage(): any {
    const {localStorage} = BrowserStorage.window;

    return localStorage;
  }

  static getSessionStorage(): any {
    const {sessionStorage} = BrowserStorage.window;

    return sessionStorage;
  }
}
