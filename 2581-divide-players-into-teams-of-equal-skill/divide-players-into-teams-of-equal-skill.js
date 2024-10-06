/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    
    skill.sort((a, b) => a - b);
    const len = skill.length

    const skillSum = skill[0] + skill[len - 1]
    let chemistry = 0

    for(let i = 0; i < len / 2; i++){
        if(skill[i] + skill[len - 1 - i] !== skillSum){
            return -1
        }

        chemistry += skill[i] * skill[len - 1 - i]
    }

    return chemistry

};