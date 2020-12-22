import { SearchItem } from './../../interfaces/SearchItem';
import { Observable } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should process response', () => {
    // onResponseReceived(queryResponse$: Observable<SearchItem[]>) {
    //   this.router.navigate(['/results']);
    // }
    let queryResponse$: Observable<SearchItem[]>
    component.onResponseReceived(queryResponse$);
  })
});
