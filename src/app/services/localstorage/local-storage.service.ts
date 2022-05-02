import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  //referencia o localStorage a propriedade private storage da classe através do método construtor
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  /**
   * TODO: LOCALSTORAGE ARMAZENA SOMENTE STRING, CASO PRECISAR
   * GUARDAR UM OBJETO MAIS COMPLEXO DEVEMOS CONVERTE-LO.
   * SOMENTE OS NAVEGADORES MODERNOS SUPORTAM LOCALSTORAGE, ASSIM SENDOS
   * PRECISAMOS AJUSTAR ESSES DADOS PARA SEREM ARMAZENADOS EM NAVEGADORES ANTIGOS
   */

  /**
   * DETALHES:
   * Encapsular o método do localStorage;
   * Apenas trabalhar com strings
   * Verificar se o navegador suporta local storage
   */
  set(key: string, value: any): any {
    this.storage.setItem(key, JSON.stringify(key, value));
    let name = localStorage.getItem('name');
    console.log('o que voce esta setando');

    /**
     * TODO: IMPLEMENTAR PARA USAR COOKIES AO INVÉS DE LOCAL STORAGE, PARA NAVEGADORES ANTIGOS
     */
  }

  get(key: string): any {
    if (this.storage) {
      // return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);

      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
