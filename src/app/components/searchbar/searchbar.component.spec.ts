import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CraigslistApiService } from './../../services/craiglist-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './searchbar.component';

describe('SearchbarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let craigApi: CraigslistApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ],
      providers: [ CraigslistApiService ],
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    craigApi = TestBed.inject(CraigslistApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be or not to be', () => {
    // callApi(input) {
    //   this.craigApi.processInput(input);
    //   this.responseReceived.emit(this.queryResponse$);
    // }
    spyOn(craigApi, 'processInput').and.returnValue(null);
    component.callApi('test');
    expect(craigApi.processInput).toHaveBeenCalledTimes(1);
  })
});
