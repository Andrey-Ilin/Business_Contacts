import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private ef: AngularFire) {}

  getBusinesses(category: string = null) {
    if (category != null) {
      this.businesses = this.ef.database.list('/businesses/0', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      });
    } else {
      this.businesses = this.ef.database.list('/businesses/0');
    }
    return this.businesses;
  }

  getCategories() {
    this.categories = this.ef.database.list('/categories');
    return this.categories;
  }

  addBusiness(newBusiness) {
    return this.businesses.push(newBusiness)
  }

  updateBusiness(key, business) {
    return this.businesses.update(key, business)
  }

  deleteBusiness(key) {
    this.businesses.remove(key)
  }

}

export interface Business {
  $key?: string;
  company?: string;
  description: string;
  category: string;
  years_in_business?: number;
  street_adress?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  phone?: string;
  email?: string;
  created_at: string;
}

export interface Category {
  $key?: string;
  name?: string;
}

