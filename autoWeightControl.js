// autoWeightControl.js
// 운동 결과에 따른 자동 무게 조절 판단 알고리즘

function decideNextWeight(currentWeight, finalScore, postureRate, successReps, targetReps) {
  if (currentWeight <= 0) {
    return {
      nextWeight: 0,
      decision: "invalid",
      reason: "현재 무게가 올바르지 않습니다."
    };
  }

  const weightStep = 5;

  // 자세가 불안정하거나 목표 반복 횟수를 채우지 못한 경우
  if (postureRate < 70 || successReps < targetReps * 0.8) {
    return {
      nextWeight: Math.max(currentWeight - weightStep, weightStep),
      decision: "decrease",
      reason: "자세 완성도 또는 반복 수행 결과가 낮아 무게를 감소합니다."
    };
  }

  // 자세와 수행 결과가 안정적인 경우
  if (postureRate >= 90 && successReps >= targetReps && finalScore >= 80) {
    return {
      nextWeight: currentWeight + weightStep,
      decision: "increase",
      reason: "운동 수행 결과가 안정적이므로 무게를 증가합니다."
    };
  }

  // 그 외에는 유지
  return {
    nextWeight: currentWeight,
    decision: "maintain",
    reason: "현재 무게가 적정하다고 판단하여 유지합니다."
  };
}

// 테스트 예시
const result = decideNextWeight(20, 85, 92, 10, 10);
console.log(result);

module.exports = {
  decideNextWeight
};