import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss'],
})
export class QuizQuestionComponent {
  timer: number = 60;
  success = new Audio('./assets/images/success.mp3');
  fail = new Audio('assets/images/fail.mp3');
  score: number = 0;
  questionView: any;
  isClicked: boolean = false
  correctAnswer: any
  numberOfQuestions: number = 0;
  data: any[] = [
    {
      "id": 1,
      "question": "أي من الأطباق السعودية التالية يحتوي على بطاطس مع اللحم والأرز؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "كبسة", "isCorrect": true },
        { "id": 2, "text": "سليق", "isCorrect": false },
        { "id": 3, "text": "جريش", "isCorrect": false }
      ]
    },
    {
      "id": 2,
      "question": "أي من الأكلات التالية تعتبر من وجبات الإفطار السعودية؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "مطبق", "isCorrect": true },
        { "id": 2, "text": "سلطة بطاطس", "isCorrect": false },
        { "id": 3, "text": "غراتان", "isCorrect": false }
      ]
    },
    {
      "id": 3,
      "question": "تنتمي البطاطس إلى أي عائلة نباتية؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "البقوليات", "isCorrect": false },
        { "id": 2, "text": "الباذنجانيات", "isCorrect": true },
        { "id": 3, "text": "الحبوب", "isCorrect": false }
      ]
    },
    {
      "id": 4,
      "question": "ما العنصر الأساسي في طبق المندي السعودي؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الأرز", "isCorrect": true },
        { "id": 2, "text": "البرغل", "isCorrect": false },
        { "id": 3, "text": "البطاطس", "isCorrect": false }
      ]
    },
    {
      "id": 5,
      "question": "ما الطبق الذي يقدم اللحم أو الدجاج فوق الأرز مع بطاطس مقلية أحياناً؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "مندي", "isCorrect": false },
        { "id": 2, "text": "كبسة", "isCorrect": true },
        { "id": 3, "text": "بخاري", "isCorrect": false }
      ]
    },
    {
      "id": 6,
      "question": "ما هي البطاطس التي تُطهى في الفرن دون زيت؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "مشوية", "isCorrect": true },
        { "id": 2, "text": "مغلية", "isCorrect": false },
        { "id": 3, "text": "مقلية", "isCorrect": false }
      ]
    },
    {
      "id": 7,
      "question": "في أي مدينة سعودية تُشتهر السمبوسة بالبطاطس في رمضان؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الرياض", "isCorrect": false },
        { "id": 2, "text": "مكة المكرمة", "isCorrect": true },
        { "id": 3, "text": "الدمام", "isCorrect": false }
      ]
    },
    {
      "id": 8,
      "question": "أي من هذه الأطعمة تحتوي أحياناً على بطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "اللقيمات", "isCorrect": false },
        { "id": 2, "text": "السمبوسة", "isCorrect": true },
        { "id": 3, "text": "الحنيني", "isCorrect": false }
      ]
    },
    {
      "id": 9,
      "question": "من أين أصل البطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "أمريكا الجنوبية", "isCorrect": true },
        { "id": 2, "text": "الهند", "isCorrect": false },
        { "id": 3, "text": "السعودية", "isCorrect": false }
      ]
    },
    {
      "id": 10,
      "question": "أي نوع من البطاطس أفضل للقلي؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الطويلة الصلبة", "isCorrect": true },
        { "id": 2, "text": "الصغيرة الحلوة", "isCorrect": false },
        { "id": 3, "text": "الحمراء", "isCorrect": false }
      ]
    },
    {
      "id": 11,
      "question": "كم نسبة الماء في البطاطس تقريباً؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "30٪", "isCorrect": false },
        { "id": 2, "text": "50٪", "isCorrect": false },
        { "id": 3, "text": "80٪", "isCorrect": true }
      ]
    },
    {
      "id": 12,
      "question": "ما الطبق السعودي الذي يقدم أحياناً مع بطاطس على الوجه؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "مضغوط", "isCorrect": true },
        { "id": 2, "text": "جريش", "isCorrect": false },
        { "id": 3, "text": "سليق", "isCorrect": false }
      ]
    },
    {
      "id": 13,
      "question": "ما الوجبة السريعة التي تحتوي دائماً على بطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "شاورما", "isCorrect": true },
        { "id": 2, "text": "بيتزا", "isCorrect": false },
        { "id": 3, "text": "مكرونة", "isCorrect": false }
      ]
    },
    {
      "id": 14,
      "question": "ما الفيتامين الأعلى في البطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "فيتامين C", "isCorrect": true },
        { "id": 2, "text": "فيتامين D", "isCorrect": false },
        { "id": 3, "text": "فيتامين A", "isCorrect": false }
      ]
    },
    {
      "id": 15,
      "question": "أي نوع من البطاطس يُستخدم لصنع الشيبس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "البيضاء", "isCorrect": true },
        { "id": 2, "text": "الحمراء", "isCorrect": false },
        { "id": 3, "text": "البنفسجية", "isCorrect": false }
      ]
    },
    {
      "id": 16,
      "question": "كلمة بطاطا أصلها:",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "إسباني", "isCorrect": true },
        { "id": 2, "text": "تركي", "isCorrect": false },
        { "id": 3, "text": "عربي", "isCorrect": false }
      ]
    },
    {
      "id": 17,
      "question": "ما الأكلة التي تحتوي على الأرز واللحم والبطاطس المقلية؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "كبسة", "isCorrect": false },
        { "id": 2, "text": "مضغوط", "isCorrect": false },
        { "id": 3, "text": "بخاري", "isCorrect": true }
      ]
    },
    {
      "id": 18,
      "question": "البطاطس غنية بـ:",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الكربوهيدرات", "isCorrect": true },
        { "id": 2, "text": "الدهون", "isCorrect": false },
        { "id": 3, "text": "الحديد", "isCorrect": false }
      ]
    },
    {
      "id": 19,
      "question": "ما اللون الذي يدل أن البطاطس فاسدة؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "أخضر", "isCorrect": true },
        { "id": 2, "text": "أصفر", "isCorrect": false },
        { "id": 3, "text": "بني", "isCorrect": false }
      ]
    },
    {
      "id": 20,
      "question": "كم نوع تقريباً من البطاطس يوجد حول العالم؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "100 نوع", "isCorrect": false },
        { "id": 2, "text": "أكثر من 4000 نوع", "isCorrect": true },
        { "id": 3, "text": "500 نوع", "isCorrect": false }
      ]
    },
    {
      "id": 21,
      "question": "في أي موسم تُزرع البطاطس في السعودية؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الشتاء", "isCorrect": true },
        { "id": 2, "text": "الصيف", "isCorrect": false },
        { "id": 3, "text": "الربيع", "isCorrect": false }
      ]
    },
    {
      "id": 22,
      "question": "أي طبق لا يحتوي على بطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "سليق", "isCorrect": true },
        { "id": 2, "text": "مضغوط", "isCorrect": false },
        { "id": 3, "text": "كبسة", "isCorrect": false }
      ]
    },
    {
      "id": 23,
      "question": "ماذا يحدث عند قلي البطاطس بزيت حار جداً؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "تصبح مقرمشة", "isCorrect": true },
        { "id": 2, "text": "تمتص الزيت أكثر", "isCorrect": false },
        { "id": 3, "text": "تفقد الطعم", "isCorrect": false }
      ]
    },
    {
      "id": 24,
      "question": "ما الأكلة الشعبية التي تقدم بطاطس مقلية داخل السندويش؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "شاورما", "isCorrect": true },
        { "id": 2, "text": "معصوب", "isCorrect": false },
        { "id": 3, "text": "كبسة", "isCorrect": false }
      ]
    },
    {
      "id": 25,
      "question": "ماذا يحدث للبطاطس عندما تتعرض للضوء لفترة طويلة؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "تتحول إلى اللون الأخضر", "isCorrect": true },
        { "id": 2, "text": "تصبح أكثر حلاوة", "isCorrect": false },
        { "id": 3, "text": "تجف", "isCorrect": false }
      ]
    },
    {
      "id": 26,
      "question": "أي من المناطق التالية في المملكة تُعتبر من المناطق الرئيسية لزراعة البطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "تبوك ونجران", "isCorrect": false },
        { "id": 2, "text": "الرياض والشرقية والقصيم", "isCorrect": true },
        { "id": 3, "text": "جازان وعسير", "isCorrect": false }
      ]
    },
    {
      "id": 27,
      "question": "ما المكوّن الذي تبدأ البطاطس بإنتاجه بتركيزات عالية عند الإنبات أو التحول إلى اللون الأخضر؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الألياف الغذائية", "isCorrect": false },
        { "id": 2, "text": "فيتامين سي", "isCorrect": false },
        { "id": 3, "text": "السولانين", "isCorrect": true }
      ]
    },
    {
      "id": 28,
      "question": "أي نوع من البطاطس الأفضل للقلي والحصول على قوام مقرمش؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "البطاطس الشمعية ذات القشرة الرفيعة", "isCorrect": false },
        { "id": 2, "text": "بطاطس راسيت", "isCorrect": true },
        { "id": 3, "text": "البطاطس الجديدة", "isCorrect": false }
      ]
    },
    {
      "id": 29,
      "question": "كم بلغ إنتاج السعودية من البطاطس عام 2023؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "أقل من 300 ألف طن", "isCorrect": false },
        { "id": 2, "text": "حوالي 621 ألف طن", "isCorrect": true },
        { "id": 3, "text": "أكثر من مليون طن", "isCorrect": false }
      ]
    },
    {
      "id": 30,
      "question": "ما سبب ظهور البقع الخضراء على البطاطس؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "نتيجة التعرض للضوء وتزيد فيها مادة السولانين السامة", "isCorrect": true },
        { "id": 2, "text": "نتيجة التعرض للحرارة وتزيد فيها نسبة البروتين", "isCorrect": false },
        { "id": 3, "text": "نتيجة النضج الزائد وتزيد فيها نسبة السكر", "isCorrect": false }
      ]
    },
    {
      "id": 31,
      "question": "ما الاسم العلمي للجزء القابل للأكل في نبات البطاطس الذي ينمو تحت الأرض؟",
      "typeOfQuestion": 1,
      "answers": [
        { "id": 1, "text": "الجذور (Roots)", "isCorrect": false },
        { "id": 2, "text": "الدرنة (Tuber)", "isCorrect": true },
        { "id": 3, "text": "الثمرة (Fruit)", "isCorrect": false }
      ]
    }
  ]

  failQuestion: any
  clearInterval: any

  constructor(private router: Router) { }

  ngOnInit() {
    this.clearInterval = setInterval(() => {
      if (this.timer == 0) {
        localStorage.setItem('score', this.score.toString())
        clearInterval(this.clearInterval)
        this.router.navigateByUrl('/result')
      }
      --this.timer
    }, 1000);
    this.calcRandomNumber();
  }

  showAnswer(item: any) {
    this.isClicked = true
    this.failQuestion = item
    if (item?.isCorrect == this.correctAnswer.isCorrect) {
      this.success.play()
      ++this.score
    }
    else
      this.fail.play()

    let clear = setTimeout(() => {
      clearTimeout(clear)
      this.isClicked = false
      if (this.data.length == 0) {
        clearInterval(this.clearInterval)
        localStorage.setItem('score', this.score.toString())
        this.router.navigateByUrl('/result')
      } else
        this.calcRandomNumber()
    }, 1000);
  }

  calcRandomNumber() {
    const randomNumber = Math.floor(Math.random() * this.data.length);
    this.questionView = this.data[randomNumber];
    this.correctAnswer = this.questionView?.answers?.find((ele: any) => ele?.isCorrect)
    ++this.numberOfQuestions
    localStorage.setItem('numberOfQuestions', this.numberOfQuestions.toString())
    this.data.splice(randomNumber, 1);
  }
}
