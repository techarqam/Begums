import { TestBed } from '@angular/core/testing';
import { FestivitiesService } from './festivities.service';
describe('FestivitiesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FestivitiesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=festivities.service.spec.js.map