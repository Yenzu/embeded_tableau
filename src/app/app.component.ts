import { Component, ViewChild, ElementRef } from '@angular/core';
declare var tableau: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tableau-example';
  viz: any;
  @ViewChild('vizContainer') containerDiv: ElementRef;
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initTableau();
  }

  initTableau() {
    //VISTA EN TABLEAU ONLINE
    const vizUrl =
      'https://prod-useast-b.online.tableau.com/t/tableautest1/views/Superstore/Overview?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link';

    //VISTA EN TABLEAU 52.191.252.19
    //const vizUrl =
    //  'http://52.191.252.19/views/Regional/Obesity?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link';

    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log('onFirstInteractive');
      },
      onFirstVizSizeKnown: () => {
        console.log('onFirstVizSizeKnown');
      },
    };
    console.log('tableau');
    console.log(tableau);
    //options = {
    /* width: containerDiv.offsetWidth,
       height: containerDiv.offsetHeight,*/
    //"Region": "Central",
    /* hideTabs: true,
       hideToolbar: true,
       onFirstInteractive: () => {
           console.log('onFirstInteractive');
       },
       onFirstVizSizeKnown: () => {
           console.log('onFirstVizSizeKnown');
       },
       /*onFirstInteractive: function () {
           workbook = viz.getWorkbook();
           activeSheet = workbook.getActiveSheet();
           //activeSheet.applyFilterAsync(
           //    "Region",
           //    "Central",
           //tableau.FilterUpdateType.REPLACE);
       }*/
    //};
    this.viz = new tableau.Viz(
      this.containerDiv.nativeElement,
      vizUrl,
      options
    );
    console.log(this.viz);
  }
}
