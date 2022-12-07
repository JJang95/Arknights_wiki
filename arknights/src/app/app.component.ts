import { Component, OnInit } from '@angular/core';
import { Root } from './models/operator.model'
import { OperatorService } from './services/operator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private operatorService: OperatorService) {

  }

  operatorName: string = 'Grani';
  operatorData?: Root;

  ngOnInit(): void {
    this.getOperatorData(this.operatorName);
    this.operatorName = '';
  }

  onSubmit() {
    this.getOperatorData(this.operatorName);
    this.operatorName = '';
  }

  private getOperatorData(operatorName : string) {
    this.operatorService.getOperatorData(operatorName)
    .subscribe({
      next: (response) => {
        this.operatorData = response;
        console.log(response);
      }
    });
  }

}


