
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const sb=createClient('https://blfgwysgekfqhcafofhe.supabase.co','sb_publishable_ThLetpd4hj49fjce-kXoFA_v4ghwIqV');
let READING={readings:[]};
const COURSE={"course_code": "TIB-PM-CONTROLS-LEAD", "app_course_id": "pm_to_controls_lead", "display_name": "From SAP Project Manager to Controls Lead", "short_name": "Controls Lead Academy", "brand_subtitle": "LEADERSHIP BRIDGE PROGRAMME", "subtitle": "Eight-week bridge programme for leading an SAP controls project at an oil and gas company.", "duration": "8 weeks", "study_load": "About 85 hours • roughly 11 hours/week", "unit_label_plural": "Modules", "learning_principle_title": "Lead-depth principle", "learning_principle": "A controls lead does not need to test every control. The lead needs to know what good scoping, evidence and conclusions look like, see when the team is cutting a corner, and hold the line with the client and auditor.", "groups": [{"id": "week1", "label": "Week 1", "summary": "Self-assessment complete; controls vocabulary quiz passed", "items": [{"id": "M0", "code": "Module 0 —", "title": "Orientation and self-assessment", "meta": "2 hours • Self-assessment; mentor call", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team."}, {"id": "M1", "code": "Module 1 —", "title": "Controls and audit for the SAP project manager", "meta": "7 hours • Reading, short exercises, quiz", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team."}]}, {"id": "week2", "label": "Week 2", "summary": "Security and oil-and-gas quizzes passed", "items": [{"id": "M2", "code": "Module 2 —", "title": "SAP security and GRC without the jargon", "meta": "7 hours • Reading, walkthrough role-play, quiz", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team."}, {"id": "M3", "code": "Module 3 —", "title": "Oil and gas on SAP: landscape, processes and control risks", "meta": "6 hours • Reading, workbook tour, quiz", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team."}]}, {"id": "week3", "label": "Week 3", "summary": "Primer labs done; Find the Errors scored 15 or more out of 18", "items": [{"id": "M4", "code": "Module 4 —", "title": "The workbook toolkit", "meta": "10 hours • Hands-on labs; error hunt", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team."}]}, {"id": "week4", "label": "Week 4", "summary": "Scoping exercise submitted", "items": [{"id": "M5", "code": "Module 5 —", "title": "The method: from foundation to test plan", "meta": "12 hours • Reading, exercises, case review", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}]}, {"id": "week5", "label": "Week 5", "summary": "Workpaper case review submitted", "items": [{"id": "M6", "code": "Module 6 —", "title": "Reading and directing the testing", "meta": "8 hours • Case review of workpapers and results", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}]}, {"id": "week6", "label": "Week 6", "summary": "Evaluation exercise submitted", "items": [{"id": "M7", "code": "Module 7 —", "title": "Evaluating, remediating and reporting", "meta": "8 hours • Evaluation exercise; reporting drill", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}]}, {"id": "week7", "label": "Week 7", "summary": "Stakeholder map and draft project plan submitted", "items": [{"id": "M8", "code": "Module 8 —", "title": "Leading the team and the stakeholders", "meta": "8 hours • Reading, scenario discussions", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}, {"id": "M9", "code": "Module 9 —", "title": "Planning and estimating a new controls project", "meta": "8 hours • Plan-building workshop", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}]}, {"id": "week8", "label": "Week 8", "summary": "Capstone pack and steering presentation; certification decision", "items": [{"id": "M10", "code": "Module 10 —", "title": "Capstone: a new oil and gas project", "meta": "9 hours • Written pack and steering presentation", "description": "Lead-depth learning: understand what good work looks like, how to challenge it, and how to direct the team.", "submission_expected": true}]}], "materials": [{"category": "Start Here", "files": ["README_PM_to_Controls_Lead_Course.docx", "TIB_PM_to_Controls_Lead_Course_Guide.docx"]}, {"category": "Bridge Manuals", "files": ["TIB_Bridge_Manual_A_Modules_0-1.docx", "TIB_Bridge_Manual_B_Modules_2-3.docx"]}, {"category": "Planning", "files": ["TIB_Module_9_Planning_and_Estimating.docx", "TIB_Controls_Project_Estimating_Model.xlsx"]}, {"category": "Capstone / Participant", "files": ["TIB_Module_10_Capstone_Participant_Brief.docx"]}, {"category": "Assessment / Participant", "files": ["TIB_Assessment_Pack_Modules_4-8_Participant.docx"]}, {"category": "Core Materials", "files": ["Controls Lead Playbook", "Corvane Story", "Weekly Activity Plan", "Foundation Manual Parts 1–4", "Workbook Primer Parts 1–3", "Corvane case file"]}, {"category": "Instructor Only — protected", "files": ["Capstone Scoring Sheet", "Instructor Guide and Answer Key", "Capstone Assessor Guide"]}], "assessment": "Certification uses five elements: Module quizzes 15%, Practical 15%, Case reviews 20%, Planning pack 20%, Capstone 30%. Readiness requires 75% overall, at least 70% on every element, and the capstone presentation pass defined in the course guide."};
const $=id=>document.getElementById(id);
let session=null, progressRows=[], submissionRows=[], materialRows=[], scoreRows=[], assessmentComponents=[], itemRows=[], itemScoreRows=[], currentView='overview';

function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function msg(text,kind=''){ $('msg').innerHTML=text?`<div class="msg ${kind}">${esc(text)}</div>`:'' }
function safeName(s){return String(s||'file').replace(/[^A-Za-z0-9._-]+/g,'_')}

async function signIn(){
  msg('');
  const {data,error}=await sb.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});
  if(error){msg(error.message,'error');return}
  session=data.session; await enterApp();
}
async function signOut(){await sb.auth.signOut();location.reload()}

async function loadReadingData(){try{const r=await fetch('reading.json',{cache:'no-store'});READING=await r.json()}catch(e){READING={readings:[]}}}
async function enterApp(){
  const {data:{session:s}}=await sb.auth.getSession();
  if(!s)return;
  session=s;
  if(!READING.readings.length) await loadReadingData();
  const {data:ents,error}=await sb.rpc('get_my_tib_academy_courses');
  if(error){msg(error.message,'error');return}
  if(!(ents||[]).some(x=>x.app_course_id===COURSE.app_course_id)){
    msg('Your account is valid, but you are not actively enrolled in this TIB Academy course.','error');
    return;
  }
  $('login').classList.add('hidden');$('app').classList.remove('hidden');
  $('userEmail').textContent=session.user.email||'';
  await Promise.all([loadProgress(),loadMaterials(),loadSubmissions(),loadAssessment(),loadAssessmentItems()]);
  render();
}
async function loadProgress(){
  const {data,error}=await sb.from('academy_progress').select('*').eq('app_course_id',COURSE.app_course_id);
  if(!error)progressRows=data||[];
}
async function loadMaterials(){
  const {data,error}=await sb.from('academy_materials').select('*').eq('app_course_id',COURSE.app_course_id).eq('is_active',true).order('category').order('sort_order');
  if(!error)materialRows=data||[];
}
async function loadSubmissions(){
  const {data,error}=await sb.from('academy_submissions').select('*').eq('app_course_id',COURSE.app_course_id).order('submitted_at',{ascending:false});
  if(!error)submissionRows=data||[];
}
async function loadAssessment(){
  const [{data:components},{data:scores}]=await Promise.all([
    sb.from('academy_assessment_components').select('*').eq('app_course_id',COURSE.app_course_id).order('sort_order'),
    sb.from('academy_scores').select('*').eq('app_course_id',COURSE.app_course_id)
  ]);
  assessmentComponents=components||[];scoreRows=scores||[];
}
async function loadAssessmentItems(){
  const [{data:items},{data:scores}]=await Promise.all([
    sb.from('academy_assessment_items').select('*').eq('app_course_id',COURSE.app_course_id).order('sort_order'),
    sb.from('academy_item_scores').select('*').eq('app_course_id',COURSE.app_course_id)
  ]);
  itemRows=items||[];itemScoreRows=scores||[];
}
function statusFor(id){return progressRows.find(r=>r.item_id===id)?.status||'not_started'}
function submissionFor(id){return submissionRows.find(r=>r.item_id===id)}
async function mark(id,status){
  const pct=status==='completed'?100:(status==='submitted'?90:(status==='in_progress'?50:0));
  const payload={user_id:session.user.id,app_course_id:COURSE.app_course_id,item_id:id,status,progress_percent:pct,updated_at:new Date().toISOString()};
  const {error}=await sb.from('academy_progress').upsert(payload,{onConflict:'user_id,app_course_id,item_id'});
  if(error){alert(error.message);return}
  await loadProgress();renderCurrent();
}
function allItems(){return COURSE.groups.flatMap(g=>g.items)}
function completion(){
  const items=allItems(); if(!items.length)return 0;
  return Math.round(items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length/items.length*100)
}
function setActive(view){
  currentView=view;
  document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
}
function render(){
  $('brandTitle').textContent=COURSE.short_name;
  $('brandSubtitle').textContent=COURSE.brand_subtitle;
  $('pageTitle').textContent=COURSE.display_name;
  $('pageSubtitle').textContent=COURSE.subtitle;
  renderSidebar(); renderCurrent();
}
function renderSidebar(){
  $('navGroups').innerHTML=`<button class="navbtn" data-view="coursehome">Course Home</button><button class="navbtn" data-view="continue">Continue Learning</button><button class="navbtn" data-view="online">Online Lessons</button>`+COURSE.groups.map(g=>`<button class="navbtn" data-view="group:${esc(g.id)}">${esc(g.label)}</button>`).join('')+`<button class="navbtn" data-view="downloads">Exercises & Downloads</button><button class="navbtn" data-view="reference">Reference Library</button>`;
  document.querySelectorAll('.navbtn').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('.navbtn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    const v=b.dataset.view;
    if(v.startsWith('group:')){currentView=v;renderGroup(v.slice(6))}
    else {currentView=v;renderCurrent()}
  });
}
function renderCurrent(){
  if(currentView==='overview'||currentView==='coursehome')renderCourseHome();
  else if(currentView==='continue')renderContinue();
  else if(currentView==='online')renderOnlineLessons();
  else if(currentView==='path')renderPath();
  else if(currentView==='materials')renderMaterials();
  else if(currentView==='downloads')renderDownloads();
  else if(currentView==='reference')renderOnlineLessons(true);
  else if(currentView==='submissions')renderSubmissions();
  else if(currentView==='assessment')renderAssessment();
  else if(currentView.startsWith('group:'))renderGroup(currentView.slice(6));
  else if(currentView.startsWith('read:'))renderReading(currentView.slice(5));
}
function renderOverview(){
  setActive('overview');
  $('pageTitle').textContent=COURSE.display_name;$('pageSubtitle').textContent=COURSE.subtitle;
  const pct=completion(), items=allItems(), done=items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length;
  $('content').innerHTML=`
    <div class="grid">
      <div class="card"><div class="muted">Overall progress</div><div class="kpi">${pct}%</div><div class="progress"><span style="width:${pct}%"></span></div></div>
      <div class="card"><div class="muted">${esc(COURSE.unit_label_plural)}</div><div class="kpi">${items.length}</div><div>${done} completed/submitted</div></div>
      <div class="card"><div class="muted">Protected materials</div><div class="kpi">${materialRows.length}</div><div>${submissionRows.length} submission(s)</div></div>
    </div>
    <div class="callout"><b>${esc(COURSE.learning_principle_title)}</b><br>${esc(COURSE.learning_principle)}</div>
    <div class="section-title"><h3>Course path</h3></div>
    <div class="list">${COURSE.groups.map(g=>{
      const complete=g.items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length;
      return `<div class="item"><h4>${esc(g.label)}</h4><div class="meta">${esc(g.summary||'')}</div>
      <span class="badge gold">${complete}/${g.items.length} complete</span>
      <div class="actions"><button class="btn primary" data-open="${esc(g.id)}">Open</button></div></div>`
    }).join('')}</div>`;
  document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{currentView='group:'+b.dataset.open;renderGroup(b.dataset.open)});
}
function renderPath(){
  setActive('path');$('pageTitle').textContent='Full Learning Path';$('pageSubtitle').textContent=COURSE.subtitle;
  $('content').innerHTML=COURSE.groups.map(g=>`<div class="card" style="margin-bottom:14px"><h3>${esc(g.label)}</h3><p>${esc(g.summary||'')}</p>`+
    g.items.map(i=>`<div class="item ${['completed','submitted','passed'].includes(statusFor(i.id))?'completed':''}"><b>${esc(i.code||'')}</b> ${esc(i.title)}</div>`).join('')+`</div>`).join('');
}
function renderGroup(id){
  const g=COURSE.groups.find(x=>x.id===id);if(!g)return;
  $('pageTitle').textContent=g.label;$('pageSubtitle').textContent=g.summary||COURSE.subtitle;
  $('content').innerHTML=`<div class="list">${g.items.map(i=>itemCard(i)).join('')}</div>`;
  bindItemActions();
}
function itemCard(i){
  const st=statusFor(i.id), sub=submissionFor(i.id);
  const badge=st==='completed'?'<span class="badge green">Completed</span>':
    st==='submitted'?'<span class="badge maroon">Submitted</span>':
    st==='in_progress'?'<span class="badge gold">In progress</span>':'<span class="badge">Not started</span>';
  return `<div class="item ${['completed','submitted','passed'].includes(st)?'completed':''}">
    <h4>${esc(i.code||'')} ${esc(i.title)}</h4>
    <div class="meta">${esc(i.meta||'')}</div>${badge}
    ${i.description?`<p class="detail">${esc(i.description)}</p>`:''}
    ${i.dependencies?`<div class="muted"><b>Dependencies:</b> ${esc(i.dependencies)}</div>`:''}
    ${i.gate?`<div class="callout"><b>${esc(i.gate)}</b><br>${esc(i.gate_requirement||'')}</div>`:''}
    ${sub?`<div class="msg good"><b>Latest submission:</b> ${esc(sub.original_filename)} · ${esc(sub.status)}</div>`:''}
    ${Array.isArray(i.reading_refs)&&i.reading_refs.length?`<div class="actions">${i.reading_refs.slice(0,4).map(rid=>{const rr=READING.readings.find(x=>x.id===rid);return rr?`<button class="btn gold" data-read="${esc(rid)}">Read Online: ${esc(rr.title)}</button>`:''}).join('')}</div>`:''}
    <div class="actions">
      ${st!=='completed'?`<button class="btn secondary" data-progress="${esc(i.id)}">Start / Continue</button>
      <button class="btn primary" data-complete="${esc(i.id)}">Mark Complete</button>`:`<button class="btn" data-reopen="${esc(i.id)}">Reopen</button>`}
      ${i.submission_expected?`<label class="btn gold">Choose File<input type="file" class="hidden-file" data-file="${esc(i.id)}" hidden></label>
      <button class="btn primary" data-submit="${esc(i.id)}">Submit Work</button>`:''}
    </div>
    ${i.submission_expected?`<div class="muted" id="filelabel-${esc(i.id)}">No file selected.</div>`:''}
  </div>`;
}
function bindItemActions(){
  document.querySelectorAll('[data-progress]').forEach(b=>b.onclick=()=>mark(b.dataset.progress,'in_progress'));
  document.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>mark(b.dataset.complete,'completed'));
  document.querySelectorAll('[data-reopen]').forEach(b=>b.onclick=()=>mark(b.dataset.reopen,'in_progress'));
  document.querySelectorAll('[data-read]').forEach(b=>b.onclick=()=>renderReading(b.dataset.read));
  document.querySelectorAll('[data-file]').forEach(inp=>inp.onchange=()=>{const f=inp.files?.[0];const el=$('filelabel-'+inp.dataset.file);if(el)el.textContent=f?f.name:'No file selected.'});
  document.querySelectorAll('[data-submit]').forEach(b=>b.onclick=()=>submitWork(b.dataset.submit));
}
async function submitWork(itemId){
  const inp=document.querySelector(`[data-file="${CSS.escape(itemId)}"]`), file=inp?.files?.[0];
  if(!file){alert('Choose a file first.');return}
  const comments=prompt('Optional submission comments:','')||'';
  const path=`${COURSE.app_course_id}/${session.user.id}/${itemId}/${Date.now()}_${safeName(file.name)}`;
  const {error:upErr}=await sb.storage.from('academy-submissions').upload(path,file,{upsert:false});
  if(upErr){alert(upErr.message);return}
  const {error:dbErr}=await sb.from('academy_submissions').insert({
    user_id:session.user.id,app_course_id:COURSE.app_course_id,item_id:itemId,
    submission_type:'assignment',storage_path:path,original_filename:file.name,status:'submitted',comments
  });
  if(dbErr){alert(dbErr.message);return}
  await mark(itemId,'submitted');await loadSubmissions();renderCurrent();
}
async function downloadMaterial(id){
  const m=materialRows.find(x=>x.id===id);if(!m?.storage_path)return;
  const {data,error}=await sb.storage.from('academy-materials').download(m.storage_path);
  if(error){alert(error.message);return}
  const url=URL.createObjectURL(data),a=document.createElement('a');a.href=url;a.download=m.filename;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function renderMaterials(){
  setActive('materials');$('pageTitle').textContent='Protected Course Materials';$('pageSubtitle').textContent='Only materials authorized for your enrollment are returned.';
  if(!materialRows.length){
    $('content').innerHTML='<div class="callout"><b>No protected materials have been uploaded yet.</b><br>The administrator can ingest the approved course ZIP from the Academy Content Admin tool.</div>';return;
  }
  const cats=[...new Set(materialRows.map(x=>x.category))];
  $('content').innerHTML=cats.map(cat=>`<div class="card" style="margin-bottom:14px"><h3>${esc(cat)}</h3><div class="list">`+
    materialRows.filter(x=>x.category===cat).map(m=>`<div class="item"><h4>${esc(m.title)}</h4><div class="meta">${esc(m.filename)} · ${esc(m.material_type)}</div>
    ${m.storage_path?`<button class="btn primary" data-download="${esc(m.id)}">Download</button>`:'<span class="badge">Pending upload</span>'}</div>`).join('')+
    '</div></div>').join('');
  document.querySelectorAll('[data-download]').forEach(b=>b.onclick=()=>downloadMaterial(b.dataset.download));
}
function renderSubmissions(){
  setActive('submissions');$('pageTitle').textContent='My Submissions';$('pageSubtitle').textContent='Uploaded workbook, case, planning and capstone work.';
  if(!submissionRows.length){$('content').innerHTML='<div class="callout">No work has been submitted yet.</div>';return}
  $('content').innerHTML=`<table class="table"><thead><tr><th>Item</th><th>File</th><th>Status</th><th>Submitted</th><th>Reviewer</th></tr></thead><tbody>`+
    submissionRows.map(s=>`<tr><td>${esc(s.item_id)}</td><td>${esc(s.original_filename)}</td><td>${esc(s.status)}</td><td>${new Date(s.submitted_at).toLocaleString()}</td><td>${esc(s.reviewer_comments||'—')}</td></tr>`).join('')+
    `</tbody></table>`;
}
function renderAssessment(){
  setActive('assessment');$('pageTitle').textContent='Assessment & Certification';$('pageSubtitle').textContent='Your scored course components and certification status.';
  if(!assessmentComponents.length){$('content').innerHTML=`<div class="card"><h3>Gate-based completion</h3><div class="detail">${esc(COURSE.assessment||'')}</div></div>`;return}
  let weighted=0,complete=true;
  for(const c of assessmentComponents){const s=scoreRows.find(x=>x.component_code===c.component_code);if(s?.score_percent==null)complete=false;else weighted+=Number(s.score_percent)*Number(c.weight_percent)/100}
  const presentCode=COURSE.app_course_id==='pm_to_controls_lead'?'CAP_PRESENT':'SEC_CAP_PRESENT';
  const present=itemScoreRows.find(x=>x.item_code===presentCode)?.raw_marks;
  const cap=scoreRows.find(x=>x.component_code==='capstone')?.score_percent;
  const elementsPass=assessmentComponents.every(c=>{const s=scoreRows.find(x=>x.component_code===c.component_code);return s?.score_percent!=null&&Number(s.score_percent)>=70});
  const certified=complete&&weighted>=75&&elementsPass&&Number(cap)>=70&&Number(present)>=21;
  const itemTable=itemRows.length?`<div class="section-title"><h3>Scored items</h3></div><table class="table"><thead><tr><th>Item</th><th>Max</th><th>Your mark</th><th>Notes</th></tr></thead><tbody>${itemRows.map(i=>{const s=itemScoreRows.find(x=>x.item_code===i.item_code);return `<tr><td>${esc(i.display_name)}</td><td>${i.max_marks}</td><td>${s?.raw_marks==null?'Not scored':s.raw_marks}</td><td>${esc(i.notes||'')}</td></tr>`}).join('')}</tbody></table>`:'';
  $('content').innerHTML=`<div class="grid"><div class="card"><div class="muted">Current weighted score</div><div class="kpi">${complete?weighted.toFixed(1)+'%':'—'}</div></div><div class="card"><div class="muted">Certification status</div><div class="kpi" style="font-size:22px">${certified?'ELIGIBLE':complete?'NOT YET ELIGIBLE':'INCOMPLETE'}</div></div></div>
  <div class="section-title"><h3>Assessment components</h3></div><table class="table"><thead><tr><th>Component</th><th>Weight</th><th>Minimum</th><th>Your score</th></tr></thead><tbody>${assessmentComponents.map(c=>{const s=scoreRows.find(x=>x.component_code===c.component_code);return `<tr><td>${esc(c.display_name)}</td><td>${c.weight_percent}%</td><td>${c.minimum_percent??'—'}%</td><td>${s?.score_percent==null?'Not scored':Number(s.score_percent).toFixed(1)+'%'}</td></tr>`}).join('')}</tbody></table>${itemTable}<div class="callout">${esc(COURSE.assessment||'')}</div>`;
}


function readingById(id){return (READING.readings||[]).find(x=>x.id===id)}
function readStatus(id){return statusFor('READ:'+id)}
async function markReading(id){await mark('READ:'+id,'completed');localStorage.setItem('tib_last_reading_'+COURSE.app_course_id,id)}
function renderCourseHome(){
  currentView='coursehome';setActive('coursehome');$('pageTitle').textContent=COURSE.display_name;$('pageSubtitle').textContent='Course orientation, learning method and start-here reading';
  const h=COURSE.course_home||{},pct=completion();
  const layers=(h.layers||[]).map(x=>`<div class="layer"><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p></div>`).join('');
  const starts=(h.start_here_refs||[]).map(id=>{const r=readingById(id);if(!r)return'';return `<div class="lesson-card"><span class="online-badge">READ ONLINE</span><h4>${esc(r.title)}</h4><div class="muted">${esc(r.category)} · ${r.word_count.toLocaleString()} words</div><div class="actions"><button class="btn primary" data-read="${esc(r.id)}">Open Reading</button></div></div>`}).join('');
  $('content').innerHTML=`<div class="card continue-card"><h3>WELCOME TO THE COURSE</h3><p>${esc(COURSE.subtitle)}</p><div class="progress"><span style="width:${pct}%"></span></div><div class="muted">${pct}% activity progress</div></div>
  <div class="section-title"><h3>How this course delivers learning</h3></div><div class="layer-grid">${layers}</div>
  <div class="callout"><b>Study rule:</b> ${esc(h.online_learning_statement||'Read online first; download working files when required.')}</div>
  <div class="section-title"><h3>How to study</h3></div><div class="card"><ol>${(h.study_model||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>
  <div class="section-title"><h3>Start here — required orientation reading</h3></div>${starts||'<div class="callout">Start-here reading is being prepared.</div>'}
  <div class="actions"><button class="btn primary" id="continueBtn">CONTINUE LEARNING</button><button class="btn" id="pathBtn">View Full Learning Path</button></div>`;
  document.querySelectorAll('[data-read]').forEach(b=>b.onclick=()=>renderReading(b.dataset.read));$('continueBtn').onclick=renderContinue;$('pathBtn').onclick=()=>{currentView='path';renderPath()};
}
function renderContinue(){
  currentView='continue';setActive('continue');const last=localStorage.getItem('tib_last_reading_'+COURSE.app_course_id),r=last?readingById(last):null;
  $('pageTitle').textContent='Continue Learning';$('pageSubtitle').textContent='Return to your most recent online reading or continue through the course path.';
  if(r){$('content').innerHTML=`<div class="card continue-card"><span class="online-badge">CONTINUE</span><h3>${esc(r.title)}</h3><p>${esc(r.category)}</p><button class="btn primary" id="resumeRead">Resume Reading</button></div><div class="section-title"><h3>Course path</h3></div>`+COURSE.groups.map(g=>`<div class="lesson-card"><h4>${esc(g.label)}</h4><p>${esc(g.summary||'')}</p><button class="btn" data-open="${esc(g.id)}">Open</button></div>`).join('');$('resumeRead').onclick=()=>renderReading(r.id)}
  else{$('content').innerHTML=`<div class="callout"><b>No previous reading yet.</b><br>Begin with Course Home and the Start Here readings.</div><button class="btn primary" id="homeStart">Go to Course Home</button>`;$('homeStart').onclick=renderCourseHome}
  document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{currentView='group:'+b.dataset.open;renderGroup(b.dataset.open)});
}
function renderOnlineLessons(referenceOnly=false){
  currentView=referenceOnly?'reference':'online';setActive(currentView);$('pageTitle').textContent=referenceOnly?'Reference Library':'Online Lessons';$('pageSubtitle').textContent=referenceOnly?'All trainee-authorized source reading available online.':'Read the teaching content in the app before downloading working files.';
  const docs=(READING.readings||[]),cats=[...new Set(docs.map(x=>x.category))];
  $('content').innerHTML=cats.map(cat=>`<div class="card" style="margin-bottom:14px"><h3>${esc(cat)}</h3>`+docs.filter(x=>x.category===cat).map(r=>`<div class="lesson-card ${readStatus(r.id)==='completed'?'completed':''}"><span class="online-badge">${r.kind==='workbook_instructions'?'WORKBOOK INSTRUCTIONS':'ONLINE READING'}</span><h4>${esc(r.title)}</h4><div class="muted">${r.word_count.toLocaleString()} words · ${readStatus(r.id)==='completed'?'Read':'Not marked complete'}</div><div class="actions"><button class="btn primary" data-read="${esc(r.id)}">Read Online</button></div></div>`).join('')+`</div>`).join('');
  document.querySelectorAll('[data-read]').forEach(b=>b.onclick=()=>renderReading(b.dataset.read));
}
function renderBlock(b){
  if(b.type==='heading'){const level=Math.min(Math.max(Number(b.level||3),1),4);return `<h${level}>${esc(b.text)}</h${level}>`}
  if(b.type==='bullet')return `<p>• ${esc(b.text)}</p>`;if(b.type==='number')return `<p>${esc(b.text)}</p>`;
  if(b.type==='table')return `<div style="overflow:auto"><table>${(b.rows||[]).map(row=>`<tr>${row.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></div>`;
  return `<p>${esc(b.text||'')}</p>`;
}
function renderReading(id){
  const r=readingById(id);if(!r)return;currentView='read:'+id;localStorage.setItem('tib_last_reading_'+COURSE.app_course_id,id);
  $('pageTitle').textContent=r.title;$('pageSubtitle').textContent=`Online reading · ${r.category} · ${r.word_count.toLocaleString()} words`;
  const toc=(r.sections||[]).map((s,i)=>`<button data-sec="${i}">${esc(s.title||('Section '+(i+1)))}</button>`).join('');
  const body=(r.sections||[]).map((s,i)=>`<section id="sec-${i}"><h2>${esc(s.title||('Section '+(i+1)))}</h2>${(s.blocks||[]).map(renderBlock).join('')}</section>`).join('');
  $('content').innerHTML=`<div class="reader-tools"><button class="btn" id="backLessons">← Online Lessons</button><button class="btn" id="printRead">Print This Reading</button><button class="btn primary" id="completeRead">${readStatus(id)==='completed'?'Reading Complete ✓':'Mark Reading Complete'}</button></div><div class="reader-shell"><aside class="reader-toc"><b>IN THIS READING</b>${toc}</aside><article class="reader">${body}</article></div>`;
  $('backLessons').onclick=()=>renderOnlineLessons();$('printRead').onclick=()=>window.print();$('completeRead').onclick=async()=>{await markReading(id);renderReading(id)};document.querySelectorAll('[data-sec]').forEach(b=>b.onclick=()=>document.getElementById('sec-'+b.dataset.sec)?.scrollIntoView({behavior:'smooth',block:'start'}));
}
function renderDownloads(){
  currentView='downloads';setActive('downloads');$('pageTitle').textContent='Exercises & Downloads';$('pageSubtitle').textContent='Download files primarily when you need to work in an exercise, workbook, planning model or template.';
  const work=materialRows.filter(m=>['workbook','package'].includes(m.material_type)||/template|exercise|assessment|capstone|practice|model|workbook/i.test(m.filename||''));
  if(!work.length){$('content').innerHTML='<div class="callout">No downloadable exercise files are currently registered.</div>';return}
  $('content').innerHTML=`<div class="callout"><b>Read online first.</b><br>Use these downloads for hands-on work. Keep an unchanged source copy and save your own working copy separately.</div><div class="list">`+work.map(m=>`<div class="item"><h4>${esc(m.title)}</h4><div class="meta">${esc(m.filename)} · ${esc(m.material_type)}</div><button class="btn primary" data-download="${esc(m.id)}">Download Working File</button></div>`).join('')+`</div>`;document.querySelectorAll('[data-download]').forEach(b=>b.onclick=()=>downloadMaterial(b.dataset.download));
}

$('signIn').onclick=signIn;$('password').onkeydown=e=>{if(e.key==='Enter')signIn()};
$('logout').onclick=signOut;
document.querySelectorAll('.static-nav').forEach(b=>b.onclick=()=>{currentView=b.dataset.view;renderCurrent()});
enterApp();
