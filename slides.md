---
theme: none
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
    <AuraPill status="active">Initialize Presentation</AuraPill>
    <AuraStatus>Version 1.0.5 // Design_Thinking_Flow</AuraStatus>
  </div>
</div>

---
layout: aura-specs
---

::header::

<AuraPill status="info" class="mb-4">Phase 1: Empathy & Define</AuraPill>

# Team Brainstorming

<p>團隊成員從各自的學業經驗出發，挖掘出校園制度中普遍存在的痛點。</p>

::default::

<!-- 4 cards in 2x2, not 3 and then 1 -->

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">郭彥均 / 化學系</div>
  <div class="text-[11px] text-white mb-2 italic">「破碎的資源與低投報勞動」</div>
  <p class="text-[9px] opacity-60">資源不共享、英文課本障礙。1 學分實驗課卻需耗費大量時間抄寫 MSDS 預報，心理極度不平衡。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">吳柏宏 / 課程架構</div>
  <div class="text-[11px] text-white mb-2 italic">「量多質重複的窒息感」</div>
  <p class="text-[9px] opacity-60">必修課與選修內容高度重疊，學生淪為瑣碎知識的背誦機器，而非 AI 無法取代的高階人才。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">徐愉皓 / 學習選擇權</div>
  <div class="text-[11px] text-white mb-2 italic">「同儕競爭下的知識工具化」</div>
  <p class="text-[9px] opacity-60">必修比例過高，學習淪為應付考試。不同系所資源分配極度不均，實作與理論嚴重斷裂。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-bold mb-2 uppercase text-xs">洪楷傑 / 資訊壁壘</div>
  <div class="text-[11px] text-white mb-2 italic">「人脈決定公平性」</div>
  <p class="text-[9px] opacity-60">有無考古題極大影響成績。教授刻意隱藏教材規則以強迫聽課，卻讓學生陷入混亂迷失。</p>
</GlassCard>
---
layout: aura-log
---

<AuraPill class="mb-4">Phase 1: Empathize & Define</AuraPill>

# Issue Summary

<p>
問題根源：高教制度與社會期待的錯位，導致學生承擔了結構性的「隱形勞動」。
</p>

- **資源門檻化**：人脈與資訊差取代了努力的價值。
- **時間貧窮**：高強度課後負擔侵蝕了學生的自主權。
- **孤島效應**：缺乏人脈支持的同學淪為資訊邊緣人。

::log::

<SystemLog :logs="[
  { time: 'INSIGHT', msg: '學生渴望的是「公平競爭的安心感」。' },
  { time: 'AI_CO_PILOT', msg: '運用 Gemini 分析逐字稿，抓出深層需求。' }
]" />

---
layout: aura-default
class: flex flex-col items-center justify-center
---

<AuraPill class="mb-12">Phase 1: Empathize & Define</AuraPill>

<!-- it's too dim. -->

<div class="flex flex-col items-center gap-12">
  <div class="grid grid-cols-4 gap-4 opacity-70">
    <div class="w-20 h-20 border border-blue-400/30 rounded flex items-center justify-center text-[10px]">郭彥均</div>
    <div class="w-20 h-20 border border-blue-400/30 rounded flex items-center justify-center text-[10px]">吳柏宏</div>
    <div class="w-20 h-20 border border-blue-400/30 rounded flex items-center justify-center text-[10px]">徐愉皓</div>
    <div class="w-20 h-20 border border-blue-400/30 rounded flex items-center justify-center text-[10px]">洪楷傑</div>
  </div>
  
  <div class="flex flex-col items-center animate-pulse text-blue-400">
    <div class="i-carbon:arrow-down text-4xl mb-2" />
    <div class="font-mono text-xs tracking-widest uppercase">Synthesizing Data Points</div>
  </div>

  <div class="flex items-center gap-8">
    <AuraFrame class="px-12 py-6">
      <div class="text-center">
        <AuraStatus>Virtual Persona created</AuraStatus>
        <div class="text-4xl font-black tracking-tighter uppercase mt-2">林小宇</div>
        <div class="text-xs opacity-50 mt-1">化學系大一新生</div>
      </div>
    </AuraFrame>
  </div>
