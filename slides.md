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
    <h1 class="text-8xl font-black tracking-tighter mb-4 leading-[0.9] text-white uppercase">
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

---

<!-- TODO: add more colors in theme -->

<div class="h-full w-full p-12 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-4">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-6 uppercase text-left flex items-center gap-4">
    <i class="i-carbon:brain-circuit text-blue-400"></i> Team Brainstorming
  </h1>
  <div class="grid grid-cols-2 gap-4 flex-1 text-white">
    <AuraCard v-for="m in [
      { name: '郭彥均', major: '化學系', title: '破碎資源與低投報勞動', desc: '實驗課僅 1 學分，卻需耗費 6+ 小時抄寫結預報。資源破碎不共享，努力在繁瑣勞動中被磨損。' },
      { name: '吳柏宏', major: '化工系', title: '量多質重複的窒息感', desc: '必修與選修內容高度重疊。在 AI 時代仍被迫背誦瑣碎知識，缺乏實作導向的優化學習路徑。' },
      { name: '徐愉皓', major: '機械系', title: '同儕競爭與知識工具化', desc: '必修比例過高導致學習淪為應付考試。資源分配不均，理論與實作斷裂，學了卻不知道怎麼用。' },
      { name: '洪楷傑', major: '生科系', title: '人脈即分數的壟斷', desc: '有無考古題極大影響成績公平性。教授隱藏教材規則強迫聽課，卻讓沒人脈的學生陷入迷失。' }
    ]" :key="m.name" class="p-8 transition-all hover:bg-white/10 hover:border-blue-400/40 hover:-translate-y-1">
      <div class="flex justify-between items-start mb-4 border-b border-white/10 pb-2">
        <div class="text-blue-400 font-semibold uppercase text-[10px] tracking-[0.3em] text-white opacity-100">{{ m.name }} // {{ m.major }}</div>
      </div>
      <div class="text-lg font-semibold text-white mb-2 leading-tight uppercase tracking-tighter flex items-center gap-2">
        <i class="i-carbon:tag text-xs text-slate-500"></i> {{ m.title }}
      </div>
      <p class="text-[11px] opacity-80 leading-relaxed text-slate-300 font-bold">{{ m.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<div class="h-full w-full p-8 flex flex-col relative text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-7xl font-semibold tracking-tighter mb-6 leading-tight uppercase text-white">Issue Summary</h1>
  <p class="text-base text-slate-400 leading-relaxed mb-10 text-white opacity-80">
    問題根源：高教制度與社會期待的錯位，導致學生承擔了結構性的「隱形勞動」。
  </p>
  <div class="grid grid-cols-2 gap-12 items-start h-full">
    <div class="flex flex-col justify-center h-full text-white">
      <div class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-md uppercase">資源門檻化</div>
            <div class="text-sm text-slate-500 text-white opacity-60">人脈與資訊差取代了努力的價值。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-md uppercase">時間貧窮</div>
            <div class="text-sm text-slate-500 text-white opacity-60">高強度課後負擔侵蝕了學生的自主權。</div>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.8)] text-white"></div>
          <div>
            <div class="text-white font-bold text-md uppercase">孤島效應</div>
            <div class="text-sm text-slate-500 text-white opacity-60">缺乏人脈支持的同學淪為資訊邊緣人。</div>
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
      <div class="font-mono text-sm tracking-[0.4em] uppercase font-bold text-white opacity-60 text-white shadow-black">Synthesizing Data Points</div>
    </div>
    <AuraFrame class="px-20 py-8 bg-black/60 shadow-[0_0_50px_rgba(59,130,246,0.1)] border-blue-400/20 rounded-xl backdrop-blur-md">
      <div class="flex flex-col gap-2 items-center text-center">
        <AuraStatus class="mb-2 text-white font-mono opacity-80">Virtual Persona Synthesized</AuraStatus>
        <div class="text-6xl font-bold tracking-tighter uppercase mt-2 text-white shadow-black drop-shadow-2xl">林小宇</div>
        <div class="text-sm opacity-60 mt-1 tracking-widest text-white uppercase font-mono font-bold tracking-[0.2em]">Student Persona Alpha</div>
      </div>
    </AuraFrame>
  </div>
</div>

