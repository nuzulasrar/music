(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{478:function(e,t,s){Promise.resolve().then(s.bind(s,9650))},1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return d},unstable_getImgProps:function(){return c}});let l=s(1024),a=s(2301),i=s(7873),n=s(3222),r=l._(s(6515)),c=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},d=n.Image},9650:function(e,t,s){"use strict";s.r(t);var l=s(7437),a=s(2265),i=s(1396),n=s.n(i),r=s(6691),c=s.n(r);s(2471),t.default=()=>{let[e,t]=(0,a.useState)("F97316"),[s,i]=(0,a.useState)(!0),[r,d]=(0,a.useState)("/"),[o,x]=(0,a.useState)(4e3),[p,m]=(0,a.useState)(0),[h,b]=(0,a.useState)(0),[u,g]=(0,a.useState)(2),f=[{id:1,name:"<b>Simple.</b> 1-5 Screens. 0-3 Application Modules.",price:4e3},{id:2,name:"<b>Medium.</b> 6-10 Screens. 4-5 Application Modules.",price:8500},{id:3,name:"<b>Complex.</b> 10-15 Screens. Above 15 Screens are charged per screen. 5 or more Application Modules. ",price:14e3}],[j,w]=(0,a.useState)(1),[N,y]=(0,a.useState)([]),v=(e,t)=>{let s=[...N],l=[];s.includes(e)?(l=s.filter(t=>t!=e),m(e=>e-t)):(m(e=>e+t),l=[...s,e]),y(l)};(0,a.useEffect)(()=>{N.length>3&&N.length<6?w(2):N.length>5&&w(3)},[N]),(0,a.useEffect)(()=>{let e=f.findIndex(e=>e.id===j);-1!==e&&x(f[e].price),console.log(e),1==j&&u>2?g(2):2===j&&(u<5||u>9)?g(5):3===j&&u<7&&g(7)},[j]),(0,a.useEffect)(()=>{let e=0;1===j?e=2:2===j?e=5:3===j&&(e=7),b((u-e)*300)},[u]);let[k,C]=(0,a.useState)(!0);return(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsxs)("div",{style:{backgroundImage:'url("/bg2.jpg")'},className:"bg-cover bg-no-repeat min-h-screen ".concat(s?"sm:w-1/3 lg:w-1/6 px-[16px] py-4":"sm:w-1/12"," bg-black border-r border-cyan-500"),children:[(0,l.jsxs)("div",{className:"flex flex-row justify-between mb-[20px]",children:[(0,l.jsx)("h1",{className:"text-[2.6vh] font-bold",style:{color:"#".concat(e)},children:"Fuser"}),(0,l.jsx)("button",{onClick:()=>{i(!s)},className:"border-2 px-5 py-2 border-white rounded-xl",children:(0,l.jsx)("p",{className:"text-white text-[1.5vh]",children:"Close"})})]}),(0,l.jsx)("h2",{className:"text-white mb-[5px] text-lg font-semibold",children:"Front End Code Builder"}),(0,l.jsxs)("div",{className:"backdrop-opacity-10 backdrop-invert bg-black/10 p-4 rounded-xl",children:[(0,l.jsx)("p",{className:"font-bold",style:{color:"#".concat(e)},children:"Network Request"}),(0,l.jsx)("p",{className:"text-white font-[400] bg-[#".concat(e,"] px-2 py-1 mt-1 rounded-md"),children:(0,l.jsx)(n(),{href:"/builder/fetch",children:". Fetch"})}),(0,l.jsx)("p",{className:"text-white font-[400]",children:(0,l.jsx)(n(),{href:"/builder/axios",children:". Axios"})}),(0,l.jsx)("p",{className:"font-bold mt-3",style:{color:"#".concat(e)},children:"Database Query Tester"}),(0,l.jsx)("p",{className:"text-white font-[400]",children:". MySQL"}),(0,l.jsx)("p",{className:"text-white font-[400]",children:". PostgreSQL"}),(0,l.jsx)("p",{className:"text-white font-[400]",children:". MongoDB"})]}),(0,l.jsxs)("div",{className:"flex mt-5 space-x-2 flex-wrap",children:[(0,l.jsx)("button",{onClick:()=>t("F97316"),className:"bg-orange-500 text-white px-5 py-2 rounded-lg mb-2",children:"Orange"}),(0,l.jsx)("button",{onClick:()=>t("22D3EE"),className:"bg-cyan-500 text-white px-5 py-2 rounded-lg mb-2",children:"Cyan"}),(0,l.jsx)("button",{onClick:()=>t("10B981"),className:"bg-emerald-500 text-white px-5 py-2 rounded-lg mb-2",children:"Emerald"}),(0,l.jsx)("button",{onClick:()=>t("6366F1"),className:"bg-indigo-500 text-white px-5 py-2 rounded-lg mb-2",children:"Indigo"})]})]}),(0,l.jsx)("div",{className:"sm:w-2/3 lg:w-5/6 bg-gray-200 dark:bg-gray-900  min-h-screen",children:(0,l.jsxs)("div",{className:"pt-7 bg-cover bg-no-repeat  min-h-screen",children:[(0,l.jsx)("div",{className:"flex mb-[10px] px-12",children:(0,l.jsx)("h1",{className:"text-white dark:text-slate-900 px-4 py-2 rounded-lg font-semibold text-[2.1vh] text-left",style:{backgroundColor:"#".concat(e)},children:"Price Calculator"})}),(0,l.jsxs)("div",{className:" rounded-[7px] border-white py-5 px-10 m-3",children:[(0,l.jsxs)("div",{className:"lg:flex lg:flex-row",children:[(0,l.jsxs)("div",{className:"sm: w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:["Application Modules ",(0,l.jsx)("span",{className:"px-3 py-1 text-white rounded-xl text-[12px]",style:{backgroundColor:"#".concat(e)},children:"Pick one or more."})]}),(0,l.jsx)("div",{className:"flex flex-wrap justify-start sm:space-x-2 md:space-x-3",children:[{id:1,name:"Account Registration & Authentication (Sign Up / Sign In)",description:"",price:1e3},{id:2,name:"Account Profile",description:"",price:1e3},{id:3,name:"Navigation - Menu",description:"",price:300},{id:4,name:"Online Payment Gateways",description:"",price:1200},{id:5,name:"Booking / Appoinment",description:"",price:1e3},{id:6,name:"E-Commerce / Online Shopping",description:"",price:1500},{id:7,name:"Take Photos / Videos",description:"",price:800},{id:8,name:"Upload Picture / Video",description:"",price:500},{id:9,name:"Generate Reports - PDF / Files",description:"",price:800},{id:10,name:"View/Add/Edit/Delete Information",description:"",price:500},{id:11,name:"User Visual Customization (eg: theme color)",description:"",price:800},{id:12,name:"Animations",description:"",price:1500},{id:13,name:"Geofence / Locations",description:"",price:1e3},{id:14,name:"Google Maps / Other Maps",description:"",price:1e3},{id:15,name:"Online Wallets",description:"",price:800}].map((t,s)=>(0,l.jsx)("button",{onClick:()=>{v(t.id,t.price)},className:"".concat(N.includes(t.id)?"text-white border-l-[6px] border-l-slate-600":"text-black"," dark:text-slate-900 px-6 py-3 bg-gray-200 rounded-0 font-semibold hover:scale-105 mt-3"),style:{backgroundColor:N.includes(t.id)?"#".concat(e):"rgb(229 231 235)",clipPath:"polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%)"},children:t.name},t.id))})]}),(0,l.jsxs)("div",{draggable:!0,className:"sm:w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:["Application Size / Complexity ",(0,l.jsx)("span",{className:"px-3 py-1 text-white rounded-xl text-[12px]",style:{backgroundColor:"#".concat(e)},children:"Pick one."})]}),(0,l.jsx)("div",{className:"flex flex-wrap justify-start sm:space-x-2 md:space-x-3",children:f.map((t,s)=>(0,l.jsx)("button",{onClick:()=>{1===t.id?N.length>3?alert("More than 3 Modules are selected. It is a Medium or Complex application."):w(t.id):2===t.id?N.length>5?alert("More than 5 Modules are selected. It is a Complex application."):w(t.id):3===t.id&&(N.length>6?alert("More than 5 Modules are selected. It is a Complex application."):w(t.id))},className:"".concat(j==t.id?"text-white border-l-[6px] border-l-slate-600":"text-black"," dark:text-slate-900 px-6 py-3 rounded-0 font-semibold hover:scale-105 mt-3"),style:{backgroundColor:j===t.id?"#".concat(e):"rgb(229 231 235)",clipPath:"polygon(0 0, 100% 0, 100% 50%, 95% 100%, 0 100%)"},children:(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:t.name}})},t.id))})]})]}),(0,l.jsxs)("div",{className:"lg:flex lg:flex-row",children:[(0,l.jsxs)("div",{className:"sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:["Development Duration ",(0,l.jsx)("span",{className:"px-3 py-1 text-white rounded-xl text-[12px]",style:{backgroundColor:"#".concat(e)},children:"Longer duration is cheaper."})]}),(0,l.jsx)("input",{className:"slider mt-3 mb-3",type:"range",id:"vol",name:"vol",value:u,min:1===j?2:2===j?5:7,max:1===j?4:2===j?9:12,step:1,onChange:e=>{g(e.target.value)}}),(0,l.jsxs)("p",{className:"text-black font-bold text-[2vh]",children:[u," Months of development + ",u<10?"1 Month":"2 Months"," of testing."]})]}),(0,l.jsxs)("div",{className:"sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsx)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:"Profession / Industry"}),(0,l.jsx)("input",{type:"text",className:"font-semibold bg-gray-200 dark:bg-white/90 pl-2 w-full rounded-lg h-[35px]",value:r,onChange:e=>{d(e.target.value)}}),(0,l.jsxs)("select",{children:[(0,l.jsx)("option",{value:1,children:"Education"}),(0,l.jsx)("option",{value:2,children:"Information Technology"}),(0,l.jsx)("option",{value:3,children:"Engineering"}),(0,l.jsx)("option",{value:4,children:"Medical"}),(0,l.jsx)("option",{value:5,children:"Personal"}),(0,l.jsx)("option",{value:6,children:"Human Resources"}),(0,l.jsx)("option",{value:7,children:"Real Estate"}),(0,l.jsx)("option",{value:8,children:"Project Management"}),(0,l.jsx)("option",{value:9,children:"School / University Projects"}),(0,l.jsx)("option",{value:10,children:"Research"}),(0,l.jsx)("option",{value:11,children:"Others"})]})]})]}),(0,l.jsxs)("div",{className:"lg:flex lg:flex-row",children:[(0,l.jsxs)("div",{className:"sm:w-full lg:w-2/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:["Application Demo ",(0,l.jsx)("span",{className:"px-3 py-1 text-white rounded-xl text-[12px]",style:{backgroundColor:"#".concat(e)},children:"Your future app."})]}),(0,l.jsxs)("div",{className:"py-2 flex flex-row",children:[(0,l.jsx)("input",{type:"checkbox",className:"mr-2",checked:!!k,onChange:e=>C(!k)}),(0,l.jsx)("p",{className:"text-[16px]",children:"Show Device"})]}),(0,l.jsxs)("div",{className:"flex flex-wrap justify-start sm:space-x-2 md:space-x-3 mt-5",children:[(0,l.jsxs)("div",{className:"flex flex-wrap justify-center items-center xl:hover:scale-110 mb-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",style:{height:425,width:250},children:(0,l.jsxs)("div",{className:"rounded-[22px] relative flex flex-col justify-start items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]",style:{height:425,width:200,backgroundColor:"#".concat(e)},children:[(0,l.jsx)("p",{className:"text-black font-semibold text-[10px] absolute top-[6px] left-[19px] z-2",children:"12:00"}),(0,l.jsx)(c(),{alt:"",src:"/engineering.png",width:120,height:120,className:"mt-10"}),(0,l.jsxs)("div",{className:"bg-white rounded-t-[20%] rounded-b-[22px] absolute bottom-0 h-48 flex flex-col justify-start items-center",style:{width:200},children:[(0,l.jsx)("p",{className:"text-[14px] font-semibold justify-self-end text-end mt-4 -ml-20",children:"Username"}),(0,l.jsx)("input",{type:"text",className:"bg-gray-200 w-36 h-5 rounded-[5px] mb-0.5"}),(0,l.jsx)("p",{className:"text-[14px] font-semibold justify-self-end text-end -ml-20",children:"Password"}),(0,l.jsx)("input",{type:"text",className:"bg-gray-200 w-36 h-5 rounded-[5px] mb-4"}),(0,l.jsx)("button",{className:"rounded-md bg-white w-36 py-1 shadow-sm shadow-gray-600 mb-2",style:{backgroundColor:"#".concat(e)},children:(0,l.jsx)("p",{className:"text-[10px] text-white font-semibold",children:"Login"})}),(0,l.jsx)("button",{className:"rounded-md bg-[rgba(100,100,100,1)] w-36 py-1 shadow-sm shadow-gray-600",children:(0,l.jsx)("p",{className:"text-[10px] text-white font-semibold",children:"Register"})})]})]})}),k?(0,l.jsx)(c(),{alt:"",src:"/iphone.png",width:250,height:100,className:"-ml-[250px]",style:{zIndex:1}}):null]}),(0,l.jsxs)("div",{className:"flex flex-wrap justify-center items-center xl:hover:scale-110 mb-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",style:{height:425,width:250},children:(0,l.jsxs)("div",{className:"rounded-[22px] relative flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)]",style:{height:425,width:200,backgroundColor:"#".concat(e)},children:[(0,l.jsx)("div",{className:"bg-[rgba(255,255,255,0.95)] rounded-t-[22px] rounded-b-[50px] absolute top-0 w-full h-40",style:{zIndex:1},children:(0,l.jsx)("p",{className:"text-black font-semibold text-[10px] absolute top-[6px] left-[19px] z-2",children:"12:00"})}),(0,l.jsx)("div",{className:"px-2.5 mt-[30px] z-20",children:(0,l.jsxs)("div",{className:"flex flex-row rounded-xl justify-center items-center bg-[rgba(0,0,0,0.85)] p-2 shadow-[0_3px_10px_rgb(255,255,255,0.)]",children:[(0,l.jsxs)("p",{className:"text-[12px] text-white",children:[(0,l.jsx)("span",{className:"font-bold text-[20px]",style:{color:"#".concat(e)},children:"+37"})," ",(0,l.jsx)("br",{})," per month"]}),(0,l.jsx)("div",{className:"bg-[rgba(255,255,255,0.3)] p-2 ml-2 rounded-lg",children:(0,l.jsx)(c(),{alt:"",src:"/graph.png",width:75,height:60})})]})}),(0,l.jsxs)("div",{className:"flex flex-row py-2 overflow-x-auto no-scrollbar px-2 z-20",children:[(0,l.jsx)("div",{className:"px-0.5",children:(0,l.jsxs)("div",{className:"bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",children:[(0,l.jsx)(c(),{alt:"",src:"/hammer.png",width:20,height:20,className:"mt-2 mb-2"}),(0,l.jsx)("p",{className:"text-[12px] font-semibold text-black mb-0.5",children:"New Defects."}),(0,l.jsx)("p",{className:"text-[10px] text-slate-500 leading-[10px] mb-1",children:"Create a new defect checklist."})]})}),(0,l.jsx)("div",{className:"px-0.5",children:(0,l.jsxs)("div",{className:"bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",children:[(0,l.jsx)(c(),{alt:"",src:"/hammer.png",width:20,height:20,className:"mt-2 mb-2"}),(0,l.jsx)("p",{className:"text-[12px] font-semibold text-black mb-0.5",children:"Hardware Status."}),(0,l.jsxs)("p",{className:"text-[10px] text-slate-500 leading-[10px] mb-1",children:["Monitor all hardware status. ",(0,l.jsx)("span",{className:"invisible",children:"sdsad"})]})]})}),(0,l.jsx)("div",{className:"px-0.5",children:(0,l.jsxs)("div",{className:"bg-[rgba(255,255,255,0.95)] rounded-lg w-28 px-1.5 py-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",children:[(0,l.jsx)(c(),{alt:"",src:"/hammer.png",width:20,height:20,className:"mt-2 mb-2"}),(0,l.jsx)("p",{className:"text-[12px] font-semibold text-black mb-0.5",children:"Generate Reports."}),(0,l.jsxs)("p",{className:"text-[10px] text-slate-500 leading-[10px] mb-1",children:["Print and share new report. ",(0,l.jsx)("span",{className:"invisible",children:"sdsad"})]})]})})]}),(0,l.jsx)("div",{className:"px-2.5",children:(0,l.jsxs)("div",{className:"bg-[rgba(255,255,255,0.95)] w-full px-2 py-2 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]",children:[(0,l.jsx)("p",{className:"text-black font-bold text-[11px] mb-1",children:"Defect List"}),(0,l.jsxs)("div",{className:"w-full flex flex-row justify-between items-center",children:[(0,l.jsx)("p",{className:"text-black text-semibold text-[10px] mb-1",children:"1. Roof"}),(0,l.jsx)("p",{className:"text-[9px] font-semibold text-white mb-1 bg-green-500 px-1.5 rounded-lg",children:"Done"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-row justify-between items-center",children:[(0,l.jsx)("p",{className:"text-black text-semibold text-[10px] mb-1",children:"2. Ceiling"}),(0,l.jsx)("p",{className:"text-[9px] font-semibold text-white mb-1 bg-teal-500 px-1.5 rounded-lg",children:"Pending"})]}),(0,l.jsxs)("div",{className:"w-full flex flex-row justify-between items-center",children:[(0,l.jsx)("p",{className:"text-black text-bold text-[10px] mb-1",children:"3. Wall"}),(0,l.jsx)("p",{className:"text-[9px] font-semibold text-black mb-1 bg-yellow-300 px-1.5 rounded-lg",children:"Canceled"})]})]})}),(0,l.jsxs)("div",{className:"bg-white h-10 px-2 w-full absolute bottom-0 rounded-b-[22px] flex flex-row justify-around items-center",children:[(0,l.jsx)("div",{className:"h-4 w-1/4 rounded-md justify-center items-center",style:{},children:(0,l.jsx)("p",{className:"text-white text-[10px] text-center",style:{color:"#".concat(e)},children:"Monitor"})}),(0,l.jsx)("div",{className:"h-4 w-1/4 rounded-md justify-center items-center",style:{},children:(0,l.jsx)("p",{className:"text-white text-[10px] text-center",style:{color:"#".concat(e)},children:"Defects"})}),(0,l.jsx)("div",{className:"h-6 w-6 rounded-[50%] flex justify-center items-center",style:{},children:(0,l.jsx)(c(),{alt:"",src:"/home2.png",width:13,height:13,className:""})}),(0,l.jsx)("div",{className:"h-4 w-1/4 rounded-md justify-center items-center",style:{},children:(0,l.jsx)("p",{className:"text-white text-[10px] text-center",style:{color:"#".concat(e)},children:"Reports"})}),(0,l.jsx)("div",{className:"h-4 w-1/4 rounded-md justify-center items-center",style:{},children:(0,l.jsx)("p",{className:"text-white text-[10px] text-center",style:{color:"#".concat(e)},children:"Settings"})})]})]})}),k?(0,l.jsx)(c(),{alt:"",src:"/iphone.png",width:250,height:100,className:"-ml-[250px]",style:{zIndex:99}}):null]})]})]}),(0,l.jsx)("div",{className:"sm: w-full lg:w-1/3 lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-white/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:(0,l.jsx)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:"Theme Color (test)"})})]}),(0,l.jsx)("div",{className:"lg:flex lg:flex-row",children:(0,l.jsx)("div",{className:"w-full lg:mx-2 rounded-lg bg-white pt-4 pb-6 px-4 mb-5",children:(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] mb-[8px]",children:["Application Demo ",(0,l.jsx)("span",{className:"px-3 py-1 text-white rounded-xl text-[12px]",style:{backgroundColor:"#".concat(e)},children:"Your future app."})]})})}),(0,l.jsxs)("div",{className:"w-full lg:mx-2 backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-black/10 rounded-lg pt-4 pb-6 px-4 mb-5",children:[(0,l.jsxs)("h3",{className:"text-black dark:text-white font-semibold text-[1.8vh] text-right mb-[10px]",children:["Estimation Cost: ",h]}),(0,l.jsxs)("div",{className:"backdrop-opacity-10 backdrop-invert bg-white/100 dark:bg-black/10 px-10 py-5 rounded-md border-2 border-gray-200",style:{borderColor:"#".concat(e)},children:[" ",(0,l.jsxs)("p",{className:"text-black text-right font-bold text-[2.3vh] dark:text-white",children:["RM ",p+o-h]})]})]})]})]})})]})}},2471:function(){},6691:function(e,t,s){e.exports=s(1295)}},function(e){e.O(0,[176,222,549,971,596,744],function(){return e(e.s=478)}),_N_E=e.O()}]);