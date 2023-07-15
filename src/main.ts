import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// プラグインはgsap.registerPluginで登録
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap.to(".p-header__logo", {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2.out",
});

gsap.to(".p-header__mainVisual", {
    delay: 0.5,
    duration: 2,
    //width: "80%",
    opacity: 1,
    backgroundSize: "100%",
    ease: "power1.out",
});

gsap.to(".p-header__catchcopyText", {
    delay: 1.5,
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    stagger: {
        from: "start",
        amount: 0.3,
    },
});

gsap.to(".p-header__contentItem", {
    delay: 2.2,
    duration: 1,
    x: 0,
    opacity: 1,
    ease: "power2.out",
    stagger: {
        from: "start",
        amount: 0.5,
    },
});

//配列内部のオブジェクトをanyに型変換しないとunknownでエラー出ます
const itemImage: any = gsap.utils.toArray(".p-contents__itemImage");

// forEachの(section, i)は、sectionが配列内の1つずつの要素、iが多分数字
itemImage.forEach((section, i) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            markers: false,
            start: "top 80%",
        },
        duration: 1,
        y: 0,
        opacity: 1,
    });
});

const itemInner: any = gsap.utils.toArray(".p-contents__itemInner");

itemInner.forEach((section, i) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            markers: false,
            start: "top 80%",
        },
        duration: 1,
        y: 0,
        opacity: 1,
    });
});

gsap.to(".p-contents__background02", {
    yPercent: 100,
    scrollTrigger: {
        trigger: ".p-contents__background02",
        scrub: true,
    },
});

gsap.to(".p-contents__background03", {
    yPercent: 100,
    scrollTrigger: {
        trigger: ".p-contents__background03",
        scrub: true,
    },
});

gsap.to(".p-product__image-prod01", {
    yPercent: -30,
    scrollTrigger: {
        trigger: ".p-product__image-prod01",
        scrub: true,
    },
});

gsap.to(".p-product__image-prod02", {
    yPercent: -50,
    scrollTrigger: {
        trigger: ".p-product__image-prod02",
        scrub: true,
    },
});

//gsap.to(window, {duration: 2, scrollTo: '#content01'});

// ページ内リンクのスクロール。
// 注意点：aタグだとうまく動きませんでした。
let inContentLink: any = document.querySelectorAll(".p-header__contentItem button");

inContentLink.forEach((content, i) => {
    content.addEventListener("click", () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#content0" + (i + 1),
                offsetY: 150,
                autoKill: true,
            },
            ease: "Power4.easeOut",
        });
    });
});

/***********************************
 Over Body's width detector.
    Powered by http://netkansai.com/contents/index.php?id=57
***********************************/
// function getwidth(){
//     'use strict';

//     const bodyElem = document.getElementsByTagName("body");
//     const bodyWidth = window.getComputedStyle(bodyElem[0],null).getPropertyValue("width");  // 縦スクロールバーの幅を含まない
//     const numBodyWidth = parseInt(bodyWidth);
//     console.log("body:",numBodyWidth);

//     const tags = document.querySelectorAll("*"); // すべての要素を取得する
//     for(let i=0; i < tags.length; i++){
//         let tagMargingLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("margin-left"));
//         let tagMarginRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("margin-right"));
//         let tagPaddingLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("padding-left"));
//         let tagPaddingRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("padding-right"));
//         let tagBorderLeft = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("border-left"));
//         let tagBorderRight = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("border-right"));
//         let tagWidth = parseInt(window.getComputedStyle(tags[i],null).getPropertyValue("width"));

//         let tagBoxSizing = window.getComputedStyle(tags[i],null).getPropertyValue("box-sizing");

//         if(tagBoxSizing === "content-box"){
//             var sumWidth = tagMargingLeft + tagMarginRight + tagBorderLeft + tagBorderRight + tagPaddingLeft + tagPaddingRight + tagWidth;
//         }else{
//             var sumWidth = tagMargingLeft + tagMarginRight + tagWidth;
//         }

//         if(numBodyWidth < sumWidth){
//             console.log(tags[i],":",sumWidth,);
//             console.log("marginl-left:",tagMargingLeft);
//             console.log("border-left:",tagBorderLeft);
//             console.log("padding-left:",tagPaddingLeft);
//             console.log("width:",tagWidth);
//             console.log("padding-left:",tagPaddingRight);
//             console.log("border-left:",tagBorderRight);
//             console.log("marginl-left:",tagMarginRight);
//         }
//         // console.log(i,tags[i],":",sumWidth);
//     }
// }
// window.addEventListener("load", getwidth, false);
