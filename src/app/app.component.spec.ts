import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  afterAll(async () => {
    localStorage.removeItem('covidPanel')
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'search-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('search-app');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('search-app app is running!');
  });
  it('should properly render collapsable panel', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    app.collapse();
    expect(app.closeCovidInfoPanel).toEqual(true);
    let localStorageItem = localStorage.getItem('covidPanel');
    expect(localStorageItem).toEqual('true');
  })
});
