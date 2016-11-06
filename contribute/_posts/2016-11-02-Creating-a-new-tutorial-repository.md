---
layout: post
title: Creating a new tutorial repository
author: Louis du Plessis
---

Every tutorial should be uploaded to a [GitHub](http://www.github.com) repository and should be a standalone unit. That is, the GitHub repository should contain, besides the tutorial itself,

- All data files used in the tutorial
- Example BEAST2 XML files
- Example output files from running the XML files in BEAST2
- Any scripts needed for pre- or post-processing

Keep in mind that the name of the tutorial displayed on the website will be the name of the GitHub repository, with all hyphens replaced with spaces.  **Please choose an explanatory name that properly identifies your tutorial!** There is no need to use abbreviations to keep tutorial names short. 

We have created a [tutorial template repository](https://github.com/Taming-the-BEAST/Tutorial-Template) to help you get started. 
The easiest way to create a new tutorial is to simply clone the template (or any of the existing [tutorials](/tutorials/)). This will set up the correct directory structure for the tutorial. Follow these steps:

> 1. Create a [GitHub account](https://help.github.com/articles/signing-up-for-a-new-github-account/) (if you don't already have one)
> 3. Create a new repository on your GitHub account with the name of your tutorial. Let's assume for the rest of this example that your tutorial will be called *My-Awesome-Tutorial*. Do **not** initialize the repository with a README and do **not** add a `.gitignore` file
> 2. Navigate to where you want to create the tutorial
> 1. Type `git clone git@github.com:Taming-the-BEAST/Tutorial-Template.git` <br>(**Note:** This is the template tutorial, not the tutorial you just created on your GitHub account)
> 2. Rename the directory to the new tutorial's name: `mv Tutorial-Template My-Awesome-Tutorial` (this step is optional, but keeps everything nice and tidy)
> 2. Enter the tutorial directory: `cd My-Awesome-Tutorial`
> 4. Change the origin of the repository so it points to the newly created repository on your GitHub account: `git remote set-url origin git@github.com:<your-username>/My-Awesome-Tutorial.git`
> 6. Type: `git push -u origin master` 

Alternatively, it is also possible to create a blank repository and set up the same directory structure. The default structure of a tutorial is: 

```
	.
	├── data/
	|   └── (alignment files)
	├── xml/
	|   └── (BEAST2 XML files)
	├── precooked-runs/
	|   └── (.log and .trees files from BEAST output)
	├── scripts/
	|   └── (pre- and post-processing scripts)
	├── figures/
	|   └── (screenshots and other figures used in the tutorial)
	├── README.md
	├── biblatex_macros.tex
	├── main.tex
	└── preamble.tex

```

The three `.tex` files are optional and are used for tutorials written in LaTeX. If you want to add any further documentation or lecture slides to the tutorial, either add them to the root of the tutorial or to a directory with a descriptive name. All PDF files will be automatically detected and available to view or download from the website.