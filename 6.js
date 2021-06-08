// Switch 특정값이 무엇이냐에 따라 다른작업을 한다
const device = "iphone";

switch (device) {
  case "iphone":
    console.log("아이폰");
    break; // 일치하면 멈춘다는 뜻
  case "ipad":
    console.log("아이패드");
    break;
  case "galaxy Note":
    console.log("갤럭시노트");
    break;
  default:
    // 해당하는 값이 없으면 자동으로 출력
    console.log("모르겠디");
}
//break를 안하면 그다음 코드 또한 실행 시킴