</div>

---
layout: aura-log
---

<AuraPill class="mb-4">Phase 1: Empathize & Define</AuraPill>

# Persona Context

<!-- please add the persona context seen in @user_persona.md this is not enough -->

<p>
林小宇是我們團隊生命經驗的集合體。他代表了在資訊壟斷制度下，那群「不是不努力，而是沒工具」的靈魂。
</p>

<AuraFrame>
  <img src="./raw_data/images/user_persona.png" class="opacity-80 rounded shadow-2xl" />
  <div class="h-40 flex items-center justify-center text-slate-500 italic text-sm text-center">
  </div>
</AuraFrame>

::log::

<SystemLog :logs="[
  { time: 'STAKEHOLDERS', msg: '核心：學生；門神：學長姐；評鑑：教授。' },
  { time: 'FEAR', msg: '努力成了最廉價的東西。' }
]" />

---
layout: aura-default
---

<!-- remove the br. and that we can add all the jtbd, and summarize it in the next slide. -->

<AuraPill class="mb-4">Phase 2: Ideate</AuraPill>

# Jobs To Be Done (JTBD)

<div class="mt-10 space-y-8">
  <GlassCard>
    <div class="text-xs text-blue-400 uppercase tracking-widest mb-2 font-mono text-white">How Might We...</div>
    <p class="text-xl italic text-white leading-relaxed">
      「我們如何建立一個<b>去中心化的校園知識共享機制</b>，打破人際圈的壁壘，讓努力能獲得對等的回報？」
    </p>
  </GlassCard>

  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 border-l-2 border-blue-400 bg-white/5">
      <div class="font-bold mb-1 text-white uppercase text-xs">AI Empowerment</div>
      <div class="text-xs opacity-60">AI 建議結合「匿名性」與「溫暖連結」，產出 Open-Campus 傳送門概念。</div>
    </div>
    <div class="p-4 border-l-2 border-pink-400 bg-white/5">
      <div class="font-bold mb-1 text-white uppercase text-xs">Core Value</div>
      <div class="text-xs opacity-60">不再讓「人脈」成為公平的障礙，重建校園的幸福韌性。</div>
    </div>
  </div>
</div>

---
layout: aura-log
---

<AuraPill class="mb-4">Phase 3: Prototype & Test</AuraPill>

# The Story:
# Breaking Out.

<p>
我們將方案具象化為一個具備情感起伏的故事大綱。
</p>

- **深淵**：小宇熬夜手寫預報，眼看別人輕鬆拿高分。
- **轉機**：掃描公佈欄角落的「匿名傳送門」QR Code。
- **共鳴**：獲得匿名筆記與鼓勵，並選擇回饋上傳。
- **合流**：奪回「時間主權」，校園成為互助的群島。

::log::

<SystemLog :logs="[
  { time: 'PROTOTYPE', msg: '腳本包含起、承、轉、合四大階段。' },
  { time: 'FEEDBACK', msg: '晴晴回覆：你的筆記救了我的實驗！' }
]" />

---
layout: aura-default
---

<AuraPill class="mb-4">Phase 3: Prototype & Test</AuraPill>

<!-- this is highly unrealistic. we should generate a document first in the raw_data folder. also there's not really substantial testing.-->

# Pressure Test & Validation.

<div class="space-y-6 mt-10">
  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">01</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-blue-400 mb-1">Challenge: Hoarding Senior</div>
      <div class="font-bold text-white">「我有大量資料，為什麼要無私分享？」</div>
    </GlassCard>
  </div>
  
  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">02</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-blue-400 mb-1">Challenge: Academic Integrity</div>
      <div class="font-bold text-white">教授擔心學生抄襲而非理解，如何防範惡意資訊？</div>
    </GlassCard>
  </div>

  <div class="flex items-center gap-6">
    <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50">03</div>
    <GlassCard class="flex-1 py-4">
      <div class="text-xs uppercase tracking-widest text-pink-400 mb-1">Iteration Result</div>
      <div class="font-bold text-white">加入「社群回報」與「開源審核機制」，防範惡意上傳。</div>
    </GlassCard>
  </div>
