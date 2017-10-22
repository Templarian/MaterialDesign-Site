import { Injectable } from "@angular/core";

@Injectable()
export class CacheService {

    private cache: object = {};
    private wait: KeyPromises[] = [];

    set (key: string, value: any) {
        this.cache[key] = value;
    }

    async get (key: string): Promise<any> {
        if (this.has(key)) {
            return this.cache[key];
        }
        this.wait[key] = this.wait[key] || new KeyPromises(key);
        this.wait[key].add(new Promise<any>(r => {
            return this.cache[key];
        }))
        return this.wait[key];
    }

    async has (key: string) {
        return key in this.cache;
    }

}

class KeyPromises {

    private promises: Promise<any>[]

    constructor (
        private key: string
    ) { }

    add (promise: Promise<any>) {
        this.promises.push(promise);
    }
}