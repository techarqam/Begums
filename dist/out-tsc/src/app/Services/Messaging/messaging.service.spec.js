import { TestBed } from '@angular/core/testing';
import { MessagingService } from './messaging.service';
describe('MessagingService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(MessagingService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=messaging.service.spec.js.map