import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';


const CONFIG = {
  space: 'x88ri82pqtgn',
  accessToken: 'ea6a65cdf6bb3fe575f59951ebde872643e78c29b5127e6ffdc421ba5e6bd301',

  contentTypeIds: {
    product: '3D0LBTecAgMkOO00qs6uKS'
  }
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query))
      .then(res => res.items);
  }
}
