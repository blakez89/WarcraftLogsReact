function resolveData(chars) {
  let trueJsonArray = [];
  chars.forEach(char =>
    trueJsonArray.push({
      title: char.name,
      value: char.guildName,
      server: char.serverName,
      region: char.regionName,
      talents: char.talents.map(talent => talent.name),
      azeritepowers: char.azeritePowers
        .filter(azeritePower => azeritePower.ring === 3 || azeritePower === 2)
        .map(azeritePower => azeritePower.name),
      gear: char.gear.map(gear => gear.name),
      time: convertToString(char.duration)
    })
  );
  return trueJsonArray;
}

function convertToString(ms, delim = ":") {
  const showWith0 = value => (value < 10 ? `0${value}` : value);
  const hours = showWith0(Math.floor((ms / (1000 * 60 * 60)) % 60));
  const minutes = showWith0(Math.floor((ms / (1000 * 60)) % 60));
  const seconds = showWith0(Math.floor((ms / 1000) % 60));
  return `${
    parseInt(hours) ? `${hours}${delim}` : ""
  }${minutes}${delim}${seconds}`;
}

export function getTopTalents(bigJsonFile) {
  try {
    let talentArrays = [[], [], [], [], [], [], []];
    let filteredJsonData = bigJsonFile.map(char => char["talents"]);
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 7; j++) {
        talentArrays[j].push(filteredJsonData[i][j]);
      }
    }
    let newTalents = talentArrays.map(data =>
      data.reduce((allNames, name) => {
        name in allNames ? allNames[name]++ : (allNames[name] = 1);
        return allNames;
      }, {})
    );
    let writtenTalents = [];

    newTalents.forEach(obj => {
      let thevalues = Object.values(obj);
      let thekeys = Object.keys(obj);

      for (let i = 0; i < thevalues.length; i++) {
        if (thekeys[i] !== "Unknown Ability")
          writtenTalents.push(`${thekeys[i]} : ${thevalues[i]}% `);
      }
    });
    return writtenTalents;
  }
  catch{
    return [];
  }
  
}
async function myFetchWrapper(url) {
  const response = await fetch(url);
  const json = await response.json();
  return response.ok ? json : Promise.reject(json);
}

export const getJsonData = function(
  fightID,
  WoWclass,
  spec,
  difficulty,
  region
) {
  let key = "api_key=30ff6c3bd1b9fbda8a0cb3f8d574b88b";
  let url = `https://www.warcraftlogs.com:443/v1/rankings/encounter/${fightID}?difficulty=${difficulty}&class=${WoWclass}&spec=${spec}&region=${region}&${key}`;
  return myFetchWrapper(url).then(
    function fulfilled(data) {
      return resolveData(data.rankings);
    },
    function rejected(err) {
      console.log(err); // "Oops"
    }
  );
};
