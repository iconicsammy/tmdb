import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NotificationService } from '@services/notification/notification.service';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let spyNotificationError: any;
  let notificationService: NotificationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ToastrModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginComponent);

    notificationService = fixture.debugElement.injector.get(NotificationService);
    spyNotificationError = spyOn(notificationService, 'showError').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reject empty api key', () =>{
    let buttonElement = fixture.debugElement.query(By.css('#authBtn'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(spyNotificationError).toHaveBeenCalledWith('API Key to TMDB is required')
    });
  })
});
