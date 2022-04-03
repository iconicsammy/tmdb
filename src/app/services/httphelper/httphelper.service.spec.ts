import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttphelperService } from './httphelper.service';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { of } from 'rxjs/internal/observable/of';

describe('HttphelperService', () => {
  let httpSpy: Spy<HttpClient>;
  let service: HttphelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttphelperService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ]
    });
    service = TestBed.inject(HttphelperService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get http', (done)=>{
    httpSpy.get.and.nextWith([]);
    service.get('url').subscribe(
      customers => {
        expect(customers).toHaveSize(0);
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  })

  it('should call get post', (done)=>{
    httpSpy.post.and.nextWith(true);
    service.post('url', {'name': 'name'}).subscribe(
      result => {
        expect(result).toBe(true)
        done();
      },
      done.fail
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  })
});
