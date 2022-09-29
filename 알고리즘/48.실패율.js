/*-문제 설명
슈퍼 게임 개발자 오렐리는 큰 고민에 빠졌다. 
그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 
원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.

이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 
역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 
오렐리를 위해 실패율을 구하는 코드를 완성하라.

실패율은 다음과 같이 정의한다.
스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.

-제한사항
  ◾️스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
  ◾️stages의 길이는 1 이상 200,000 이하이다.
  ◾️stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
  ◾️각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
  ◾️단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
  ◾️만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
  ◾️스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
*/

//result는 1부터 N 전까지의 숫자가 들어간다.
//stages에서 N+1이 있으면 filter로 제외하고, 마지막에 result에는 N을 푸쉬한다.
//answer를 돌면서 해당 원소가 stages에 몇개 들어있는지 파악해서 stages의 길이로 나눈걸 리턴 =>실패율
//stages를 돌면서 원소 하나의 갯수를 stages의 길이로 나눈다 => 실패율
function solution(N, stages) {
  let stageNFailRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player >= stage).length; //단계별 도달률
    const playerChallenging = stages.filter(
      (player) => player === stage
    ).length; //단계별 도전중

    stageNFailRate.push([stage, playerChallenging / playerReached]);
  }
  stageNFailRate.sort((a, b) => b[1] - a[1]);
  return stageNFailRate.map((stage) => stage[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

/*
🤖 다른 사람의 풀이

function solution(N, stages) {
    let arr = [];
    let totalNum = stages.length;
    for (let i=1; i<=N; i++){
        // 현재 단계에서 실패한 유저수를 계산
        // 현재까지의 누적 도전자수를 나누어 실패율 계산
        // 현재까지의 누적 도전자수에 실패한 유저수 빼기
        let stageNum = stages.filter(ele=> ele==i).length
        let failRatio = 0;
        if (stageNum===0){
            failRatio = 0;
        }else{
            failRatio = (stageNum)/totalNum;
        }
        totalNum -= stageNum;
        arr.push({idx:i,ratio:failRatio});
    }
    // 실패율 내림차순으로 정렬하고 실패율이 같다면 stage 오름차순으로 정렬
    arr.sort((a,b)=>{
        if(a.ratio>b.ratio){
            return -1;
        }else if (a.ratio<b.ratio){
            return 1;
        }else{
            if(a.idx>b.idx){
                return 1;
            }else{
                return -1;
            }
        }
    })
    return arr.map(ele=>ele.idx);
}
*/
