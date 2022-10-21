/*문제 설명
Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(brown, yellow) {
  let minus4 = brown - 4;
  let 약수 = [];
  for (let i = 1; i <= yellow + 1; i++) {
    if (yellow == 1) 약수.push(1);
    else if (yellow % i == 0) 약수.push(i);
  }
  // console.log(약수);

  // console.log(getCombi(약수).map((i) => i[0] * 2 + i[1] * 2));

  getCombi(약수).forEach((i) => {
    if (i[0] * 2 + i[1] * 2 == minus4)
      console.log(i.sort((a, b) => b - a).map((i) => i + 2));
    return i.sort((a, b) => b - a).map((i) => i + 2);
  });
}

function getCombi(arr, selectNumber = 2) {
  let result = [];
  if (selectNumber == 1) return arr.map((i) => [i]);

  arr.forEach((fix, index, origin) => {
    let rest = origin.slice(index + 1);
    let combi = getCombi(rest, selectNumber - 1);
    let attach = combi.map((i) => [fix, ...i]);
    result.push(...attach);
  });
  // console.log(result);
  return result;
}

solution(10, 2);
solution(8, 1);
solution(24, 24);

/*
🤖다른 사람의 풀이

function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow
    answer = widthHeightPair(size).filter(pair => (pair[0] + pair[1]) * 2 - 4 === brown)[0]
    return answer;
}
function widthHeightPair(size){
    let result = []
    for(let i=1; i<=Math.sqrt(size); i++) if(size % i === 0) result.push([size/i, i])
    return result
}
*/
