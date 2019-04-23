import { TestBed } from '@angular/core/testing';
import { FeedbackService } from './feedback.service';
describe('FeedbackService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FeedbackService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=feedback.service.spec.js.map