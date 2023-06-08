import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestProcessingUpdateDto} from "../dto/request-processing-update-dto";
import {environment} from "../../../../environments/environment";
import {ExemptionRequest} from "../model/exemption-request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestProcessingService {

  constructor(private httpClient: HttpClient) { }

  public processExemptionRequest(exemptionRequestId: number, requestProcessingUpdateDto: RequestProcessingUpdateDto): Observable<ExemptionRequest> {

    const url = `${environment.apiUrl}/exemption/${exemptionRequestId}/process`

    return this.httpClient.post<ExemptionRequest>(url, requestProcessingUpdateDto)
  }

  public updateExemptionRequestProcessing(exemptionRequestId: number, requestProcessingUpdateDto: RequestProcessingUpdateDto): Observable<ExemptionRequest> {

    const url = `${environment.apiUrl}/exemption/${exemptionRequestId}/processing`

    return this.httpClient.put<ExemptionRequest>(url, requestProcessingUpdateDto)
  }

}
