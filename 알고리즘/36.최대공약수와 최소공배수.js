/*-문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

function solution(n, m) {
  let answer = [];
  let 최대공약수 = 1;
  let 최소공배수 = 1;

  for (let i = 0; i <= Math.min(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      최대공약수 = i;
    }
  }
  answer.push(최대공약수);

  while (true) {
    if (최소공배수 % n == 0 && 최소공배수 % m == 0) {
      answer.push(최소공배수);
      break;
    } else 최소공배수++;
  }
  return answer;
}

solution(3, 12); //[3, 12]
solution(2, 5); //[1, 10]

// => for문에서 할당을 해주면 덮어씌우는 것 알기!
// => 두 수의 배수에서 최소공배수를 찾으려 했는데, 반대로 어떤 수로 나눠서 0이 되는 최솟값을 구하기!
