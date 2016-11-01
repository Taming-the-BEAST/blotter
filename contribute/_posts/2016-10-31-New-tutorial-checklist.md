---
layout: post
title: New tutorial checklist
author: Louis du Plessis
---

Before submitting your tutorial please check that your tutorial is complete.

# General guidelines
- The tutorial should be a self-contained unit and needs to contain besides the tutorial itself
	- All data files used in the tutorial
	- Example BEAST2 XML files
	- Example output files from running the XML files in BEAST2
	- Any scripts needed for pre- or post-processing
- It should be possible to work through the tutorial in roughly an hour
- At the beginning of the tutorial the question or type of analysis the tutorial is for should be clearly stated
- The tutorial should contain enough background information to motivate why particular methods are being used
- The tutorial should contain a small section describing the data used in the tutorial
- The tutorial should contain a section that explains how to interpret the results


# Attribution and licensing
- Add the names of all the authors to the yaml header in the file `README.md` under the field author. Multiple authors should be separated by commas (no spaces)

```
---
author: Author One,Author Two,Author Three
---

The rest of the file continues here...
```

- If your tutorial is based on a previous tutorial written by someone else please clearly state this and add a citation/link to the previous tutorial.
- If your tutorial makes use of models that do not form part of the BEAST2 core, please cite the relevant papers and packages!
- Add information about the license at the end of the tutorial (We recommend licensing all tutorial under a [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/))


# Common-sense guidelines
- Keep the data files small. It is for demonstration purposes only and should not take too much space or take too long to run. 
- Do not add figures that are unnecessarily large.