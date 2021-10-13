let test: string = 'This is a testing case for this assignment; ping ... pinging ... ; loading ... extracting ... concatenating ...';

function ingExtractor(str: string): string[] {
    let strArr = str.split(' ');
    let extraction: string[] = [];

    for(let word of strArr) {
        if(word.includes('ing') && word.length > 4) {
            extraction.push(word);
        }
    }

    return extraction;
}

console.log(ingExtractor(test).toString());