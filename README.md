<p align="center">
      <img width="130" alt="fresh-trash-logo" src="public/logo192.png">   
</p>
<h1 align="center">📖 청소년을 위한 도서관 TeenBook </h1>
<p align="center">프로젝트 기간 : 2024.08.05 ~2024.08.30</p>

### 프로젝트 소개
TeenBook은 청소년들이 도서관 이벤트와 정보에 대해서 쉽게 접근하고, 비슷한 나이대의 인기 도서와 급상승 도서를 발견하며, **도서관 이용을 일상화하고 재미있게 다가갈 수 있도록 지원하는 것을 목표**로 하였습니다.

도서관 데이터 관련 부분은 **도서관 정보나루, 서울 열린 데이터광장** 등 **공공 API**를 활용하여 구현했습니다. 또한 **PWA**를 도입하여 웹에서 앱으로 설치 가능하도록 하는 **웹 기반 어플리케이션**으로 제작하였습니다.

### 기대효과 
- 도서관 이용률 증가
- 독서 습관 개선 및 정보 접근성 향상
- 참여와 동기 부여
### 팀원 소개 
|                            기획                             |                            프론트엔드                             |                              백엔드                               |            
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | :---------------------------------------------------------------: |
|               [하명관](https://github.com/bulmang)                |            [박효빈](https://github.com/binjin0)              |               [심한주](https://github.com/simhanju)               |
##  :heart:배포
프론트 엔드는 vercel에, 백엔드는 aws에 배포를 진행하였습니다.<br />
링크 - https://www.teenbook.click/
##  :yellow_heart:기술 스택
[![My Skills](https://skillicons.dev/icons?i=js,html,css,react,vite,git,github,vercel,vscode,figma&theme=light)](https://skillicons.dev)<br />

<br /><img src="https://img.shields.io/badge/pwa-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white">
<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">


## :green_heart:주요 기능
|                            [간편 카카오 로그인]                            |                            [인기 도서 데이터 표시] / [대출 급상승 도서 데이터 표시]                         |                                                        
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="https://github.com/user-attachments/assets/471a72b9-81d9-41db-a4c4-c173a9c7efef" width="200" alt="간편로그인"/> | <img src="https://github.com/user-attachments/assets/e73ce771-75ce-4baa-bbf1-787ad86b4e78" width="200" alt="인기도서"/> <img src="https://github.com/user-attachments/assets/6aa46c97-3e5b-43a0-91cf-49268d009bb2" width="200" alt="대출 급상승"/>|<img src="https://github.com/user-attachments/assets/4dd0aa35-dc25-4b7a-afdd-772287ff2a46" width="200" alt="포인트샵"/> |
|               카카오 API를 이용하여 소셜 로그인 구현               |            홈 상단에 탭메뉴를 통해 접근가능 <br />도서관 정보나루 API 이용 / 크롤링을 통해 데이터 수집하여 API로 구현 <br />UI는 carousel로 구현하고 navigation 버튼을 나타내 사용자 중심 UI 구성         |  




|                                            [지리 기반 도서관 위치 안내 및 도서관 정]                   |                                     
| :---------------------------------------------------------------: | 
|<img src="https://github.com/user-attachments/assets/a37912ad-d6eb-44e3-aa21-d1ac9594997f" width="200" alt="가까운 매장"/> <img src="https://github.com/user-attachments/assets/c920be86-dd41-4647-9a92-be625f759436" width="200" alt="도서관 정보"/> | 
|              카카오 맵 API 사용<br />서울 도서관 API 사용<br /> 사용자 위치 기반으로 인근 도서관의 위치를 제공, 도서관 마커 클릭 시 해당 도서관의 상세 정보 확인              | 

|       [즐겨찾기] / [즐겨찾기 목록]                        |                                
| :---------------------------------------------------------------: | 
| <img src="https://github.com/user-attachments/assets/26574960-44b6-4f37-9afd-869ea621dd91" width="200" alt="즐겨찾기"/> <img src="https://github.com/user-attachments/assets/46ce9a1a-d581-4a4b-aa69-512f5971d4fd" width="200" alt="즐겨찾기목록"/>|
|            사용자는 즐겨 찾는 도서관 등록 및 해제 가능, 등록한 도서관은 자주 찾는 도서관 탭에서 확인 가능.         |        


|                        [출석 인증]                         |              
| :---------------------------------------------------------------: | 
| <img src="https://github.com/user-attachments/assets/41f844a7-19f4-4baf-abbd-e7b6a33f989b" width="200" alt="출석하기"/><img src="https://github.com/user-attachments/assets/23d8cf2b-bd9e-4cde-a931-98d9aa711797" width="200" alt="출석하기"/> <img src="https://github.com/user-attachments/assets/8c6a301e-cfe5-4656-ad74-df4c50187e7e" width="200" alt="출석하기"/>|
|    사용자와 도서관 위치를 비교하여 5km 안이면 마커 클릭 시 출석하기 버튼 활성되도록 구현<br /> 그 후 출석 등록 가능(포인트 10을 얻게 됩니다.) <br />마커 색은 클릭시 진한 남색으로 표시하여 사용자 시점 생각하여 구현          |

|                            [대출 인증]                            |           [포인트샵]                         |                                   
| :---------------------------------------------------------------: | :---------------------------------------------------------------: | 
| <img src="https://github.com/user-attachments/assets/f61c20c4-c4cd-467e-a06b-f1aeecde0ebb" width="200" alt="대출인증"/> |<img src="https://github.com/user-attachments/assets/4dd0aa35-dc25-4b7a-afdd-772287ff2a46" width="200" alt="포인트샵"/> |
|               인증을 위해 카메라 구현<br />인증을 통해 포인트 얻음               |          출석하기 및 대출하기로 모은 포인트 사용 가능              |

## :purple_heart:트러블 슈팅

1. PWA와 HMR 충돌-> https://simple-relish-748.notion.site/pwa-hmr-698a278787b44a46a2aebbdf8225dbca?pvs=4
2. 프론트 배포 후 Mixed Content 에러 -> https://simple-relish-748.notion.site/Mixed-Content-73f5afa24a224cc89e9dc7892e8573a8?pvs=4
3. 프론트엔드 배포 주소와 백엔드 API 주소 간의 CORS 에러 -> https://simple-relish-748.notion.site/CORS-5dca3628bdaa4beb82247e4824667ab9?pvs=4
