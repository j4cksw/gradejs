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

    it('score lower than 70 should be C', function(){
        expect(gradeCalculator.calculateScore(69)).toBe("C");
    });

    it('score lower than 60 should be D', function(){
        expect(gradeCalculator.calculateScore(59)).toBe("D");
    });

    it('score lower than 50 should be F', function(){
        expect(gradeCalculator.calculateScore(49)).toBe("F");
    });
});
