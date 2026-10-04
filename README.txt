TIB Academy v0.1 — Corvane Energy SAP Controls Project

BUILD STATUS
- Supabase login: implemented
- Enrollment entitlement check: implemented
- Course-specific learning architecture: implemented
- Cross-device progress persistence via academy_progress: implemented
- TIB unified theme: implemented
- Source-material registry: implemented
- Protected document delivery: next phase
- Instructor/assessor workspace: next phase
- Submission/upload workflow: next phase
- Assessment engine: next phase

COURSE CODE
TIB-CORVANE-CONTROLS-PROJECT

DEPLOYMENT
This folder is Vercel-ready. Deploy the folder contents as a static project.

SECURITY
Only the public Supabase publishable key is present in the browser.
No service-role credential is included.
Instructor-only source files are NOT bundled in this v0.1 trainee build.

V0.2 ADDITIONS
- Protected material registry from Supabase.
- Authenticated download from private Academy Storage.
- Assignment/workbook/capstone submission upload.
- Submission status/history.
- Assessment component and score display.
- Source files remain protected; instructor-only files are never bundled into trainee app.

V0.4 ONLINE KNOWLEDGE DELIVERY
- Course Home, Continue Learning, Online Lessons, Print This Reading, Reference Library, and Exercises & Downloads added.
- 54 online reading entries: 14 Word documents + 40 workbook instruction sets.
- Approximate words served online: 50885.
- Instructor/assessor/answer-key content excluded.

V0.4.1 FIX
- Embeds enriched course metadata and online reading content directly in app.js.
- Fixes blank Online Lessons page.
- Fixes blank How to Study area.
- Fixes missing Start Here readings.
- Fixes missing module/stage Read Online buttons.
- Keeps reading.json as a source/fallback file.
