// weightScore.js
// 1RM 기반 운동 점수 계산 알고리즘

function calculateOneRM(weight, reps) {
  if (weight <= 0 || reps <= 0) {
    return 0;
  }

  return weight * (1 + reps / 30);
}

function calculateWeightScore(weight, reps) {
  const oneRM = calculateOneRM(weight, reps);

  // 오락형 점수화를 위해 5kg 단위 기준으로 제곱 점수 적용
  const score = Math.pow(oneRM / 5, 2);

  return Math.round(score * 10) / 10;
}

function applyPostureCorrection(score, postureRate) {
  if (postureRate < 0) postureRate = 0;
  if (postureRate > 100) postureRate = 100;

  // 자세 완성도 0% = 0.9배, 100% = 1.0배
  const multiplier = 0.9 + (postureRate / 100) * 0.1;

  return Math.round(score * multiplier * 10) / 10;
}

function calculateFinalScore(weight, reps, postureRate) {
  const expectedOneRM = calculateOneRM(weight, reps);
  const baseScore = calculateWeightScore(weight, reps);
  const finalScore = applyPostureCorrection(baseScore, postureRate);

  return {
    weight,
    reps,
    expectedOneRM: Math.round(expectedOneRM * 10) / 10,
    baseScore,
    postureRate,
    finalScore
  };
}

// 테스트 예시
const result = calculateFinalScore(20, 10, 90);
console.log(result);

module.exports = {
  calculateOneRM,
  calculateWeightScore,
  applyPostureCorrection,
  calculateFinalScore
};

//코드를
