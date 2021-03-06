import { Component, Inject } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { DishProvider } from '../../providers/dish/dish';
import { DishdetailPage } from '../dishdetail/dishdetail';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  dishes: Dish[];
  errMess: string;

  constructor(public navCtrl: NavController, private dishservice: DishProvider,
  @Inject('BaseUrl') private BaseUrl ) {}

  ngOnInit() {
    this.dishservice.getDishes()
      .subscribe(dishes => this.dishes = dishes,
       errormess => this.errMess = errormess );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dishSelected(event, dish) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DishdetailPage, {
      dish: dish
    });
  }

}
