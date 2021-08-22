import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heres';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
              private messageService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(hero);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)}
}
