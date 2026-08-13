#!/usr/bin/env python3
"""Verify a rendered resume PDF.

Fixed-height row layout means overflowing content is CLIPPED, not pushed to a
second page — so a 1-page count alone proves nothing. This also checks that the
final sentinel phrase of the copy actually survived into the rendered page.
"""
import re
import sys
import pypdfium2 as pdfium

path, sentinel = sys.argv[1], sys.argv[2]
pdf = pdfium.PdfDocument(path)
pages = len(pdf)
page = pdf[0]
h, w = page.get_height(), page.get_width()

tp = page.get_textpage()
raw = tp.get_text_range()
flat = re.sub(r"\s+", " ", raw)
intact = re.sub(r"\s+", " ", sentinel) in flat

low_side, low_main = h, h
for i in range(tp.count_chars()):
    box = tp.get_charbox(i, loose=True)
    if not box:
        continue
    x0, y0, x1, y1 = box
    if x1 <= 178:
        low_side = min(low_side, y0)
    else:
        low_main = min(low_main, y0)

main_fill = (h - low_main) / h * 100
ok = pages == 1 and intact
print(f"{'PASS' if ok else 'FAIL':<5} {path.split('/')[-1]}")
print(f"      pages={pages}  last-line-present={intact}  "
      f"main column fills {main_fill:.1f}% of page  "
      f"(sidebar {(h - low_side) / h * 100:.1f}%)")
if not intact:
    print(f"      MISSING (clipped): {sentinel[:90]!r}")
    print(f"      rendered tail: {flat[-110:]!r}")
if pages > 1:
    print(f"      overflow p2: {pdf[1].get_textpage().get_text_range().strip()[:150]!r}")
sys.exit(0 if ok else 1)
