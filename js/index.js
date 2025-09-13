loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then((res) => res.json())
        .then((data) => displayLessons(data.data));
};

const LoadLevelWords = (id) => {
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
        .then((res) => res.json())
        .then((data) => displayLessonWord(data.data));
};
const displayLessonWord = (words) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";


    // "id": 4,
    // "level": 5,
    // "word": "Diligent",
    // "meaning": "পরিশ্রমী",
    // "pronunciation": "ডিলিজেন্ট"


    for (let word of words) {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
        <div class="bg-white rounded-xl shadow-md px-5 py-10 text-center space-y-5">
            <h2 class="text-2xl font-bold">${word.word}</h2>
            <p class="text-xl font-medium">Meaning /Pronunciation</p>
            <div class="text-2xl bangla-font font-semibold ">${word.meaning}/${word.pronunciation}</div>
      <div class="flex justify-between items-center ">
            <button class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="bg-[#1A91FF10] btn hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
      </div>
    </div>
        `;
        levelContainer.appendChild(wordDiv);
    }
};

const displayLessons = (lessons) => {
    console.log(lessons);
    const lessonContainer = document.getElementById("lesson-container");
    lessonContainer.innerHTML = "";
    for (let lesson of lessons) {
        const lessonDiv = document.createElement("div");
        lessonDiv.innerHTML = `
          <button onclick="LoadLevelWords(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Learn -${lesson.level_no}</button>
        `;
        lessonContainer.append(lessonDiv);
    }
};
loadLessons();