---

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathize & Define</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-6 leading-tight uppercase text-white">Persona Context</h1>
  <div class="grid grid-cols-2 gap-12 items-start">
    <div class="flex flex-col justify-center">
      <p class="text-base text-slate-300 leading-relaxed mb-6 text-white opacity-80">
        林小宇抽到了不回訊息的「幽靈直屬」，面對 1 學分卻需耗費 6 小時的實驗課，他必須獨自查閱繁雜的 MSDS 資訊並手寫預報。
      </p>
      <div class="space-y-4">
        <div class="p-4 border-l-2 border-blue-400 bg-white/5 rounded-r">
          <div class="text-blue-400 text-[10px] font-bold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Frustration</div>
          <div class="text-xs text-white opacity-80 leading-relaxed text-white">
            "按部就班每一步都很合理，卻摸不透教授隱藏的扣分標準，總是得不到應有的分數。"
          </div>
        </div>
        <div class="p-4 border-l-2 border-pink-400 bg-white/5 rounded-r">
          <div class="text-pink-400 text-[10px] font-bold uppercase mb-1 font-mono tracking-widest opacity-90 text-white">The Gap</div>
          <div class="text-xs text-white opacity-80 leading-relaxed text-white">
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

<!-- Stakeholder Map -->
<!-- Stakeholder Map -->
<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 1: Empathy & Define</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white">Stakeholder Map</h1>
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

<!-- A redesign of the visualization is required here. -->

<div class="h-full w-full p-16 flex flex-col relative text-center items-center justify-center text-white">
  <AuraPill status="info" class="mb-8">Phase 2: Ideate</AuraPill>
  <AuraCard class="p-12 max-w-4xl border-blue-400/30 bg-blue-400/5">
    <div class="text-sm text-blue-400 uppercase tracking-[0.3em] mb-6 font-mono font-bold text-white opacity-90">How Might We</div>
    <h2 class="text-6xl font-bold leading-[1.1] tracking-tighter">
      我們如何建立一個<br/>
      <span class="text-blue-400">去中心化</span>的校園知識共享機制，<br/>
      打破人際圈的壁壘？
    </h2>
  </AuraCard>
</div>

---

<!-- Change the story to him using the resources from the platform. and only supply the notes when he got better. -->

<!-- The story iteration also requires a mermaid diagram. we first used our experiences to generate the persona. then we used gemini ai to generate the story. then we used gemini to generate the lyrics and suno ai to realize the music. the process of suno ai and gemini ai lyrics generation is iterative. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center">
    <div class="flex flex-col justify-center">
      <h1 class="text-7xl font-black tracking-tighter mb-8 uppercase text-white leading-[0.85]">The<br/><span class="text-blue-400">Story</span></h1>
      <p class="text-lg text-slate-300 mb-5 leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 text-white opacity-90">
        「從一座注定被淹沒的孤島，到發現彼此連結的星網。」
      </p>
      <div class="space-y-3">
        <div v-for="(item, i) in ['深淵：小宇熬夜手寫預報，眼看別人輕鬆宵夜。', '微光：發現 QR Code，看見陌生學長姐留下的溫暖。', '接住：小宇上傳防呆筆記，接住了同樣崩潰的晴晴。', '共創：校園不再是叢林，而是互相支撐的共好圈。']" 
             :key="i" v-click class="flex gap-4 items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"></div>
          <span class="text-sm font-medium text-white opacity-90">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 justify-center">
      <AuraFrame class="p-0 overflow-hidden bg-black/60 aspect-video flex items-center justify-center border-white/5">
        <img src="./raw_data/images/light.png" class="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" />
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

  <div class="text-[10px] opacity-40 text-left font-mono uppercase tracking-[0.2em] text-white">
    // Checkpoint: Recording visual composition ideas & AI iteration process.
  </div>
</div>

---

<!-- This should be integrated into the interview section. It feels disjointed as it is right now. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test // Persona Verification</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white">Interview</h1>
  <div class="grid grid-cols-2 gap-8">
    <AuraCard class="p-6">
      <div class="text-blue-400 font-bold mb-2">關於「匿名」的必要性</div>
      <p class="text-sm opacity-80 leading-relaxed text-slate-300">「如果平台需要實名，我絕對不敢點進去。匿名是我唯一的避風港，它讓我可以不用假裝堅強，單純地在深夜被別人的善意接住。」</p>
    </AuraCard>
    <AuraCard class="p-6">
      <div class="text-pink-400 font-bold mb-2">關於平台的隱憂</div>
      <p class="text-sm opacity-80 leading-relaxed text-slate-300">「如果大家都把這裡當作『抄答案』的新途徑，那我們的集體趨同只會引來教授的全面封殺。我們必須學會『保持獨立思考』。」</p>
    </AuraCard>
  </div>
</div>

---

<!-- Methodology Diagram -->
<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Research Methodology</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-6 uppercase text-white">Interaction Flow</h1>
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
</div>

---

