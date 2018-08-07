var uPreferences = 0;
var lastVerb = [];

function loadFirst() {
  $('#inputInfinitive').prop('disabled', true);
  $('#inputPast').prop('disabled', true);
  $('#inputParticiple').prop('disabled', true);
  $('#inputItalian').prop('disabled', true);
  $('#getHintButton').prop('disabled', true);
  $('#confirmButton').prop('disabled', true);
  $('#option').prop('disabled', false);

  $('#inputInfinitive').prop('value', '');
  $('#inputPast').prop('value', '');
  $('#inputParticiple').prop('value', '');
  $('#inputItalian').prop('value', '');

  $('#dropdownMenuButton').html('Choose your start');

  lastVerb = [];
}
window.onload = loadFirst;

function getUserPreferences(){
  var e = document.getElementById("dropdownMenuButton");
  var userPreferences = e.textContent;
  return userPreferences;
}

function setValueButton(text){
  $('#dropdownMenuButton').html(text);
}

function inizializeChallenge(){
  $('#inputInfinitive').prop('disabled', false);
  $('#inputPast').prop('disabled', false);
  $('#inputParticiple').prop('disabled', false);
  $('#inputItalian').prop('disabled', false);
  $('#option').prop('disabled', true);
  $('#getHintButton').prop('disabled', false);
  $('#confirmButton').prop('disabled', false);
  $('#mainButton').prop('value', 'Reset')

  var userPreferences = getUserPreferences();

  if(userPreferences === 'inputInfinitive'){
    uPreferences = '0';
  } else if (userPreferences === 'inputPast') {
    uPreferences = '1';
  } else if (userPreferences === 'inputParticiple') {
    uPreferences = '2';
  } else if (userPreferences === 'inputItalian') {
    uPreferences = '3';
  }
  $("#" + userPreferences).prop('disabled', true);
}

function start(){
  var mainButtonValue = '';
  mainButtonValue = $("#mainButton").val();
  if(mainButtonValue === 'Start'){

    var userPreferences = getUserPreferences();
    if(userPreferences == 'Choose your start'){
      alert('mandare un modale invitando l utente a una nuova scelta');
      return;
    } else{
      $('#dropdownMenuButton').prop('disabled', true);
    }


    inizializeChallenge();
    $('#mainButton').prop('value', 'Reset');
    chooseVerb();
  }

  if(mainButtonValue === 'Reset'){
    $('#mainButton').prop('value', 'Start');
    $('#dropdownMenuButton').prop('disabled', false);
    loadFirst();
  }
}

function confirm(){
  var up = getUserPreferences();

  var inf = $("#inputInfinitive").val();
  var past = $("#inputPast").val();
  var part = $("#inputParticiple").val();
  var it = $("#inputItalian").val();

  $("#inputInfinitive").css('background-color', 'white');
  $("#inputPast").css('background-color', 'white');
  $("#inputParticiple").css('background-color', 'white');
  $("#inputItalian").css('background-color', 'white');

  var infOK = verbsArray[lastVerb[lastVerb.length - 1]][0];
  var pastOK = verbsArray[lastVerb[lastVerb.length - 1]][1];
  var partOK = verbsArray[lastVerb[lastVerb.length - 1]][2];
  var itOK = verbsArray[lastVerb[lastVerb.length - 1]][3];

  console.log(verbsArray[lastVerb[lastVerb.length - 1]]);

  if(inf !== infOK){
    $("#inputInfinitive").css('background-color', 'rgba(255, 0, 0, 0.2)');
  }

  if(past !== pastOK){
    $("#inputPast").css('background-color', 'rgba(255, 0, 0, 0.2)');
  }

  if(part !== partOK){
    $("#inputParticiple").css('background-color', 'rgba(255, 0, 0, 0.2)');
  }

  if(it !== itOK){
    $("#inputItalian").css('background-color', 'rgba(255, 0, 0, 0.2)');
  }

  if(inf === infOK && past === pastOK && part === partOK && it === itOK){
    $('#inputInfinitive').prop('value', '');
    $('#inputPast').prop('value', '');
    $('#inputParticiple').prop('value', '');
    $('#inputItalian').prop('value', '');
    chooseVerb();
  }
}

function getHint(){
  alert('sto chiedendo aiuto di quanto scritto');
}

function setVerbOnForm(verb){
  var userPreferences = getUserPreferences();
  userPreferences = 'input' + userPreferences;
  $('#' + userPreferences).prop('value', verbsArray[verb][uPreferences]);
}

function chooseVerb(){
  var verb;
  verb = Math.floor(Math.random() * verbsArray.length);

  while(lastVerb.includes(verb)){
    verb = Math.floor(Math.random() * verbsArray.length);
  }

  lastVerb[lastVerb.length] = verb;

  setVerbOnForm(verb);
}

