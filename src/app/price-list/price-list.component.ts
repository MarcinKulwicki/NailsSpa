import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  category: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Przedłużenie paznokci', price: 120, category: 'Manicure'},
  {position: 2, name: 'Przedłużenie hybrydowe', price: 100, category: 'Manicure'},
  {position: 3, name: 'Żelowanie naturalnej płytki', price: 90, category: 'Manicure'},
  {position: 4, name: 'Uzupełnienie/odnowa żelu', price: 90, category: 'Manicure'},
  {position: 5, name: 'Manicure hybrydowy', price: 70, category: 'Manicure'},
  {position: 6, name: 'French, Babyboomer', price: 10, category: 'Manicure'},
  {position: 7, name: 'Nałożenie samej bazy hybrydowej', price: 50, category: 'Manicure'},
  {position: 8, name: 'Manicure japoński', price: 50, category: 'Manicure'},
  {position: 9, name: 'Naprawa jednego paznokcia', price: 10, category: 'Manicure'},
  {position: 10, name: 'Większe zdobienia powyżej 2 paznokci', price: 5, category: 'Manicure'},
  {position: 11, name: 'Jeden paznokieć w cyrkoniach', price: 15, category: 'Manicure'},
  {position: 12, name: 'Naszej stylizacji w cenie usługi', price: 0, category: 'Usunięcie'},
  {position: 13, name: 'Masy po stylistce z innego salonu', price: 15, category: 'Usunięcie'},
  {position: 14, name: 'Masy/żelu', price: 45, category: 'Usunięcie'},
  {position: 15, name: 'Hybrydy', price: 35, category: 'Usunięcie'},
  {position: 16, name: 'Tradycyjny', price: 90, category: 'Pedicure'},
  {position: 17, name: 'Hybrydowy', price: 80, category: 'Pedicure'},
  {position: 18, name: 'Frezarkowy+hybryda', price: 120, category: 'Pedicure'},
  {position: 19, name: 'Kwasowy', price: 160, category: 'Pedicure'},
  {position: 20, name: 'Regulacja brwi', price: 15, category: 'Brwi i rzęsy'},
  {position: 21, name: 'Henna brwi', price: 20, category: 'Brwi i rzęsy'},
  {position: 22, name: 'Henna rzęs', price: 25, category: 'Brwi i rzęsy'},
  {position: 23, name: 'Henna brwi z regulacją', price: 30, category: 'Brwi i rzęsy'},
  {position: 24, name: 'Pakiet brwi+rzęsy', price: 50, category: 'Brwi i rzęsy'},
  {position: 26, name: 'Nawilżająco-regenerujący', price: 150, category: 'Zabiegi'},
  {position: 27, name: 'Dla skór naczyniowych', price: 170, category: 'Zabiegi'},
  {position: 28, name: 'Dla skór trądzikowych', price: 150, category: 'Zabiegi'},
  {position: 29, name: 'Błyskawiczny lift', price: 170, category: 'Zabiegi'},
  {position: 30, name: 'Rozjaśniający przebarwienia', price: 230, category: 'Zabiegi'},
  {position: 31, name: 'Odbudowujący dla skóry dojrzałej', price: 320, category: 'Zabiegi'},
  {position: 32, name: 'BLACK GOLD - intensywnie regenerujący', price: 350, category: 'Zabiegi'},
  {position: 33, name: 'Zabieg SPA', price: 279, category: 'Zabiegi'},
  {position: 34, name: 'Zabieg SPA Premium', price: 379, category: 'Zabiegi'},
  {position: 35, name: 'Zabieg Reti-Peel', price: 350, category: 'Zabiegi'},
  {position: 36, name: 'Kwasy', price: 150, category: 'Zabiegi'},
  {position: 37, name: 'Podwójne kwasy', price: 180, category: 'Zabiegi'},
  {position: 38, name: 'Potrójne kwasy', price: 220, category: 'Zabiegi'},
  {position: 39, name: 'Mikrodermabrazja diamentowa', price: 150, category: 'Zabiegi'},
  {position: 40, name: 'Mikrodermabrazja+kwasy', price: 180, category: 'Zabiegi'},
  {position: 41, name: 'Mikrodermabrazja+RF', price: 210, category: 'Zabiegi'},
  {position: 42, name: 'RF pod oczy', price: 150, category: 'Zabiegi'},
  {position: 43, name: 'Fale radiowe', price: 180, category: 'Zabiegi'},
  {position: 44, name: 'Masaż twarz,szyja,dekolt', price: 89, category: 'Zabiegi'},
  {position: 45, name: 'Mezoterapia bezigłowa', price: 160, category: 'Zabiegi'},
  {position: 46, name: 'Peeling kawitacyjny+sonoforeza', price: 120, category: 'Zabiegi'},
  {position: 47, name: 'Oczyszczanie manualne, wapozon', price: 120, category: 'Zabiegi'},
  {position: 48, name: 'Oczyszczanie potrójne', price: 160, category: 'Zabiegi'},
  {position: 49, name: 'Oczyszczanie poczwórne', price: 200, category: 'Zabiegi'},
  {position: 50, name: 'Oksybrazja serum+maska', price: 160, category: 'Zabiegi'},
  {position: 51, name: 'Oksybrazja+kwas', price: 240, category: 'Zabiegi'},
  {position: 52, name: 'Dermomasaż', price: 50, category: 'Zabiegi'},
  {position: 53, name: 'Liposukcja kawitacyjna', price: 150, category: 'Zabiegi'},
  {position: 54, name: 'Liposukcja+dermomasaż', price: 190, category: 'Zabiegi'},
  {position: 55, name: 'Relaksacyjny masaż pleców', price: 100, category: 'Zabiegi'},
  {position: 56, name: 'Parafina na dłonie', price: 35, category: 'Zabiegi'},
  {position: 57, name: 'Depilacja: wąsik', price: 15, category: 'Zabiegi'},
  {position: 58, name: 'Depilacja: pachy', price: 40, category: 'Zabiegi'},
  {position: 59, name: 'Depilacja: łydki', price: 50, category: 'Zabiegi'},
  {position: 60, name: 'Depilacja: uda', price: 50, category: 'Zabiegi'},
  {position: 61, name: 'Depilacja: pośladki', price: 50, category: 'Zabiegi'},
  {position: 62, name: 'Laminacja', price: 130, category: 'Rzęsy'},
  {position: 63, name: 'Założenie 1:1', price: 140, category: 'Rzęsy'},
  {position: 64, name: 'Założenie 2:1', price: 160, category: 'Rzęsy'},
  {position: 65, name: 'Założenie 3:1', price: 180, category: 'Rzęsy'},
  {position: 66, name: 'Uzupełnienie', price: 120, category: 'Rzęsy'},
  {position: 67, name: 'Uzupełnienie', price: 140, category: 'Rzęsy'},
  {position: 68, name: 'Uzupełnienie', price: 160, category: 'Rzęsy'},
  
];

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  constructor() {
  }

  displayedColumns: string[] = ['position', 'name', 'price', 'category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClick(value: string) {
    console.log(value);
    // this.applyFilter(value);
  }

}
