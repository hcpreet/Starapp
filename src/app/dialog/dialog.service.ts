import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {
    DialogService,
    DialogRef,
    DialogCloseResult
} from '@progress/kendo-angular-dialog';

import {StarComponent  } from './star/star.component'

@Injectable()
export class DialogsService {
    constructor(public dialogService: DialogService) {

    }

    public openHeadlineAndContent(confObject): Observable<any> {

        const dialog = this.dialogService.open({
           // title: "Please confirm",
            content: StarComponent,
        });

        const confInfo = dialog.content.instance;
        confInfo.data = confObject;
        confInfo.dialogInstance = dialog;
        return dialog.result;
    }
}