const warriors = [
  { id: 1, name: "Ryuzen", strength: 82, defense: 64 },
  { id: 2, name: "Kenshiro", strength: 91, defense: 73 },
  { id: 3, name: "Takeshiro", strength: 67, defense: 58 },
  { id: 4, name: "Akihiro", strength: 75, defense: 81 },
  { id: 5, name: "Haruto", strength: 88, defense: 55 },
  { id: 6, name: "Daizen", strength: 94, defense: 69 },
  { id: 7, name: "Shirokuma", strength: 71, defense: 63 },
  { id: 8, name: "Makoto", strength: 64, defense: 77 },
  { id: 9, name: "Kazuto", strength: 80, defense: 51 },
  { id: 10, name: "Ranmaru", strength: 59, defense: 84 },
  { id: 11, name: "Jubei", strength: 96, defense: 72 },
  { id: 12, name: "Tsubasa", strength: 77, defense: 68 },
  { id: 13, name: "Hiroshi", strength: 65, defense: 92 },
  { id: 14, name: "Isamu", strength: 81, defense: 70 },
  { id: 15, name: "Kaito", strength: 73, defense: 67 },
  { id: 16, name: "Noburu", strength: 89, defense: 62 },
  { id: 17, name: "Souta", strength: 55, defense: 83 },
  { id: 18, name: "Takeda", strength: 92, defense: 74 },
  { id: 19, name: "Ryotaro", strength: 84, defense: 61 },
  { id: 20, name: "Masaru", strength: 78, defense: 59 },
  { id: 21, name: "Shinjiro", strength: 63, defense: 87 },
  { id: 22, name: "Arata", strength: 85, defense: 66 },
  { id: 23, name: "Daichi", strength: 70, defense: 60 },
  { id: 24, name: "Minoru", strength: 61, defense: 90 },
  { id: 25, name: "Kensuke", strength: 83, defense: 76 },
  { id: 26, name: "Renji", strength: 90, defense: 54 },
  { id: 27, name: "Shohei", strength: 74, defense: 79 },
  { id: 28, name: "Toshiro", strength: 66, defense: 82 },
  { id: 29, name: "Goro", strength: 95, defense: 65 },
  { id: 30, name: "Ichiro", strength: 72, defense: 71 },
  { id: 31, name: "Kojiro", strength: 88, defense: 56 },
  { id: 32, name: "Hayato", strength: 60, defense: 85 },
  { id: 33, name: "Mitsuo", strength: 69, defense: 78 },
  { id: 34, name: "Ryusei", strength: 93, defense: 64 },
  { id: 35, name: "Takashi", strength: 76, defense: 88 },
  { id: 36, name: "Yamato", strength: 87, defense: 57 },
  { id: 37, name: "Kentarou", strength: 79, defense: 80 },
  { id: 38, name: "Naoki", strength: 68, defense: 86 },
  { id: 39, name: "Shunpei", strength: 62, defense: 89 },
  { id: 40, name: "Hajime", strength: 97, defense: 75 },
];

const weapons = [
  { id: 1, name: "Shirogane Katana", strength: 20, defense: 10 },
  { id: 2, name: "Kurogane Wakizashi", strength: 18, defense: 9 },
  { id: 3, name: "Ryu Tsurugi", strength: 22, defense: 11 },
  { id: 4, name: "Tsuchi Yari", strength: 16, defense: 12 },
  { id: 5, name: "Aoi Naginata", strength: 17, defense: 13 },
  { id: 6, name: "Seishin Kusarigama", strength: 15, defense: 8 },
  { id: 7, name: "Hikariken Shuriken", strength: 14, defense: 5 },
  { id: 8, name: "Raijin Tanto", strength: 12, defense: 7 },
  { id: 9, name: "Fujin Sai", strength: 13, defense: 9 },
  { id: 10, name: "Kazekiri Tonfa", strength: 11, defense: 10 },
  { id: 11, name: "Kenbu Jo", strength: 14, defense: 11 },
  { id: 12, name: "Onikiri Jutte", strength: 13, defense: 12 },
  { id: 13, name: "Kaze No Eku", strength: 10, defense: 14 },
  { id: 14, name: "Sakura Tessen", strength: 9, defense: 15 },
  { id: 15, name: "Muramasa Blade", strength: 21, defense: 8 },
  { id: 16, name: "Masamune Edge", strength: 20, defense: 12 },
  { id: 17, name: "Namikiri Spear", strength: 18, defense: 13 },
  { id: 18, name: "Kogarasumaru Axe", strength: 19, defense: 11 },
  { id: 19, name: "Kusanagi Fang", strength: 22, defense: 13 },
  { id: 20, name: "Tsumugari Dagger", strength: 11, defense: 6 },
  { id: 21, name: "Ryumon Blade", strength: 17, defense: 9 },
  { id: 22, name: "Kirikaze Gladius", strength: 16, defense: 8 },
  { id: 23, name: "Aoi Inazuma Kunai", strength: 14, defense: 7 },
  { id: 24, name: "Kiku-ichi Naginata", strength: 18, defense: 14 },
  { id: 25, name: "Heshikiri Shield", strength: 8, defense: 16 },
  { id: 26, name: "Yumitori Staff", strength: 12, defense: 13 },
  { id: 27, name: "Tomonari Fan", strength: 7, defense: 15 },
  { id: 28, name: "Fudo Masamune Hammer", strength: 19, defense: 10 },
  { id: 29, name: "Kanesada Rod", strength: 13, defense: 12 },
  { id: 30, name: "Nodachi Pike", strength: 20, defense: 14 },
  { id: 31, name: "Odachi Poleaxe", strength: 21, defense: 15 },
  { id: 32, name: "Nagamaki Blade", strength: 18, defense: 13 },
  { id: 33, name: "Bo Staff", strength: 12, defense: 11 },
  { id: 34, name: "Hanbo Short Staff", strength: 10, defense: 12 },
  { id: 35, name: "Tachi Cutter", strength: 17, defense: 9 },
  { id: 36, name: "Koga Shuriken Set", strength: 13, defense: 5 },
  { id: 37, name: "Tengu-Kiri Scythe", strength: 16, defense: 10 },
  { id: 38, name: "Ichimonji Spear", strength: 15, defense: 11 },
  { id: 39, name: "Murasame Sickle", strength: 14, defense: 8 },
  { id: 40, name: "Sanosuke Club", strength: 11, defense: 13 },
  { id: 41, name: "Gunbai Fan", strength: 9, defense: 16 },
  { id: 42, name: "Kubotan Stick", strength: 7, defense: 14 },
  { id: 43, name: "Yawara Rod", strength: 8, defense: 13 },
  { id: 44, name: "Shinken Blade", strength: 18, defense: 10 },
  { id: 45, name: "Koryuu Spear", strength: 17, defense: 12 },
  { id: 46, name: "Kiriko Dagger", strength: 10, defense: 7 },
  { id: 47, name: "Masatsune Axe", strength: 16, defense: 10 },
  { id: 48, name: "Hikari Lightblade", strength: 19, defense: 9 },
  { id: 49, name: "Mikazuki Crescent", strength: 18, defense: 11 },
  { id: 50, name: "Honjo Masamed Shield", strength: 8, defense: 17 },
];

