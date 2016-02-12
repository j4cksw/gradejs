describe('Grade', function(){

    beforeEach(module('GradeJS'));

    var gradeCalculator;

    beforeEach(inject(function($injector){
        gradeCalculator = $injector.get('GradeCalculator');
    }));

    it('score 100 should be A', function(){
        expect(gradeCalculator.calculateScore(100)).toBe("A");
    });

    it('score lower than 80 should be B', function(){
        expect(gradeCalculator.calculateScore(79)).toBe("B");
    });
});