<!-- FIXME: The chat is too fake. you should use the real data. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="warning" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-8 uppercase text-white">Chat Record</h1>
  <div class="space-y-6 overflow-y-auto max-h-[50vh] pr-4">
    <!-- 1 -->
    <div class="flex flex-col gap-1">
      <div class="text-[10px] text-blue-400 font-bold uppercase">User</div>
      <div class="p-4 bg-white/10 rounded-lg text-sm italic">"你知道當初直屬制度安排一個學長姐的本意，與匿名平台的差異嗎？"</div>
    </div>
    <div class="flex flex-col gap-1 items-end">
      <div class="text-[10px] text-pink-400 font-bold uppercase">林小宇</div>
      <div class="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
        「直屬制度的本意是希望新生能有個溫暖依靠，透過革命情感薪火相傳。但它太依賴運氣，如果遇到『幽靈直屬』，線就斷了。匿名平台是為了接住這些被制度漏掉的靈魂。」
      </div>
    </div>
    <!-- 2 -->
    <div class="flex flex-col gap-1">
      <div class="text-[10px] text-blue-400 font-bold uppercase">User</div>
      <div class="p-4 bg-white/10 rounded-lg text-sm italic">"你覺得直屬制度是不是為了隱蔽集體抄襲的防彈衣？"</div>
    </div>
    <div class="flex flex-col gap-1 items-end">
      <div class="text-[10px] text-pink-400 font-bold uppercase">林小宇</div>
      <div class="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
        「這觀點太諷刺但也太真實了。實體直屬網絡變成了『分散式作弊系統』，每個模板都不同，教授很難抓。而平台集中化後，如果全班抄同份筆記，就是把脖子伸到刀口下。」
      </div>
    </div>
    <!-- 3 -->
    <div class="flex flex-col gap-1">
      <div class="text-[10px] text-blue-400 font-bold uppercase">User</div>
      <div class="p-4 bg-white/10 rounded-lg text-sm italic">"這聽起來很不樂觀，你覺得該怎麼辦？"</div>
    </div>
    <div class="flex flex-col gap-1 items-end">
      <div class="text-[10px] text-pink-400 font-bold uppercase">林小宇</div>
      <div class="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg text-sm">
        「我們得鼓勵『拿了火把，自己探路』的文化。平台只應提供地圖與指南，而非直接給答案。唯有保持獨立思考，我們才能在匿名的保護下，安全地存活在教授的雷達之外。」
      </div>
    </div>
  </div>
</div>

---

<!-- FIXME: this should be part of the insights from the interview, the placeholder data should be swapped with the real one. -->

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

<!-- Methodology -->

<!-- This should be moved to a previous section on the interview. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Methodology & Iteration</AuraPill>
  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white">Methodology</h1>
  <div class="space-y-6">
    <AuraCard class="p-6">
      <h3 class="text-xl font-bold text-blue-400 mb-2">Persona-Driven Testing</h3>
      <p class="text-sm opacity-80 text-slate-300">透過與 AI 扮演的 Persona (林小宇) 進行深度訪談，我們挖掘出許多初期團隊未曾察覺的「無惡意破壞模式」，如集體抄襲造成的同質性風險。</p>
    </AuraCard>
    <AuraCard class="p-6">
      <h3 class="text-xl font-bold text-pink-400 mb-2">Iterative Feedback Loop</h3>
      <p class="text-sm opacity-80 text-slate-300">我們將訪談結果迅速反饋至系統原型中，從單純的「資源下載」轉向強調「獨立思考與審核」的社群機制，提升平台永續性。</p>
    </AuraCard>
  </div>
</div>

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

<!-- Add a section on how we failed to find 3 person for the iteration process so we used the persona interview data instead. Just add the stuff from the interview dialogue. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="info" class="mb-8">Phase 3: Prototype & Test</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 h-full text-white">
    <div class="flex flex-col justify-center">
      <h1 class="text-6xl font-black tracking-tighter mb-6 uppercase text-white">Student Response</h1>
      <p class="text-base text-slate-400 mb-10 text-white opacity-80">對原型（Prototype）的真實反饋與洞察紀錄。</p>
      <div class="space-y-4">
        <div class="p-4 border-l-2 border-emerald-400 bg-white/5 rounded-r text-xs text-white/70 text-white opacity-90">
          "這正是我們需要的！看到有人願意匿名分享扣分標準，真的很有安全感。"
        </div>
        <div class="p-4 border-l-2 border-amber-400 bg-white/5 rounded-r text-xs text-white/70 text-white opacity-90">
          "如果能確保資料不會過期或錯誤就更好了。"
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <AuraFrame class="w-full h-64 border border-dashed border-white/20 flex flex-col items-center justify-center text-slate-500 text-sm text-center p-8 bg-black/40 text-white">
        <div class="i-carbon:user-talk text-5xl mb-4 opacity-50 text-blue-400 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
        <div class="opacity-60">[ 填寫區：訪談真實同學的回饋紀錄 ]</div>
      </AuraFrame>
    </div>
  </div>
