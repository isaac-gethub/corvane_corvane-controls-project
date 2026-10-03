
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const sb=createClient('https://blfgwysgekfqhcafofhe.supabase.co','sb_publishable_ThLetpd4hj49fjce-kXoFA_v4ghwIqV');
const COURSE={"course_code": "TIB-CORVANE-CONTROLS-PROJECT", "app_course_id": "corvane_controls_project", "display_name": "Corvane Energy SAP Controls Project", "short_name": "Controls Project Simulator", "brand_subtitle": "CORVANE ENERGY • PROJECT SIMULATION", "subtitle": "A complete, worked SOX-focused SAP controls project from landscape to conclusion.", "duration": "9 stages", "study_load": "14 linked workbooks plus case, manuals and practice", "unit_label_plural": "Workbooks", "learning_principle_title": "Project-simulation model", "learning_principle": "Work through the engagement in dependency order. Each downstream workbook relies on source keys and evidence from upstream workbooks. Gates control progression.", "groups": [{"id": "stage1", "label": "Stage 1 — Understand the Environment", "summary": "Build the factual landscape and interface scope. Gate G1.", "items": [{"id": "W01", "code": "W01", "title": "Landscape & System Inventory", "meta": "Environment", "description": "Identify the systems, clients, company codes, production status and transport routes that form the project landscape.", "gate": "G1", "gate_requirement": "All financially relevant systems and interfaces listed; validated or flagged; PRD transport route recorded.", "submission_expected": true}, {"id": "W02", "code": "W02", "title": "Interface & Data Flow Inventory", "meta": "Environment", "description": "Catalogue financially relevant interfaces and data flows.", "dependencies": "W01 SYS-ID via Ref_SYS", "gate": "G1", "gate_requirement": "W01 and W02 Checks support the environment gate.", "submission_expected": true}]}, {"id": "stage2", "label": "Stage 2 — Define Process Scope", "summary": "Map the business processes and technical areas. Gate G2.", "items": [{"id": "W03", "code": "W03", "title": "Module & Business Process Scope", "meta": "Scope", "description": "Map significant FSLIs, SAP modules, business processes and technical areas.", "gate": "G2", "gate_requirement": "Every significant FSLI mapped; technical areas present; unspecified processes recorded as Outstanding rather than guessed.", "submission_expected": true}]}, {"id": "stage3", "label": "Stage 3 — Identify Risks", "summary": "Build the risk register from scoped processes. Gate G3.", "items": [{"id": "W04", "code": "W04", "title": "Risk Register", "meta": "Risk", "description": "Define risks against scoped business processes and identify SOX relevance and ownership.", "dependencies": "W03 BP-ID via Ref_BP", "gate": "G3", "gate_requirement": "No BP-ID without a risk; SOX risks flagged; owners agreed.", "submission_expected": true}]}, {"id": "stage4", "label": "Stage 4 — Design the Control Set", "summary": "Map controls, dependencies, SoD and sensitive access. Gate G4.", "items": [{"id": "W05", "code": "W05", "title": "Risk Control Matrix", "meta": "Control design", "description": "Map controls to risks, identify key controls and ITGC dependencies.", "dependencies": "W04 RISK-ID via Ref_RISK", "gate": "G4", "gate_requirement": "No SOX risk without a key control; ITGC dependencies recorded.", "submission_expected": true}, {"id": "W06", "code": "W06", "title": "SoD & Sensitive Access Matrix", "meta": "Access governance", "description": "Define SoD risks, rules and mitigations.", "dependencies": "W04 RISK-ID and W05 CTRL-ID", "gate": "G4", "gate_requirement": "Every SoD risk has a rule and the ruleset is approved.", "submission_expected": true}]}, {"id": "stage5", "label": "Stage 5 — Confirm People", "summary": "Confirm control and evidence ownership. Gate G5.", "items": [{"id": "W07", "code": "W07", "title": "Control & Evidence Owner Matrix", "meta": "Ownership", "description": "Confirm who owns controls, risks and evidence.", "dependencies": "W05 CTRL-ID plus risk-owner context", "gate": "G5", "gate_requirement": "Owners confirmed or escalated; W14 may be issued in scoping form with no conclusion.", "submission_expected": true}]}, {"id": "stage6", "label": "Stage 6 — Request & Receive Evidence", "summary": "Request evidence, index it and prove populations. Gate G6.", "items": [{"id": "W08", "code": "W08", "title": "PBC Evidence Request Register", "meta": "Evidence request", "description": "Issue and track evidence requests for controls.", "dependencies": "W05 CTRL-ID and W07 evidence owners", "gate": "G6", "gate_requirement": "Evidence requests support complete collection.", "submission_expected": true}, {"id": "W09", "code": "W09", "title": "Evidence Index & IPE Log", "meta": "Evidence / IPE", "description": "Index evidence, record populations and complete IPE checks before sampling.", "dependencies": "W08 PBC-ID via Ref_PBC", "gate": "G6", "gate_requirement": "Populations received and every IPE result is Pass.", "submission_expected": true}]}, {"id": "stage7", "label": "Stage 7 — Plan the Tests", "summary": "Build the design and operating-effectiveness test plan. Gate G7.", "items": [{"id": "W10", "code": "W10", "title": "Test Plan", "meta": "Testing plan", "description": "Plan TOD, TOE, reliance and retests; schedule ITGC testing first.", "dependencies": "W05 controls and W09 evidence/IPE", "gate": "G7", "gate_requirement": "TOD and TOE for every key control; ITGC tests scheduled first.", "submission_expected": true}]}, {"id": "stage8", "label": "Stage 8 — Sample & Test", "summary": "Select samples and execute/review workpapers. Gate G8.", "items": [{"id": "W12", "code": "W12", "title": "Sample Selection Log", "meta": "Sampling", "description": "Document samples only after the source population has passed IPE.", "dependencies": "W10 TEST-ID and W09 population evidence", "gate": "G8", "gate_requirement": "Samples logged and agree to workpapers.", "submission_expected": true}, {"id": "W11", "code": "W11", "title": "Test Workpapers", "meta": "Execution", "description": "Execute and review testing, linking exceptions to deficiencies or rationale.", "dependencies": "W10 TEST-ID; samples from W12", "gate": "G8", "gate_requirement": "Workpapers reviewed by a different person; exceptions carry DEF-ID or rationale.", "submission_expected": true}]}, {"id": "stage9", "label": "Stage 9 — Evaluate & Conclude", "summary": "Evaluate deficiencies and produce the coverage conclusion. Gate G9.", "items": [{"id": "W13", "code": "W13", "title": "Deficiency & Remediation Log", "meta": "Deficiency evaluation", "description": "Log, group, evaluate and track remediation/retest of deficiencies.", "dependencies": "W10 tests and W11 results", "gate": "G9", "gate_requirement": "Deficiencies evaluated and remediation/retest status supported.", "submission_expected": true}, {"id": "W14", "code": "W14", "title": "Scoping Workpaper & Coverage Dashboard", "meta": "Conclusion", "description": "Bring risk, control, testing, deficiency and reliance coverage together into the project conclusion.", "dependencies": "W05, W10, W13 and reliance references", "gate": "G9", "gate_requirement": "Testing-stage coverage checks support the final conclusion.", "submission_expected": true}]}], "materials": [{"category": "Reference Manuals", "files": ["TIB_SAP_Controls_Foundation_Deployment_Guide.docx", "Foundation Manual Parts 1, 2, 3A, 3B and 4", "Workbook Primer Parts 1–3"]}, {"category": "Project Leadership", "files": ["Corvane_Story_Controls_Lead_Narrative.docx", "Controls_Lead_Playbook_15_Person_Team.docx", "Corvane_Weekly_Activity_Plan.xlsx"]}, {"category": "Practice", "files": ["Practice_Case_Brief_Corvane_Lite.docx", "P01–P05 blank practice workbooks", "Find-the-Errors X01–X06", "Instructor answer keys (protected)"]}], "assessment": "The Corvane simulator is organized around project gates G1–G9. A workbook is gate-ready when its built-in checks support the gate and any INFO items have been reviewed and accepted."};
const $=id=>document.getElementById(id);
let session=null, progressRows=[], submissionRows=[], materialRows=[], scoreRows=[], assessmentComponents=[], currentView='overview';

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

