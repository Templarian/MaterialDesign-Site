import { Injectable } from "@angular/core";
@Injectable()
export class PromiseCacheService {

  // Cached promises
  private keys: object = {};
  // Aliases mapped
  private maps: object = {};

  private static instance: PromiseCacheService = undefined;

  static getInstance(): PromiseCacheService {
    return PromiseCacheService.instance;
  }

  constructor () {
    PromiseCacheService.instance = this;
  }

  remove (key: string) {
    if (key in this.map) {
      delete this.keys[this.map[key]];
    }
    delete this.keys[key];
  }

  has (key: string) {
    return (key in this.keys);
  }

  get (key: string) {
    return this.keys[key];
  }

  set (key: string, promise: Promise<any>): Promise<any> {
    return this.keys[key] = promise;
  }

  map (from: string, to: string) {
    this.maps[from] = to;
  }

  removeMap (from: string) {
    delete this.maps[from];
  }
}