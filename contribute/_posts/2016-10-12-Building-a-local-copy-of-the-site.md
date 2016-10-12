---
layout: post
title: Building a local copy of the site
author: Louis du Plessis
---


# Step 1: Clone the repository

To build the website locally, first clone the repository: 

> - Open terminal 
> - Type: `git clone https://github.com/Taming-the-BEAST/blotter.git`


# Step 2: Install dependencies

The website is built with [Jekyll](http://www.jekyllrb.com), a popular static site generator. In addition, a Ruby script is used to update the site's tutorials.
We recommend using Bundler to install and run Jekyll. Bundler manages Ruby gem dependencies, reduces Jekyll build errors, and prevents environment-related bugs.

Check if you have an up-to-date version of Ruby installed:

> - Open terminal
> - Type: `ruby --version`

If you don't have Ruby 2.0.0 or higher installed go [here](https://www.ruby-lang.org/en/downloads/) to install Ruby.

> - Install Bundler: `gem install bundler`

Now you can install the necessary Ruby dependencies: 

> - Navigate to the `blotter` directory.
> - Type: `bundle install`

You may need admin rights to perform the last step. If you run into difficulties remove the file `Gemfile.lock` and try again.


# Step 3: Build the site

You can build the website by typing:

> - `bundle exec jekyll build`

Alternatively, you can preview the website locally by starting a Jekyll server:

> - Type: `bundle exec jekyll serve`
> - In your browser navigate to `http://localhost:4000`

To include the tutorials in the website you have to run a Ruby script that will clone all the tutorials locally:

> - Navigate to the `blotter` directory
> - Type: `ruby _scripts/update-and-preprocess.rb`
> - Recompile the website

# Useful links

- https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
- https://github.com/blab/blotter: The website this site is based on