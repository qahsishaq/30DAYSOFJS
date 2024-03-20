//class definition
// class TopGun{

// }
// class Instantiation
class nextLevel {
  constructor(
    difficulty = "Random",
    stages = "Two",
    time = "30 seconds",
    arena = "Random",
    player = "Scorpion"
  ) {
    console.log(this);
    this.difficulty = difficulty;
    this.stages = stages;
    this.time = time;
    this.arena = arena;
    this.player = player;
    this.score = 0;
    this.skills = [];
  }
  getLevelStatus() {
    const status =
      "Difficulty: " + this.difficulty + "\n" + "Time: " + this.time;
    return status;
  }
  get getScore() {
    return this.score;
  }
  get getSkills() {
    return this.skills;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  static favoriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);
    return skills[index];
  }
  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}

const defaultNext = new nextLevel();
const next1 = new nextLevel("Easy", "Four", "Two hours", "Random", "Sub-zero");
const next2 = new nextLevel("Hard", "Two", "One hour", "Random", "Erron Black");
const next3 = new nextLevel(
  "Asian",
  "One",
  "30 seconds",
  "Old Temple",
  "Scorpion"
);
next1.setScore = 1;
next1.setSkill = "Ice Manipulation";

next2.setScore = 3;
next2.setSkill = "Poison";
next2.setSkill = "Shooting";
next3.setScore = 5;
next3.setSkill = "Dagger";
next3.setSkill = "Teleportation";
console.log(next1);
console.log(next1.getLevelStatus());
console.log(next1.getScore, next1.getSkills);
console.log(next1.skills);
console.log(next2);
console.log(next2.getLevelStatus());
console.log(next2.skills);
console.log(next2.getScore, next1.getSkills);
console.log(next3);
console.log(next3.getLevelStatus());
console.log(next3.getScore, next1.getSkills);
console.log(next3.skills);

console.log(nextLevel.favoriteSkill());
console.log(nextLevel.showDateTime());

class finalLevel extends nextLevel {
  constructor(difficulty, stages, time, arena, player, gender) {
    super(difficulty, stages, time, arena, player);
		this.gender = gender
  }
  remarkMessage() {
    console.log("You have reached the final kombat!");
  }
}
const finale = new finalLevel(
  "Hard",
  "One",
  "Two minutes",
  "New Temple",
  "Random"
);
const finale2 = new finalLevel(
  "Hard",
  "One",
  "Two minutes",
  "New Temple",
  "Random",
	"Male"
);
console.log(finale);
console.log(finale.getLevelStatus());
console.log(finale.remarkMessage());
console.log(finale2)