</div>

---
layout: aura-log
---

<AuraPill class="mb-4">Phase 4: Delivery & Caring</AuraPill>

# Lyrics: 連上彼此

<p>
最終產出的療癒系單曲，唱出從孤島到群島的轉變。
</p>

<!-- add iterations -->

<blockquote class="text-sm">
  凌晨兩點的圖書館，螢幕亮著還沒關<br>
  一學分像一座山，壓得人快失去方向<br>
  有人早就拿到答案，而我還在反覆試算<br>
  努力是不是太廉價？孤單的人沒人回答
</blockquote>

::log::

<!-- make the process more complete. let's use a mermaid diagram to show what our progress is.

- we first brainstormed @brainstorming.txt with our own lived experiences
- then we used AI to generate some solutions @discussion.md
- then we used AI to blend our ideas into @discussion_summary.md, which is the fuel for later music generation.
- we iterated on the music with Gemini AI.
- then it's send to Suno and we have the music. -->

<SystemLog :logs="[
  { time: 'MUSIC', msg: 'Suno AI 生成。' },
  { time: 'MV_THEME', msg: '聚焦在實驗室裡被接住的瞬間。' }
]" />

---
layout: aura-specs
---

::header::

<AuraPill class="mb-4">Phase 4: Delivery & Caring</AuraPill>

# Open-Campus Portal

<p>我們不只是要做一個平台，而是要重建校園的「幸福傳承」。</p>

::default::

<!-- use icons instead of emojis, make cards have a clear visual hierarchy -->

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">📡</div>
  <div class="font-bold text-lg text-white mb-2">匿名傳送門</div>
  <p class="text-xs opacity-60">打破私藏潛規則，透過 QR Code 讓筆記與趨勢成為真正自由流動的校園資產。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">📝</div>
  <div class="font-bold text-lg text-white mb-2">電子便利貼</div>
  <p class="text-xs opacity-60">「加油，你一定能撐過這學期」。透過匿名的溫暖留言，建立跨時空的互助連結。</p>
</GlassCard>

<GlassCard>
  <div class="text-blue-400 font-mono text-xl mb-2">🔗</div>
  <div class="font-bold text-lg text-white mb-2">幸福實踐</div>
  <p class="text-xs opacity-60">讓校園不再是零和競爭的叢林。認知到成績不代表價值，接住每一個靈魂。</p>
</GlassCard>

---
layout: aura-default
---

<AuraPill status="info" class="mb-4">Phase 3: Prototype & Test</AuraPill>

# Student Response

<div class="h-64 border border-dashed border-white/20 rounded flex flex-col items-center justify-center text-slate-500 italic text-sm text-center p-8">
  <div class="i-carbon:user-talk text-4xl mb-4 opacity-50" />
  [ 填寫區：請記錄訪談 1-2 位真實同學的回饋 ]<br/>
  (例如：對介面的直觀感、隱私顧慮、或使用意願的真實聲音)
</div>

---
layout: aura-default
---

<AuraPill status="info" class="mb-4">Phase 3: Prototype & Test</AuraPill>

<!-- please use the image provided in the image folder with the same filename to show the storyboards -->

# Important Storyboards

<div class="grid grid-cols-3 gap-4 h-64 mt-10">
  <div class="border border-dashed border-white/20 rounded flex items-center justify-center text-[10px] text-slate-600 italic">Scene 1: 圖書館深淵</div>
  <div class="border border-dashed border-white/20 rounded flex items-center justify-center text-[10px] text-slate-600 italic">Scene 2: 螢幕微光</div>
  <div class="border border-dashed border-white/20 rounded flex items-center justify-center text-[10px] text-slate-600 italic">Scene 3: 群島連結</div>
