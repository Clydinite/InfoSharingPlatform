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

<div class="h-full w-full p-16 flex flex-col justify-center text-left relative overflow-hidden text-white">
  <div class="relative z-10 max-w-4xl">
    <AuraPill status="active" class="mb-8 text-white">Initialize Presentation</AuraPill>
    <h1 class="text-8xl font-black tracking-tighter mb-4 leading-[0.9] uppercase">
      Break the<br/>
      <span class="text-blue-400">Bubble.</span>
    </h1>
    <p class="text-xl text-slate-400 max-w-lg leading-relaxed mb-10 text-white opacity-80">
      大學裡的成績競爭，往往不是「努力程度」的競爭，而是「人脈與資訊」的競爭。
    </p>
    <AuraStatus class="text-white opacity-60">Version 1.0.7 // Design_Thinking_Phase_Focus</AuraStatus> 
    <div class="mt-4 text-[10px] font-mono tracking-widest text-slate-500 uppercase font-bold">
      Designers: 郭彥均 / 吳柏宏 / 徐愉皓 / 洪楷傑
    </div>
  </div>
</div>

<AuraGlobe />

---

<div class="h-full w-full p-12 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-4">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-6 uppercase text-left flex items-center gap-4">
    <i class="i-carbon:brain-circuit text-blue-400"></i> Team Brainstorming
  </h1>
  <div class="grid grid-cols-2 gap-4 flex-1 text-white">
    <AuraCard v-for="m in [
      { name: '郭彥均', major: '化學系', title: '破碎資源與低投報勞動', desc: '實驗課僅 1 學分，卻需耗費 6+ 小時抄寫結預報。資源破碎不共享，努力在繁瑣勞動中被磨損。', color: 'text-blue-400', border: 'hover:border-blue-400/40' },
      { name: '吳柏宏', major: '化工系', title: '量多質重複的窒息感', desc: '必修與選修內容高度重疊。在 AI 時代仍被迫背誦瑣碎知識，缺乏實作導向的優化學習路徑。', color: 'text-emerald-400', border: 'hover:border-emerald-400/40' },
      { name: '徐愉皓', major: '機械系', title: '同儕競爭與知識工具化', desc: '必修比例過高導致學習淪為應付考試。資源分配不均，理論與實作斷裂，學了卻不知道怎麼用。', color: 'text-amber-400', border: 'hover:border-amber-400/40' },
      { name: '洪楷傑', major: '生科系', title: '人脈即分數的壟斷', desc: '有無考古題極大影響成績公平性。教授隱藏教材規則強迫聽課，卻讓沒人脈的學生陷入迷失。', color: 'text-pink-400', border: 'hover:border-pink-400/40' }
    ]" :key="m.name" class="p-8 transition-all hover:bg-white/10 hover:-translate-y-1" :class="m.border">
      <div class="flex justify-between items-start mb-4 border-b border-white/10 pb-2">
        <div class="font-semibold uppercase text-[10px] tracking-[0.3em] opacity-100" :class="m.color">{{ m.name }} // {{ m.major }}</div>
      </div>
      <div class="text-lg font-semibold text-white mb-2 leading-tight uppercase tracking-tighter flex items-center gap-2">
        <i class="i-carbon:tag text-xs text-slate-500"></i> {{ m.title }}
      </div>
      <p class="text-xs opacity-70 leading-relaxed text-slate-300">{{ m.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-8 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-7xl font-semibold tracking-tighter mb-6 leading-tight uppercase text-white">Issue Summary</h1>
  <p class="text-sm text-slate-400 leading-relaxed mb-10 text-white opacity-70">
    問題根源：高教制度與社會期待的錯位，導致學生承擔了結構性的「隱形勞動」。
  </p>
  <div class="grid grid-cols-2 gap-12 items-start h-full">
    <div class="flex flex-col justify-center h-full text-white">
      <div class="space-y-6 p-6">
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-semibold text-md uppercase">資源門檻化</div>
            <div class="text-xs text-slate-500 text-white opacity-70">人脈與資訊差取代了努力的價值。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-semibold text-md uppercase">時間貧窮</div>
            <div class="text-xs text-slate-500 text-white opacity-70">高強度課後負擔侵蝕了學生的自主權。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-semibold text-md uppercase">孤島效應</div>
            <div class="text-xs text-slate-500 text-white opacity-70">缺乏人脈支持的同學淪為資訊邊緣人。</div>
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
  <div class="flex flex-col items-center gap-8">
    <div class="grid grid-cols-4 gap-8">
      <div v-for="name in ['郭彥均', '吳柏宏', '徐愉皓', '洪楷傑']" :key="name" 
           class="w-32 h-24 border border-blue-400/50 bg-blue-400/5 rounded-lg flex items-center justify-center text-md text-white font-semibold tracking-widest transition-all hover:bg-blue-400/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        {{ name }}
      </div>
    </div>
    <div class="flex flex-col items-center animate-pulse text-blue-400">
      <div class="i-carbon:arrow-down text-5xl mb-4 text-blue-400 opacity-80" />
      <div class="font-mono text-sm tracking-[0.4em] uppercase font-semibold text-white opacity-60 text-white shadow-black">Synthesizing Data Points</div>
    </div>
    <AuraFrame class="px-20 py-8 bg-black/60 shadow-[0_0_50px_rgba(59,130,246,0.1)] border-blue-400/20 rounded-xl backdrop-blur-md">
      <div class="flex flex-col gap-2 items-center text-center">
        <AuraStatus class="mb-2 text-white font-mono opacity-80">Virtual Persona Synthesized</AuraStatus>
        <div class="text-6xl font-semibold tracking-tighter uppercase mt-2 text-white shadow-black drop-shadow-2xl">林小宇</div>
        <div class="text-sm opacity-60 mt-1 tracking-widest text-white uppercase font-mono font-semibold tracking-[0.2em]">Student Persona Alpha</div>
      </div>
    </AuraFrame>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-6 leading-tight uppercase text-white">Persona Context</h1>
  <div class="grid grid-cols-2 gap-12 items-start">
    <div class="flex flex-col justify-center">
      <p class="text-sm text-slate-300 leading-relaxed mb-6 text-white opacity-70">
        林小宇抽到了不回訊息的「幽靈直屬」，面對 1 學分卻需耗費 6 小時的實驗課，他必須獨自查閱繁雜的 MSDS 資訊並手寫預報。
      </p>
      <div class="space-y-4">
        <div class="p-4 border-l-2 border-blue-400 bg-white/5 rounded-r">
          <div class="text-blue-400 text-[10px] font-semibold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Frustration</div>
          <div class="text-xs text-white opacity-70 leading-relaxed text-white">
            "按部就班每一步都很合理，卻摸不透教授隱藏的扣分標準，總是得不到應有的分數。"
          </div>
        </div>
        <div class="p-4 border-l-2 border-pink-400 bg-white/5 rounded-r">
          <div class="text-pink-400 text-[10px] font-semibold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Gap</div>
          <div class="text-xs text-white opacity-70 leading-relaxed text-white">
            "同班那些跟學長姐混得很熟的同學，拿著內線考古題與模板提早交卷，去慶祝勝利。"
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 h-full justify-center">
      <AuraFrame class="aspect-[4/3] flex items-center justify-center bg-black/80 overflow-hidden relative group border-white/5">
         <img src="./raw_data/images/user_persona.png" class="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
         <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
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
  <AuraPill status="info" class="mb-8">Phase 1: Empathy & Define</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-12 uppercase text-white">Stakeholder Map</h1>
  <div class="h-[45vh] flex items-center justify-center">
  <div class="scale-250%">

```mermaid
graph LR
    subgraph Core [【 核心圈：直接體驗與互助層 】]
        XY((林小宇<br>大一化學系新生))
        QQ((晴晴<br>同屆新生/受助者))
        ANON_SJ((匿名學長姐<br>開源筆記提供者))
        OC_PLAT[Open-Campus<br>匿名資訊分享平台]
    end

    subgraph Direct [【 直接圈：校園人際與對比生態 】]
        TA((實驗課助教 TA<br>掌管結報評分))
        GHOST_SJ((幽靈直屬學長<br>斷裂的傳承))
        XC_PEERS((班上現充同學<br>靠人脈拿模板))
    end

    subgraph Indirect [【 間接圈：制度與壓力來源 】]
        PROF((化學系教授<br>訂定評分規則))
        SYS((大學體制<br>畢業門檻/學分壓力))
    end

    XY <-->|掃碼下載 / 匿名上傳| OC_PLAT
    ANON_SJ -->|貢獻普化實驗重點| OC_PLAT
    OC_PLAT -->|解救實驗數據| QQ
    XY -.->|深夜螢幕共鳴| QQ
    GHOST_SJ -.->|冷漠/零互動| XY
    XC_PEERS -->|限動炫耀考古題| XY
    TA -->|狂扣結報分數| XY
    TA -.->|私下傳承模板| XC_PEERS
    PROF -->|評分標準施壓| TA
    SYS -->|必修課負擔| XY

    style OC_PLAT fill:#34d399,stroke:#065f46,color:#fff
    style XY fill:#60a5fa,stroke:#1e3a8a,color:#fff
    style QQ fill:#60a5fa,stroke:#1e3a8a,color:#fff
    style ANON_SJ fill:#60a5fa,stroke:#1e3a8a,color:#fff
    style TA fill:#f472b6,stroke:#831843,color:#fff
    style GHOST_SJ fill:#f472b6,stroke:#831843,color:#fff
    style XC_PEERS fill:#f472b6,stroke:#831843,color:#fff
    style PROF fill:#9ca3af,stroke:#374151,color:#fff
    style SYS fill:#9ca3af,stroke:#374151,color:#fff
```

  </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 2: Ideate</AuraPill>
  
  <div class="flex flex-col justify-center h-full max-w-5xl mx-auto">
    <div class="mb-12">
      <h1 class="text-6xl font-semibold tracking-tighter mb-4 uppercase text-white">Jobs To Be Done</h1>
      <p class="text-slate-400 opacity-70 text-white">我們如何讓努力重回應有的價值？</p>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <AuraCard v-for="(job, i) in [
        { type: '功能需求', goal: '快速獲取精華重點、避開重複摸索的無效工時。' },
        { type: '功能需求', goal: '獲取教授隱藏的扣分標準與歷年實驗地雷。' },
        { type: '情感需求', goal: '不再感到被制度排擠，降低對未來不確定性的焦慮。' },
        { type: '情感需求', goal: '獲得公平競爭的安心感與努力方向的確定感。' }
      ]" :key="i" class="p-6">
        <div class="text-sm font-semibold mb-2 opacity-90" 
             :class="job.type === '功能需求' ? 'text-blue-400 ' : 'text-pink-400'">
          {{ job.type }}
        </div>
        <p class="text-xs text-white leading-relaxed opacity-70">{{ job.goal }}</p>
      </AuraCard>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-center items-center justify-center text-white">
  <AuraPill status="info" class="mb-8">Phase 2: Ideate</AuraPill>
  <AuraCard class="p-12 max-w-4xl border-blue-400/30 bg-blue-400/5">
    <div class="text-sm text-blue-400 uppercase tracking-[0.3em] mb-6 font-mono font-semibold text-white opacity-90">How Might We</div>
    <h2 class="text-6xl font-semibold leading-[1.1] tracking-tighter">
      我們如何建立一個<br/>
      <span class="text-blue-400 font-semibold">去中心化</span>的校園知識共享機制，<br/>
      打破人際圈的壁壘？
    </h2>
  </AuraCard>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center">
    <div class="flex flex-col justify-center">
      <h1 class="text-7xl font-semibold tracking-tighter mb-8 uppercase text-white leading-[0.85]">The<br/><span class="text-blue-400">Story</span></h1>
      <p class="text-lg text-slate-300 mb-5 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 text-white opacity-70">
        「從一座注定被淹沒的孤島，到發現彼此連結的星網。」
      </p>
      <div class="space-y-3">
        <div v-for="(item, i) in ['深淵：小宇熬夜手寫預報，眼看別人輕鬆宵夜。', '微光：發現 QR Code，看見陌生學長姐留下的溫暖。', '接住：小宇上傳防呆筆記，接住了同樣崩潰的晴晴。', '共創：校園不再是叢林，而是互相支撐的共好圈。']" 
             :key="i" v-click class="flex gap-4 items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
          <span class="text-xs text-white opacity-70">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 justify-center">
      <AuraFrame class="p-0 overflow-hidden bg-black/60 aspect-video flex items-center justify-center border-white/5">
        <img src="./raw_data/images/light.png" class="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
      </AuraFrame>
      <SystemLog v-click :logs="[
        { time: 'EVENT_01', msg: '晴晴上傳了防呆筆記。' },
        { time: 'EVENT_02', msg: '林小宇掃描了匿名分享傳送門。' },
        { time: 'EVENT_03', msg: '下載檔案：化學實驗重點筆記.pdf' },
        { time: 'FEEDBACK', msg: '林小宇：你的筆記救了我的實驗！😭' }
      ]" />
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-6 uppercase text-white">Interview Flow</h1>
  <div class="bg-white/5 border border-white/10 p-8 rounded-lg flex items-center justify-center h-80">
  <div class="scale-200">

