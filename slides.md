---
theme: default
background: https://cover.sli.dev
title: Break the Bubble
info: |
  ## Break the Bubble：校園資訊平權計畫
  幸福校園提案 - 課業議題
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
---

# slides.md

---
layout: aura-hero
---

# Break the
### Bubble.

<p>
大學裡的成績競爭，往往不是「努力程度」的競爭，而是「人脈與資訊」的競爭。
</p>

<div class="mt-10">
  <div class="flex items-center gap-4">
    <div class="btn">Start Presentation</div>
    <AuraStatus>Version 1.0.4 // Final_Review</AuraStatus>
  </div>
</div>

---
layout: aura-specs
---

::header::

<AuraStatus>Phase_01 // Empathy</AuraStatus>

# Real Pain
# Points.

<p>我們訪談了不同背景的同學，發現「努力」在現有制度下正面臨崩解。</p>

::default::

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">郭同學 / 化學系</div>
  <div class="text-sm font-bold text-white mb-2 italic">「投報率極低的勞動」</div>
  <p class="text-[10px] opacity-60">實驗課僅 1 學分，卻需耗費整天抄寫藥品資訊與結報，投入與產出嚴重不成正比。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">吳同學 / 通識觀察</div>
  <div class="text-sm font-bold text-white mb-2 italic">「量多質重複的窒息」</div>
  <p class="text-[10px] opacity-60">課程架構重疊，缺乏實作導向。學生在 AI 時代仍被迫背誦瑣碎知識，而非培養判斷力。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">洪同學 / 資源斷層</div>
  <div class="text-sm font-bold text-white mb-2 italic">「人脈即分數的壟斷」</div>
  <p class="text-[10px] opacity-60">有無學長姐提供「考古題」極大影響競爭公平性。資訊落差讓校園變成零和競爭的叢林。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">團隊總結 / 制度透視</div>
  <div class="text-sm font-bold text-white mb-2 italic">「結構性的剥削」</div>
  <p class="text-[10px] opacity-60">教授評鑑偏重研究，實作資源匱乏。學生承擔了制度瑕疵導致的「無償隱形勞動」。</p>
</GlassCard>

---
layout: aura-log
---

# Issue
# Summary.

<p>
大學生的困境，不在於不努力，而在於「資訊的不對稱」與「制度的結構性疲勞」。
</p>

- **資源門檻化**：知識變成社交工具而非學習目的。
- **時間貧窮**：高強度課後負擔侵蝕了學生的休息權。
- **孤島效應**：缺乏人脈支持的同學在資訊真空裡打轉。

::log::

<SystemLog :logs="[
  { time: 'LOG_ANALYSIS', msg: '痛點：公平競爭的安心感缺失。' },
  { time: 'ROOT_CAUSE', msg: '評鑑制度與法律框架脫節。' },
  { time: 'HMW', msg: '如何打破人脈壁壘，建立共享機制？' }
]" />

---
layout: aura-log
---

# Persona:
# Lin Xiao Yu.

<p>
大一新生，內向，交友圈尚未建立，沒有抽到直屬學長姐的「邊緣人」。
</p>

<AuraFrame>
  <!-- <img src="/images/lin_xiao_yu.png" class="opacity-80 rounded shadow-2xl" /> -->
  <div class="h-40 flex items-center justify-center text-slate-500 italic text-sm">
    [ Image Placeholder: A tired student in library, blue lighting ]
  </div>
</AuraFrame>

::log::

<SystemLog :logs="[
  { time: 'NAME', msg: '林小宇 (18歲, 新生)' },
  { time: 'GOAL', msg: '不求高分，只求不被資源差擊潰。' },
  { time: 'FEAR', msg: '熬夜的努力，敵不過別人的模板。' }
]" />

---
layout: aura-default
---

# Stakeholder Map

<div class="flex items-center justify-center h-full">
  <AuraFrame class="w-full max-w-3xl">
    <div class="grid grid-cols-3 gap-4 text-center">
      <div class="p-4 border border-white/10 rounded">
        <div class="text-xs text-blue-400 mb-2 uppercase">Core</div>
        <div class="font-bold text-white">學生 (林小宇)</div>
        <div class="text-[10px] opacity-50">渴望公平與連結</div>
      </div>
      <div class="flex items-center justify-center text-blue-400">↔</div>
      <div class="p-4 border border-white/10 rounded">
        <div class="text-xs text-blue-400 mb-2 uppercase">Gatekeepers</div>
        <div class="font-bold text-white">資深學長姐</div>
        <div class="text-[10px] opacity-50">考古題與潛規則的掌握者</div>
      </div>
      <div class="col-span-3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>
      <div class="p-4 border border-white/10 rounded">
        <div class="text-xs text-blue-400 mb-2 uppercase">Evaluators</div>
        <div class="font-bold text-white">教授 / 助教</div>
        <div class="text-[10px] opacity-50">課程規則與評分的制定者</div>
      </div>
      <div class="flex items-center justify-center text-blue-400">↔</div>
      <div class="p-4 border border-white/10 rounded">
        <div class="text-xs text-blue-400 mb-2 uppercase">Support</div>
        <div class="font-bold text-white">校方 / 系統</div>
        <div class="text-[10px] opacity-50">制度框架與資源分配者</div>
      </div>
    </div>
  </AuraFrame>
