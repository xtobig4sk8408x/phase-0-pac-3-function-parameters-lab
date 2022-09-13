const name = ["Aki", "Samip", "Gracie"];
const language = ["Ember.js]", "React", "JavaScript", "Python"];


function introduction(name)
{
return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language)
{
    const iWL = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return iWL;
}

function introductionWithLanguageOptional(name, language = "JavaScript")
{
    const iWLO = (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return iWLO;
}

introduction;