// scelta dell'arma casuale
function weaponChoice(warriors, weapons) {
  let allWeapons = weapons;

  return warriors.map((w) => {
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];
    allWeapons.filter((weapon) => weapon.id !== randomWeapon.id);
    const defense = w.defense + randomWeapon.defense;
    const strength = w.strength + randomWeapon.strength;
    return (w = { ...w, defense, strength, randomWeapon });
  });
}

const equippedWarriors = weaponChoice(warriors, weapons);

// console.log(equippedWarriors);

// Sessione di allenamento
function trainingSession(warriors) {
  return warriors.map((w) => {
    const afterTraining =
      (w.defense + w.strength) * Math.floor(Math.random() * (100 - 1) + 1);
    return { ...w, afterTraining };
  });
}

const trainedWarriors = trainingSession(equippedWarriors);
// console.log(trainedWarriors);

// selezione post allenamento: solo potenze di 2, max 32 guerrieri, aggiunta Lu Bu se necessario
function selectionSession(warriors) {
  const bigBoss = {
    id: 100,
    name: "Lu Bu",
    strength: 100,
    defense: 80,
    weapon: { id: 100, name: "Susanoo", strength: 20, defense: 20 },
    afterTraining: 14000,
  };
  // Guerrieri sopra soglia
  let filtered = warriors.filter((w) => w.afterTraining > 2000);
  // Ordina per afterTraining decrescente
  let sorted = [...filtered].sort((a, b) => b.afterTraining - a.afterTraining);
  // Se meno di 16, prendi i migliori 15 e aggiungi Lu Bu
  if (sorted.length < 16) {
    sorted = [
      ...[...warriors]
        .sort((a, b) => b.afterTraining - a.afterTraining)
        .slice(0, 15),
      bigBoss,
    ];
    return sorted;
  }
  // Se tra 16 e 31, prendi i migliori (se dispari aggiungi Lu Bu per arrivare a potenza di 2)
  if (sorted.length < 32) {
    let n = sorted.length;
    // Trova la potenza di 2 più vicina >= n
    let nextPower = 16;
    while (nextPower < n) nextPower *= 2;
    let result = sorted.slice(0, nextPower - (n === nextPower ? 0 : 1));
    if (result.length % 2 !== 0 || result.length < nextPower) {
      result.push(bigBoss);
    }
    return result;
  }
  // Se almeno 32, prendi i migliori 32
  return sorted.slice(0, 32);
}

// ordinamento casuale dei partecipanti
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const selectedWarriors = shuffleArray([...selectionSession(trainedWarriors)]);
console.log(selectedWarriors);

function fightingRound(warriors) {
  const winners = [];
  for (let i = 0; i < warriors.length; i += 2) {
    let warrior1 = warriors[i];
    let warrior2 = warriors[i + 1];

    if (warrior1.afterTraining > warrior2.afterTraining) {
      winners.push(warrior1);
    } else {
      winners.push(warrior2);
    }
  }
  return winners;
}

console.log(fightingRound(selectedWarriors));
