import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>도커 캐싱 EC2 깃 액션 테스트</h1>
      <h2>2차 테스트</h2>
      <h2>3차 테스트 진짜 끝</h2>
      <ul>
        <li>Node v20, Yarn Berry v4.x, nodeLinker: node-modules</li>
        <li>NextJS v14, standalone 빌드 사용</li>
        <li>Github Actions 워크플로우 작성</li>
        <li>
          Github Actions - 종속성 캐싱, next 빌드 cache 캐싱, 도커 레이어 캐싱,
          빌드 속도 개선 ✅
        </li>
        <li>Docker Dockerfile 작성, 도커 이미지 경량화, 빌드 최적화 ✅</li>
        <li>Docker Multi-Stage Build ✅</li>
        <li>Github Container Registry = 도커허브, ECR ✅</li>
        <li>EC2 배포 ✅</li>
        <li>
          github actions용(gha) 캐시를 이용한 도커 레이어, .next 캐시 폴더 캐싱
        </li>
        <li>
          워크플로우 runs-on 환경에 맞춰서 github actions 플러그인 버전 설정
        </li>
      </ul>
    </main>
  );
}
