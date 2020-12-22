import { SearchItem } from './../interfaces/SearchItem';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { CraigslistApiService } from './craiglist-api.service';
import { from, of } from 'rxjs';

describe('CraigslistApiService', () => {
  let service: CraigslistApiService;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CraigslistApiService, HttpClient]
    });
    httpMock = TestBed.inject(HttpClient);
    service = TestBed.inject(CraigslistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should process input', () => {
    let mockData: SearchItem = {title: 'test', price: '1'};
    spyOn(httpMock, 'get').and.returnValue(of([mockData]));
    service.processInput('test');
    expect(httpMock.get).toHaveBeenCalledTimes(1);
    service.queryResponse$.subscribe(data => {
      expect(data).toEqual([mockData]);
    })
  })
});
