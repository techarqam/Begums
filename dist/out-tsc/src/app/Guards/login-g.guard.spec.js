import { TestBed, inject } from '@angular/core/testing';
import { LoginGGuard } from './login-g.guard';
describe('LoginGGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LoginGGuard]
        });
    });
    it('should ...', inject([LoginGGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=login-g.guard.spec.js.map