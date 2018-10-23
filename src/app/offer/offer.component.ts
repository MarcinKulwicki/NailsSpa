import { Component, OnInit } from '@angular/core';

import {
  style,
  animate,
  animation,
  animateChild,
  useAnimation,
  group,
  sequence,
  transition,
  state,
  trigger,
  query as q,
  stagger, query
} from '@angular/animations';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({transform: 'scale(0.5)', opacity: 0}),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({transform: 'scale(1)', opacity: 1}))  // final
      ]),
      transition(':leave', [
        style({transform: 'scale(1)', opacity: 1, height: '*'}),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ]),
    trigger('list', [
      transition(':enter', [
        query('@items', stagger(700, animateChild()))
      ]),
    ])
  ]
})
export class OfferComponent implements OnInit {

  content: number;
  list = [1, 2, 3, 4];



  titleServices: String = 'Ładny tytuł dla usług';
  descriptionServices: String = 'Tart dragée tiramisu liquorice fruitcake cake sweet ice cream sugar plum. Tiramisu cake oat cake sesame snaps jujubes chocolate candy sesame snaps tiramisu. Halvah soufflé dessert cake. Lollipop cake brownie gingerbread topping marshmallow. Halvah chocolate apple pie candy halvah macaroon cupcake caramels. Candy chocolate bar caramels apple pie. Bear claw tootsie roll sweet cupcake. Candy canes cake bonbon toffee pie sesame snaps sweet cheesecake halvah. Cake tiramisu soufflé marzipan muffin tootsie roll. Halvah danish sweet cupcake cake. Chocolate jelly beans dragée pie donut. Muffin chocolate cupcake liquorice pudding macaroon. Candy soufflé chocolate gummies. Brownie candy sugar plum bonbon lemon drops chocolate marzipan gummi bears pastry.'

  titleTraining: String = 'Szkolenia';
  descriptionTraining: String = 'Danish croissant bear claw soufflé apple pie danish. Dessert chupa chups chupa chups chocolate bar chocolate cake soufflé halvah croissant cake. Chocolate cake apple pie gummi bears fruitcake wafer topping. Bear claw caramels fruitcake icing chocolate cake lemon drops soufflé wafer candy canes. Tart tootsie roll dragée biscuit muffin. Tart cupcake biscuit. Ice cream cupcake oat cake chupa chups. Bear claw chupa chups cookie cheesecake. Pie oat cake topping cookie. Lollipop gummi bears cupcake liquorice carrot cake chocolate cake sweet pastry tiramisu. Cupcake cake pastry cake cupcake chocolate cake cake. Cupcake marzipan candy jelly-o danish ice cream jelly beans. Gummies chocolate cake toffee bear claw. Dragée sweet roll topping cotton candy sweet powder cotton candy dessert.';

  titleWork: String = 'Pracuj z nami';
  descriptionWork: String = 'Cupcake ipsum dolor sit amet sesame snaps apple pie. Apple pie liquorice I love lollipop. Pastry cheesecake liquorice I love toffee. Cake apple pie gingerbread liquorice apple pie muffin sugar plum. Bear claw marzipan jelly beans cheesecake cotton candy. Pudding powder topping powder dessert I love I love. Wafer cake sweet roll jujubes lollipop cupcake sesame snaps. Tiramisu gummies macaroon oat cake icing donut soufflé. Powder brownie I love sugar plum pie. Tart dessert sweet topping cotton candy carrot cake jelly beans. Sugar plum dessert croissant candy canes sugar plum chocolate donut bear claw chocolate. Icing gingerbread lemon drops sesame snaps pudding jelly beans candy canes. Fruitcake icing chocolate cake halvah muffin I love I love I love.';

  constructor() {
  }

  ngOnInit() {
    this.content = 0;
  }

  addContent(content: number) {
    this.content = content;
  }
}

