/**
 * @description Pub-Sub Pattern 发布订阅模式
 *
 */

const HunterUnion = {
  type: 'hunt',
  topics: Object.create(null),
  subscribe(topic, fn) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(fn);
  },
  publish(topic, money) {
    if (!this.topics[topic]) { return; }
    for (const fn of this.topics[topic]) {
      fn(money);
    }
  },
};

function Hunter(name, level) {
  this.name = name;
  this.level = level;
}

Hunter.prototype.subscribe = function (topic, fn) {
  console.log(`[${this.level}]猎人${this.name} => 订阅了狩猎${topic}的任务`);
  HunterUnion.subscribe(topic, fn);
};
Hunter.prototype.publish = function (topic, money) {
  console.log(`[${this.level}]猎人${this.name} => 发布了狩猎${topic}的任务`);
  HunterUnion.publish(topic, money);
};

const hunterMing = new Hunter('小明', '铂金');
const hunterJin = new Hunter('小金', '黄金');
const hunterZhang = new Hunter('小张', '白银');
const hunterPeter = new Hunter('Peter', '青铜');

hunterMing.subscribe('tiger', (money) => {
  console.log(`小明表示：${money > 200 ? '' : '不'}接取任务`);
});
hunterJin.subscribe('tiger', () => {
  console.log('小金表示：接取任务');
});
hunterZhang.subscribe('tiger', () => {
  console.log('小张表示：接取任务');
});

hunterPeter.subscribe('sheep', () => {
  console.log('Peter表示：接取任务');
});

hunterPeter.publish('tiger', 198);
