import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SimpleAngularApp'

  @ViewChild('footer')
  footerComponent: FooterComponent = new FooterComponent

  @ViewChild('page2')
  page2Component: Page2Component = new Page2Component()

  startTime: string = ''

  currentPage = 1

  updateLastAccesed() {
    console.log('previous last accessed: ' + this.footerComponent.lastAccessed) //
    this.footerComponent.lastAccessed = new Date().toString()
  }

  ngOnInit(): void {
    this.startTime = new Date().toString()
  }

  incrementHitCounter(page: number) {
    this.currentPage = page
    if (page === 2) {
      this.page2Component.incrementHitCounter()
    }

  }

}
