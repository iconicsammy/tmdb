import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  let spySuccess : any;
  let spyInfo : any;
  let spyError: any;
  let spyWarn: any;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()]
    });
    service = TestBed.inject(NotificationService);
    spySuccess = spyOn(ToastrService.prototype, 'success').and.callThrough();
    spyInfo = spyOn(ToastrService.prototype, 'info').and.callThrough();
    spyError = spyOn(ToastrService.prototype, 'error').and.callThrough();
    spyWarn = spyOn(ToastrService.prototype, 'warning').and.callThrough();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call success toast', () =>{
       service.showSuccess("All done");
       expect(spySuccess).toHaveBeenCalledWith("All done", "Success")

       service.showSuccess("All done", "Whoopi!");
       expect(spySuccess).toHaveBeenCalledWith("All done", "Whoopi!")
       expect(spyInfo).not.toHaveBeenCalled();
       expect(spyError).not.toHaveBeenCalled();
       expect(spyWarn).not.toHaveBeenCalled();
  })

  it('should call info toast', () =>{
    service.showInfo("All done");
    expect(spyInfo).toHaveBeenCalledWith("All done", "Information")

    service.showInfo("All done", "Just Saying");
    expect(spyInfo).toHaveBeenCalledWith("All done", "Just Saying")
    expect(spySuccess).not.toHaveBeenCalled();
    expect(spyError).not.toHaveBeenCalled();
    expect(spyWarn).not.toHaveBeenCalled();
  })

  it('should call info toast', () =>{
    service.showInfo("All done");
    expect(spyInfo).toHaveBeenCalledWith("All done", "Information")

    service.showInfo("All done", "Just Saying");
    expect(spyInfo).toHaveBeenCalledWith("All done", "Just Saying")
    expect(spySuccess).not.toHaveBeenCalled();
    expect(spyError).not.toHaveBeenCalled();
    expect(spyWarn).not.toHaveBeenCalled();
  })

  it('should call warn toast', () =>{
    service.showWarning("All done");
    expect(spyWarn).toHaveBeenCalledWith("All done", "Warning")

    service.showWarning("Pay attention", "Notice");
    expect(spyWarn).toHaveBeenCalledWith("Pay attention", "Notice")
    expect(spySuccess).not.toHaveBeenCalled();
    expect(spyError).not.toHaveBeenCalled();
    expect(spyInfo).not.toHaveBeenCalled();
  })

  it('should call error toast', () =>{
    service.showError("Failed");
    expect(spyError).toHaveBeenCalledWith("Failed", "Error")

    service.showError("Failed", "Failed");
    expect(spyError).toHaveBeenCalledWith("Failed", "Failed")
    expect(spySuccess).not.toHaveBeenCalled();
    expect(spyWarn).not.toHaveBeenCalled();
    expect(spyInfo).not.toHaveBeenCalled();
  })
});
