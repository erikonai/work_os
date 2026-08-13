#!/bin/bash
# Build docx -> PDF, then verify 1 page AND that nothing was clipped off the bottom.
cd /home/user/work_os/resume
OUT=/home/user/work_os/resume/out
mkdir -p "$OUT"
rc=0

build() {
  variant=$1; name=$2
  python3 build_resume.py "$variant" "$OUT/$name.docx" >/dev/null || return 1
  rm -f "$OUT/$name.pdf"
  soffice --headless --convert-to pdf --outdir "$OUT" "$OUT/$name.docx" >/dev/null 2>&1
  sentinel=$(python3 -c "import content; print(content.${3}['earlier'][-1][1][-60:])")
  python3 check.py "$OUT/$name.pdf" "$sentinel" || rc=1
}

build general "Erik_Leavell_Resume"          GENERAL
build abacum  "Erik_Leavell_Resume_Abacum_AI" ABACUM
exit $rc
