import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestSubmissionDto} from "../dto/request-submission-dto";
import {Observable} from "rxjs";
import {ExemptionRequest} from "../model/exemption-request";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ExemptionRequestService {

  constructor(private httpClient: HttpClient) { }

  public submitExemptionRequest(submissionDto: RequestSubmissionDto): Observable<ExemptionRequest> {

    const url = `${environment.apiUrl}/exemption`

    return this.httpClient.post<ExemptionRequest>(url, submissionDto)
  }

  public getExemptionRequestById(id: number): Observable<ExemptionRequest> {

    const url = `${environment.apiUrl}/exemption/${id}`

    return this.httpClient.get<ExemptionRequest>(url)
}

  public getSelfSubmittedExemptionRequests(): Observable<ExemptionRequest[]> {

    const url = `${environment.apiUrl}/exemption/self`

    return this.httpClient.get<ExemptionRequest[]>(url)
  }

  public getRequestsOfOwnDepartment(): Observable<ExemptionRequest[]> {

    const url = `${environment.apiUrl}/exemption/own-department`

    return this.httpClient.get<ExemptionRequest[]>(url)
  }

  public updateExemptionRequestById(id: number, updatedExemptionRequest: ExemptionRequest) {

    const url = `${environment.apiUrl}/exemption/${id}`

    return this.httpClient.put<ExemptionRequest>(url, updatedExemptionRequest)
  }

}
