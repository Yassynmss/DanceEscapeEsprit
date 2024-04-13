import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiURL = "http://localhost:8080/feedbackAndResult/";

  constructor(private http: HttpClient) { }

  postFeedback(feedbackAndResult: any): Observable<any> {
    return this.http.post(this.apiURL + "add", feedbackAndResult);
  }
  getAllFeedbacks():Observable<any>{
    return this.http.get(this.apiURL+"fetchFeedbackAndResult")
  }


  deleteFeedback(id_resandfeed: any): Observable<any> {

    return this.http.delete(this.apiURL + `delete/${id_resandfeed}`);
  }  
 
  

/*
deleteFeedback(id_resandfeed: any): Observable<any> {
  return this.http.delete(`${this.apiURL}/${id_resandfeed}`);
}
*/
getFeedbackById(id_resandfeed: any): Observable<any> {
  return this.http.get(this.apiURL + `feedback/${id_resandfeed}` )
}
updateFeedback(id_resandfeed: number, feedback: any): Observable<any> {
  return this.http.put(this.apiURL + `update/${id_resandfeed}`, feedback);
}
assignFeedbackToParticipation(id_resandfeed: number, id_participation: number) {
  return this.http.post('assign-to-participation', { id_resandfeed, id_participation });
}
assignFeedbackToJury(id_resandfeed: number, JuriesID: number) {
  return this.http.post('assign-to-jury', { id_resandfeed, JuriesID });
}
getJuryNames(JuriesNames :String ):Observable<any>{
return this.http.get(this.apiURL + `names/${JuriesNames}` )
}
searchFeedbackAndResult(criteria: any): Observable<any> {
  let params = new HttpParams();
  for (const key in criteria) {
    if (criteria.hasOwnProperty(key) && criteria[key] !== null && criteria[key] !== undefined) {
      params = params.set(key, criteria[key]);
    }
  }
  return this.http.get<any>(this.apiURL+"search",{ params });
}

getTop3Feedbacks(): Observable<any> {
  console.log("loadTop3Feedbacks called!"); // This line is added

  return this.http.get(this.apiURL+"top3")

}

getTop10Feedbacks(): Observable<any> {
  return this.http.get(this.apiURL+"top10");
  console.log("loadTop10Feedbacks called!"); // This line is added

}
LikePostt(id_resandfeed: any): Observable<any> {
  return this.http.put(this.apiURL + `/${id_resandfeed}/like`,{} )
}
}