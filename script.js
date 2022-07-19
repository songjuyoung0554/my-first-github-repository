// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement('img');
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of" + obj.author;
  avatarImg.className = 'discussion__avatar--image';
  
  avatarWrapper.append(avatarImg)

  const discussionTitle = document.createElement('h2')
  const titleAnchor = document.createElement('a')
  discussionTitle.append(titleAnchor)
  titleAnchor.textContent = obj.title;
  discussionTitle.className = 'discussion__title';

  discussionContent.append(discussionTitle)

  const discussionInfo = document.createElement('div');
  discussionInfo.textContent = obj.author + '/' + obj.createdAt;
  discussionInfo.className = 'discussion__information';
  
  discussionContent.append(discussionInfo)
  
  const answerP = document.createElement('p');
  answerP.textContent = '☑'
  answerP.className = 'dicussion__answered';
  
  discussionAnswered.append(answerP)
  
  
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

const form = document.querySelector('form.form');
const title = document.querySelector("div.form__input--title > input");
const name = document.querySelector('div.form__input--name > input');
const textbox = document.querySelector('div.form__textbox > textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const obj = 
  {
    id: "unique id",
    createdAt: new Date().toLocaleString(),
    title: title.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    bodyHTML: textbox.value,
    answer: null,
    author: name.value,
    avatarUrl:
    'https://avatars.githubusercontent.com/u/79903256?s=64&v=4',
  };

  agoraStatesDiscussions.unshift(obj);
  const discussion = convertToDiscussion(obj);
  ul.prepend(discussion);

})
// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
