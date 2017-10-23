import { PromiseCacheService } from "app/shared/promiseCache.service";

export function Cacheable() {
  return function (target: any) {
    target['testing'] = target.name;
    return target;
  };
}

export function CacheParam(target: any, propertyKey: string, index: number): void {
  const metadataKey = `__cache_${propertyKey}_`;

  Array.isArray(target[metadataKey])
    ? target[metadataKey].push(index)
    : target[metadataKey] = [index];
}

export function PromiseCache(key?: string): any | Promise<any> {
  
  return function (target: Function, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): any | Promise<any> {
    const method: Function = descriptor.value;
    descriptor.value = function(...args: Array<any>): any | Promise<any> {
      const className: string = this.constructor.name;
      const metadataKey = `__cache_${propertyKey}_`;
      const paramKey = args.join('_');
      const fullKey = key || `${className}_${propertyKey}_${paramKey}`;
      let promiseCache = PromiseCacheService.getInstance();
      if (promiseCache.has(fullKey)) {
        return promiseCache.get(fullKey);
      }
      return promiseCache.set(fullKey, new Promise<any>(async resolve => {
        resolve(method.apply(this, args));
      }));
    };
    return descriptor;
  };

}