const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const app = new App();

const checkArray = (arr) => {
	// 요소 개수 확인
	if (arr.length !== 5) {
		return false;
	}

	// 중복 개수 확인
	for (let i = 1; i <= 5; i++) {
		const count = arr.filter((item) => item === i).length;
		if (count > 2) {
		return false;
		}
	}

	return true;
};

	describe("카테고리 추천", () => {
	it("카테고리 중복없이 추천", () => {
		for(let i = 0; i < 999; i++){
			arr = app.selectCategory();
			expect(checkArray(arr)).toBe(true);
		}
	});
});