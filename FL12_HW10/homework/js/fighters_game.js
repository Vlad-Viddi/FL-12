function Fighter(fighter) {
	let Wins = 0;
	let Losses = 0;
	const name = fighter.name;
	const damage = fighter.damage;
	const strength = fighter.strength;
	const agility = fighter.agility;
	const hp = fighter.hp;
	let actualHP = hp;

	return {
		getName: () => name,
		getDamage: () => damage,
		getStrength: () => strength,
		getAgility: () => agility,
		getHealth: () => actualHP,
		attack: defender => {
			let probabilityOfAttack = 1 - (strength + agility) / 100;
			if (Math.random() <= probabilityOfAttack) {
				defender.dealDamage(damage);
				console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
			} else {
				console.log(`${name}'s attack missed`);
			}
		},
		logCombatHistory: () => console.log(`Name: ${name}, Wins: ${Wins}, Losses: ${Losses}`),
		heal: plusHP => {
		actualHP + plusHP <= hp ? actualHP += plusHP : actualHP = hp;
		},
		dealDamage: hurt => {
		actualHP - hurt >= 0 ? actualHP -= hurt : actualHP = 0;
		},
		addWin: () => Wins++,
		addLosses: () => Losses++
	}
}

function battle(player1, player2) {
	if (player1.getHealth() <= 0 || player2.getHealth() <= 0) {
		player1.getHealth() === 0 ? console.log(`${player1.getName()} is dead and can't fight`) :
		console.log(`${player2.getName()} is dead and can't fight`);
		return;
	}
	while (player1.getHealth() > 0 && player2.getHealth() > 0) {
		player1.attack(player2);
		if (player2.getHealth() > 0) {
			player2.attack(player1);

		if (player1.getHealth() === 0) {
			player2.addWin();
			player1.addLosses();
			console.log(`${player2.getName()} has won!`);
		}
		} else {
			player1.addWin();
			player2.addLosses();
			console.log(`${player1.getName()} has won!`);
		}
	}
}

const fighter1 = new Fighter({name: "Maximus", damage: 20, strength: 20, agility: 15, hp: 100});
const fighter2 = new Fighter({name: "Commous", damage: 25, strength: 25, agility: 20, hp: 90});
battle(fighter1, fighter2);
