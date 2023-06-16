import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {RequestSubmissionDto} from "../dto/request-submission-dto";
import {Observable} from "rxjs";
import {ExemptionRequest} from "../model/exemption-request";
import {environment} from "../../../../environments/environment";
import {Page} from "../../../shared/models/page";

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

  public getSelfSubmittedExemptionRequests(page?: number): Observable<Page<ExemptionRequest>> {

    const url = `${environment.apiUrl}/exemption/self`

    const params = new HttpParams()
    if (page) params.set("page", page)

    return this.httpClient.get<Page<ExemptionRequest>>(url, {params})
  }

  public getRequestsOfOwnDepartment(page?: number): Observable<Page<ExemptionRequest>> {

    const url = `${environment.apiUrl}/exemption/own-department`

    let params = new HttpParams()
    if (page) params = params.set("page", page)

    return this.httpClient.get<Page<ExemptionRequest>>(url, {params})
  }

  public updateExemptionRequestById(id: number, updatedExemptionRequest: ExemptionRequest) {

    const url = `${environment.apiUrl}/exemption/${id}`

    return this.httpClient.put<ExemptionRequest>(url, updatedExemptionRequest)
  }

  public deleteExemptionRequestById(id: number): Observable<void> {

    const url = `${environment.apiUrl}/exemption/${id}`

    return this.httpClient.delete<void>(url)
  }

}
