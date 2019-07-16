import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable  } from 'rxjs'
import { RatingModel } from './../model/ratingModel'
  import "rxjs/add/observable/of";
@Injectable({
    providedIn: 'root'
})
export class AppServices {
    
   
   
    ratingData: RatingModel[] = [];
    constructor(public http: HttpClient) {

    }

    SaveRating(data: any): Observable<any> {
        this.ratingData.push(data);
        return Observable.of([])
     //   return this.http.post('/rating', data)
    }


  
     getRating(contentId: number): Observable<object> {
       let sum = 0;
       let count = 0;
        this.ratingData.filter(x => x.contentId ==contentId).forEach(item =>{
          console.log(item)
            sum += item.rating;
            count++;
        })
        if(count >0){
         sum = sum/count;
        }
         
        let data ={
            contentId : contentId,
            average : sum
        }
        return Observable.of(data)
      //  return this.http.get('/rating/' + contentId);

    }

}