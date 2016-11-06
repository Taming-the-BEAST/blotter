---
layout: post
title: Submitting a new tutorial
author: Louis du Plessis
---

Before submitting the tutorial you need to go through a couple of final steps. This is mostly to ensure that everything is where it should be, so the submission process can proceed smoothly.

# Add tutorial metadata

Tutorial metadata are used to store the names of the authors and the level of the tutorial. 
Metadata should be added to the yaml header of `README.md`. 

```
---
author: Author One,Author Two,Author Three
level: Intermediate
---

The rest of the file continues here...
```

If there are multiple authors they should be separated by commas (no spaces). At the moment there are only three levels available, 

- Beginner
- Intermediate
- Professional

Note that if no level is given the tutorial will be labeled as "intermediate."


# Add licensing information

Add information about the license at the end of the tutorial. We require that all tutorials be licensed under a [Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/). This will ensure that you will get proper attribution if someone uses your tutorial, while still allowing other people to modify the tutorial.


# Testing

After writing the tutorial run through all the exercises using the latest version of BEAST2 and save all the XML files and output. Make sure that all data, scripts, XML and output files are stored in the correct directories in the GitHub repository **before** submitting the tutorial.


# New tutorial checklist
Please go through the [checklist](/contribute/New-tutorial-checklist) to make sure that the tutorial is complete!


# Submit the tutorial
If you feel that the tutorial is complete and ready to be submitted contact one of the website [administrators](/team/) with a link to the tutorial. We will then fork the repository, evaluate it and make the necessary changes to the tutorial to bring it in line with out standards. Once that is done, we will [open a pull request](https://help.github.com/articles/about-pull-requests/). If the changes are acceptable to you, please accept the pull request. 

Once this is complete we can add the tutorial to the website. At this stage you can choose to either retain ownership of the tutorial or [transfer](https://help.github.com/articles/about-repository-transfers/) ownership to the [taming-the-beast organization](https://github.com/Taming-the-BEAST) on GitHub. 