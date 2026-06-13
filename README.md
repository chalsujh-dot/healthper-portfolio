# Healthper Portfolio

## 프로젝트 한 줄 소개
Healthper는 헬스장 운동기구에 IoT 기술을 적용하여 사용자의 운동 수행 데이터를 측정하고, 무게 조절과 운동 점수화를 지원하는 피트니스 시스템입니다.

## 내 역할
- 자동 무게 조절 알고리즘 설계
- 1RM 기반 무게 점수 시스템 설계
- 센서 데이터 기반 운동 흐름 설계
- Raspberry Pi, 모터, 웹 서버 간 동작 구조 정리

## 핵심 기능
- 운동 무게 선택 및 자동 조절
- ADXL345 가속도 센서 기반 운동 데이터 측정
- 반복 횟수와 자세 완성도 기반 운동 점수 계산
- 운동 결과 저장 및 랭킹 반영

## 사용 기술
| 구분 | 기술 |
|---|---|
| Hardware | Raspberry Pi, Step Motor, ADXL345 |
| Backend | Node.js, Express |
| Communication | Socket.io |
| Frontend | HTML, CSS, JavaScript |
| Algorithm | Epley 1RM Formula, Weight Score Logic |

## 점수 알고리즘
예상 1RM은 Epley 공식을 사용했습니다.
예상 1RM = 운동 무게 × (1 + 반복 횟수 ÷ 30)
기본 점수는 예상 1RM을 기준으로 계산하고, 자세 완성도에 따라 최대 10% 감점이 적용되도록 설계했습니다.
최종 점수 = 기본 점수 × (0.9 + 자세완성도 / 100 × 0.1)