</div>

<p class="text-[10px] opacity-40 mt-4 text-center italic">註：本頁記錄 MV 分鏡構圖想法、提示詞運用與 AI 迭代生成過程。</p>

---
layout: aura-log
---

<AuraPill class="mb-4">Phase 4: Delivery & Caring</AuraPill>

# Happiness Practice Guide.

<div class="space-y-6 mt-8">
  <GlassCard>
    <div class="font-bold text-blue-400 text-xs mb-2">自我照護 (Self-Care)</div>
    <p class="text-[10px] opacity-70 italic">[ 填寫區：成員在製作過程中的情緒調節，及提案如何保護使用者的心理韌性 ]</p>
  </GlassCard>
  
  <GlassCard>
    <div class="font-bold text-pink-400 text-xs mb-2">支持他人 (Caring for Others)</div>
    <p class="text-[10px] opacity-70 italic">[ 填寫區：方案如何降低求助門檻，讓他人感到「被聽見」的具體機制 ]</p>
  </GlassCard>
</div>

::log::

<SystemLog :logs="[
  { time: 'GUIDE', msg: '核心目標：讓校園不再是零和叢林。' }
]" />

---
layout: aura-default
---

# 附錄 A：AI 協作紀錄

## 關鍵提示詞 (Prompt) 應用清單

<div class="mt-8">
  <table class="w-full text-[10px] border-collapse">
    <thead>
      <tr class="border-b border-white/10 text-blue-400 text-left">
        <th class="py-2">階段</th>
        <th class="py-2">關鍵 Prompt 內容 (精選 3-5 個)</th>
        <th class="py-2">帶來的效益</th>
      </tr>
    </thead>
    <tbody class="text-slate-400">
      <tr class="border-b border-white/5 italic">
        <td class="py-4">同理/發想</td>
        <td class="py-4">「你現在是一位...」</td>
        <td class="py-4">優化 Persona 深度...</td>
      </tr>
      <tr class="border-b border-white/5 italic">
        <td class="py-4">原型/驗證</td>
        <td class="py-4">「請扮演極度挑剔的評論家...」</td>
        <td class="py-4">預判方案執行漏洞...</td>
      </tr>
    </tbody>
  </table>
</div>

---
layout: aura-default
---

# 附錄 B：重要迭代與分工

<div class="grid grid-cols-2 gap-8 mt-10">
  <div>
    <div class="text-xs text-blue-400 mb-4 uppercase tracking-widest font-bold font-mono">// Iteration_Log</div>
    <p class="text-[10px] opacity-50 italic text-slate-500 border-l border-white/10 pl-4">
      [ 填寫區：記錄本專案從 1.0 到最終版的關鍵轉折 ]
    </p>
  </div>
  <div>
    <div class="text-xs text-pink-400 mb-4 uppercase tracking-widest font-bold font-mono">// Division_of_Labor</div>
    <div class="space-y-2 opacity-50 italic text-[10px] text-slate-500">
      - 成員 A: 核心任務 (AI 溝通貢獻 %)<br/>
      - 成員 B: 核心任務 (AI 溝通貢獻 %)<br/>
      - 成員 C: 核心任務 (AI 溝通貢獻 %)<br/>
      - 成員 D: 核心任務 (AI 溝通貢獻 %)
    </div>
  </div>
</div>

---
layout: aura-hero
class: text-center
---

<div class="font-mono text-[10px] text-blue-400 uppercase tracking-[0.4em] mb-4 opacity-50">[ MISSION_COMPLETE ]</div>

# Break the
# Bubble.

<p class="mx-auto text-slate-300">
讓努力重回應有的對等價值。
</p>

<div class="mt-10 flex justify-center">
  <AuraPill variant="solid" class="px-12 italic">幸福實踐：接住每一個靈魂</AuraPill>
</div>
