(()=>{const W=WEDDING,$=s=>document.querySelector(s),H=W.hosts.bride;let lang="en";
const T={en:{shubh:"Shubh Vivah",surprise:"A little surprise awaits…",scratchTo:"Scratch to reveal our wedding date",joy:"Join us in celebrating together.",blessing:"With the blessings of our elders, we invite you to bless the couple.",functions:"Wedding Functions",thanks:"Thank you for being part of our joy.",rsvp:"R.S.V.P.",print:"Save / Print",top:"Back to Top",open:"Open Invitation",lang:"हिंदी",share:"Share",wa:"WhatsApp",copy:"Copy Link",copied:"Copied!",dir:"Get Directions",cal:"Add to Calendar",ics:"Download .ics",days:"Days",hours:"Hours",mins:"Minutes",secs:"Seconds",done:"The celebrations have begun!"},
hi:{shubh:"शुभ विवाह",surprise:"एक छोटा सा आश्चर्य प्रतीक्षा में…",scratchTo:"हमारी विवाह तिथि जानने के लिए खुरचें",joy:"हमारी खुशियों में सम्मिलित हों।",blessing:"बड़ों के आशीर्वाद सहित, वर-वधू को आशीष देने पधारें।",functions:"विवाह कार्यक्रम",thanks:"हमारी खुशी में सहभागी होने के लिए धन्यवाद।",rsvp:"संपर्क",print:"सहेजें / प्रिंट",top:"ऊपर जाएँ",open:"निमंत्रण खोलें",lang:"English",share:"साझा करें",wa:"व्हाट्सऐप",copy:"लिंक कॉपी",copied:"कॉपी हुआ!",dir:"दिशा-निर्देश",cal:"कैलेंडर में जोड़ें",ics:".ics डाउनलोड",days:"दिन",hours:"घंटे",mins:"मिनट",secs:"सेकंड",done:"उत्सव आरंभ हो चुका है!"}};
const t=k=>T[lang][k],names=`${W.names.bride} & ${W.names.groom}`,RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const monogramImage=alt=>W.monogramImage?`<img class="monogram-image" src="${W.monogramImage}" alt="${alt}">`:`<span aria-label="${alt}">${W.monogram}</span>`;
const P=n=>String(n).padStart(2,"0"),ymd=(d,tm,add=0)=>{const x=new Date(`${d}T${tm}:00+05:30`);x.setMinutes(x.getMinutes()+add);return x.toISOString().replace(/[-:]|\.\d+/g,"")};
function render(){document.documentElement.lang=lang;document.body.classList.toggle("hi",lang=="hi");
document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
document.querySelectorAll("[data-lang-toggle]").forEach(e=>e.textContent=t("lang"));
$("#open").textContent=t("open");$("#gNames").innerHTML=`<span>${W.names.bride}</span><span class="gate-amp">&amp;</span><span>${W.names.groom}</span>`;$("#gDate").textContent=W.dateText;$("#seal").innerHTML=monogramImage("S and S monogram");
["#mono","#mono2"].forEach(s=>$(s).innerHTML=monogramImage("S and S monogram"));
$("#navMono").innerHTML=monogramImage("S and S monogram");
$("#hDate").textContent=W.dateText;$("#hCity").textContent=W.city;$("#revDate").textContent=W.dateText;
const hn=$("#hNames");hn.innerHTML="";
if(lang=="hi"&&W.names.brideHi){W.names.brideHi.split(" ").concat("&",W.names.groomHi.split(" ")).forEach((w,i)=>hn.insertAdjacentHTML("beforeend",`<span style="animation-delay:${i*.5}s">${w} </span>`))}
else {hn.innerHTML=`<span class="couple-name" style="animation-delay:${RM?0:1}s">${W.names.bride}</span><span class="couple-amp" style="animation-delay:${RM?0:1.4}s">&amp;</span><span class="couple-name" style="animation-delay:${RM?0:1.8}s">${W.names.groom}</span>`;}
$("#shloka").innerHTML=W.blessingLine.replace("। ","।<br>");
$("#card").innerHTML=`<p>${H.lines[0]}</p><p>${H.lines[1]}</p><p class="nm">${H.brideName}</p><p>${H.brideParents}</p><p>${H.weds}</p><p class="nm">${H.groomName}</p><p>${H.groomParents}</p><p>${H.groomPlace}</p><p>${H.at}</p><p>${H.venue}</p><hr><p class="nm">${H.title}</p>
${["2026-12-05","2026-12-06"].map(d=>{const es=W.events.filter(e=>e.date==d);return`<p><b>On ${es[0].day}</b></p>`+es.map(e=>`<p>${e.name} — ${e.label}</p>`).join("")}).join("")}
<p>${H.note}</p><p>${H.flowers}</p><hr><p>R.S.V.P. : ${H.rsvpName}<br>Mob. ${W.rsvp.join(", ")}</p><p>${H.compliments}</p><p style="font-size:.9rem">${H.cordial}<br>Mob. ${W.rsvp.join(", ")}</p>`;
$("#cLabel").textContent=W.countdown.label;
$("#rsvp").innerHTML=`<p>${H.rsvpName}</p>`+W.rsvp.map(n=>`<a href="tel:${n}">${n}</a>`).join("");
$("#share").textContent=t("share");$("#wa").textContent=t("wa");$("#copy").textContent=t("copy");
document.querySelectorAll("#tl .ev").forEach(e=>e.remove());
W.events.forEach(e=>{const s=ymd(e.date,e.time),en=ymd(e.date,e.time,60),q=encodeURIComponent(e.address),n=encodeURIComponent(e.name+" – "+names);
const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${s}\nDTEND:${en}\nSUMMARY:${e.name} – ${names}\nLOCATION:${e.address}\nEND:VEVENT\nEND:VCALENDAR`;
const d=document.createElement("div");d.className="ev";d.innerHTML=`<h4>${e.name}</h4><div>${e.day} · ${e.label}</div><div>${e.venue}<br><small>${e.address}</small></div><div style="margin-top:6px"><a target="_blank" rel="noopener" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=${n}&dates=${s}/${en}&location=${q}">${t("cal")}</a><a href="data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}" download="${e.name.replace(/\s/g,"-")}.ics">${t("ics")}</a></div>`;$("#tl").appendChild(d);io.observe(d)});}
const io=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.2});
// countdown
function tick(){const ms=new Date(W.countdown.target)-Date.now();if(ms<=0){$("#cd").textContent=t("done");return}
const v=[ms/864e5,ms/36e5%24,ms/6e4%60,ms/1e3%60].map(Math.floor),k=["days","hours","mins","secs"];
$("#cd").innerHTML=v.map((n,i)=>`<div><b>${P(n)}</b>${t(k[i])}</div>`).join("")}
setInterval(tick,1000);
// language
document.addEventListener("click",e=>{if(e.target.matches("[data-lang-toggle]")){lang=lang=="en"?"hi":"en";render();tick()}});
// petals
function petals(){if(RM)return;for(let i=0;i<40;i++){const p=document.createElement("i");p.style.cssText=`left:${Math.random()*100}vw;background:${i%2?"#F2A81D":"#B3202A"};animation-duration:${4+Math.random()*4}s;animation-delay:${Math.random()*1.5}s`;$("#petals").appendChild(p);setTimeout(()=>p.remove(),10000)}}
// music
const a=$("#aud");let want=false;
if(W.music){a.src=W.music;a.volume=.5;$("#mus").hidden=false}
$("#mus").onclick=()=>{want=a.paused;want?a.play():a.pause()};
document.addEventListener("visibilitychange",()=>{if(document.hidden)a.pause();else if(want)a.play().catch(()=>{})});
$("#open").onclick=()=>{$("#gate").classList.add("go");setTimeout(petals,900);if(W.music){want=true;a.play().catch(()=>{})}setTimeout(()=>$("#gate").remove(),3200)};
// scratch
const cv=$("#cv"),c=cv.getContext("2d");let down=false,done=false;
function paint(){const r=cv.getBoundingClientRect();cv.width=r.width;cv.height=r.height;const g=c.createLinearGradient(0,0,r.width,r.height);g.addColorStop(0,"#E9D5AE");g.addColorStop(.5,"#F6EAD0");g.addColorStop(1,"#D9BC85");c.fillStyle=g;c.fillRect(0,0,r.width,r.height);c.fillStyle="#8a6a2f";c.font="600 18px 'Cormorant Garamond',serif";c.textAlign="center";c.fillText("◆  ✿  ◆",r.width/2,r.height/2+6)}
function sc(e){if(!down||done)return;const r=cv.getBoundingClientRect();c.globalCompositeOperation="destination-out";c.beginPath();c.arc(e.clientX-r.left,e.clientY-r.top,20,0,7);c.fill();
const d=c.getImageData(0,0,cv.width,cv.height).data;let n=0;for(let i=3;i<d.length;i+=64)d[i]==0&&n++;
if(n/(d.length/64)>.6){done=true;cv.style.opacity=0;petals()}}
cv.addEventListener("pointerdown",e=>{down=true;cv.setPointerCapture(e.pointerId);sc(e)});cv.addEventListener("pointermove",sc);addEventListener("pointerup",()=>down=false);
// share
const url=()=>location.href.split("#")[0];
$("#share").onclick=()=>navigator.share?navigator.share({title:names,text:`${names} – ${W.dateText}`,url:url()}).catch(()=>{}):$("#wa").click();
$("#wa").onclick=()=>open("https://wa.me/?text="+encodeURIComponent(`${names} – ${W.dateText}\n${url()}`));
$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(url());$("#copy").textContent=t("copied");setTimeout(()=>$("#copy").textContent=t("copy"),1500)}catch(e){}};
// timeline fill
addEventListener("scroll",()=>{const r=$("#tl").getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.6-r.top)/r.height));$("#thread").style.height=p*100+"%"},{passive:true});
// #bride: card is bride-hosted; groom-side wording is not printed, so same wording is used
render();tick();paint();})();
