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
layout: glass-cover
---

# Break the
### Bubble.

<p>
大學裡的成績競爭，往往不是「努力程度」的競爭，而是「人脈與資訊」的競爭。
</p>

<div class="mt-10">
  <a class="btn">Explore Project</a>
  <a class="btn-outline">Documentation</a>
</div>

---
layout: aura-log
---

# Context is
# Everything.

<p>
現行課程安排存在「量多質重複」的現象。許多課程在單一學期內塞入過度飽和的知識點，造成學生消化不良。
</p>

- 120Hz Biometric Sampling
- Spatial Audio Processing
- Sub-10ms Latency

::log::

<SystemLog :logs="[
  { time: '08:42', msg: '資源斷層焦慮：秘笈壟斷中。' },
  { time: '09:15', msg: '1 學分實驗課：投入與回報失衡。' },
  { time: '12:30', msg: '資訊孤島：缺乏學長姐人脈。' }
]" />

---
layout: aura-log
---

# Empathy.
# The Reality.

<p>
針對課業議題，我們訪談了三位未選課同學，挖掘深層痛點。
</p>

- **破碎的資源**
- **低 CP 值的勞動**
- **資訊孤島**

::log::

<SystemLog :logs="[
  { time: 'USER_01', msg: '沒有拿到秘笈，覺得競爭極度不公平。' },
  { time: 'USER_02', msg: '實驗課只有 1 學分，投資報酬率極低。' },
  { time: 'USER_03', msg: '教授減少教材，反而讓學生迷失方向。' }
]" />

---
layout: aura-default
---

# 第一階段：科技對照 (AI 賦能)

## 從表面的抱怨，抓出深層痛點

<div class="grid grid-cols-2 gap-8 mt-10">
  <GlassCard>
    <div class="text-xs uppercase tracking-widest text-blue-400 mb-2">Traditional</div>
    <div class="font-bold text-lg mb-2 text-white">傳統思維</div>
    <p class="text-sm opacity-60">僅看到表面的抱怨（實驗很累、不公平），將訪談整理成靜態表格。</p>
  </GlassCard>
  
  <GlassCard>
    <div class="text-xs uppercase tracking-widest text-pink-400 mb-2">AI Enhanced</div>
    <div class="font-bold text-lg mb-2 text-white">AI 賦能</div>
    <p class="text-sm opacity-60">運用 AI 分析背後未被滿足的需求：學生渴望的是「公平競爭的安心感」與「努力方向的確定感」。</p>
  </GlassCard>
</div>

---
layout: aura-specs
---

::header::

# Engineering
# Solution.

<p>
我們開發了 Open-Campus 匿名知識扭蛋池，旨在打破校園資訊壁壘，重建公平競爭的環境。
</p>

::default::

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🎁</div>
  <div class="font-bold text-lg text-white mb-2">匿名扭蛋</div>
  <p class="text-xs opacity-60">將修課筆記、重點、考題趨勢匿名上傳共享。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🪙</div>
  <div class="font-bold text-lg text-white mb-2">代幣機制</div>
  <p class="text-xs opacity-60">鼓勵貢獻，上傳者可獲得點數解鎖其他科目資源。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🤖</div>
  <div class="font-bold text-lg text-white mb-2">AI 助教</div>
  <p class="text-xs opacity-60">自動統整教授零碎的課堂指示，消除資訊落差。</p>
</GlassCard>

---
layout: aura-log
---

# The Story.
# Breaking Out.

<p>
林小宇，一位沒有人脈的大一新生，在崩潰邊緣透過「知識扭蛋池」找回了學習的動力。
</p>

- **起：深淵與孤島**
- **承：微弱的星光**
- **轉：被接住的瞬間**
- **合：奪回時間主權**

::log::

<SystemLog :logs="[
  { time: '02:00', msg: '林小宇在圖書館熬夜，感到窒息。' },
  { time: '02:15', msg: '發現 Open-Campus QR Code。' },
  { time: '02:30', msg: '上傳筆記，意外獲得感謝與代幣。' }
]" />

---
layout: aura-default
---

# 第三階段：驗證回饋 (Pressure Test)

## 透過 AI 進行極端角色模擬

<div class="space-y-6 mt-10">
  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">01</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-blue-400 mb-1">Role: Senior Student</div>
      <div class="font-bold text-white">擁有大量考古題且不想分享的資深學長</div>
    </GlassCard>
  </div>
  
  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">02</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-blue-400 mb-1">Role: Professor</div>
      <div class="font-bold text-white">極度擔心被抓抄襲、希望強迫聽課的教授</div>
    </GlassCard>
  </div>

  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">03</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-pink-400 mb-1">Solution</div>
      <div class="font-bold text-white">加入「社群回報」與「開源審核機制」</div>
    </GlassCard>
  </div>
</div>

---
layout: aura-default
class: flex flex-col items-center justify-center text-center
---

<div class="font-mono text-xs text-blue-400 uppercase tracking-[0.3em] mb-4">[ INITIALIZING SEQUENCE ]</div>

# The Future is
# Connecting.

<div class="mt-10">
  <a class="btn px-12">Final Delivery</a>
</div>

<p class="mt-10 text-xs opacity-40 italic max-w-sm">
  「原來這座孤島 終於連成了群，原來我從未真正 一個人 走過這場雨。」
</p>

---
layout: aura-default
---

# 附錄：AI 協作紀錄

## 科技與情感的交匯

<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="space-y-4">
    <div class="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Phase 1</div>
    <p class="text-xs text-slate-300"><b>Gemini</b> 分析訪談情緒，找出「公平競爭」的核心需求。</p>
  </div>
  <div class="space-y-4">
    <div class="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Phase 2</div>
    <p class="text-xs text-slate-300"><b>Midjourney</b> 生成療癒系 App 介面，並優化故事大綱。</p>
  </div>
  <div class="space-y-4">
    <div class="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Phase 3</div>
    <p class="text-xs text-slate-300"><b>Suno</b> 生成《連上彼此》主題曲，記錄影音迭代過程。</p>
  </div>
</div>

<div class="mt-12 bg-white/5 border border-white/10 p-6 rounded-lg font-mono text-[10px] text-slate-400">
  PROMPT_EXAMPLE: "你現在是一位深受社交焦慮困擾的大二學生..."
</div>
