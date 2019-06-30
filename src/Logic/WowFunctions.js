function resolveData(chars){
  let trueJsonArray = [];
    chars.forEach(char =>
      trueJsonArray.push({
        title: char.name,
        value: char.guildName,
        server: char.serverName,
        region: char.regionName,
        talents: char.talents.map(talent => talent.name),
        azeritepowers: char.azeritePowers
          .filter(
            azeritePower => azeritePower.ring === 3 || azeritePower === 2
          )
          .map(azeritePower => azeritePower.name),
          gear: char.gear.map(gear=>gear.name)
      })
    );
    
    return trueJsonArray

  }



export const getJsonData = function(fightID, WoWclass, spec) {
    
    let key = "api_key=30ff6c3bd1b9fbda8a0cb3f8d574b88b";
    let url = `https://www.warcraftlogs.com:443/v1/rankings/encounter/${fightID}?difficulty=5&class=${WoWclass}&spec=${spec}&region=US&${key}`;
    return new Promise((resolve, reject) => {
      let theJsonData = fetch(url)
        .then(data => data.json())
        .then(data => data.rankings);
      if (!theJsonData) reject(new Error('Error retrieving Warcraft Log information'));
      resolve(theJsonData);
    }).then(data=>resolveData(data))
  }



