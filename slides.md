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
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">小宇 / 化學系新生</div>
  <div class="text-sm font-bold text-white mb-2 italic">「消失的 6 小時」</div>
  <p class="text-[10px] opacity-60">每週需花費 6+ 小時手寫 MSDS 預報，僅換取 1 學分。努力在繁重瑣碎的勞動中被磨損。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">幽靈直屬 / 斷裂傳承</div>
  <div class="text-sm font-bold text-white mb-2 italic">「孤島式的生存」</div>
  <p class="text-[10px] opacity-60">抽到不回訊息的幽靈直屬，導致無法獲取考古題與地雷解析，在資訊戰中徹底孤立。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">隱藏標準 / 挫折循環</div>
  <div class="text-sm font-bold text-white mb-2 italic">「摸不透的扣分」</div>
  <p class="text-[10px] opacity-60">按部就班卻拿不到高分，看著人脈廣的同學拿模板輕鬆過關，對「公平」產生深刻懷疑。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">制度反思 / 勞動真空</div>
  <div class="text-sm font-bold text-white mb-2 italic">「時間貧窮的隱憂」</div>
  <p class="text-[10px] opacity-60">學習被異化為無償且無上限的勞動，侵蝕了學生的休息權與多元探索的空間。</p>
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
化學系大一新生，內向，抽到「幽靈直屬」，在圖書館熬夜到雙眼發紅的邊緣人。
</p>

<AuraFrame>
  <!-- <img src="/images/lin_xiao_yu.png" class="opacity-80 rounded shadow-2xl" /> -->
  <div class="h-40 flex items-center justify-center text-slate-500 italic text-sm text-center">
    [ Image Placeholder: Xiao Yu buried in MSDS handbooks,<br/>screen glowing cold blue ]
  </div>
</AuraFrame>

::log::

<SystemLog :logs="[
  { time: 'NAME', msg: '林小宇 (18歲, 化學系)' },
  { time: 'GOAL', msg: '奪回時間主權，不再被資源差擊潰。' },
  { time: 'FEAR', msg: '努力成了最廉價的東西。' }
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
從一座注定被淹沒的孤島，到發現彼此連結的星網。
</p>

- **深淵**：小宇熬夜手寫 MSDS，看著別人拿模板輕鬆宵夜。
- **微光**：發現 Open-Campus QR Code，看見陌生學長姐留下的溫暖筆記。
- **接住**：小宇將防呆筆記匿名上傳，成功「接住」了同樣崩潰的晴晴。
- **共創**：校園不再是零和競爭的叢林，而是互相支撐的共好圈。

::log::

<SystemLog :logs="[
  { time: 'EVENT_01', msg: '林小宇上傳普通化學實驗重點。' },
  { time: 'EVENT_02', msg: '晴晴回覆：你的筆記救了我的實驗！' },
  { time: 'ANALYSIS', msg: '互助連結突破 100 次，孤島連成群。' }
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
layout: aura-default
---

# 【A4 提案單】視覺預覽

<div class="grid grid-cols-2 gap-8 h-full">
  <div class="flex flex-col justify-center">
    <AuraStatus class="mb-4">擺攤現場主視覺</AuraStatus>
    <h2 class="text-3xl font-bold mb-4">從壟斷到公共</h2>
    <p class="opacity-70 text-sm leading-relaxed mb-6 text-slate-300">
      視覺化展示「Open-Campus」如何將私藏的「內線考古題」，轉化為校園整體的「公共傳承」。
    </p>
    <ul class="space-y-3">
      <li><strong>資訊對比</strong>：壟斷者 vs 孤島者</li>
      <li><strong>扭蛋機制</strong>：匿名上傳與幸運代幣</li>
      <li><strong>幸福願景</strong>：讓努力重回對等價值</li>
    </ul>
  </div>
  
  <div class="flex items-center justify-center p-4">
    <AuraFrame class="w-full aspect-[1/1.414] flex items-center justify-center text-slate-500 italic text-sm text-center p-8">
      [ A4 Proposal Sheet Preview ]<br/>
      (Info-graphic & Pain Point Analysis)
    </AuraFrame>
  </div>
</div>

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
