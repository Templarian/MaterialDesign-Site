export class PromiseCacheService {

  private keys: object = {};

  private static instance: PromiseCacheService = undefined;

  static getInstance(): PromiseCacheService {
    return PromiseCacheService.instance;
  }

  constructor () {
    PromiseCacheService.instance = this;
  }

  remove (key: string) {
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
}