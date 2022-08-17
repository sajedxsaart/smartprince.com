const fashionWrite = document.getElementById('fashion');
const smartPolish = document.getElementById('smart-polish');
const goldenWrite = document.getElementById('golden');
const highlighterSmart = document.getElementById('highlighter');
const fashionSketch = document.getElementById('fashion-sketch');
const titleEl = document.getElementById('title');
const descriptionEl = document.getElementById('description');

function changeDetailFashion() {
     
    titleEl.textContent = 'فشن رایت';
    descriptionEl.textContent = 'مجموعه فشن رایت';
    
}
function changeDetailPolish() {
     
    titleEl.textContent = 'اسمارت پولیش';
    descriptionEl.textContent = 'لاک غلگیر هفت میل اسمارت پرینس';
    
}

function changeDetailGolden() {
     
    titleEl.textContent = "گلدن رایت"
    descriptionEl.textContent = "مجموعه خودکار های گلدن رایت";
    
}

function changeDetailHighlight() {
     
    titleEl.textContent = ' هایلایتر اسمارت پرینس';
    descriptionEl.textContent = "هایلایتر مینی و پاستلی اسمارت پرینس";
    
}

function changeDetailSketch() {
     
    titleEl.textContent = 'فشن اسکچ';
    descriptionEl.textContent = "مداد مکانیکی طرحدار اسمارت پرینس";
    
}














fashionWrite.addEventListener('click', changeDetailFashion);
smartPolish.addEventListener('click', changeDetailPolish);
highlighterSmart.addEventListener('click', changeDetailHighlight);
fashionSketch.addEventListener('click', changeDetailSketch);
goldenWrite.addEventListener('click', changeDetailGolden);