async function enterApp(){
  const {data:{session:s}}=await sb.auth.getSession();
  if(!s)return;
  session=s;
  const {data:ents,error}=await sb.rpc('get_my_tib_academy_courses');
  if(error){msg(error.message,'error');return}
  if(!(ents||[]).some(x=>x.app_course_id===COURSE.app_course_id)){
    msg('Your account is valid, but you are not actively enrolled in this TIB Academy course.','error');
    return;
  }
  $('login').classList.add('hidden');$('app').classList.remove('hidden');
  $('userEmail').textContent=session.user.email||'';
  await Promise.all([loadProgress(),loadMaterials(),loadSubmissions(),loadAssessment()]);
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
  $('navGroups').innerHTML=COURSE.groups.map(g=>`<button class="navbtn" data-view="group:${esc(g.id)}">${esc(g.label)}</button>`).join('');
  document.querySelectorAll('.navbtn').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('.navbtn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    const v=b.dataset.view;
    if(v.startsWith('group:')){currentView=v;renderGroup(v.slice(6))}
    else {currentView=v;renderCurrent()}
  });
}
function renderCurrent(){
  if(currentView==='overview')renderOverview();
  else if(currentView==='path')renderPath();
  else if(currentView==='materials')renderMaterials();
  else if(currentView==='submissions')renderSubmissions();
  else if(currentView==='assessment')renderAssessment();
  else if(currentView.startsWith('group:'))renderGroup(currentView.slice(6));
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
  setActive('assessment');$('pageTitle').textContent='Assessment & Certification';$('pageSubtitle').textContent='Your scored course components appear here when assessed.';
  if(!assessmentComponents.length){$('content').innerHTML=`<div class="card"><h3>Gate-based completion</h3><div class="detail">${esc(COURSE.assessment||'')}</div></div>`;return}
  let weighted=0,weights=0;
  const rows=assessmentComponents.map(c=>{
    const s=scoreRows.find(x=>x.component_code===c.component_code),score=s?.score_percent;
    if(score!=null){weighted+=Number(score)*Number(c.weight_percent)/100;weights+=Number(c.weight_percent)}
    return `<tr><td>${esc(c.display_name)}</td><td>${c.weight_percent}%</td><td>${c.minimum_percent??'—'}%</td><td>${score==null?'Not scored':score+'%'}</td></tr>`;
  }).join('');
  $('content').innerHTML=`<div class="grid"><div class="card"><div class="muted">Current weighted score</div><div class="kpi">${weights?weighted.toFixed(1)+'%':'—'}</div><div>Based on scored components only</div></div></div>
  <div class="section-title"><h3>Assessment components</h3></div><table class="table"><thead><tr><th>Component</th><th>Weight</th><th>Minimum</th><th>Your score</th></tr></thead><tbody>${rows}</tbody></table>
  <div class="callout">${esc(COURSE.assessment||'')}</div>`;
}

$('signIn').onclick=signIn;$('password').onkeydown=e=>{if(e.key==='Enter')signIn()};
$('logout').onclick=signOut;
document.querySelectorAll('.static-nav').forEach(b=>b.onclick=()=>{currentView=b.dataset.view;renderCurrent()});
enterApp();
