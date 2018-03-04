# Google Apps Mail을 사용해 **정적** HTML Form에서 메일을 보내세요!

A 백엔드 서버 없이 HTML Form을 사용하여, "Contact Us" 메시지를 보내는 ***스텝-바이-스텝 예제*** 입니다.
- PHP, Python, Ruby, Java, Node.js 등은 필요없습니다.

작동 예제는 이곳에서 : https://dwyl.github.io/html-form-send-email-via-google-script-without-server/

**_경고:_** Google의 API는 하루에 보낼 수 있는 메일 수에 제한이 있습니다.
Google 계정에 따라 다를 수 있습니다, [이곳에서](https://developers.google.com/apps-script/guides/services/quotas) 본인의 한도를 확인하세요.
데이터가 항상 스프레드시트에 추가되고 메일로 전송되므로 가능하면 Part 3을 통해 이 튜토리얼을 고대로 구현하는 것을 추천합니다.

## Why?

우리는 *서버*가 *없거나* *원하지 않을 때* "*정적*" HTML 페이지에서 email을 보내는 방법이 필요했습니다.

### *핵심 이점들*

+ 배포/유지/지불을 위한 *백엔드* 서버가 필요없습니다.
+ ***완전한 사용자정의 가능*** 모든 측면에서 커스터마이징이 가능합니다!
+ ***어디에서나 허용 목록에 포함된 Google Mail*** 을 통해 보내는 Email (*높은 전송 성공률*)
+ 어떤 데이터든 쉽게 볼 수 있는 ***스프레드시트*** 에 **수집/저장**합니다.
(*코딩을 전혀 모르는 사람과 공유해야하는 경우도 완벽합니다.*)

## What?

*쉽지만* *유지보수*가 필요한 서버를 이용해 이메일을 보내는 대신, 
사용자를 대신하여 Google로 메일을 보내고 
Google 스프레드시트를 사용해 데이터를 추적하세요!

> 당신은 데이터 전송 위치를 신경 쓰지 않고 귀하의 받은편지함 (*지저분한... 웩!*)에서 
제출된 데이터를 관리하려는 경우 http://formspree.io/와 같은 *"무료"* 서비스를 사용할 수도 있습니다.
*또는* ... 몇 분을 투자하여 데이터를 비공개로 관리 할 수 ​​있습니다. 
*골라보세요.*

## *How*?

### 1. Sample Spreadsheet를 복사하세요.

> Sample: https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/copy

당신의 Google 계정에 로그인하고 "**사본 만들기**"를 클릭합니다.

![1-make-copy](https://user-images.githubusercontent.com/1406149/29245471-feb7b034-7f97-11e7-9c0d-f06238e8362b.png)

아래와 같이 나와야 됩니다:

![2-copy-of-sheet](https://cloud.githubusercontent.com/assets/194400/10559710/3aec92f0-74ef-11e5-9295-f1988a23257b.png)

> 참고 : 복사본 이름을 원하는대로 변경해도 결과에 영향을 미치지 않습니다.

### 2. 스크립트 편집기를 여세요.

 "**도구**" > "**스크립트 편집기...**"를 눌러 편집기를 여세요.

![2 script-editor](https://cloud.githubusercontent.com/assets/194400/10559732/8db2b9f6-74ef-11e5-8bf2-de286f079929.png)

필요한 스크립트의 스냅샷은 다음과 같습니다 : [google-script-just-email.js](https://raw.githubusercontent.com/nelsonic/html-form-send-email-via-google-script-without-server/1d1c6727f69dec64a6b7f6bd6ff0dd72d0374210/google-script-just-email.js)

### 3. 스크립트에서 `TO_ADDRESS` 를 설정합니다.

**_경고:_** 만약 당신이 주석처리를 제거하지 않고 `To_ADDRESS` 값으로 당신의 이메일을 설정하면, 
웹 skill을 가진 사람이 당신의 form과 eamil을 보내는 데이터를 수정하여 임의의 이메일로 보낼 수 있습니다. 

이 위험은 그리 높지 않을 수 있습니다. 이 위험을 감수하면서 당신의 HTML Form 내에서 
메일 변수를 `data-email` 속성으로 설정하는 편의성을 원한다면 이 주석처리된 변수를 내버려둘 수 있습니다.
이렇게 하면 2-6단계를 거치지 않고도 HTML form에서 이메일을 보낼 주소를 쉽게 변경할 수 있습니다.
이 기능을 사용하려면 제공된 .js 파일을 Part2, 10단계에서 **사용해야** 합니다.

만약 이 잠재적인 위험을 원하지 않으면, `TO_ADDRESS`의 주석을 제거하세요.
그리고 form태그에서 submit할 때 데이터를 받을 이메일을 변수의 값으로 넣으세요. 

![3-script-editor-showing-script](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)

### 4. 스크립트의 *새로운 버전* 저장

애매하지만 *"버전 관리 ..."* 를 클릭해야 합니다.

![19 google-script-no-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)

그리고 *새로운 버전*을 만듭니다.

![20 google-script-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)

### 5. *업데이트*된 스크립트를 웹 앱으로 배포

![20 a-publish](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)

배포 할 *최신* 프로젝트 버전을 선택합니다.

:warning: 참고: '웹에 액세스할 수 있는 사용자' 드롭다운에서 `누구나, 익명 사용자 포함` 옵션을 선택해야 합니다. 
다른걸 선택하면 form 응답이 스프레드시트에 추가되지 않을 것입니다. :warning:

![21 deploy-new-version](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)

### 6. 이메일을 보내기 위해 스크립트를 인증합니다.

![5 auth-required](https://cloud.githubusercontent.com/assets/194400/10560412/89d3fb0c-7502-11e5-81ce-fb239bf545b2.png)

![5-allow-sending-emails](https://cloud.githubusercontent.com/assets/194400/10560416/a86a26ae-7502-11e5-9add-d5081d409af4.png)

웹 앱 URL을 클립보드 혹은 메모장에 복사하시고 "확인"버튼을 누르세요. 

![22 1-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)


### 7. *기본* HTML Form 만들기

이 레포지토리의 `index.html` 템플릿을 사용하여,
기본 form 형식을 가진 html 파일을 만드세요.(*저장하세요!*)

:warning: 만약 이 레포지토리의 예제가 아닌 *직접 작성한 form*을 벌써 사용하려고 한다면:
+ 각각의 form 요소 `name` 속성은 Google 시트의 컬럼네임과 같아야 합니다.
+ form태그의 `id`는 `gform`이 되어야 합니다. 즉, `<form id = "gform">`
  + 나중에 이걸 변경하려고 한다면, `form-submission-handler.js`의 고유버전을 만들고 `id`를 고쳐야 됩니다.


> Form태그의 `action` 속성을 전 단계에서 복사해놓은 URL로 고쳐야 함을 잊지 마세요.

![7-html-form](https://cloud.githubusercontent.com/assets/194400/10560470/e2d7fcb6-7503-11e5-9d9a-3771423e51fa.png)

### 8. 브라우저에서 HTML Form (*페이지*) 열기

HTML Form에서 테스트 데이터를 채우세요:

![html form](https://cloud.githubusercontent.com/assets/194400/10560494/674b64c4-7504-11e5-801a-b537d276f671.png)

Submit 하세요. 보내졌으면 아래와 같이 확인할 수 있습니다:
(역주: 실패하면 "result":"error"가 됩니다.)
![form sent](https://cloud.githubusercontent.com/assets/194400/10560501/8f605dd4-7504-11e5-8cd7-06d768beba4d.png)

### 9. 아까 설정했던 메일주소로 들어가 받은편지함을 확인해 보세요.

(*위의*) **Step 3**에서 설정했던 이메일 계정의 받은편지함을 열어보세요.

![email received](https://cloud.githubusercontent.com/assets/194400/10560512/f87f1652-7504-11e5-8b0f-c342c395a193.png)


> ***끝***. 이게 전부입니다. HTML form 태그만을 이용해 이메일 보내기에 성공했습니다.

# *파트 2 - 이쁘게 하고싶어..*

우리 스타일에 [**순수 CSS**](http://purecss.io/start/)를 사용해 
이 ***Super Lean*** 을 유지할 겁니다 ( *step 8의 "못생긴" HTML Form태그를 고* ).
그리고 독자분의 페이지/사이트에 사용자를 유지하기 위해 Form태그 양식을 `submit`할 때
[**JQuery** "***AJAX***"](http://api.jquery.com/jquery.ajax/) 를 사용하겠습니다 (*"구린" 응답페이지는 빼구요*).

### 10. **JavaScript** 와 "***AJAX***" 를 사용한 양식 제출

페이지가 JSON 응답/결과로 *변경되지 않도록* 하려면 ***AJAX***를 사용하여 양식을 제출해야 합니다.

파일 끝 (*`</body>` 태그 닫기 전)에 다음 JavaScript 파일을 포함하도록 index.html을 업데이트합시다.

```js
<script data-cfasync="false" type="text/javascript"
src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script>
```

**경고:** 위의 3단계에서 `TO_ADDRESS` 변수를 설정하지 않은 경우, 메인 form 요소에 `data-email="example@email.net"`를 포함시켜야 됩니다.
자세한 내용은 아래 양식을 확인하세요.
설정하셨다면 이 속성은 필요하지 않습니다.

이제 양식이 제출되면 "Thank You" *메시지*가 띄워집니다:

![thankyou message](https://cloud.githubusercontent.com/assets/194400/10561147/4086a89a-7517-11e5-840d-7f490353e225.png)

사용자를 새로고침 없이 같은 페이지에 유지시키세요.

### 11. 양식이 제출될 때 나오는 메시지 커스터마이징하기

`thankyou_message` div를 만들어 직접 메시지를 만드세요:

![10-customise-the-thankyou-message](https://cloud.githubusercontent.com/assets/194400/10561213/9e6d3342-7518-11e5-9860-43a268102de2.png)


### 12. CSS를 사용해 Form을 *멋지게* 만들기

`이번` *예제*에서는 ***순수 CSS*** : http://purecss.io/start/ 를 사용하고 있습니다. 
***적은 용량*** (***4.0KB 축소 및 압축된***)과 현재 "문제"(보기에 구린)를 *해결*하기 때문입니다.

![PureCSS-Logo-Intro](https://github-cloud.s3.amazonaws.com/assets/194400/10565838/72d6d52a-75d2-11e5-9b92-ca02b1124920.png)

![PureCSS-module-sizes](https://github-cloud.s3.amazonaws.com/assets/194400/10565844/8f4885a0-75d2-11e5-9490-e3fc42c32616.png)

이 작업에 너무 *많은* 시간을 들이지 않고도 양식을 ***훨씬*** 멋지게 만들 수 있습니다:

![contact form with pure css](https://github-cloud.s3.amazonaws.com/assets/194400/10566392/f38bc454-75dd-11e5-85dd-6819494a98f2.png)

### 13. 이메일도 멋지게 만드세요!

By default, the sent email's body contains the key-value pairs from the form, with the key as an `<h4>` and the value as a `<div>`. This is a fairly basic, and foolproof view for the data.

기본적으로 보낸 이메일의 본문에는 양식의 key-value 쌍이 포함되며, key는 `<h4>`이고 value는 `<div>`입니다. 
이것은 베이직하지만, 데이터를 보기엔 어색합니다.

아마 대충 이런 형식의 메일을 받았을 겁니다:

![Nicely formatted email](https://cloud.githubusercontent.com/assets/5610747/22168070/335ad734-df62-11e6-9523-6e193e94151f.png)

> 이 과정은 진행 중이며 잠재적으로 기대한 이메일보다 더 많은 메일을 받을 수 있음을 명심하세요. 
form으로 보내진 모든 데이터에 대해 이메일 내용이 반복되므로 봇이나 악의적인 사용자가 `보내기`를 결정하면 요청 이상의 메일이 쌓일 겁니다.
현재는 주의하여 사용하세요. 현재 개선사항을 준비중입니다.

스크립트 편집기를 통해 이를 수정할 수 있습니다. 이 부분입니다: 

```javascript
result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
```

이게 우리에게 필요한 전부이며, 마크업을 독자분에게 맞게 조정할 수 있습니다.
우리는 `<h4>`태그를 메일에 가장 적합한 크기로 선택했기 때문에, 대소문자(key들은 JavaScript 객체에서 모두 소문자입니다)와 
약간의 기본 간격을 고정하기 위해 약간의 CSS를 추가했습니다.
inline style은 일반적인 웹 페이지에서는 죄악이지만 우리가 이 예제에서 CSS를 수행하려면 유일한 방법입니다. 
또한 우리는 value 부분에 무엇이든-단일 행이든, 여러 행이든-대응할 수 있도록 `<div>`를 사용했습니다(예를 들어 `<p>`태그는 그걸 잘라내지 않습니다).

추가로, 우리에겐 기본적으로 주석처리 되어 있는 `sendEmail()` 메소드에 대한 `replyTo` 옵션이 있습니다.

```javascript
MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  // replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
  htmlBody: formatMailBody(mailData)
});
```

이메일에 답장 필드를 추가하려는 경우 주석처리를 제거할 수 있습니다. 스크립트의 예제는 reply-to를 양식에 제출된 메일로 설정합니다. 
관심이 있다면 Google의 설명서에서 MailApp.sendEmail (예 : `cc` / `bcc` 등)에 대한 자세한 정보를 제공합니다:

https://developers.google.com/apps-script/reference/mail/mail-app

# *파트 3 - 스프레드시트에 제출된 Contact Form 데이터 저장하기*

독자분의 메일함에 Form 데이터를 다이렉트로 보내는 것도 *좋은* 첫번째 단계지만, 우리는 더 잘할 수 있습니다.
또한 위에 언급한 것처럼, Google은 하루에 보낼 수 있는 이메일 수에 제한이 있습니다.
따라서 데이터를 스프레드시트에 저장하는 것이 안전하며 데이터 손실을 줄일 수 있습니다.

### 14. Google Apps 스크립트에 `record_data` 기능 추가하기

![record_data example](https://cloud.githubusercontent.com/assets/194400/10581613/8b4f9ad4-767b-11e5-90cc-962a9d6acc91.png)

이렇게 하면 `POST`로 받은 데이터가 스프레드시트의 *행(row)*으로 기록됩니다.
참고: 다음 파일을 이용해 full code를 복붙할 수도 있습니다. [**google-apps-script.js**](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/blob/master/google-apps-script.js)

### 15. 새로운 버전 저장하고 재배포하기

새로운 버전을 저장하고 스크립트를 ***재배포*** 하기 위해 위의 4, 5 단계 & 6 단계를 다시 따라하세요.

### 16. 양식 재검사하기

![submit the form](https://cloud.githubusercontent.com/assets/194400/10582654/cf3081e6-7680-11e5-9fd1-b989a8ba0b65.png)

### 17 데이터가 스프레드 시트에 삽입되었는지 확인

![17-confirm-data-inserted](https://cloud.githubusercontent.com/assets/194400/10582676/eb8af5d8-7680-11e5-92bb-30dd08d2d7b3.png)


### _라이브_ 서버 (_당신의 `localhost`_)

Because we are loading external **.js** files, our web browser
외부 **.js* 파일들을 로드하고 있기 때문에 우리의 웹브라우저는 로컬 디렉토리에서 **index.html**을 열지 않습니다.
_(파일로 실행시켜 단순 웹브라우저로 테스트하지 마세요.)_

터미널을 열고 다음 커맨드를 실행해 _**node 모듈**을 **설치**하고 *live 서버** 를 **시작**하세요_:

```sh
npm install live-server --save-dev && node_modules/.bin/live-server --port=8000
```

설치하는데 1분 정도 걸리고, 
완료되면 당신의 `live-server`가 시작됩니다.

포트 8080에서 node.js HTTP 서버가 시작되고 방금 만들었던 양식이 기본 브라우저에서 열립니다.
 **style.css**의 form style 혹은 **form-submission-handler.js**의 클라이언트 측 자바스크립트를 업데이트하려면, 
 GitHub가 아닌 로컬로 해당 자원을 로드하도록 **index.html**을 편집하세요.

> **참고**: 이건 절대적인 초보자를 위한 Node.js의 _맛보기_입니다. 
이 양식을 "배포"하기 위해 node.js가 무조건 필요한 것은 아니며,
HTML / CSS / JavaScript를 제공하는 **_모든_ 웹 서버**에서 실행할 수 있습니다. 
이전에 Node.js를 사용한 적이 없다면 http://nodeguide.com/beginner.html을 참조하세요.
하지만 이 연습 (_서버가 없는 양식 제출_) 을 위해 node.js 또는 `live-server`는 필요하지 않습니다. 
그러나 IDE에서 편집기에서 변경 사항을 적용 할 때 페이지를 자동으로 다시 로드하기 때문에 있으면 좋아요.


# *Want more*?

이 튜토리얼보다 더 많은 것을 알고 싶다면, [***알려주세요***!](https://github.com/nelsonic/html-form-send-email-via-google-script-without-server/issues)

독자분의 편의를 위해 GitHub Pages에서 데모페이지를 호스트해 두었습니다.
코드를 확인하고 작동 방식을 확인하세요 : 
https://dwyl.github.io/html-form-send-email-via-google-script-without-server/


## 당신만의 필드를 추가하세요!

[Henry Beary의 요청](https://github.com/dwyl/html-form-send-email-via-google-script-without-server/issues/9)에 따라
form 처리기를 *제네릭*으로 만들어 원하는 필드를 추가할 수 있도록 했습니다..

또한 모든 종류의 form input 요소를 사용하는 `test.html`도 만들었으므로 원하는대로 요소를 복붙할 수 있습니다.
요소의 name과 id 속성들만 업데이트하면 됩니다.
이 테스트 양식의 작동예제는 이곳에서 확인할 수 있습니다:
https://dwyl.github.io/html-form-send-email-via-google-script-without-server/test.html

id가 gform 인 form태그 내에 필드를 포함시키고 양식 요소의 이름이 스프레드 시트의 새로운 열 제목과 일치하는지 확인하세요! 즉 :

```HTML
<fieldset class="pure-group">
  <label for="color">Favourite Color: </label>
  <input id="color" name="color" placeholder="green" />
</fieldset>
```
위 코드는 사용자가 선호하는 색을 받아볼 수 있게 해줍니다. 즉:
![new-field-contains-data](https://cloud.githubusercontent.com/assets/194400/11547132/9f162f6a-9949-11e5-89ac-aeb91e025844.png)

질문이 더 있으면 알려주세요!

## 스팸 방지

스팸으로 분류되는 것을 피하고 Google Apps 사용 할당량을 채우기 위해, 우리는 Honeypot이라고 하는 간단한 스팸방지 기술을 구현할 겁니다.
이 기술은 필수적으로 숨겨진(hidden) textfield를 만드며, 이 textfield가 채워지면 스팸 봇으로 간주하여 양식을 차단합니다.

```html
<form action="https://script.google.com/macros/s/..." method="post">
  <!--input 태그의 id는 honeypot 등 실제 작동하지 않는 id여야 합니다-->
  <label class="sr-only">Keep this field blank</label>
  <input id="honeypot" type="text" name="honeypot" value="" />
  <!--나머지 form태그 요소들-->
</form>
```

```css
#honeypot {
  display: none; /*일반적인 사용자에게 보이지 않도록 숨기세요*/
}
```

```javascript
/* form-submission-handler.js */
/* 이 if문에서 주석을 제거하세요 */

if (validateHuman(data.honeypot)) {  //이 부분이 채워져 있으면, 제출되지 않습니다.
  return false;
}

```


## 자주 묻는 질문들 (FAQ's)

1. _이 자습서를 사용할 때 도움을 받으려면 어떻게 하나요?_

- 어떤 단계를 거쳤으며 어떤 단계가 효과적이지 않은지 상세하게 설명하는 [문제를 게시](https://github.com/dwyl/html-form-send-email-via-google-script-without-server/issues/new)하세요. 온라인으로 겪으신 문제를 재현하는 [예제](https://stackoverflow.com/help/mcve)가 가장 이상적입니다 (예 : GitHub Pages 또는 CodePen의 호스트). 예를 들어 콘솔 오류를 제공하면 도움이 되는 응답을 받을 가능성이 높아집니다.


2. _예제 스프레드시트에 대한 수정권한을 얻을 수 있을까요?_

- 아니요. 다른 사람이 복사 할 수있는 작업 예제를 보여주기 위해 사용되고 있으며 편집 가능한 버전은 실수로 또는 악의적으로 모든 사용자가 손상시킬 수 있습니다.

3. _제출(submit)을 클릭하면 웹 페이지 포워딩이 여러 텍스트로 전송되는 이유는 무엇입니까?_

- AJAX를 통해 데이터를 제출하는 데 필요한 자바 스크립트를 제대로 로드하지 않았거나 브라우저가 AJAX를 지원하지 않습니다. 파트2에서 오류를 발견 할 경우를 대비하여 콘솔 로그를 확인하세요.

4. _웹페이지에서 양식을 성공적으로 제출되지 않는 이유가 뭘까요?_

- Javascript 콘솔 로그를 확인하세요. 우리가 제공한 Javascript를 읽는 동안 오류가 있을 수 있습니다. 또는 양식을 제출하는 동안 오류가 있을 수 있습니다. Google Script 파일 내에 `TO_ADDRESS` 변수를 설정하지 않은 경우 form태그의 ID가 `gform`이어야하며 데이터 이메일 속성이 필요합니다. 또한 제공되는 Javascript 코드는 확인을 위해 사용하는 전자 메일 양식 요소, 부적절한 전자 메일을 제출할 때 해당 요소에 대한 경고 메시지를 보고 다음 양식이 표시된 `thank-you` div도 볼 것으로 예상되므로 이러한 HTML 요소가 모두 양식에 있는지 확인하세요. 복사하여 붙여 넣을 수 있는 코드는 샘플 파일을 참조하시고 이 모든 요소와 적절한 양식이 설정되면 제출할 때 Javascript 콘솔에 오류 메시지가 표시되지 않아야 합니다.

5. _제 웹 페이지에선 데이터가 제출되었다고 뜨는데 데이터가 스프레드시트에 저장되거나 메일로 전송되지 않아요._

- 스프레드 시트를 복사하고 Google Script를 게시 할 때 권한을 "누구나(익명 사용자 포함)"으로 설정하셨나요? 이것은 인터넷에 있는 사용자 누구나 자신의 데이터를 보내기 위해 보내기를 누를 수 있기 때문에 필요합니다. 변경 사항을 적용할 때 적절한 버전의 스크립트를 배포하고 "비전 기록"을 사용했는지 확인하세요.

6. _파일은 어떻게 업로드 할 수 있나요?_

- 현재 이 기능은 현재 지원되지 않습니다. 업로드된 파일을 저장하려면 Google 스크립트를 통해 Google 드라이브 API를 사용할 수 있습니다. 우리는 이 문제를 어떻게 해결했는지에 대한 예제를 게시하거나 PR할 수 있는 사람이라면 누구든 환영합니다. 

7. _이거 안전한가요? 민감한 데이터에 사용할 수 있나요?_
 - 아니요. POST를 통해 전송되는 데이터는 더 안전하게 보호될 수 있지만 제3자나 중개인이 정보를 쉽게 가로 챌 수 있으며 Google은 Google 스프레드시트의 데이터에 대한 완전한 액세스 권한을 갖습니다. 또한 이메일은 기본적으로 매우 안전한 통신 매체가 아닙니다. 보안이 필요한 경우 데이터를 저장하기 위한 안전한 플랫폼과 서버에 투자하기를 추천합니다.

## 참고문서

+ Google Apps Scripts Basics: https://developers.google.com/apps-script/articles
+ Logger (like console.log):
https://developers.google.com/apps-script/reference/base/logger
+ Simple Mail Merge using Google Spreadsheets:
https://developers.google.com/apps-script/articles/mail_merge
+ Original Tutorial: AJAX post to google spreadsheet: http://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet which points to:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
