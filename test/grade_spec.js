describe('Grade', function(){

    beforeEach(module('GradeJS'));

    var gradeCalculator;

    beforeEach(inject(function($injector){
        gradeCalculator = $injector.get('GradeCalculator');
    }));

    it('score 100 should retur A', function(){
        expect(gradeCalculator.calculateScore(100)).toBe("A");
    });
});