</div>

---
layout: aura-log
---

# The Story:
# Breaking Out.

<p>
從一座注定被淹沒的孤島，到發現微弱的星光。
</p>

- **深淵**：凌晨兩點，看著別人拿模板輕鬆交卷。
- **轉機**：掃描實驗桌角那串亂碼般的 QR Code。
- **震撼**：自己整理的「防呆筆記」竟然接住了另外幾個無助的靈魂。
- **合流**：拿回「時間主權」，與夥伴在陽光下討論。

::log::

<SystemLog :logs="[
  { time: 'STATUS', msg: '孤島效應解除中...' },
  { time: 'EVENT', msg: '林小宇上傳了實驗心得。' },
  { time: 'RESULT', msg: '獲得 3 位同學的匿名感謝。' }
]" />

---
layout: aura-default
---

# Jobs To Be Done (JTBD)

<div class="mt-10 space-y-8">
  <GlassCard>
    <div class="text-xs text-blue-400 uppercase tracking-widest mb-2 font-mono">Job Statement</div>
    <p class="text-xl italic text-white leading-relaxed">
      「當我面對<b>資訊模糊且高壓的課業</b>時，我想要<b>獲得去中心化的資源共享</b>，好讓我能<b>在公平的起點上努力</b>，並感覺自己是被社群支持的。」
    </p>
  </GlassCard>

  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 border-l-2 border-blue-400 bg-white/5">
      <div class="font-bold mb-1 text-white">功能需求</div>
      <div class="text-xs opacity-60">快速獲取精華重點、避開重複摸索的無效工時。</div>
    </div>
    <div class="p-4 border-l-2 border-pink-400 bg-white/5">
      <div class="font-bold mb-1 text-white">情感需求</div>
      <div class="text-xs opacity-60">不再感到被制度排擠，降低對未來不確定性的焦慮。</div>
    </div>
  </div>
</div>

---
layout: aura-log
---

# Lyrics:
# 連上彼此.

<p>
「原來這座孤島 終於連成了群，原來我從未真正 一個人 走過這場雨。」
</p>

<blockquote class="text-sm">
  凌晨兩點的圖書館，螢幕亮著還沒關<br>
  一學分像一座山，壓得人快失去方向<br>
  有人早就拿到答案，而我還在反覆試算<br>
  努力是不是太廉價？孤單的人沒人回答
</blockquote>

::log::

<SystemLog :logs="[
  { time: 'AUDIO', msg: 'Suno AI 生成完畢。' },
  { time: 'MOOD', msg: '溫暖 / 抒情 / 成長。' }
]" />

---
layout: aura-specs
---

::header::

<AuraStatus>Phase_04 // Delivery</AuraStatus>
# Knowledge
# Capsule.

<p>我們不只是要做一個平台，而是要重建校園的「幸福韌性」。</p>

::default::

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🎁</div>
  <div class="font-bold text-lg text-white mb-2">匿名扭蛋</div>
  <p class="text-xs opacity-60">打破私藏潛規則，讓筆記與趨勢成為開放的校園資產。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🪙</div>
  <div class="font-bold text-lg text-white mb-2">幸運代幣</div>
  <p class="text-xs opacity-60">「讓你的努力，成為別人的幸運」。正向回饋循環。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🤖</div>
  <div class="font-bold text-lg text-white mb-2">AI 導航</div>
  <p class="text-xs opacity-60">自動統整零散課室資訊，讓學生拿回「時間主權」。</p>
</GlassCard>

---
layout: aura-hero
class: text-center
---

<div class="font-mono text-[10px] text-blue-400 uppercase tracking-[0.4em] mb-4 opacity-50">[ MISSION_COMPLETE ]</div>

# Break the
# Bubble.

<p class="mx-auto">
讓努力重回應有的對等價值。
</p>

<div class="mt-10 flex justify-center">
  <div class="btn px-12 italic">幸福實踐：接住每一個靈魂</div>
</div>
