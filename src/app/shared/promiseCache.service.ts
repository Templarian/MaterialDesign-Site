export class PromiseCacheService {

  foo: object = {};

  private static instance: PromiseCacheService = undefined;

  static getInstance(): PromiseCacheService {
    return PromiseCacheService.instance;
  }

  constructor () {
    PromiseCacheService.instance = this;
  }

  has (key: string) {
    return (key in this.foo);
  }

  get (key: string) {
    return this.foo[key];
  }

  set (key: string, promise: Promise<any>): Promise<any> {
    return this.foo[key] = promise;
  }
}