import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  permissions: string[] = ['d','b','c','a'];
  
  constructor() { }

  public hasAccess(...permissions) {
    return this.deepEquals(permissions.sort(), this.permissions.sort())
  }

  public hasAccessAny(...permissions) {
    return permissions.reduce(
      (grantAccess, permission) => grantAccess || (this.permissions.indexOf(permission) !== -1),
      false
    );
  }

  deepEquals(a, b) {
    if (b === undefined && a !== undefined || typeof a !== typeof b) return false;
    if (a instanceof Object) {
      if (a instanceof Array) {
        if (!(b instanceof Array) || a.length !== b.length) return false;
        for (var i = 0; i < a.length; i++) if (!this.deepEquals(a[i], b[i])) return false;
      } else {
        if (b instanceof Array || !this.deepEquals(Object.keys(a).sort(), Object.keys(b).sort())) return false;
        for (var key in a) if (!this.deepEquals(a[key], b[key])) return false;
      }
    } else {
      return a === b;
    }
    return true;
  }
}