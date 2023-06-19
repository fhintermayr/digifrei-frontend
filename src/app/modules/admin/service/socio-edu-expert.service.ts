import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SocioEduExpertCreationDto} from "../dto/socio-edu-expert-creation-dto";
import {Observable} from "rxjs";
import {SocioEduExpert} from "../../../shared/models/socio-edu-expert";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SocioEduExpertService {

  constructor(private httpClient: HttpClient) { }

  public registerSocioEduExpert(creationDto: SocioEduExpertCreationDto): Observable<SocioEduExpert> {

    const url = `${environment.apiUrl}/socio-edu-expert`

    return this.httpClient.post<SocioEduExpert>(url, creationDto)
  }

  public findAllContainingSearchTerm(searchTerm?: string): Observable<SocioEduExpert[]> {

    let params = new HttpParams()
    if (searchTerm !== undefined) params = params.append('searchTerm', searchTerm)

    const url = `${environment.apiUrl}/socio-edu-expert`

    return this.httpClient.get<SocioEduExpert[]>(url, {params})
  }

}
