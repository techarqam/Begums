import { TestBed } from '@angular/core/testing';
import { BirthdayService } from './birthday.service';
describe('BirthdayService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BirthdayService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=birthday.service.spec.js.map