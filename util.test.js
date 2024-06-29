const { generateText, checkAndGenerate} = require('./util');

test('should output name and age', () => {               //unit test
    const text = generateText('Ann Taylor', 33);
    expect(text).toBe('Ann Taylor (33 years old)');
});

test('should output no text', () => {                    //unit test
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

test('should generate a valid text output', () => {      //integration test(checkAndGenerate + validateInput)
    const text = checkAndGenerate('Ann Taylor', 33);
    expect(text).toBe('Ann Taylor (33 years old)');
});