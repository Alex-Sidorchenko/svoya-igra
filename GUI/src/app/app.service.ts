import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppService {
  public topics;
  public questions;
  public answers;

  constructor(private http: HttpClient) {}

  public getScrappedData(): Observable<any> {
    return this.http.get('svoya-igra').pipe(
      tap(data => {
        this.topics = data.topics;
        this.questions = data.questions;
        this.answers = data.answers;
      })
    );
  }
}
