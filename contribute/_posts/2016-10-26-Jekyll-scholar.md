---
layout: post
title: Jekyll-scholar
author: Louis du Plessis
---

[Jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) is a plugin that can be used to add Bibtex references to Markdown tutorials. 

# Adding references to a tutorial with Jekyll-scholar

To add references add the bibtex library to the repository root. Add an empty yaml header to the bibtex file so Jekyll-scholar will know to parse the file. Do this by adding these two lines to the start of the file, 

```
---
---

```

To print the references in your tutorial, assuming your tutorial is called `My-Awesome-Tutorial` and your references are saved in a file called `master_refs.bib`, add the line, 

```
{`% bibliography --cited --file My-Awesome-Tutorial/master_refs %`}
```

to `README.md` (but remove the ticks between the "{" and "%") at the location you want to print the bibliography. This will print all cited references. To cite a reference simply add,

```
{`% cite AwesomeBook --file My-Awesome-Tutorial/master_refs.bib %`}
```

This will add a citation to a reference saved as "AwesomeBook" in the file `master_refs.bib`. Note that you have to always enter the name of the bibtex file and enter the path *relative* to the parent directory of your GitHub repository.




# Common issues with Jekyll-scholar
- For the moment Jekyll-scholar cannot parse items enclosed between double braces ({`{ and }`}), but interprets it as a liquid tag. 
- Jekyll-scholar can only parse your bibliography if it is encoded in UTF-8. This can easily be done in most text proper text editors (e.g. [Sublime](http://sublimetext.com/)).



# Useful links
- [Jekyll-scholar](https://github.com/inukshuk/jekyll-scholar)