</div>

---

<!-- A detailed flowchart on the iteration process should be included. -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill status="active" class="mb-8">Phase 4: Delivery & Caring</AuraPill>
  
  <div class="grid grid-cols-2 gap-12 items-center h-full">
    <div class="flex flex-col justify-center text-white">
      <h1 class="text-6xl font-black tracking-tighter mb-8 uppercase text-white leading-tight">Music:<br/><span class="text-blue-400 text-white opacity-100">《連上彼此》</span></h1>
      <p class="text-base text-slate-400 leading-relaxed mb-8 border-l-2 border-blue-400 pl-6 text-white opacity-90">
        「原來這座孤島 終於連成了群，原來我從未真正 一個人 走過這場雨。」
      </p>
      <!-- <div class="flex gap-4">
        <AuraPill variant="glass" status="active">▶ AUDIO_PLAYBACK_V3</AuraPill>
        <AuraPill variant="outline">VIEW_ITERATIONS</AuraPill>
      </div> this is not implemented for now -->
    </div>
    <div class="flex flex-col gap-4">
      <AuraCard class="p-8 bg-black/40">
        <blockquote class="text-sm leading-loose m-0 border-none bg-transparent p-0 text-white opacity-90">
          凌晨兩點的圖書館，螢幕亮著還沒關<br/>
          一學分像一座山，壓得人快失去方向<br/>
          有人早就拿到答案，而我還在反覆試算<br/>
          努力是不是太廉價？孤單的人沒人回答
        </blockquote>
      </AuraCard>
      <div class="text-[10px] opacity-40 font-mono text-center uppercase tracking-widest text-white">Gemini Lyrics & Suno Music</div>
    </div>
  </div>
</div>

---

<!-- There's a massive problem here. we would frame it as that this platform is the iteration result. the orginal is actually a in-person study group. the persona should be found to reject the idea and only then do we think of the platform. -->

<div class="h-full w-full p-16 flex flex-col items-center justify-center relative text-center text-white">
  <AuraPill status="active" class="mb-6 w-full">Phase 4: Delivery & Caring</AuraPill>
  
  <div class="mb-6 max-w-3xl text-white">
    <h1 class="text-6xl font-black tracking-tighter mb-8 uppercase text-white">Open-Campus Platform</h1>
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
      <div class="font-black text-xl text-white mb-4 uppercase tracking-tighter">{{ f.title }}</div>
      <p class="text-xs opacity-70 leading-relaxed text-slate-300 text-white">{{ f.desc }}</p>
    </AuraCard>
  </div>
</div>

---

<!-- A visual redesign is required here to make it aligned with the usual design -->

<div class="h-full w-full p-16 flex flex-col relative text-left text-white">
  <AuraPill class="mb-8" status="active">Phase 4: Delivery & Caring</AuraPill>

  <h1 class="text-6xl font-black tracking-tighter mb-12 uppercase text-white text-left">Happiness Practice Guide</h1>

  <div class="grid grid-cols-2 gap-8 mt-4 text-white">
    <div class="space-y-6">
      <AuraCard class="p-8 border-l-4 border-l-blue-400 bg-blue-400/5">
        <div class="text-blue-400 font-bold text-xl mb-4 uppercase text-white opacity-100">自我照護 (Self-Care)</div>
        <p class="text-xs text-slate-300 leading-loose text-white opacity-80">
          認知到成績不完全代表個人價值，有時候只是系統性的「資訊差」。<br/><br/>
          透過開發本專案，成員學習到如何調節「無法掌控結果」的焦慮，並確信問題根源於體制，減少對自我的質疑與自責。
        </p>
      </AuraCard>
    </div>
    <div class="space-y-6 text-white">
      <AuraCard class="p-8 border-l-4 border-l-pink-400 bg-pink-400/5">
        <div class="text-pink-400 font-bold text-xl mb-4 uppercase text-white opacity-100">支持他人 (Caring for Others)</div>
        <p class="text-xs text-slate-300 leading-loose text-white opacity-80">
          方案本質是「接住」那些沒有人脈網路支援的同學。透過匿名便利貼降低求助門檻。<br/><br/>
          讓校園中不再有資訊邊緣人，將私有的「秘笈」轉化為公共資產，讓每個發光的努力都能被彼此看見。
        </p>
      </AuraCard>
    </div>
  </div>
</div>