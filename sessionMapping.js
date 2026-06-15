// sessionMapping.js
// 사용자, 운동기구, 센서 데이터를 하나의 운동 세션으로 묶는 로직

function createWorkoutSession(userId, equipmentId, sensorId) {
  if (!userId || !equipmentId || !sensorId) {
    return {
      success: false,
      message: "사용자, 운동기구, 센서 정보가 필요합니다."
    };
  }

  const sessionId = `${userId}_${equipmentId}_${Date.now()}`;

  return {
    success: true,
    sessionId,
    userId,
    equipmentId,
    sensorId,
    status: "active",
    startTime: new Date().toISOString()
  };
}

function mapSensorDataToSession(session, sensorData) {
  if (!session || session.status !== "active") {
    return {
      success: false,
      message: "활성화된 운동 세션이 없습니다."
    };
  }

  if (session.sensorId !== sensorData.sensorId) {
    return {
      success: false,
      message: "세션에 등록된 센서와 다른 센서 데이터입니다."
    };
  }

  return {
    success: true,
    sessionId: session.sessionId,
    userId: session.userId,
    equipmentId: session.equipmentId,
    sensorId: sensorData.sensorId,
    timestamp: sensorData.timestamp || new Date().toISOString(),
    accelX: sensorData.accelX,
    accelY: sensorData.accelY,
    accelZ: sensorData.accelZ
  };
}

// 테스트 예시
const session = createWorkoutSession("user01", "latpulldown_01", "sensor_01");

const sensorData = {
  sensorId: "sensor_01",
  accelX: 0.12,
  accelY: 0.86,
  accelZ: 0.31
};

console.log(session);
console.log(mapSensorDataToSession(session, sensorData));

module.exports = {
  createWorkoutSession,
  mapSensorDataToSession
};