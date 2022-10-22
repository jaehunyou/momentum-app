const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"]; //img폴더에서 img불러오기

const chosenImage = images[Math.floor(Math.random() * images.length)]; //image array에서 랜덤한 이미지 불러오기

const bgImage = document.createElement("img"); //js에서만 가상으로 img태그 만들기

bgImage.src = `img/${chosenImage}`; //js에서만 가상으로 <img src="랜덤이미지" /> 만들기

bgImage.classList.add("bg-img");

document.body.appendChild(bgImage); //body.appendChild()로 실제 html에 이미지 tag 추가하기