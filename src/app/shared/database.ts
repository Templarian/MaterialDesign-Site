import Dexie from 'dexie';

export class Database extends Dexie {
  hashes: Dexie.Table<HashTable, number>;
  icons: Dexie.Table<IconTable, number>;
  
  constructor() {  
    super("IconCache");

    this.version(1).stores({
      hashes: '&id, hash',
      icons: '&id, idFull, name, data, aliases, tags, codepoint'
    });
    
    this.hashes = this.table("hashes");
    this.icons = this.table("icons");
  }
}

interface HashTable {
  id: string,
  hash: string
}

interface IconTable {
  id: string,
  idFull: string,
  codepoint: number,
  name: string,
  data: string,
  version: string,
  aliases: any,
  tags: any
}