import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('content', {static: false}) el!: ElementRef;
  
  title = 'Invoice';

  makePDF(){

    let pdf = new jsPDF('p','px','A4');

    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("TaxInvoice.pdf"); 
      }
    });
  }
}
