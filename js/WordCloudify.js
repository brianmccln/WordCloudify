// pass main and article to JS objects
const main = document.querySelector('main')
const article = document.querySelector('article');
const aside = document.querySelector('aside');

const obj = {}; // object for holding all unique blog words as keys

// set the default starter word freq : the min for word cloud inclusion
let minWordFreq = 5

// make word cloud div to contain word cloud box (child div) & slider underneath
const cloudDiv = document.createElement('div');
cloudDiv.style.cssText = "background-color:yellow; padding:1rem; min-height:400px; text-align:center; border-radius:1rem; font-size:1.25rem;"
aside.appendChild(cloudDiv)

// box to contain the actual word cloud string
const cloudBox = document.createElement('div');
cloudBox.className = "cloudBox";
cloudDiv.appendChild(cloudBox);

// label the slider out / slider thing
const sliderLabel = document.createElement('p')
sliderLabel.style = "display:inline-block; font-size:1.25rem; font-weight:bold"
sliderLabel.innerHTML = "Min Word Freq: "
cloudDiv.appendChild(sliderLabel)

// output tag to display the slider value as it changes
const sliderOut = document.createElement('output')
sliderOut.style.cssText = "padding:5px 15px; text-align:center; font-weight:bold; font-size:1.5rem; border-radius:10px; border:2px solid #555; margin: 0 10px;"
cloudDiv.appendChild(sliderOut)

// slider to appear under the word cloud. On change, it re-renders the cloud
const slider = document.createElement('input')
slider.type = 'range'
slider.min = 2
slider.max = 12
slider.value = minWordFreq
slider.addEventListener('change', renderCloud)
slider.addEventListener('input', function() {
    sliderOut.value = slider.value
})
cloudDiv.appendChild(slider);

sliderOut.value = slider.value // start the slider output w the starter slider value


// add cloud box to main as first child

// declare vars that you need for the word cloud application: you need an object to hold the blog word map and a string to hold the concatenated word cloud

let junk = "I a about abreast across addition adjust adjusted adjusting adjusts after again against ago almost along already also although always am among amount amounts an and another answer answered answering answers any anyone anything are arent aren't arrive arrived arriving arrives around article as aside ask asked aspect aspects at ave avenue away b back backs bad be became because been before behind being beside besides better best between big bigger biggest blah both bother but by c cab called came can cannot can't cant cancel certain certainly clear close closer complete completed complelely completes conclude concludes conclusion conclusions could couldn't couldnt corner couple course cover covered covering covers d delete deleted deletes despite detail detailed detailing details did didn't didnt do does  doing done don't dont double down downward during e each either else end ends enough entire entirely especially etc even every everyday example except exception f far feel felt feet few file first five fold folder follow followed following follows foot for forward foreward forewards form formed found four from front g gal gals gave gee get gets getting give given go goes going gone good goods got great guy guys h had hadnt haha half halves has have having he heard hello help her him himself his hola hour hours how however hundred hundreds i if img in include included including includes indeed inform information informational informed informing informs insofar instant instantly instants instance instead into is isn't isnt issue issues it its it's inward j jk just k keep keeping keeps kind knew know known knows l last lasts late later latest least leave left less lesser let like likes liked likely likelihood line list lists listed listing little lol look looked looking looks loose loosely low lower lowest long longer longest lot lots m made main make many matter mattered matters maybe me mean mere merely mine minute minutes miss missed misses missing mistake mistakes moment momentarily moments month months more moreover most much must my myself name n named namely names nay near nearly need needed needs neither never next no nobody none nope nor not nothing now o obtain obtained obtaining obtains occur occurs occurred of off often ok okay omg omit on once one oneself only oops open opened opens or other others our ours ourselves out outward over p part pass passed passing past percent percentage percents perhaps place places placed point points presence present probable probably pull pulled pulling pulls pure purely pursue pursed pursues pursuing q quite r rather remember remembered remembers reply replied replies require required requires requiring rest rested resting rests right round s said same sat saw say saying says second secondly seconds see seem seems seemed seemingly seeing sees service services set sets self several shall she shift shifts short shorter shortest shortly should side sides similar simple simply since sincerely small smaller smallest shm so some something sometimes soon sort special specially src st stay stayed staying stays still stood stop stopping stops stopped style styled styling styles such sudden suddenly sum summation suppose supposed supposedly supposes supposing t take taken takes taking tel tell telling tells than thank thanks that their them themselves then there these they theyre they're think thinking thinks this those though thought thousand thousands three threes through throughout thus to too took toward towards ttyl turn turns turned turning tries try two twos u under until up upon upward upwards us use used user using usually utterly v various very w want wants was way ways we week weeks well went were what when where whether which while within who who's whose why will with without worse worst would wouldnt wouldn't w www x y year years yes yet yo you your yours yourself yourselves z zip"

// alphabetize junk, so that it is easier to add words and to spot repeats. chain: 
let str = article.innerText;

// array of all blog words, each word an array item
let arr = str.split(' ');

// for-loop to iterate array of all blog words
for(let i=0; i < arr.length; i++) {
    
    let word = arr[i];
    
    // use RegEx to remove all non-letters from word
    word = word.replace(/[^\'a-z]/gi, '');

    // if word already exists as obj key, push its index; else new key w array as value
    obj[word] ? obj[word].push(i) : obj[word] = [i];
     
}

function renderCloud() {
    
    let cloudStr = ""; // the cloud that we make to output to cloud box
    
    // alert(event.target.value)
    if(event) { // if this func got called by an event (so, not the on page load func)
        minWordFreq = event.target.value // set the var to the minWordFreq
    }
    // length of key array value gives us word frequency
    // if word appears at least X times, it is eligible for word cloud
    // make sure it is not a junk word; lower case it first
    // render the word cloud:
    for(let key in obj) {

        if(obj[key].length > minWordFreq) { // If array length > minWordFreq 

            if(!junk.includes(key.toLowerCase())) { //If it's not a junk word

               let fontSize = Math.min(48, obj[key].length * 4);
               let redColor = Math.min(255, (obj[key].length * 20));
               let color = `rgb(${redColor}, 88, 88)`;

               cloudStr += `<span style='font-size:${fontSize}px; color:${color};'>${key}&nbsp;</span>`;
            }
        }
    } // end for in loop

    cloudBox.innerHTML = cloudStr;

} // function renderCloud()
    
renderCloud() // load the initial word cloud on page load using default minWordFreq value





