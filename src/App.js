const MissionUtils = require('@woowacourse/mission-utils');

const categories = [
	{	categoryNameKey: "일식",
		menu: "규동, 우동, 미소시루, 스시, 가츠동, 오니기리, 하이라이스, 라멘, 오코노미야끼"
	},
	{	categoryNameKey: "한식",
		menu: "김밥, 김치찌개, 쌈밥, 된장찌개, 비빔밥, 칼국수, 불고기, 떡볶이, 제육볶음"
	},
	{	categoryNameKey: "중식",
		menu: "깐풍기, 볶음면, 동파육, 짜장면, 짬뽕, 마파두부, 탕수육, 토마토 달걀볶음, 고추잡채"
	},
	{	categoryNameKey: "아시안",
		menu: "팟타이, 카오 팟, 나시고렝, 파인애플 볶음밥, 쌀국수, 똠얌꿍, 반미, 월남쌈, 분짜"
	},
	{	categoryNameKey: "양식",
		menu: "라자냐, 그라탱, 뇨끼, 끼슈, 프렌치 토스트, 바게트, 스파게티, 피자, 파니니"
	},
];

class App {
	constructor(props) {
	}
		
	play() {
		MissionUtils.Console.readLine("코치의 이름을 입력해 주세요.", (answers) => {
			const nameList = answers.split(",");
		
			const categoryList = this.selectCategory();
			MissionUtils.Console.print(`[ 카테고리 | ${categoryList[0]} | ${categoryList[1]} | ${categoryList[2]} | ${categoryList[3]} | ${categoryList[4]} ]`);
			MissionUtils.Console.print(`[ ${nameList[0]} | 김치찌개 | 스파게티 | 규동 | 짜장면 | 카오 팟 ]`);
			MissionUtils.Console.print(`[ ${nameList[1]} | 제육볶음 | 라자냐 | 가츠동 | 짬뽕 | 파인애플 볶음밥 ]`);
	
			MissionUtils.Console.close();
		});
	}

	selectCategory() {
		const categoryList = []
		while(categoryList.length < 5){
			const number = MissionUtils.Random.pickNumberInRange(1, 5);
			if(categoryList.filter((item) => item === number).length > 1){
				continue;
			}
			categoryList.push(number);
		}
		return categoryList;
	}
}

const app = new App();
app.play();

module.exports = App;
