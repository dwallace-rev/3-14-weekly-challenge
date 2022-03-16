

let A:number[] = [3, 7, 8, 10];
let B:number[] = [99, 1, 8, 10];

function findIntersect(a:number[], b:number[]):number|null{
    let result = null;

    for (let i=0; i < a.length; i++){
        if (A[i] === B[i]){
            result = A[i];
            break;
        }
    }

    return result;
}

console.log(findIntersect(A,B))