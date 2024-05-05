import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../core/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private baseUrl : string='http://localhost:8080/votes';


  constructor(private http : HttpClient) { }

  fetchVoteList(): Observable<Vote[]>{
    return this.http.get<Vote[]>(this.baseUrl + '/fetchVoteList');
  }
  addVote(vote: Vote):Observable<Vote>{
    return this.http.post<Vote>(this.baseUrl+ `/saveVote`, Vote)
  }
  updateVote(vote:Vote): Observable<Vote>{
    return this.http.put<Vote>(this.baseUrl+`/updateVote/${vote.id_vote}`,vote)
  }
 
  getVoteById(id: number): Observable<Vote> {
    return this.http.get<Vote>(`${this.baseUrl}/${id}`);
  }
   
  deletVoteById(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/deleteVoteById/${id}`);
  }
}
