// MUYI 个人主页交互：打字机效果 + 滚动渐显 + 年份。无外部请求、无依赖。
(function () {
  "use strict";

  // ---- hero 打字机：循环展示几条定位语 ----
  var PHRASES = [
    "用工程师的方式学习：结论可验证",
    "Java 后端 × AI 应用工程",
    "LangChain / LangGraph 智能体",
    "分布式支付 · 生产实践",
    "2016 年入行 · 生产反哺式写作",
  ];
  var typer = document.getElementById("typer");
  if (typer && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var pi = 0, ci = 0, deleting = false;
    (function tick() {
      var phrase = PHRASES[pi];
      ci += deleting ? -1 : 1;
      typer.textContent = phrase.slice(0, ci);
      var delay = deleting ? 34 : 78;
      if (!deleting && ci === phrase.length) { delay = 2200; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % PHRASES.length; delay = 420; }
      setTimeout(tick, delay);
    })();
  } else if (typer) {
    typer.textContent = PHRASES[0];
  }

  // ---- 滚动渐显 ----
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

  // ---- footer 年份 ----
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