var verbsArray = [
  ['abide', 'abode', 'abode', 'stare'],
  ['arise', 'arose', 'arisen', 'sgorgare'],
  ['awake', 'awoke', 'awoken', 'svegliare'],
  ['bear', 'bore', 'borne', 'sopportare'],
  ['beat', 'beat', 'beaten', 'battere'],
  ['become', 'became', 'become', 'diventare'],
  ['begin', 'began', 'begun', 'cominciare'],
  ['bend', 'bent', 'bent', 'curvare,'],
  ['bet', 'bet', 'bet', 'scommettere'],
  ['bid', 'bid', 'bid', 'fare'],
  ['bind', 'bound', 'bound', 'legare'],
  ['bite', 'bit', 'bitten', 'mordere'],
  ['bleed', 'bled', 'bled', 'sanguinare'],
  ['blow', 'blew', 'blown', 'soffiare'],
  ['break', 'broke', 'broken', 'rompere'],
  ['breed', 'bred', 'bred', 'allevare'],
  ['bring', 'brought', 'brought', 'accompagnare'],
  ['build', 'built', 'built', 'costruire'],
  ['burn', 'burnt', 'burnt', 'bruciare'],
  ['burst', 'burst', 'burst', 'scoppiare'],
  ['buy', 'bought', 'bought', 'comprare'],
  ['cast', 'cast', 'cast', 'lanciare'],
  ['catch', 'caught', 'caught', 'ottenere'],
  ['choose', 'chose', 'chosen', 'scegliere'],
  ['cling', 'clung', 'clung', 'afferrare'],
  ['come', 'came', 'come', 'venire'],
  ['cost', 'cost', 'cost', 'costare'],
  ['creep', 'crept', 'crept', 'strisciare'],
  ['cut', 'cut', 'cut', 'eliminare,'],
  ['deal', 'dealt', 'dealt', 'gestire'],
  ['dig', 'dug', 'dug', 'scavare'],
  ['do', 'did', 'done', 'fare'],
  ['draw', 'drew', 'drawn', 'tirare'],
  ['dream', 'dreamt', 'dreamt', 'sognare'],
  ['drink', 'drank', 'drunk', 'bere'],
  ['drive', 'drove', 'driven', 'guidare'],
  ['dwell', 'dwelt', 'dwelt', 'dimorare'],
  ['eat', 'ate', 'eaten', 'mangiare'],
  ['fall', 'fell', 'fallen', 'cadere'],
  ['feed', 'fed', 'fed', 'nutrire'],
  ['feel', 'felt', 'felt', 'sentire'],
  ['fight', 'fought', 'fought', 'combattere'],
  ['find', 'found', 'found', 'trovare'],
  ['flee', 'fled', 'fled', 'fuggire'],
  ['fling', 'flung', 'flung', 'lanciare'],
  ['fly', 'flew', 'flown', 'volare'],
  ['forbid', 'forbade', 'forbidden', 'vietare'],
  ['forget', 'forgot', 'forgotten', 'dimenticare'],
  ['forgive', 'forgave', 'forgiven', 'perdonare'],
  ['freeze', 'froze', 'frozen', 'ghiacciare'],
  ['get', 'got', 'got', 'ottenere,'],
  ['give', 'gave', 'given', 'dare'],
  ['go', 'went', 'gone', 'andare'],
  ['grind', 'ground', 'ground', 'macinare'],
  ['grow', 'grew', 'grown', 'produrre'],
  ['hang', 'hung', 'hung', 'appendere'],
  ['have', 'had', 'had', 'avere'],
  ['hear', 'heard', 'heard', 'udire'],
  ['hide', 'hid', 'hidden', 'nascondere'],
  ['hit', 'hit', 'hit', 'percuotere,'],
  ['hold', 'held', 'held', 'tenere'],
  ['hurt', 'hurt', 'hurt', 'fare'],
  ['keep', 'kept', 'kept', 'conservare'],
  ['kneel', 'knelt', 'knelt', 'inginocchiarsi'],
  ['know', 'knew', 'known', 'sapere'],
  ['lay', 'laid', 'laid', 'stendere'],
  ['lead', 'led', 'led', 'condurre'],
  ['lean', 'leant', 'leant', 'piegare'],
  ['leap', 'leapt', 'leapt', 'saltare'],
  ['learn', 'learnt', 'learnt', 'imparare'],
  ['leave', 'left', 'left', 'partire'],
  ['lend', 'lent', 'lent', 'prestare'],
  ['let', 'let', 'let', 'lasciare'],
  ['lie', 'lay', 'lain', 'sdraiarsi'],
  ['light', 'lit', 'lit', 'illuminare'],
  ['lose', 'lost', 'lost', 'perdere'],
  ['make', 'made', 'made', 'fare,'],
  ['mean', 'meant', 'meant', 'significare'],
  ['meet', 'met', 'met', 'incontrare'],
  ['mow', 'mowed', 'mown', 'falciare'],
  ['overcome', 'overcame', 'overcome', 'sopraffare'],
  ['pay', 'paid', 'paid', 'pagare'],
  ['put', 'put', 'put', 'mettere'],
  ['quit', 'quit', 'quit', 'smettere'],
  ['read', 'read', 'read', 'leggere'],
  ['rid', 'rid', 'rid', 'liberare'],
  ['ride', 'rode', 'ridden', 'andare'],
  ['ring', 'rang', 'rung', 'suonare'],
  ['rise', 'rose', 'risen', 'alzarsi'],
  ['run', 'ran', 'run', 'correre'],
  ['saw', 'sawed', 'sawn', 'segare'],
  ['say', 'said', 'said', 'dire'],
  ['see', 'saw', 'seen', 'vedere'],
  ['seek', 'sought', 'sought', 'cercare'],
  ['sell', 'sold', 'sold', 'vendere'],
  ['send', 'sent', 'sent', 'mandare'],
  ['set', 'set', 'set', 'fissare'],
  ['sew', 'sewed', 'sewn', 'cucire'],
  ['shake', 'shook', 'shaken', 'scuotere'],
  ['shear', 'sheared', 'shorn', 'tosare'],
  ['shed', 'shed', 'shed', 'spargere'],
  ['shine', 'shone', 'shone', 'brillare'],
  ['shoe', 'shod', 'shod', 'ferrare'],
  ['shoot', 'shot', 'shot', 'sparare'],
  ['show', 'showed', 'shown', 'mostrare'],
  ['shrink', 'shrank', 'shrunk', 'ridursi'],
  ['shut', 'shut', 'shut', 'chiudere'],
  ['sing', 'sang', 'sung', 'cantare'],
  ['sink', 'sank', 'sunk', 'affondare'],
  ['sit', 'sat', 'sat', 'sedersi'],
  ['sleep', 'slept', 'slept', 'dormire'],
  ['slide', 'slid', 'slid', 'scivolare'],
  ['slink', 'slunk', 'slunk', 'sgattaiolare'],
  ['slit', 'slit', 'slit', 'tagliare'],
  ['smell', 'smelt', 'smelt', 'sentire'],
  ['sow', 'sowed', 'sown', 'seminare'],
  ['speak', 'spoke', 'spoken', 'parlare'],
  ['speed', 'sped', 'sped', 'accelerare'],
  ['spell', 'spelt', 'spelt', 'scandire'],
  ['spend', 'spent', 'spent', 'spendere'],
  ['spill', 'spilt', 'spilt', 'versare'],
  ['spit', 'spat', 'spat', 'sputare'],
  ['split', 'split', 'split', 'spaccare'],
  ['spoil', 'spoilt', 'spoilt', 'guastare'],
  ['spread', 'spread', 'spread', 'espandere'],
  ['spring', 'sprang', 'sprung', 'rimbalzare'],
  ['stand', 'stood', 'stood', 'stare'],
  ['steal', 'stole', 'stolen', 'rubare'],
  ['stick', 'stuck', 'stuck', 'appiccicare'],
  ['sting', 'stung', 'stung', 'pungere'],
  ['stink', 'stank', 'stunk', 'puzzare'],
  ['stride', 'strode', 'stridden', 'avanzare'],
  ['strike', 'struck', 'struck', 'colpire'],
  ['strive', 'strove', 'striven', 'sforzarsi'],
  ['swear', 'swore', 'sworn', 'giurare'],
  ['sweep', 'swept', 'swept', 'spazzare'],
  ['swell', 'swelled', 'swollen', 'gonfiare'],
  ['swim', 'swam', 'swum', 'nuotare'],
  ['swing', 'swung', 'swung', 'dondolare'],
  ['take', 'took', 'taken', 'prendere'],
  ['teach', 'taught', 'taught', 'insegnare'],
  ['tear', 'tore', 'torn', 'lacerare'],
  ['tell', 'told', 'told', 'dire,'],
  ['think', 'thought', 'thought', 'pensare'],
  ['throw', 'threw', 'thrown', 'gettare,'],
  ['thrust', 'thrust', 'thrust', 'ficcare,'],
  ['tread', 'trod', 'trodden', 'calpestare'],
  ['undergo', 'underwent', 'undergone', 'subire'],
  ['understand', 'understood', 'understood', 'capire'],
  ['upset', 'upset', 'upset', 'preoccupare'],
  ['wake', 'woke', 'woken', 'svegliarsi'],
  ['wear', 'wore', 'worn', 'indossare'],
  ['weave', 'wove', 'woven', 'tessere'],
  ['weep', 'wept', 'wept', 'piangere'],
  ['win', 'won', 'won', 'vincere'],
  ['wind', 'wound', 'wound', 'serpeggiare'],
  ['withdraw', 'withdrew', 'withdrawn', 'ritirarsi'],
  ['wring', 'wrung', 'wrung', 'torcere'],
  ['write', 'wrote', 'written', 'scrivere']
]
