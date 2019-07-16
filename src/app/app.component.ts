import { Component } from '@angular/core';
import { DialogsService } from './dialog/dialog.service'
import { AppServices } from './services/app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRatingScore : number = 0;
  ngOnInit() {
  }

  constructor(public dialogsService: DialogsService, public appServices: AppServices) {
  }

  giveRating() {
    let that = this;
    let data = {
      "userId": 4132246,
      "contentId": 562135,
    }
    this.dialogsService.openHeadlineAndContent(data)
      .subscribe((result: any) => {
        if (result.commandType == 'save') {
          debugger
          that.appServices.SaveRating(result).subscribe((res: any) => {
            debugger
             that.appServices.getRating(562135).subscribe(res =>{
               debugger
                this.displayRatingScore = res['average'];
             })
          });
        }
      });
  }
}
