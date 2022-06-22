# Google Apps Mail을 사용해 **정적** HTML Form에서 메일을 보내세요!

**Language : [English](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server#send-email-from-a-static-html-form-using-google-apps-mail) | `한국어` | [Español](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/README.es.md#older-translation) | [Português](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/README.pt.md)**

<br/>

이것은 ***HTML Form*** 을 사용하여 "Contact Us" 메세지 보내기 기능을 구현할 때, 백엔드 서버없이 Google 스크립트를 활용하여 이메일을 보낼 수 있는 ***Step-by-Step(단계별)*** 예제입니다. PHP, Python, Ruby, Java, Node.js 등 필요하지 않습니다.

작동하는 예제 웹 페이지는 이곳에서 볼 수 있습니다. : https://dwyl.github.io/learn-to-send-email-via-google-script-html-no-server/

***참고:\*** EU's GDPR(유럽연합 일반 데이터 보호 규칙)에 따라, [사용자 개인 정보에 대한 권장 사항](https://cloud.google.com/privacy/gdpr)을 적극 권고합니다. 귀하는 사용자의 개인 데이터를 안전하게 보관하는 *책임* 을 받을 수 있으며, 귀하에게 연락할 수 있는 방법을 제공해야 합니다.

**\*경고:\*** Google API에는 하루에 보낼 수 있는 이메일 수에 제한이 있습니다. 이는 Google 계정에 따라 다를 수 있습니다. [이곳에서](https://developers.google.com/apps-script/guides/services/quotas) 본인의 한도를 확인하세요. 데이터는 항상 스프레드시트에 먼저 추가되고 이메일을 보낼 수 있다면, 이메일로 전송되므로 3부까지 튜토리얼을 구현하는 것이 좋습니다.

## Why?

우리는 *서버가 없거나 서버를 원하지 않을때, "정적"* HTML 페이지에서 이메일 보내는 방법이 필요했습니다. 

### *Key Advantages(주요 이점들)*

- 배포/유지보수/지불 해야하는 "백엔드"가 필요 없습니다.

- 모든 측면에서 ***사용자 맞춤 커스터마이징*** 이 가능합니다!

- ***모든 곳에서 허용된 Google Mail*** 을 통해서 이메일을 전송합니다. ( *높은 전송 성공률* )

- 어떤 데이터든 쉽게 볼 수 있는 ***스프레드시트*** 에 **수집/저장** 합니다. 

  ( *코딩을 전혀 모르는 사람과 공유해야하는 경우에도 완벽합니다.* )

## What?

쉽지만 유지보수가 필요한 서버를 사용하여 이메일을 보내는 대신, Google을 사용하여 이메일을 보내고 Google 스프레드시트를 사용하여 데이터를 추적하세요!

> 데이터를 보내는 위치에 상관하지 않고, 받은 편지함(messy ... yuck)에 제출된 데이터를 관리하려면 https://formspree.io/과 같은 무료 서비스를 사용하여 Form 제출을 처리할 수 있습니다.
>
> *또는*... 몇 분 동안 *투자하고* 데이터를 비공개로 관리할 수 있습니다. *당신이 선택하세요.*

## *How*?

### 1. 하단의 Sample Spreadsheet 복사하기

> Sample: https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/copy

당신의 Google 계정에 로그인하고 "**사본 만들기**"를 클릭합니다.

[![1-make-copy](https://user-images.githubusercontent.com/1406149/29245471-feb7b034-7f97-11e7-9c0d-f06238e8362b.png)](https://user-images.githubusercontent.com/1406149/29245471-feb7b034-7f97-11e7-9c0d-f06238e8362b.png)

아래와 같이 나와야합니다.

[![2-copy-of-sheet](https://cloud.githubusercontent.com/assets/194400/10559710/3aec92f0-74ef-11e5-9295-f1988a23257b.png)](https://cloud.githubusercontent.com/assets/194400/10559710/3aec92f0-74ef-11e5-9295-f1988a23257b.png)

> 참고: 복사본 이름을 원하는대로 변경해도 결과에 아무런 영향을 미치지 않습니다.

### 2. 스크립트 편집기 열기

"**도구**" > "**스크립트 편집기...**"를 눌러 편집기를 여세요.

[![2 script-editor](https://cloud.githubusercontent.com/assets/194400/10559732/8db2b9f6-74ef-11e5-8bf2-de286f079929.png)](https://cloud.githubusercontent.com/assets/194400/10559732/8db2b9f6-74ef-11e5-8bf2-de286f079929.png)

여기에 필요한 스크립트의 스냅샷이 있습니다 : [google-script-just-email.js](https://raw.githubusercontent.com/dwyl/learn-to-send-email-via-google-script-html-no-server/1d1c6727f69dec64a6b7f6bd6ff0dd72d0374210/google-script-just-email.js)

### 3. 스크립트에서 `TO_ADDRESS` 를 설정하기

**\*경고:\*** 만약 당신이 `TO_ADDRESS` 에 있는 주석을 제거하지 않고, `TO_ADDRESS`에 당신의 이메일을 직접 설정하면, 웹 스킬을 가진 사람이 당신의 Form과 데이터를 수정하여 임의의 이메일로 보낼 수 있습니다.

이 위험은 그다지 크지 않을 수 있습니다. 대신, 이 가능한 위험을 감수하면서도 HTML Form 내에서 이메일 변수를 `data-email` 속성으로 설정하는게 편하다면 이 변수를 주석으로 남겨둘 수 있습니다. 

따라서 현재 속한 2-6단계를 거치지 않고도 HTML Form의 이메일을 보낼 위치를 쉽게 변경할 수 있습니다. 이 기능을 사용하려면 2부 10단계에서 **제공된** JS 파일을 사용해야 합니다.

이러한 잠재적 위험을 감수하지 않으려면 `TO_ADDRESS`의 주석을 제거하세요. 그리고 Form에서 Submit 할 때 데이터를 받고자하는 주소를 변수의 값으로 넣으세요.

[![3-script-editor-showing-script](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)](https://cloud.githubusercontent.com/assets/194400/10560379/9efa5b3a-7501-11e5-96ba-a9e3b2d77ee4.png)

### 4. 스크립트를 *새로운 버전* 으로 저장하기

*버전 관리* 를 클릭하세요.

[![19 google-script-no-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)

그리고 *새로운 버전* 을 만들어주세요.

[![20 google-script-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)

### 5. *업데이트 된* 스크립트를 웹앱으로 배포합니다.

[![20 a-publish](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)

배포 할 *최신 버전* 을 선택합니다.
⚠️ 참고: '웹에 액세스할 수 있는 사용자' 드롭다운에서 `Anyone, even anonymous` 옵션을 선택해야 합니다. 다른걸 선택하면 Form 응답이 스프레드시트에 추가되지 않습니다. ⚠️

[![21 deploy-new-version](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)

### 6. 이메일을 보내기 위해 스크립트 인증하기

[![5 auth-required](https://cloud.githubusercontent.com/assets/194400/10560412/89d3fb0c-7502-11e5-81ce-fb239bf545b2.png)](https://cloud.githubusercontent.com/assets/194400/10560412/89d3fb0c-7502-11e5-81ce-fb239bf545b2.png)

[Google을 사용하여 스크립트 확인](https://developers.google.com/apps-script/guides/client-verification#requesting_verification)을 하지 않는 한, "Advanced(고급)"과 "Go to(이동) ... (unsafe)"을 클릭해서 이 앱 권한을 부여해야합니다.

[![5-auth-failed-verification](https://user-images.githubusercontent.com/1406149/44312495-79583780-a3b6-11e8-9740-8c9b50f195d6.png)](https://user-images.githubusercontent.com/1406149/44312495-79583780-a3b6-11e8-9740-8c9b50f195d6.png)

[![5-allow-sending-emails](https://cloud.githubusercontent.com/assets/194400/10560416/a86a26ae-7502-11e5-9add-d5081d409af4.png)](https://cloud.githubusercontent.com/assets/194400/10560416/a86a26ae-7502-11e5-9add-d5081d409af4.png)

웹앱 URL을 클립보드 혹은 메모장에 복사하시고 "확인" 버튼을 누르세요.

[![22 1-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)

### 7. *기본 HTML Form* 만들기

이 저장소의 `index.html` 템플릿을 사용하여, 기본 Form 형식을 가진 HTML 파일을 만들어서 저장하세요.

⚠️ 이 단계에서 이미 *자신의 Form* 을 사용하려고 하는 경우, 이 저장소에 있는 예제 대신 이 단계를 수행합니다.

- 각각의 Form 태그의 `name` 속성은 Google 시트의 컬럼명과 같아야 합니다.
- Form 태그의 `class`는 `gform`이 되어야 합니다. 즉, `<form class="gform">`
  - 나중에 이걸 변경하려면, `form-submission-handler.js`의 고유버전을 만들고 `class`을 고치면 됩니다.

> Form 태그의 `action` 속성을 전 단계에서 복사해놓은 URL로 고쳐야 함을 잊지 마세요 :

[![7-html-form](https://user-images.githubusercontent.com/1406149/44312329-9b9c8600-a3b3-11e8-9816-4bdbbc96dc62.png)](https://user-images.githubusercontent.com/1406149/44312329-9b9c8600-a3b3-11e8-9816-4bdbbc96dc62.png)

### 8. 브라우저에서 HTML Form (*페이지*) 열기

HTML Form에 테스트 데이터를 채우세요 :

[![html form](https://cloud.githubusercontent.com/assets/194400/10560494/674b64c4-7504-11e5-801a-b537d276f671.png)](https://cloud.githubusercontent.com/assets/194400/10560494/674b64c4-7504-11e5-801a-b537d276f671.png)

Submit 하세요. 보내졌으면 아래와 같이 확인할 수 있습니다 :

![form sent](https://cloud.githubusercontent.com/assets/194400/10560501/8f605dd4-7504-11e5-8cd7-06d768beba4d.png)

### 9. 설정했던 이메일 계정의 받은 편지함 확인하기

(*위의*) **3단계** 에서 설정했던 이메일 계정의 받은편지함을 열어보세요.

[![email received](https://cloud.githubusercontent.com/assets/194400/10560512/f87f1652-7504-11e5-8b0f-c342c395a193.png)](https://cloud.githubusercontent.com/assets/194400/10560512/f87f1652-7504-11e5-8b0f-c342c395a193.png)

> ***Done***. 이게 전부입니다. HTML Form 태그만을 이용해 이메일 보내기에 성공했습니다.

# *Part Two - 보기 좋게 만들기* ...

우리 스타일에 [**순수 CSS**](https://purecss.io/start/)를 사용해 이 ***Super Lean*** 을 유지할 겁니다. ( *8단계의 "못생긴" HTML Form 태그를  고칠겁니다.* ). 그리고 당신의 페이지/사이트에 사용자를 유지하기 위해 Form 태그 양식을 `submit` 할 때 [**JQuery** "***AJAX***"](https://api.jquery.com/jquery.ajax/) 를 사용하겠습니다. ( *"구린" 응답페이지는 빼구요.* )

### 10. **JavaScript** "***AJAX*** 을 이용한 Form Submit"

페이지가 `JSON` 응답/결과로 *변경되지 않도록* 하려면,  ***AJAX***를 사용하여 Form을 submit 해야 합니다.

다음 [the following Javascript file](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/form-submission-handler.js)을 설치하고 당신의 `index.html`의 끝(`</body>` 를 하기 전)에 설치한 javascript 파일을 포함하여 업데이트하세요.

```
<script data-cfasync="false" type="text/javascript" src="form-submission-handler.js"></script>
```

**경고:** 위의 3단계에서 `TO_ADDRESS` 변수를 설정하지 않은 경우, 메인 Form 요소에 `data-email="example@email.net"`를 포함시켜야 됩니다. 자세한 내용은 아래 양식을 확인하세요. 단, 설정하셨다면 이 속성은 필요하지 않습니다.

이제 Form이 submit 되면 "Thank You" *메시지* 가 띄워집니다:

### 11. Form을 Submit 한 후, 나오는 메시지 커스터마이징하기

10단계를 수행한 후, Submit 한 뒤 나오는 감사 메시지를 추가하여 커스터마이징 할 수 있습니다. 아래의 소스코드를 `and` 태그 안에 넣으세요.

```html
<div style="display:none" class="thankyou_message">
 <!-- You can customize the thankyou message by editing the code below -->
 <h2><em>Thanks</em> for contacting us! We will get back to you soon!
 </h2>
</div>
```

Form이 Submit 된 후에 아래와 같은 감사 메세지가 나타납니다.

[![thankyou message](https://cloud.githubusercontent.com/assets/194400/10561147/4086a89a-7517-11e5-840d-7f490353e225.png)](https://cloud.githubusercontent.com/assets/194400/10561147/4086a89a-7517-11e5-840d-7f490353e225.png)

`thankyou_message` div 태그를 수정하여 당신만의 감사 메세지를 작성하세요.

### 12. CSS를 사용해 Form을 *멋지게* 만들기

*이번 예제* 에서는 ***Pure CSS*** : https://purecss.io/start/ 을 사용하고 있습니다. ***4.0KB로 축소 및 압축된 적은 용량*** 이고 현재 "문제"인 보기에 구린 것을 *해결하기* 때문입니다.

[![PureCSS-Logo-Intro](https://camo.githubusercontent.com/27da1dfc8cc2f5541bb85d8be1dd88eb5c1142ff/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536353833382f37326436643532612d373564322d313165352d396239322d6361303262313132343932302e706e67)](https://camo.githubusercontent.com/27da1dfc8cc2f5541bb85d8be1dd88eb5c1142ff/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536353833382f37326436643532612d373564322d313165352d396239322d6361303262313132343932302e706e67)

[![PureCSS-module-sizes](https://camo.githubusercontent.com/94cc657811248276133a9afb33b57e28da6e2f4a/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536353834342f38663438383561302d373564322d313165352d393439302d6533666334326333323631362e706e67)](https://camo.githubusercontent.com/94cc657811248276133a9afb33b57e28da6e2f4a/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536353834342f38663438383561302d373564322d313165352d393439302d6533666334326333323631362e706e67)

이 작업은 너무 *많은* 시간을 들이지 않고도 Form을 ***훨씬*** 멋지게 만들 수 있습니다:

[![contact form with pure css](https://camo.githubusercontent.com/8dfef1bc299b5cf0f95fd13597558bc7434e8641/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536363339322f66333862633435342d373564642d313165352d383564642d3638313934393461393866322e706e67)](https://camo.githubusercontent.com/8dfef1bc299b5cf0f95fd13597558bc7434e8641/68747470733a2f2f6769746875622d636c6f75642e73332e616d617a6f6e6177732e636f6d2f6173736574732f3139343430302f31303536363339322f66333862633435342d373564642d313165352d383564642d3638313934393461393866322e706e67)

### 13. 이메일도 멋지게 만들기!

기본적으로 이메일의 본문에는 Form의 key-value 쌍이 포함되며, key는 `<h4>`이고 value는 `<div>`입니다. 이것은 심플하지만, 데이터를 보기엔 어색합니다.

아마 대충 이런 형식의 메일을 받았을 겁니다:

[![Nicely formatted email](https://cloud.githubusercontent.com/assets/5610747/22168070/335ad734-df62-11e6-9523-6e193e94151f.png)](https://cloud.githubusercontent.com/assets/5610747/22168070/335ad734-df62-11e6-9523-6e193e94151f.png)

> 이 작업은 진행 중인 작업이며 이 작업으로 예상한 것보다 더 많은 이메일을 받을 수 있습니다. 이메일 내용이 Form으로 전송된 모든 데이터를 루핑하고 있기 때문에 로봇이나 악의적인 사용자가 요청한 것보다 더 많이 `POST` 한 경우, 받은 편지함에 요청 이상의 메일이 쌓일 가능성이 높습니다. 일단 조심해서 사용하세요. 개선점을 조사하고 있습니다.

스크립트 편집기를 통해 이를 수정할 수 있습니다. 이 부분입니다:

```
result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
```

이게 우리에게 필요한 전부이며, 마크업을 당신에게 맞게 조정할 수 있습니다. 우리는 `태그를 이메일에 가장 적합한 크기로 선택했고, 대소문자(key들은 JavaScript 객체에서 모두 소문자입니다)와 약간의 기본 간격을 고정하기 위해 약간의 CSS를 추가했습니다. inline style은 일반적인 웹 페이지에서는 죄악이지만 우리가 이 예제에서 CSS를 수행하려면 유일한 방법입니다. 또한 우리는 value 부분에 단일 행이든, 여러 행이든 대응할 수 있도록 <div>` 를 사용했습니다. (예를 들어 `<p>` 태그는 그걸 잘라내지 않습니다.)

추가로, 우리에겐 기본적으로 주석처리 되어 있는 `sendEmail()` 함수에 대한 `replyTo` 옵션이 있습니다.

```
MailApp.sendEmail({
  to: TO_ADDRESS,
  subject: "Contact form submitted",
  // replyTo: String(mailData.email), // This is optional and reliant on your form actually collecting a field named `email`
  htmlBody: formatMailBody(mailData)
});
```

이메일에 답장 필드를 추가하려는 경우, 주석을 제거하면 됩니다. 스크립트의 예제는 `reply-to` 를 Form에 Submit 된 메일로 설정합니다. 관심이 있다면 Google 문서에서 MailApp.sendEmail (예 : `cc` / `bcc` 등)에 대한 자세한 정보를 확인해주세요 : https://developers.google.com/apps-script/reference/mail/mail-app

# *Part Three - Submit 된 데이터를 스프레드시트에 저장하기*

Form 데이터를 받은 편지함으로 직접 보내는 것은 *좋은* 첫 번째 단계이지만 더 좋은 방법이 있습니다. 또한 위에서 설명한 것처럼 Google은 하루에 보낼 수 있는 전자 메일 수에 제한이 있으므로 데이터를 스프레드시트에 저장하는 것이 더 안전하고 데이터 손실 가능성이 낮습니다.

### 14. Google Apps 스크립트에 `record_data` 기능 추가하기

[![record_data example](https://cloud.githubusercontent.com/assets/194400/10581613/8b4f9ad4-767b-11e5-90cc-962a9d6acc91.png)](https://cloud.githubusercontent.com/assets/194400/10581613/8b4f9ad4-767b-11e5-90cc-962a9d6acc91.png)

이렇게 하면 `POST`로 받은 데이터가 스프레드시트의 *행(row)* 으로 기록됩니다. 참고: 다음 파일을 이용해 전체 소스코드를 복붙할 수도 있습니다. [**google-apps-script.js**](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/133ceb9eb7b3d6ea3205a533ed99468d5feaf7e1/google-apps-script.js)

### 15. 새로운 버전 저장하고 재배포하기

새로운 버전을 저장하고, 스크립트를 ***재배포*** 하기 위해 위의 4, 5, 6단계를 다시 따라하세요.

### 16. Form 재검사하기

[![submit the form](https://cloud.githubusercontent.com/assets/194400/10582654/cf3081e6-7680-11e5-9fd1-b989a8ba0b65.png)](https://cloud.githubusercontent.com/assets/194400/10582654/cf3081e6-7680-11e5-9fd1-b989a8ba0b65.png)

### 17. 데이터가 스프레드 시트에 삽입되었는지 확인하기

[![17-confirm-data-inserted](https://cloud.githubusercontent.com/assets/194400/10582676/eb8af5d8-7680-11e5-92bb-30dd08d2d7b3.png)](https://cloud.githubusercontent.com/assets/194400/10582676/eb8af5d8-7680-11e5-92bb-30dd08d2d7b3.png)

### *라이브* 서버 (*on your `localhost`*)

외부 *\*.js* 파일들을 로드하고 있기 때문에 우리의 웹브라우저는 로컬 디렉토리에서 **index.html**을 열지마세요. *(파일로 실행시켜 단순 웹브라우저로 테스트하지 마세요.)*

터미널을 열고 다음 커맨드를 실행해 ***node 모듈**을 **설치**하고 **live 서버** 를 시작하세요* :

```
npm install live-server --save-dev && node_modules/.bin/live-server --port=8000
```

설치하는데 1분 정도 걸리고, 완료되면 당신의 `live-server` 가 작동합니다.

포트 8080에서 node.js HTTP 서버가 시작되고 방금 만들었던 Form이 기본 브라우저에서 열립니다. **style.css**의 form style 혹은 **form-submission-handler.js**의 클라이언트 측 자바스크립트를 업데이트하려면, GitHub가 아닌 로컬로 해당 자원을 로드하도록 **index.html**을 편집하세요.

> **참고**: 이건 초보자를 위한 Node.js의 *맛보기* 입니다. 이 Form을 "배포"하기 위해 node.js가 무조건 필요한 것은 아니며, HTML / CSS / JavaScript를 제공하는 ***어떤\* 웹 서버**에서도 실행할 수 있습니다. 이전에 Node.js를 사용한 적이 없다면 http://nodeguide.com/beginner.html을 참고하세요. 하지만 이 연습 (*서버가 없는 Form Submit*) 을 위해 node.js 또는 `live-server`는 필요하지 않습니다. 그러나 IDE에서 편집기에서 변경 사항을 적용 할 때 페이지를 자동으로 다시 로드하기 때문에 있으면 좋습니다.

# *Want more*?

이 튜토리얼보다 더 많은 것을 알고 싶다면, [***알려주세요***!](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/issues)

여러분의 편의를 위해 GitHub Pages에서 데모페이지를 호스트해 두었습니다. 코드를 확인하고 작동 방식을 확인하세요 : https://dwyl.github.io/learn-to-send-email-via-google-script-html-no-server/

## 자신만의 필드 추가하기!

[Henry Beary의 요청](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/issues/9)에 따라 Form 핸들러를 *제네릭* 으로 만들어 원하는 필드를 추가할 수 있도록 했습니다.

또한 모든 종류의 Form input 요소를 사용하는 `test.html`도 만들었으므로 원하는대로 요소를 복사하고 붙혀넣으세요. 요소의 name과 id 속성들만 업데이트하면 됩니다. 이 테스트 양식의 작동 예제는 이곳에서 확인할 수 있습니다 : https://dwyl.github.io/learn-to-send-email-via-google-script-html-no-server/test.html

class가 gform 인 Form 태그 내에 필드를 포함시키고 Form 요소의 이름이 스프레드시트의 새로운 열 제목과 일치하는지 확인하세요! 즉 :

```html
<fieldset class="pure-group">
  <label for="color">Favourite Color: </label>
  <input id="color" name="color" placeholder="green" />
</fieldset>
```

위 코드는 사용자가 선호하는 색을 받아볼 수 있게 해줍니다. 즉: 

[![new-field-contains-data](https://cloud.githubusercontent.com/assets/194400/11547132/9f162f6a-9949-11e5-89ac-aeb91e025844.png)](https://cloud.githubusercontent.com/assets/194400/11547132/9f162f6a-9949-11e5-89ac-aeb91e025844.png)

질문이 더 있으면 알려주세요!

## 파일 업로드하기

[이 자료](https://www.labnol.org/internet/receive-files-in-google-drive/19697/)가 Google 스크립트에서 Google Drive로 파일 업로드를 시작하는 데 도움이 될 수 있습니다.

## 자주 묻는 질문들 (FAQ's)

1. *이 자습서를 사용할 때 도움을 받으려면 어떻게 하나요?*

- 어떤 단계를 거쳤으며 어떤 단계가 효과적이지 않은지 상세하게 설명하는 [문제를 게시](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/issues/new)해주세요. 응답 받을 가능성을 높이시려면, 겪으신 문제를 재현한 [예제](https://stackoverflow.com/help/mcve)를 제공해주는 것이 가장 이상적입니다 (예 : [this sample CodePen](https://codepen.io/mckennapsean/pen/gdYzNY))

2. *예제 스프레드시트에 대한 수정권한을 얻을 수 있을까요?*

- 아니요. 다른 사람이 복사 할 수 있도록 작업 예제를 보여주기 위해 사용되고 있으며 편집 가능한 버전은 실수로 또는 악의적으로 모든 사용자를 손상시킬 수 있습니다.

3. *제출(submit)을 클릭하면 웹 페이지 포워딩이 여러 텍스트로 전송되는 이유는 무엇입니까?*

- AJAX를 통해 데이터를 제출하는 데 필요한 자바 스크립트를 제대로 로드하지 않았거나 브라우저가 AJAX를 지원하지 않을 수 있습니다. 2단계에서 오류를 발견 할 경우를 대비하여 콘솔 로그를 확인하세요.

4. *웹 페이지에서 form이 성공적으로 submit 되지 않는 이유가 뭘까요?*

- Javascript 콘솔 로그를 확인해주세요. 제공된 Javascript를 읽는 동안 또는 Form을 Submit하는 동안 오류가 발생할 수 있습니다. Google 스크립트 파일 내에 `TO_ADDRESS` 변수를 설정하지 않은 경우 Form 태그의 class가 `gform` 이고, `data-email` 속성이 있어야 합니다. 또한 제공된 Javascript 코드에는 전송 확인을 위해 사용하는 이메일 Form 요소, 잘못된 이메일을 제출할 때 해당 요소에 대한 경고 메시지, Form이 성공적으로 Submit 된 후 표시되는 감사메세지 `<div>`도 표시되어야 합니다. 이러한 모든 HTML 요소가 사용자 형태인지 확인하시기 바랍니다. 복사하여 붙여넣을 수 있는 코드는 샘플 파일을 참조하세요. 이러한 모든 요소와 적절한 양식을 설정한 경우 제출을 누르면 Javascript 콘솔에 오류 메시지가 표시되지 않아야 합니다.

5. *웹 페이지에서 데이터가 제출되었다고 하는데 데이터가 저장되거나 전송되지 않는 이유는 무엇입니까?*

- 스프레드 시트를 복사하고 Google Script를 게시 할 때 권한을 " "Anyone, even Anonymous" 으로 설정하셨나요? 이것은 인터넷에 있는 사용자 누구나 자신의 데이터를 보내기 위해 보내기를 누를 수 있기 때문에 필요합니다. 변경 사항을 적용할 때 적절한 버전의 스크립트를 배포하고 "버전 기록"을 사용했는지 확인하세요.

6. *파일은 어떻게 업로드 할 수 있나요?*

- You can tweak the Google Script on the server to send emails to anyone and in whatever format you wish. This could be used to send a confirmation email to those contacting you, but we have not added this feature to this tutorial to avoid potential spamming. The sender of the email will always be the Google account you use to create the form/script, however. Further details on how to customize the email can be found in [the `MailApp` API](https://developers.google.com/apps-script/reference/mail/mail-app). You can instead use [the `GmailApp` API](https://developers.google.com/apps-script/reference/gmail/) which may be more flexible for certain use-cases.
- 서버의 Google 스크립트를 수정하여 원하는 형식으로 누구에게나 이메일을 보낼 수 있습니다. 이 기능은 연락하는 사용자에게 확인 이메일을 보내는 데 사용할 수 있지만 잠재적인 스팸을 방지하기 위해 이 튜토리얼에 이 기능을 추가하지 않았습니다. 그러나 이메일의 발신자는 항상 form/script를 만드는 데 사용하는 Google 계정이 됩니다. 사용자를 지정하는 방법에 대한 자세한 내용은 [`MailApp` API](https://developers.google.com/apps-script/reference/mail/mail-app)에서 확인할 수 있습니다. 또는 [`GmailApp` API](https://developers.google.com/apps-script/reference/gmail/)를 대신 사용하면 특정 사용 사례에 보다 유연하게 사용할 수 있습니다.

7. *이거 안전한가요? 민감한 데이터에 사용할 수 있나요?*

- 아니요. POST를 통해 전송되는 데이터는 더 안전하게 보호될 수 있지만, 제3자나 중개인이 정보를 쉽게 가로 챌 수 있으며 Google은 Google 스프레드시트의 데이터에 대한 완전한 액세스 권한을 갖습니다. 또한 이메일은 기본적으로 매우 안전한 통신 매체가 아닙니다. 보안이 필요한 경우 데이터를 저장하기 위한 안전한 플랫폼과 서버에 투자하기를 추천합니다.

## 참고문서

- Google Apps Scripts Basics: https://developers.google.com/apps-script/articles

- Logger (like console.log): https://developers.google.com/apps-script/reference/base/logger

- Simple Mail Merge using Google Spreadsheets: https://developers.google.com/apps-script/articles/mail_merge

- Original Tutorial: AJAX post to google spreadsheet: 

  https://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet 

  which points to:

  - https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