```mermaid
graph LR
    A[Persona 資料] --> C((Gemini AI))
    B[角色故事與情境] --> C
    C --> D[互動對話輸出]
    D --> E((回饋迭代))
    E --> C
    style C fill:#1e3a8a,stroke:#60a5fa,color:#fff
    style A fill:#4c1d95,stroke:#8b5cf6,color:#fff
    style B fill:#4c1d95,stroke:#8b5cf6,color:#fff
    style D fill:#831843,stroke:#ec4899,color:#fff
    style E fill:#065f46,stroke:#34d399,color:#fff
```

  </div>
</div>

---

<div class="h-full w-full p-8 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-8 uppercase text-white">Interview: Core Problem</h1>
  <div class="grid grid-cols-2 gap-12">
    <div class="flex flex-col justify-center space-y-6">
      <div class="p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
        <h3 class="text-blue-400 font-semibold mb-2">核心洞察：資訊不對稱的剝奪感</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">林小宇面臨的最大痛苦並非課業本身，而是「努力被廉價化」。當他獨自花費 6 小時查閱 MSDS 時，現充同學僅靠「祖傳模板」即可輕鬆獲取 A+，這種結構性的不公平導致了強烈的孤立感與自我懷疑。</p>
      </div>
      <div class="p-6 bg-pink-900/20 border border-pink-500/30 rounded-xl">
        <h3 class="text-pink-400 font-semibold mb-2">堅持的動力</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">支撐他堅持下去的並非熱情，而是「不甘心」。他不相信認真的人注定被淹沒，直到在走廊發現 QR Code，才第一次感受到被接住的溫度。</p>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="w-[400px] h-[300px] bg-black/80 rounded-[1rem] border-8 border-slate-800 p-6 overflow-y-auto shadow-2xl">
        <div class="flex flex-col gap-4">
          <div v-for="(chat, i) in [
            { user: 'User', msg: '剛進大一的時候，你面臨最核心的問題是什麼？', isUser: true },
            { user: '林小宇', msg: '我覺得……最核心的問題是「資訊不對稱帶來的強烈剝奪感」。我一個人坐在 K 書中心查 MSDS、手寫步驟，每一次都花超過 6 個小時，寫到眼睛都是血絲。但我根本不知道那些教授和助教心裡「隱藏的扣分標準」是什麼。', isUser: false },
            { user: '林小宇', msg: '最讓我痛苦的是，那些提早加入宿營、很會跟學長姐打交道社交的同學，他們明明沒花多少時間，只是複製貼上學長姐私下傳承的「祖傳完美結報模板」，就能輕鬆拿到 A+。', isUser: false },
            { user: 'User', msg: '但究竟是什麼原因，讓你那時候還能選擇繼續堅持下去？', isUser: true },
            { user: '林小宇', msg: '我不斷問自己：「我辛辛苦苦考上這間大學，難道我的努力真的這麼廉價、這麼不值錢嗎？」我不相信認真的人注定只能被淹沒。直到後來在走廊散心時看到那個 QR Code，抱著最後一絲希望點進平台……我才第一次感覺到自己冰冷的手掌裡有了一點溫度。', isUser: false }
          ]" :key="i" class="flex flex-col" :class="chat.isUser ? 'items-end' : 'items-start'">
            <div class="text-[8px] font-semibold uppercase mb-1" :class="chat.isUser ? 'text-blue-400' : 'text-pink-400'">{{ chat.user }}</div>
            <div class="px-3 py-2 rounded-xl text-[10px] max-w-[90%]" :class="chat.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white/10 text-slate-100 rounded-bl-none'">
              {{ chat.msg }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-8 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-4 uppercase text-white">Interview: Platform's Role</h1>
  <div class="grid grid-cols-2 gap-12 h-[60vh]">
    <div class="flex flex-col justify-center space-y-6">
      <div class="p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
        <h3 class="text-blue-400 font-semibold mb-2">匿名性的關鍵意義</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">對林小宇而言，匿名是「保護衣」。實體讀書會對他來說是高壓的社交修羅場，而匿名平台則打破了人脈特權，讓他能在不需討好他人的情況下，安全地獲取知識並貢獻微光。</p>
      </div>
      <div class="p-6 bg-pink-900/20 border border-pink-500/30 rounded-xl">
        <h3 class="text-pink-400 font-semibold mb-2">歸屬感的建立</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">平台不僅是工具，更是歸屬。當他收到其他同學「謝謝原 PO 救了我」的留言時，他第一次感受到自己不需要改變內向個性，也能在大學裡找到價值。</p>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="w-[400px] h-[300px] bg-black/80 rounded-[1rem] border-8 border-slate-800 p-6 overflow-y-auto shadow-2xl">
        <div class="flex flex-col gap-4">
          <div v-for="(chat, i) in [
            { user: 'User', msg: '你會說，那時候的你會想要參加一個實體的讀書會嗎？', isUser: true },
            { user: '林小宇', msg: '說實話……那時候的我，其實對「實體讀書會」是充滿抗拒和恐懼的。如果我在讀書會裡問了一個大家都懂、只有我不懂的實驗盲點，大家會不會覺得我很笨？會不會在背後貼我標籤？', isUser: false },
            { user: 'User', msg: '啊，所以這就是這個平台對你來說這麼有用的原因，對吧？', isUser: true },
            { user: '林小宇', msg: '對，完全沒錯。它把原本被少數現充圈子壟斷的學長姐資源，變成了每個人都能平等拿到的東西。我不需要去討好任何人，不需要假裝自己很外向，只要掃個碼，就能拿到真正有用的普化實驗重點。', isUser: false },
            { user: 'User', msg: '對你而言，「匿名」這件事究竟有什麼特別的意義和重要性？', isUser: true },
            { user: '林小宇', msg: '「匿名」就像是一件保護衣，也是唯一能讓我卸下防備的避風港。在匿名的世界裡，我不需要去嫉妒那些有考古題的同學，因為在網頁上，我跟每個人都一樣平等。', isUser: false }
          ]" :key="i" class="flex flex-col" :class="chat.isUser ? 'items-end' : 'items-start'">
            <div class="text-[8px] font-semibold uppercase mb-1" :class="chat.isUser ? 'text-blue-400' : 'text-pink-400'">{{ chat.user }}</div>
            <div class="px-3 py-2 rounded-xl text-[10px] max-w-[90%]" :class="chat.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white/10 text-slate-100 rounded-bl-none'">
              {{ chat.msg }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-8 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-4 uppercase text-white">Interview: Risks & Reality</h1>
  <div class="grid grid-cols-2 gap-12 h-[60vh]">
    <div class="flex flex-col justify-center space-y-6">
      <div class="p-6 bg-blue-900/20 border border-blue-500/30 rounded-xl">
        <h3 class="text-blue-400 font-semibold mb-2">分布式作弊網路的諷刺</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">實體直屬制度在現實中反而成了「分布式作弊網路」，每個人抄不同模板以分散風險。而集中式的匿名平台若被濫用，反而會因「答案趨同」而成為教授眼中的標靶。</p>
      </div>
      <div class="p-6 bg-pink-900/20 border border-pink-500/30 rounded-xl">
        <h3 class="text-pink-400 font-semibold mb-2">無惡意的毀滅</h3>
        <p class="text-xs text-slate-300 leading-relaxed opacity-70">「伸手黨巨嬰化」、「全班答案趨同」以及「過度推廣」，這些無惡意的行為往往才是毀滅互助生態系的最快路徑。平台必須培養「拿了火把，就要自己去探路」的文化。</p>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="w-[400px] h-[300px] bg-black/80 rounded-[1rem] border-8 border-slate-800 p-6 overflow-y-auto shadow-2xl">
        <div class="flex flex-col gap-4">
          <div v-for="(chat, i) in [
            { user: 'User', msg: '我覺得直屬制度的另一個目的，是為了防止教授發現每個人都在抄襲，因為每個人抄的都是不同學長姐的模板。', isUser: true },
            { user: '林小宇', msg: '（苦笑）天啊。你這個觀點……真的太一針見血、太諷刺了。原來實體的直屬制度，在現實中反而變成了一種「精準的分布式作弊網路」。這種分散的結構，反而成了那些現充同學最好的「防彈衣」。', isUser: false },
            { user: 'User', msg: '哇，這確實是我們從來沒想過的事情。那你會怎麼說，如果有人「甚至在沒有惡意的情況下」，也可能不小心毀掉這個平台？', isUser: true },
            { user: '林小宇', msg: '第一，是「過度依賴造成的伸手黨巨嬰化」。第二，是「全班答案趨同化的自爆效應」。第三，是「出於炫耀或好心的過度推廣」。這些無惡意的破壞，往往才是把一個脆弱的互助生態系推向毀滅的最快方法。', isUser: false },
            { user: 'User', msg: '謝謝你指出這一點。這確實會是一個很大的問題。', isUser: true },
            { user: '林小宇', msg: '如果這個平台未來要活下去，我們得想辦法在平台上培養出一種「拿了火把，就要自己去探路」的社群文化。只有每個人都保持獨立思考，我們才能在匿名的保護下，既拿到好成績，又安全地隱藏在教授的雷達之外。', isUser: false }
          ]" :key="i" class="flex flex-col" :class="chat.isUser ? 'items-end' : 'items-start'">
            <div class="text-[8px] font-semibold uppercase mb-1" :class="chat.isUser ? 'text-blue-400' : 'text-pink-400'">{{ chat.user }}</div>
            <div class="px-3 py-2 rounded-xl text-[10px] max-w-[90%]" :class="chat.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white/10 text-slate-100 rounded-bl-none'">
              {{ chat.msg }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center h-full">
    <div class="flex flex-col justify-center text-white">
      <h1 class="text-6xl font-semibold tracking-tighter mb-8 uppercase text-white leading-tight">Music:<br/><span class="text-blue-400">《連上彼此》</span></h1>
      <p class="text-lg text-slate-300 mb-8 border-l-2 border-blue-400 pl-6 bg-blue-500/5 py-4">
        「原來這座孤島 終於連成了群，原來我從未真正 一個人 走過這場雨。」
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <AuraCard class="p-8 bg-black/40">
        <blockquote class="text-sm leading-loose m-0 text-white opacity-90">
          凌晨兩點的圖書館，螢幕亮著還沒關<br/>
          一學分像一座山，壓得人快失去方向<br/>
          有人早就拿到答案，而我還在反覆試算<br/>
          努力是不是太廉價？孤單的人沒人回答
        </blockquote>
      </AuraCard>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <h1 class="text-6xl font-semibold tracking-tighter mb-12 uppercase text-white border-b border-white/10 pb-4 text-left">Important Storyboards</h1>

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
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-12 uppercase text-white">Persona Verification</h1>
  <div class="grid grid-cols-2 gap-8">
    <AuraCard class="p-6">
      <div class="text-blue-400 font-semibold mb-2">關於「匿名」的必要性</div>
      <p class="text-sm opacity-80 leading-relaxed text-slate-300">「如果平台需要實名，我絕對不敢點進去。匿名是我唯一的避風港，它讓我可以不用假裝堅強，單純地在深夜被別人的善意接住。」</p>
    </AuraCard>
    <AuraCard class="p-6">
      <div class="text-pink-400 font-semibold mb-2">關於平台的隱憂</div>
      <p class="text-sm opacity-80 leading-relaxed text-slate-300">「如果大家都把這裡當作『抄答案』的新途徑，那我們的集體趨同只會引來教授的全面封殺。我們必須學會『保持獨立思考』。」</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Iteration</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-8 uppercase text-white">Pivot: The Rejected Idea</h1>
  
  <div class="grid grid-cols-2 gap-12 items-center">
    <AuraCard class="p-8 border-l-4 border-l-red-500 bg-red-500/5">
      <div class="text-red-400 font-semibold text-xl mb-4 uppercase flex items-center gap-2">
        <div class="i-carbon:close-filled" /> 原型構想：實體讀書會
      </div>
      <p class="text-sm opacity-80 leading-relaxed text-slate-300 mb-4">
        我們最初假設：建立一個「In-Person Study Group（實體讀書會）」能解決學生的課業孤島問題，透過面對面交流傳承知識。
      </p>
      <div class="text-xs text-red-300 bg-red-900/30 p-3 rounded">
        Result: Rejected by Persona
      </div>
    </AuraCard>
    <div class="flex flex-col gap-4">
      <div class="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-2 font-mono">Persona Interview Feedback</div>
      <div class="p-5 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm text-slate-200">
        「對我這種內向又不太會社交的人，要主動走進一個實體的群體裡，心理壓力真的非常大。如果我在讀書會裡問了一個大家都懂的盲點，大家會不會覺得我很笨？」
      </div>
      <div class="p-5 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm text-slate-200">
        「在被平台『接住』之前，比起實體讀書會，我寧可選擇在深夜裡一個人當孤島。」
      </div>
      <div class="mt-2 text-emerald-400 font-semibold flex items-center gap-2">
        <div class="i-carbon:arrow-right" /> 結論：轉向去中心化的「匿名線上平台」
      </div>
    </div>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col items-center justify-center relative text-center text-white">
  <AuraPill status="active" class="mb-6 w-full">Phase 4: Delivery & Caring</AuraPill>
  
  <div class="mb-6 max-w-3xl text-white">
    <h1 class="text-6xl font-semibold tracking-tighter mb-8 uppercase text-white">Open-Campus Platform</h1>
    <p class="text-slate-400 text-base leading-relaxed text-white opacity-80">我們不只是要做一個平台，而是要重建校園的「幸福傳承」。</p>
  </div>

  <div class="grid grid-cols-3 gap-6 w-full">
    <AuraCard v-for="f in [
        { icon: 'i-carbon:send-alt', title: '匿名傳送門', desc: '打破私藏潛規則，透過 QR Code 讓筆記與趨勢成為真正自由流動的校園公共傳承。' },
        { icon: 'i-carbon:document-sentiment', title: '電子便利貼', desc: '「加油，你一定能撐過這學期」。透過匿名的溫暖留言，建立跨時空的互助情感連結。' },
        { icon: 'i-carbon:network-4', title: '星網效應', desc: '讓校園不再是零和競爭的叢林。認知到成績不完全代表個人價值，穩穩接住每一個無助靈魂。' }
      ]" :key="f.title" class="flex flex-col items-center p-8 transition-all hover:-translate-y-2 border-white/5 hover:border-blue-400/30">
        <div class="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 text-white opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          <div :class="f.icon" class="text-4xl text-white" />
        </div>
        <div class="font-semibold text-xl text-white mb-4 uppercase tracking-tighter">{{ f.title }}</div>
        <p class="text-xs opacity-70 leading-relaxed text-slate-300 text-white">{{ f.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill class="mb-8" status="active">Phase 4: Delivery & Caring</AuraPill>
  <h1 class="text-6xl font-semibold tracking-tighter mb-12 uppercase text-white">Happiness Practice Guide</h1>
  <div class="grid grid-cols-2 gap-8 text-white">
    <AuraCard class="p-8 border-l-4 border-l-blue-400 bg-blue-400/5">
      <div class="text-blue-400 font-semibold text-xl mb-4 uppercase">自我照護 (Self-Care)</div>
      <p class="text-xs leading-loose opacity-80">
        認清體制性的「資訊差」，減少對自我能力的質疑。我們不僅優化學習，更守護情緒。
      </p>
    </AuraCard>
    <AuraCard class="p-8 border-l-4 border-l-pink-400 bg-pink-400/5">
      <div class="text-pink-400 font-semibold text-xl mb-4 uppercase">支持他人 (Caring for Others)</div>
      <p class="text-xs leading-loose opacity-80">
        讓私有「秘笈」轉化為公共資產，讓邊緣人不再孤單，每個人的努力都能被看見。
      </p>
    </AuraCard>
  </div>
</div>
