import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html'
})

export class StarComponent {
    @Input() data: any;
    @Input() dialogInstance: any
    @Input() score = 0;
    @Input() maxScore = 5;
    @Input() forDisplay = false;
    



    range = [];
    marked = -1;

   constructor() { }

   ngOnInit() {
        for (var i = 0; i < this.maxScore; i++) {
            this.range.push(i);
        }
    }

    public mark = (index) => {
        this.marked = this.marked == index ? index - 1 : index;
        this.score = this.marked + 1;
    }

    public isMarked = (index) => {
        if (!this.forDisplay) {
            if (index <= this.marked) {
                return 'fa-star';
            }
            else {
                return 'fa-star-o';
            }
        }
        else {
            if (this.score >= index + 1) {
                return 'fa-star';
            }
            else if (this.score > index && this.score < index + 1) {
                return 'fa-star-half-o';
            }
            else {
                return 'fa-star-o';
            }
        }
    }


    onSave() {
        debugger
        if (this.dialogInstance) {
            let dataObj = this.data;
            dataObj['rating'] = this.score;
            dataObj["commandType"] = 'save'
            this.dialogInstance.close(dataObj);
        }
    }

    onCancel() {
        if (this.dialogInstance) {
            this.data["commandType"] = 'cancel'
            this.dialogInstance.close(this.data);
        }
    }

}