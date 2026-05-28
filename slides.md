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

# slides.md

---

<div class="h-full w-full p-16 flex flex-col justify-center text-left relative overflow-hidden text-white">
  <div class="relative z-10 max-w-4xl">
    <AuraPill status="active" class="mb-8 text-white">Initialize Presentation</AuraPill>
    <h1 class="text-8xl font-black tracking-tighter mb-4 leading-[0.9] text-white uppercase">
      Break the<br/>
      <span class="text-blue-400">Bubble.</span>
    </h1>
    <p class="text-xl text-slate-400 max-w-lg leading-relaxed mb-10 text-white opacity-80">
      大學裡的成績競爭，往往不是「努力程度」的競爭，而是「人脈與資訊」的競爭。
    </p>
    <AuraStatus class="text-white opacity-60">Version 1.0.6 // Design_Thinking_Final</AuraStatus>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white border-b border-white/10 pb-4 text-left">
    Team Brainstorming
  </h1>
  
  <div class="grid grid-cols-2 gap-6 flex-1">
    <AuraCard v-for="m in [
      { name: '郭彥均', major: '化學系', title: '破碎資源與低投報勞動', desc: '實驗課僅 1 學分，卻需耗費 6+ 小時抄寫 MSDS 預報，心理與投入極度不平衡。' },
      { name: '吳柏宏', major: '課程架構', title: '量多質重複的窒息感', desc: '必修與選修內容高度重疊，學生淪為瑣碎知識的背誦機器，而非培養高階判斷力。' },
      { name: '徐愉皓', major: '機械系', title: '同儕競爭與知識工具化', desc: '必修比例過高，學習淪為應付考試與獎學金排名，資源分配不均，實作與理論斷裂。' },
      { name: '洪楷傑', major: '資訊壁壘', title: '人脈即分數的壟斷', desc: '有無考古題極大影響成績公平性。教授隱藏教材規則強迫聽課，卻讓學生陷入混亂迷失。' }
    ]" :key="m.name" class="p-6">
      <div class="flex justify-between items-start mb-4 border-b border-white/5 pb-2">
        <div class="text-blue-400 font-bold uppercase text-xs tracking-widest text-white opacity-90">{{ m.name }} / {{ m.major }}</div>
        <AuraStatus v-if="m.name === '郭彥均'">Chem_Focus</AuraStatus>
      </div>
      <div class="text-lg font-bold text-white mb-2 leading-tight uppercase">{{ m.title }}</div>
      <p class="text-[11px] opacity-70 leading-relaxed text-slate-300">{{ m.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-start h-full">
    <div class="flex flex-col justify-center h-full text-white">
      <h1 class="text-7xl font-black tracking-tighter mb-6 leading-tight uppercase text-white">Issue<br/>Summary</h1>
      <p class="text-base text-slate-400 leading-relaxed mb-10 text-white opacity-80">
        問題根源：高教制度與社會期待的錯位，導致學生承擔了結構性的「隱形勞動」。
      </p>
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-sm uppercase">資源門檻化</div>
            <div class="text-[10px] text-slate-500 italic text-white opacity-60">人脈與資訊差取代了努力的價值。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-sm uppercase">時間貧窮</div>
            <div class="text-[10px] text-slate-500 italic text-white opacity-60">高強度課後負擔侵蝕了學生的自主權。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-sm uppercase">孤島效應</div>
            <div class="text-[10px] text-slate-500 italic text-white opacity-60">缺乏人脈支持的同學淪為資訊邊緣人。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 justify-center h-full text-white">
      <SystemLog :logs="[
        { time: 'INSIGHT', msg: '學生渴望的是「公平競爭的安心感」。' },
        { time: 'AI_CO_PILOT', msg: '運用 Gemini 分析逐字稿，抓出深層痛點。' },
        { time: 'HMW', msg: '如何建立去中心化機制，打破人際圈壁壘？' }
      ]" />
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col items-center justify-center relative text-white">
  <AuraPill status="info" class="mb-12">Phase 1: Empathize & Define</AuraPill>

  <div class="flex flex-col items-center gap-12">
    <div class="grid grid-cols-4 gap-6">
      <div v-for="name in ['郭彥均', '吳柏宏', '徐愉皓', '洪楷傑']" :key="name" 
           class="w-24 h-24 border border-blue-400/50 bg-blue-400/5 rounded-sm flex items-center justify-center text-xs text-white font-bold tracking-widest transition-all hover:bg-blue-400/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        {{ name }}
      </div>
    </div>
    <div class="flex flex-col items-center animate-pulse text-blue-400">
      <div class="i-carbon:arrow-down text-5xl mb-4" />
      <div class="font-mono text-sm tracking-[0.4em] uppercase font-bold text-white opacity-60">Synthesizing Data Points</div>
    </div>
    <AuraFrame class="px-20 py-8 bg-black/60 shadow-[0_0_50px_rgba(59,130,246,0.1)] border-blue-400/20">
      <div class="text-center">
        <AuraStatus class="mb-2 text-white">Virtual Persona Synthesized</AuraStatus>
        <div class="text-6xl font-black tracking-tighter uppercase mt-2 text-white italic">林小宇</div>
        <div class="text-sm opacity-60 mt-1 tracking-widest text-white uppercase font-mono">Student Persona Alpha</div>
      </div>
    </AuraFrame>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-start h-full">
    <div class="flex flex-col justify-center h-full">
      <h1 class="text-6xl font-black tracking-tighter mb-6 leading-tight uppercase text-white">Persona<br/>Context</h1>
      <p class="text-base text-slate-300 leading-relaxed mb-6 text-white opacity-80">
        林小宇抽到了不回訊息的「幽靈直屬」，面對 1 學分卻需耗費 6 小時的實驗課，他必須獨自查閱繁雜的 MSDS 資訊並手寫預報。
      </p>
      <div class="space-y-4">
        <div class="p-4 border-l-2 border-blue-400 bg-white/5 rounded-r">
          <div class="text-blue-400 text-[10px] font-bold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Frustration</div>
          <div class="text-xs italic text-white opacity-80 leading-relaxed text-white">
            "按部就班每一步都很合理，卻摸不透教授隱藏的扣分標準，總是得不到應有的分數。"
          </div>
        </div>
        <div class="p-4 border-l-2 border-pink-400 bg-white/5 rounded-r">
          <div class="text-pink-400 text-[10px] font-bold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Gap</div>
          <div class="text-xs italic text-white opacity-80 leading-relaxed text-white">
            "同班那些跟學長姐混得很熟的同學，拿著內線考古題與模板提早交卷，去慶祝勝利。"
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 h-full justify-center">
      <AuraFrame class="aspect-[4/3] flex items-center justify-center bg-black/80 overflow-hidden relative group border-white/5">
         <img src="./raw_data/images/user_persona.png" class="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
         <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="text-white italic text-xs border border-white/10 px-4 py-2 bg-black/40 backdrop-blur-sm">林小宇 (18歲)</div>
         </div>
      </AuraFrame>
      <SystemLog :logs="[
        { time: 'ROLE', msg: '化學系新生 // 資訊孤島' },
        { time: 'STATUS', msg: '在深夜的圖書館發出沒人回答的訊號' }
      ]" />
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 2: Ideate</AuraPill>
  
  <div class="flex flex-col justify-center h-full max-w-5xl mx-auto">
    <div class="mb-12">
      <h1 class="text-6xl font-black tracking-tighter mb-4 uppercase text-white">Jobs To Be Done</h1>
      <p class="text-slate-400 opacity-80 text-white">我們如何讓努力重回應有的價值？</p>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <AuraCard v-for="(job, i) in [
        { type: '功能需求', goal: '快速獲取精華重點、避開重複摸索的無效工時。' },
        { type: '功能需求', goal: '獲取教授隱藏的扣分標準與歷年實驗地雷。' },
        { type: '情感需求', goal: '不再感到被制度排擠，降低對未來不確定性的焦慮。' },
        { type: '情感需求', goal: '獲得公平競爭的安心感與努力方向的確定感。' }
      ]" :key="i" class="p-6">
        <div class="text-[9px] font-mono font-bold tracking-[0.2em] mb-2 text-white opacity-90" 
             :class="job.type === '功能需求' ? 'text-blue-400' : 'text-pink-400'">
          {{ job.type }}
        </div>
        <p class="text-sm font-bold text-white leading-relaxed">{{ job.goal }}</p>
      </AuraCard>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-center items-center justify-center text-white">
  <AuraPill status="info" class="mb-8">Phase 2: Ideate // Summary</AuraPill>
  <AuraCard class="p-12 max-w-4xl border-blue-400/30 bg-blue-400/5">
    <div class="text-xs text-blue-400 uppercase tracking-[0.3em] mb-6 font-mono font-bold text-white opacity-90">How Might We Challenge</div>
    <h2 class="text-5xl font-black italic text-white leading-[1.1] uppercase tracking-tighter">
      我們如何建立一個<br/>
      <span class="text-blue-400 text-white opacity-100 font-black">去中心化</span>的校園知識共享機制，<br/>
      打破人際圈的壁壘？
    </h2>
  </AuraCard>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center h-full">
    <div class="flex flex-col justify-center">
      <h1 class="text-8xl font-black tracking-tighter mb-8 uppercase text-white leading-[0.85]">The<br/><span class="text-blue-400">Story.</span></h1>
      <p class="text-lg text-slate-300 mb-10 leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 text-white opacity-90">
        「從一座注定被淹沒的孤島，到發現彼此連結的星網。」
      </p>
      <div class="space-y-6">
        <div v-for="(item, i) in ['深淵：小宇熬夜手寫預報，眼看別人輕鬆宵夜。', '微光：發現 QR Code，看見陌生學長姐留下的溫暖。', '接住：小宇上傳防呆筆記，接住了同樣崩潰的晴晴。', '共創：校園不再是叢林，而是互相支撐的共好圈。']" 
             :key="i" v-click class="flex gap-4 items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
          <span class="text-sm font-medium text-white opacity-90">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8 justify-center h-full">
      <AuraFrame class="p-0 overflow-hidden bg-black/60 aspect-video flex items-center justify-center border-white/5">
        <div class="text-slate-500 italic text-sm p-12 text-center text-white opacity-60">
          [ 視覺焦點：鵝黃色的溫暖光芒照亮了疲憊的面容 ]
        </div>
      </AuraFrame>
      <SystemLog :logs="[
        { time: 'EVENT_01', msg: '林小宇掃描了匿名分享傳送門。' },
        { time: 'EVENT_02', msg: '下載檔案：化學實驗重點筆記.pdf' },
        { time: 'FEEDBACK', msg: '晴晴回覆：你的筆記救了我的實驗！😭' }
      ]" />
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white border-b border-white/10 pb-4">Pressure Test</h1>
  
  <div class="grid grid-cols-2 gap-12 h-full">
    <div class="space-y-6">
      <div class="flex items-center gap-6" v-click>
        <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50 text-white">01</div>
        <AuraCard class="flex-1 py-4 border-l-4 border-l-blue-400">
          <div class="text-xs uppercase tracking-widest text-blue-400 mb-1 font-bold opacity-90 text-white">Hoarding Senior</div>
          <div class="font-bold text-white text-sm italic">「我有大量資料，為什麼要分享？」</div>
        </AuraCard>
      </div>
      <div class="flex items-center gap-6" v-click>
        <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-mono text-xs opacity-50 text-white">02</div>
        <AuraCard class="flex-1 py-4 border-l-4 border-l-blue-400">
          <div class="text-xs uppercase tracking-widest text-blue-400 mb-1 font-bold opacity-90 text-white">Academic Integrity</div>
          <div class="font-bold text-white text-sm italic">教授擔心學生抄襲而非理解，防範惡意資訊。</div>
        </AuraCard>
      </div>
    </div>
    <div class="flex flex-col justify-center" v-click>
      <AuraCard class="p-8 border-pink-400/30 bg-pink-400/5 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
        <div class="text-xs uppercase tracking-widest text-pink-400 mb-4 font-bold font-mono opacity-90 text-white">Iteration_Result</div>
        <h3 class="text-2xl font-black text-white mb-4 uppercase">開源審核機制</h3>
        <p class="text-xs text-slate-400 leading-relaxed text-white opacity-80">
          加入「社群回報」與「開源審核」，確保資訊正確性。利用匿名便利貼的溫暖連結引發「傳承動力」，讓分享行為從利益驅動轉向情感驅動。
        </p>
      </AuraCard>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="active" class="mb-8">Phase 4: Delivery & Caring</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center h-full">
    <div class="flex flex-col justify-center text-white">
      <h1 class="text-6xl font-black tracking-tighter mb-8 uppercase text-white leading-tight">Lyrics:<br/><span class="text-blue-400 text-white opacity-100">連上彼此</span></h1>
      <p class="text-base text-slate-400 leading-relaxed mb-8 italic border-l-2 border-blue-400 pl-6 text-white opacity-90">
        「原來這座孤島 終於連成了群，原來我從未真正 一個人 走過這場雨。」
      </p>
      <div class="flex gap-4">
        <AuraPill variant="glass" status="active">▶ AUDIO_PLAYBACK_V3</AuraPill>
        <AuraPill variant="outline">VIEW_ITERATIONS</AuraPill>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <AuraCard class="p-8 bg-black/40">
        <blockquote class="text-sm leading-loose m-0 border-none bg-transparent p-0 text-white italic opacity-90">
          凌晨兩點的圖書館，螢幕亮著還沒關<br/>
          一學分像一座山，壓得人快失去方向<br/>
          有人早就拿到答案，而我還在反覆試算<br/>
          努力是不是太廉價？孤單的人沒人回答
        </blockquote>
      </AuraCard>
      <div class="text-[10px] opacity-40 font-mono text-center uppercase tracking-widest text-white">Suno AI Generated // 溫暖 / 成長</div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-center items-center justify-center text-white">
  <AuraPill status="active" class="mb-12">Process Roadmap</AuraPill>
  
  <div class="w-full max-w-4xl bg-white/[0.02] border border-white/10 p-8 rounded-lg">

