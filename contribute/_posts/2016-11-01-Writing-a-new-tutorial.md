---
layout: post
title: Writing a new tutorial
author: Louis du Plessis
---

There are four different types of tutorials that can be contributed to the website:

1. Write a new tutorial in Markdown *(preferred option)*
2. Write a new tutorial in LaTeX
3. Contribute an existing PDF tutorial (with or without the source code)
4. Contribute an existing Wiki tutorial (e.g. a tutorial on GitHub or GitLab)

They are described in more detail below.

# Writing a new tutorial in Markdown

Markdown is our preferred format, because it is the most flexible.
Markdown is a lightweight, readable markup language that can be easily converted to many different formats. Tutorials written in Markdown can be displayed in html in a web browser or easily converted to printable PDF documents. Because Markdown is very readable, it also makes it easier to maintain and update tutorials.

Tutorials written in Markdown should be saved into the file `README.md`. If you write the tutorial in Markdown you do not need to include any LaTeX or PDF files with the tutorial. 
In the [tutorial template repository](https://github.com/Taming-the-BEAST/Tutorial-Template) there is an example tutorial written in Markdown. More Markdown syntax is given in the [Markdown style guide](/contribute/Style). 

References can be added to a Markdown tutorial using [Jekyll-scholar](/contribute/Jekyll-scholar). An example is given in the [tutorial template repository](https://github.com/Taming-the-BEAST/Tutorial-Template). 

Although you should be able to preview the tutorial by looking at the repository on GitHub, some objects will not be in the correct format, because the website uses a custom stylesheet with a few extra extensions. The best way to preview what the tutorial will look like on the website is to [build a local copy of the site](/contribute/Building-a-local-copy-of-the-site/). Then simply add a link to your tutorial to `config.yml` and recompile the website to preview it. (The website will compile faster if you remove all other tutorials from `config.yml`).


# Writing a new tutorial in LaTeX

Tutorials written in LaTeX should be saved into `main.tex`. We would appreciate if you used `preamble.tex` and `biblatex_macros.tex` along with the outline `main.tex` in the [tutorial template repository](https://github.com/Taming-the-BEAST/Tutorial-Template) to ensure that all of our tutorials have the same style. 

Please also write a small description of your tutorial in `README.md`. 
Please do not add the compiled PDF file to the repository. We will build it ourselves.


# Contributing an existing PDF tutorial

Sometimes it may be the case that you already have an existing tutorial for BEAST2 that would be difficult to convert to Markdown or LaTeX. As long as you have a PDF file for the tutorial we can still use it! In this case just add the PDF file to the root of the GitHub project, and write a small description of the tutorial in `README.md` and you're done! 


# Contribute an existing Wiki tutorial

If a tutorial is already on a GitHub or GitLab Wiki it should already be written in Markdown and could be ported very easily for Taming the BEAST. Keep in mind that the Taming the BEAST website allows more flexibility for the tutorial style and allows references and figure captions. In addition, the tutorial would be available in a central location with other BEAST2 tutorials, bundled with all the data and XML files needed to run it.