```mermaid
graph LR
    A[生之歷程 Brainstorming] --> B[AI 解決方案生成 Discussion]
    B --> C[想法融合 Summary]
    C --> D[音樂歌詞迭代 Gemini]
    D --> E[最終產出 Suno Music]
    style A fill:none,stroke:#60a5fa,stroke-width:2px,color:#fff
    style B fill:none,stroke:#60a5fa,stroke-width:2px,color:#fff
    style C fill:none,stroke:#60a5fa,stroke-width:2px,color:#fff
    style D fill:none,stroke:#f472b6,stroke-width:2px,color:#fff
    style E fill:none,stroke:#10b981,stroke-width:2px,color:#fff
```

  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col items-center justify-center relative text-center text-white">
  <AuraPill status="active" class="mb-12">Phase 4: Delivery & Caring</AuraPill>
  
  <div class="mb-16 max-w-3xl text-white">
    <h1 class="text-7xl font-black tracking-tighter mb-4 uppercase text-white">Open-Campus Portal</h1>
    <p class="text-slate-400 text-base leading-relaxed text-white opacity-80">我們不只是要做一個平台，而是要重建校園的「幸福傳承」。</p>
  </div>

  <div class="grid grid-cols-3 gap-8 w-full">
    <AuraCard v-for="f in [
      { icon: 'i-carbon:send-alt', title: '匿名傳送門', desc: '打破私藏潛規則，透過 QR Code 讓筆記與趨勢成為真正自由流動的校園公共傳承。' },
      { icon: 'i-carbon:document-sentiment', title: '電子便利貼', desc: '「加油，你一定能撐過這學期」。透過匿名的溫暖留言，建立跨時空的互助情感連結。' },
      { icon: 'i-carbon:network-4', title: '星網效應', desc: '讓校園不再是零和競爭的叢林。認知到成績不完全代表個人價值，穩穩接住每一個無助靈魂。' }
    ]" :key="f.title" class="flex flex-col items-center p-8 transition-all hover:-translate-y-2 border-white/5 hover:border-blue-400/30">
      <div class="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 text-white opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        <div :class="f.icon" class="text-4xl text-white" />
      </div>
      <div class="font-black text-xl text-white mb-4 uppercase tracking-tighter">{{ f.title }}</div>
      <p class="text-xs opacity-70 leading-relaxed text-slate-300 text-white">{{ f.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 h-full text-white">
    <div class="flex flex-col justify-center">
      <h1 class="text-6xl font-black tracking-tighter mb-6 uppercase text-white">Student Response</h1>
      <p class="text-base text-slate-400 mb-10 text-white opacity-80">對原型（Prototype）的真實反饋與洞察紀錄。</p>
      <div class="space-y-4">
        <div class="p-4 border-l-2 border-emerald-400 bg-white/5 rounded-r italic text-xs text-white/70 text-white opacity-90">
          "這正是我們需要的！看到有人願意匿名分享扣分標準，真的很有安全感。"
        </div>
        <div class="p-4 border-l-2 border-amber-400 bg-white/5 rounded-r italic text-xs text-white/70 text-white opacity-90">
          "如果能確保資料不會過期或錯誤就更好了。"
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <AuraFrame class="w-full h-64 border border-dashed border-white/20 flex flex-col items-center justify-center text-slate-500 italic text-sm text-center p-8 bg-black/40 text-white">
        <div class="i-carbon:user-talk text-5xl mb-4 opacity-50 text-blue-400 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        <div class="opacity-60">[ 填寫區：訪談真實同學的回饋紀錄 ]</div>
      </AuraFrame>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white border-b border-white/10 pb-4 text-left">Important Storyboards</h1>

  <div class="grid grid-cols-3 gap-6 h-full mb-8">
    <AuraFrame class="p-0 overflow-hidden relative aspect-square bg-black/60 group border-white/10">
      <img src="./raw_data/images/scene1.png" class="object-cover w-full h-full opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
      <div class="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-[9px] font-mono text-blue-400 uppercase border border-white/10 text-white opacity-90">Scene_01: Library Abyss</div>
    </AuraFrame>
    <AuraFrame class="p-0 overflow-hidden relative aspect-square bg-black/60 group border-white/10">
      <img src="./raw_data/images/scene2.png" class="object-cover w-full h-full opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
      <div class="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-[9px] font-mono text-blue-400 uppercase border border-white/10 text-white opacity-90">Scene_02: Portal Glow</div>
    </AuraFrame>
    <AuraFrame class="p-0 overflow-hidden relative aspect-square bg-black/60 group border-white/10">
      <img src="./raw_data/images/scene3.png" class="object-cover w-full h-full opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
      <div class="absolute bottom-4 left-4 bg-black/80 px-2 py-1 text-[9px] font-mono text-blue-400 uppercase border border-white/10 text-white opacity-90">Scene_03: Archipelago</div>
    </AuraFrame>
  </div>

  <div class="text-[10px] opacity-40 text-left italic font-mono uppercase tracking-[0.2em] text-white">
    // Checkpoint: Recording visual composition ideas & AI iteration process.
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill class="mb-8" status="active">Phase 4: Delivery & Caring</AuraPill>

  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white text-left">Happiness Practice Guide</h1>

  <div class="grid grid-cols-2 gap-8 mt-4 text-white">
    <div class="space-y-6">
      <AuraCard class="p-8 border-l-4 border-l-blue-400 bg-blue-400/5">
        <div class="text-blue-400 font-black text-xl mb-4 uppercase tracking-tighter italic text-white opacity-100">自我照護 (Self-Care)</div>
        <p class="text-xs text-slate-300 leading-loose text-white opacity-80">
          認知到成績不完全代表個人價值，有時候只是系統性的「資訊差」。<br/><br/>
          透過開發本專案，成員學習到如何調節「無法掌控結果」的焦慮，並確信問題根源於體制，減少對自我的質疑與自責。
        </p>
      </AuraCard>
    </div>
    <div class="space-y-6 text-white">
      <AuraCard class="p-8 border-l-4 border-l-pink-400 bg-pink-400/5">
        <div class="text-pink-400 font-black text-xl mb-4 uppercase tracking-tighter italic text-white opacity-100">支持他人 (Caring for Others)</div>
        <p class="text-xs text-slate-300 leading-loose text-white opacity-80">
          方案本質是「接住」那些沒有人脈網路支援的同學。透過匿名便利貼降低求助門檻。<br/><br/>
          讓校園中不再有資訊邊緣人，將私有的「秘笈」轉化為公共資產，讓每個發光的努力都能被彼此看見。
        </p>
      </AuraCard>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill class="mb-8">Appendix A: AI Collaboration Log</AuraPill>
  
  <h1 class="text-5xl font-black tracking-tighter mb-8 uppercase text-white text-left">Prompt List & Benefits</h1>

  <div class="mt-4 flex-1 text-white">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b border-white/10 text-blue-400 font-mono text-[10px] uppercase tracking-widest text-white opacity-90">
          <th class="py-4">Design Phase</th>
          <th class="py-4">Key Prompt Strategy</th>
          <th class="py-4">Optimization Benefit</th>
        </tr>
      </thead>
      <tbody class="text-slate-300 text-[11px] text-white opacity-80">
        <tr class="border-b border-white/5">
          <td class="py-4 font-bold uppercase text-white">同理 / Persona</td>
          <td class="py-4 italic text-white">"你現在是一位深受社交焦慮困擾的..."</td>
          <td class="py-4 text-white">將雜亂訪談收斂成「林小宇」核心情緒</td>
        </tr>
        <tr class="border-b border-white/5">
          <td class="py-4 font-bold uppercase text-white">發想 / Ideate</td>
          <td class="py-4 italic text-white">"請提供 10 個結合心理健康與遊戲化的..."</td>
          <td class="py-4 text-white">突破團隊思維限制，生成傳送門概念</td>
        </tr>
        <tr class="border-b border-white/5">
          <td class="py-4 font-bold uppercase text-white">原型 / Test</td>
          <td class="py-4 italic text-white">"請扮演一位極度挑剔的資深學長..."</td>
          <td class="py-4 text-white">提前預判執行盲點並完成機制優化</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill class="mb-8">Appendix B: Division of Labor</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 mt-12 flex-1 text-white">
    <div class="text-white">
      <div class="text-xs text-blue-400 mb-6 uppercase tracking-[0.4em] font-black italic text-white opacity-90">// Iteration_Log</div>
      <div class="space-y-4 border-l border-white/10 pl-6">
        <div class="relative">
          <div class="absolute -left-[27px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
          <div class="text-xs font-bold text-white uppercase">V1.0 Concept</div>
          <div class="text-[9px] opacity-40 italic mt-1 font-mono uppercase tracking-widest text-white">Initial Brainstorming Complete</div>
        </div>
        <div class="relative">
          <div class="absolute -left-[27px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
          <div class="text-xs font-bold text-white uppercase">V1.5 AI Pivot</div>
          <div class="text-[9px] opacity-40 italic mt-1 font-mono uppercase tracking-widest text-white">Added Knowledge Portal & Persona</div>
        </div>
        <div class="relative">
          <div class="absolute -left-[27px] top-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
          <div class="text-xs font-bold text-white uppercase">V2.0 Final Draft</div>
          <div class="text-[9px] opacity-40 italic mt-1 font-mono uppercase tracking-widest text-white">MV & Story Integration Complete</div>
        </div>
      </div>
    </div>
    <div class="text-white">
      <div class="text-xs text-pink-400 mb-6 uppercase tracking-[0.4em] font-black italic text-white opacity-90">// Division_of_Labor</div>
      <div class="grid grid-cols-1 gap-3">
        <div v-for="name in ['郭彥均', '吳柏宏', '徐愉皓', '洪楷傑']" :key="name" 
             class="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded transition-all hover:bg-white/10">
          <span class="text-xs font-bold text-white">{{ name }}</span>
          <span class="text-[9px] font-mono text-slate-500 uppercase tracking-tighter italic text-white opacity-60 font-bold tracking-widest">Research & Production (25%)</span>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-center items-center justify-center overflow-hidden text-white">
  <AuraBackground />
  <div class="font-mono text-[10px] text-blue-400 uppercase tracking-[0.5em] mb-4 opacity-50 text-white">[ MISSION_COMPLETE ]</div>
  <h1 class="text-[10rem] font-black tracking-tighter leading-[0.8] text-white uppercase mb-8">
    Break the<br/><span class="text-blue-400 text-white opacity-100 font-black tracking-tighter">Bubble.</span>
  </h1>
  <p class="max-w-lg mx-auto text-slate-400 mb-12 text-lg text-white opacity-80 font-bold tracking-tight">讓努力重回應有的對等價值。</p>
  
  <div class="flex flex-col items-center gap-6">
    <AuraPill status="active" class="px-12 py-3 scale-125 border-emerald-400/20 text-emerald-400 text-white shadow-[0_0_20px_rgba(52,211,153,0.3)]">幸福實踐：接住每一個靈魂</AuraPill>
    <div class="text-[9px] font-mono opacity-20 uppercase tracking-[0.5em] mt-8 text-white">© 2026 Campus Temperature Designers</div>
  </div>
</div>
