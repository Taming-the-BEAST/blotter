---
title: Taming the BEAST Beijing
layout: workshop
address: IVPP
location: Beijing, China
latitude: 39.93784688536864
longitude: 116.33400508845169
startdate: 2025-07-14
enddate: 2025-07-18
image: /images/workshops/Taming-the-BEAST-Beijing-Logo.svg
flyer: /images/workshops/Taming-the-BEAST-Beijing-Flyer.pdf
homepage: /workshops/2025-Beijing/index.html
has_programme: true
repo: Taming-the-BEAST/Taming-the-BEAST-2025-Beijing-Lectures

---

<!--figure>
	<img src="{{ site.baseurl }}/images/workshops/Taming-the-BEAST-Beijing-Flyer.jpg" alt="TTB Beijing flyer">
</figure>

<div class="bigspacer"></div-->

Please visit the [workshop page](../2025-Beijing/) for information about the venue, travel and the workshop committee.


{% for form in site.categories.forms %}
{% if form.title == page.title and form.open %}

# Applications
We are now accepting applications! The registration fee is **1500 CNY**, and will cover all meals during the workshop.

**Please click [here]({{ form.url | prepend:site.baseurl }}) to apply.**

Applications are open until **25 April 2025**!

{% endif %}
{% endfor %}

<!--div class="bigspacer"></div-->


# Programme

In case GitHub is not accessible and tutorial files cannot be downloaded, all of the tutorials for this workshop are mirrored on [GitLab](https://gitlab.com/ttb2025-group).

<table style="width:40%">
<tbody>
<tr>
<td class="invited-lecture"><b>Invited talks</b></td>
<td class="lecture"><b>Lectures</b></td>
<td class="tutorial"><b>Tutorials</b></td>
<td class="help-session"><b>Interactive</b></td>
</tr>
</tbody>
</table>


<table>
<thead>

<tr>
<th style="width:5%"></th>
<th style="width:5%">Sunday <br> 2025/07/13 </th>
<th style="width:18%">Monday <br> 2025/07/14</th>
<th style="width:18%">Tuesday <br> 2025/07/15 </th>
<th style="width:18%">Wednesday <br> 2025/07/16 </th>
<th style="width:18%">Thursday <br> 2025/07/17 </th>
<th style="width:18%">Friday <br> 2025/07/18 </th>
</tr>

</thead>

<tbody>

<!-- 8.45 -->
<tr>
<td> 08:45 </td>
<td rowspan="21" class="padding"> Arrival </td>
<td> Welcome </td>
<td> Housekeeping </td>
<td> Housekeeping </td>
<td> Housekeeping </td>
<td> Housekeeping </td>
</tr>

<!------------------------------------------------------------------>
<!-- 9.00-->
<tr>
<td> 09:00 </td>
	<!-- Mon -->
	<td rowspan="4" class="lecture"><b>Joëlle Barido-Sottani</b><br>
									<i>Introduction to Bayesian phylogenetics</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
	<!-- Tue -->
	<td rowspan="4" class="invited-lecture"><b>Simon Ho</b><br><i>Phylogenetics and molecular dating in the genomic era</i>
											(<a href="https://www.sydney.edu.au/science/about/our-people/academic-staff/simon-ho.html">link</a>)
	</td>
	<!-- Wed -->
	<td rowspan="4" class="invited-lecture"><b>Sasha Gavryushkina</b><br><i>Birth-death models for estimating speciation and epidemiological parameters</i>
											(<a href="https://researchers.adelaide.edu.au/profile/sasha.gavryushkina">link</a>)
	</td>
	<!-- Thu -->	
	<td rowspan="4" class="invited-lecture"><b>Xing Xu</b><br><i>Morphology-based phylogenetic analysis: Taxon sampling, character formulation and coding</i>
											(<a href="http://english.casad.cas.cn/members/casm/does/202404/t20240416_660183.html">link</a>)
	</td>
	<!-- Fri -->
	<td rowspan="4" class="invited-lecture"><b>Arong Luo</b><br><i>Molecular data and their use in macroevolutionary studies</i>
											(<a href="http://english.ioz.cas.cn/sourcedb/scs/202310/t20231030_431237.html">link</a>)
	</td>
</tr>
<!-- 9.15 -->
<tr>
<td> 09:15 </td>
</tr>

<!-- 9.30 -->
<tr>
<td> 09:30 </td>
</tr>

<!-- 9.45 -->
<tr>
<td> 09:45 </td>
</tr>

<!------------------------------------------------------------------>
<!-- 10.00 -->
<tr>
<td> 10:00 </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
</tr>

<!------------------------------------------------------------------>
<!-- 10:15 -->
<tr>
<td> 10:15 </td>
	<!-- Mon -->
	<td rowspan="4" class="lecture"><b>Chi Zhang</b><br>
									<i>First steps in BEAST2 and setting priors</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
	<!-- Tue -->	
	<td rowspan="4" class="lecture"><b>Walter Xie</b><br>
									<i>LinguaPhylo and LPhyBEAST</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
	<!-- Wed -->
	<td rowspan="4" class="lecture"><b>Rong Zhang</b><br>
									<i>Inference using continuous traits</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
	<!-- Thu -->
	<td rowspan="4" class="lecture"><b>Joëlle Barido-Sottani</b><br>
									<i>Structured models in phylodynamics</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
	<!-- Fri -->
	<td rowspan="4" class="lecture"><b>Sophie Seidel</b><br>
									<i>Single-cell phylogenetics for developmental biology</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)-->
	</td>
</tr>

<!-- 10:30 -->
<tr>
<td> 10:30 </td>
</tr>

<!-- 10:45 -->
<tr>
<td> 10:45 </td>
</tr>

<!-- 11:00 -->
<tr>
<td> 11:00 </td>
</tr>

<!------------------------------------------------------------------>
<!-- 11:15 -->
<tr>
<td> 11:15 </td>
	<!-- Mon -->
	<td rowspan="2" class="tutorial"><b>Introduction to BEAST2</b><br>
									(<a href="/tutorials/Introduction-to-BEAST2/">tutorial</a>)</td>
	<!-- Tue -->
	<td rowspan="4" class="tutorial"><b>Analysing Time-Stamped Data with LinguaPhylo and BEAST</b><br>
									(<a href="https://linguaphylo.github.io/tutorials/time-stamped-data/">tutorial</a>)</td>
	<!-- Wed -->
	<td rowspan="4" class="tutorial"><b>Modelling continuous trait evolution in BEAST2</b><br>
									(<a href="/tutorials/contraband-tutorial/">tutorial</a>)</td>
	<!-- Thu -->
	<td rowspan="2" class="tutorial"><b>Modelling macro-evolution with BDMM-prime</b><br>
									(<a href="/tutorials/BDMM-Prime-for-macroevolution/">tutorial</a>)</td>
	<!-- Fri -->
	<td rowspan="4" class="tutorial"><b>Estimating single-cell trees from lineage tracing data with TiDeTree</b><br>
									(<a href="/tutorials/TiDeTree-Tutorial/">tutorial</a>)</td>
</tr>


<!------------------------------------------------------------------>
<!-- 11:30 -->
<tr>
<td> 11:30 </td>
</tr>


<!-- 11:45 -->
<tr>
<td> 11:45 </td>
	<!-- Mon -->
	<td rowspan="2" class="tutorial"><b>Visualizing BEAST2 results in R</b><br>
									(<a href="/tutorials/Visualizing-BEAST2-results/">optional tutorial</a>)</td>
	<!-- Thu -->
	<td rowspan="2" class="tutorial"><b>Modelling pathogen spread with MASCOT</b><br>
									(<a href="/tutorials/Mascot-Tutorial/">optional tutorial</a>)</td>
</tr>


<!-- 12:00 -->
<tr>
<td> 12:00 </td>
</tr>

<!------------------------------------------------------------------>
<!-- 12:15 -->
<tr>
<td> 12:15 </td>
<td rowspan="4" class="food"> <b>Lunch</b> <br><i>IVPP</i>  </td>
<td rowspan="4" class="food"> <b>Lunch</b> <br><i>IVPP</i>  </td>
<td rowspan="28" class="padding">Free afternoon</td>
<td rowspan="4" class="food"> <b>Lunch</b> <br><i>IVPP</i>  </td>
<td rowspan="4" class="food"> <b>Lunch</b> <br><i>IVPP</i>  </td>
</tr>

<!-- 12:30 -->
<tr>
<td> 12:30 </td>
</tr>

<!-- 12:45 -->
<tr>
<td> 12:45 </td>
</tr>

<!-- 13:00 -->
<tr>
<td> 13:00 </td>
</tr>

<!------------------------------------------------------------------>
<!-- 13:15 -->
<tr>
<td> 13:15 </td>
	<!-- Mon -->
	<td rowspan="2" class="lecture"><b>Joëlle Barido-Sottani</b><br>
									<i>Molecular clock models</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Tue -->
	<td rowspan="4" class="lecture"><b>Rachel Warnock</b><br>
									<i>Divergence time estimation and total evidence dating</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Thu -->
	<td rowspan="4" class="lecture"><b>Chi Zhang</b><br>
									<i>Species tree inference and the multispecies coalescent</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Fri -->
	<td rowspan="4" class="lecture"><b>Rachel Warnock</b><br>
									<i>Morphological models and total-evidence dating</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
</tr>

<!-- 13:30 -->
<tr>
<td> 13:30 </td>
</tr>

<!-- 13:45 -->
<tr>
<td> 13:45 </td>
	<!-- Mon -->
	<td rowspan="3" class="tutorial"><b>Molecular clock dating and modelling rate variation</b><br>
									(<a href="/tutorials/Molecular-clock-dating-and-modelling-rate-variation/">tutorial</a>)</td>
</tr>

<!-- 14:00 -->
<tr>
<td> 14:00 </td>
	<td rowspan="20" class="help-session"><b>Registration</b><br><i>IVPP<br>(main building)</i></td>
</tr>

<!-- 14:15 -->
<tr>
<td> 14:15 </td>
	<!-- Tue -->
	<td rowspan="4" class="tutorial"><b>Dating species divergences with the fossilized birth-death process</b><br>
									(<a href="/tutorials/FBD-tutorial/">tutorial</a>)</td>
	<!-- Thu -->
	<td rowspan="4" class="tutorial"><b>Estimating species trees using StarBEAST3</b><br>
									(<a href="/tutorials/StarBeast3-Tutorial/">tutorial</a>)</td>
	<!-- Fri -->
	<td rowspan="4" class="tutorial"><b>Modelling morphological evolution in BEAST2</b><br>
									(<a href="/tutorials/Total-Evidence-Tutorial/">tutorial</a>)</td>
</tr>

<!------------------------------------------------------------------>
<!-- 14:30 -->
<tr>
<td> 14:30 </td>
	<!-- Mon -->
	<td rowspan="3" class="tutorial"><b>Prior selection and clock calibration</b><br>
									(<a href="/tutorials/Prior-selection/">optional tutorial</a>)</td>
</tr>

<!-- 14:45 -->
<tr>
<td> 14:45 </td>
</tr>


<!------------------------------------------------------------------>
<!-- 15:00 -->
<tr>
<td> 15:00 </td>
</tr>

<!-- 15:15 -->
<tr>
<td> 15:15 </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
<td class="food"><b> Break</b> </td>
</tr>

<!-- 15:30 -->
<tr>
<td> 15:30 </td>
	<!-- Mon -->
	<td rowspan="4" class="lecture"><b>Chi Zhang</b><br>
									<i>Tree priors</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Tue -->
	<td rowspan="4" class="lecture"><b>Joëlle Barido-Sottani</b><br>
									<i>Troubleshooting & practical tips</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Thu -->
	<td rowspan="4" class="lecture"><b>Robert Yuan</b><br>
									<i>Model selection via marginal likelihood estimation</i><br><!--(<a href="https://github.com/Taming-the-BEAST/Squamish-BEAST-Tamers-2023-Lectures/raw/master/">slides</a>)--></td>
	<!-- Fri -->
	<td rowspan="6" class="help-session"><b>Free Q&A session and wrap-up</b><br>(optional)</td>
</tr>
	
<!-- 15:45 -->
<tr>
<td> 15:45 </td>
</tr>


<!------------------------------------------------------------------>
<!-- 16:00 -->
<tr>
<td> 16:00 </td>
</tr>

<tr>
<td> 16:15 </td>
</tr>

<tr>
<td> 16:30 </td>
	<!-- Mon -->
	<td rowspan="4" class="tutorial"><b>Inference of past population dynamics using skyline models</b><br>
									(<a href="/tutorials/Skyline-plots/">BEAST2 tutorial</a>
									,<a href="https://linguaphylo.github.io/tutorials/skyline-plots/">LPhyBEAST tutorial</a>)</td>
	<!-- Tue -->		
	<td rowspan="2" class="tutorial"><b>BEAST2 initialization</b><br>
									(<a href="/tutorials/Troubleshooting-initialization-issues/">tutorial</a>)</td>
	<!-- Thu -->
	<td rowspan="4" class="tutorial"><b>Model selection with nested sampling</b><br>
									(<a href="/tutorials/NS-tutorial/">tutorial</a>)</td>		
</tr>

<tr>
<td> 16:45 </td>
</tr>

<tr>
<td> 17:00 </td>
	<!-- Tue -->
	<td rowspan="2" class="tutorial"><b>BEAST2 convergence</b><br>
								(<a href="/tutorials/Troubleshooting-convergence-issues/">optional tutorial</a>)</td>
	<!-- Fri -->
	<td rowspan="9" class="padding">Departure</td>									
</tr>

<tr>
<td> 17:15 </td>
</tr>

<tr>
<td> 17:30 </td>
	<!-- Mon -->
	<td rowspan="2" class="help-session"><b>BEAST Clinic & Tutorial catch-up</b><br>(optional)</td>
	<!-- Tue -->
	<td rowspan="2" class="help-session"><b>BEAST Clinic & Tutorial catch-up</b><br>(optional)</td>
	<!-- Thu -->
	<td rowspan="2" class="help-session"><b>BEAST Clinic & Tutorial catch-up</b><br>(optional)</td>
</tr>

<tr>
<td> 17:45 </td>
</tr>

<tr>
<td> 18:00 </td>
	<!-- Mon -->
	<td rowspan="5" class="food"><b>Dinner</b><br><i>IVPP<br>(conference room)</i></td>
	<!-- Tue -->
	<td rowspan="5" class="food"><b>Dinner</b><br><i>IVPP<br>(conference room)</i></td>	
</tr>

<tr>
<td> 18:15 </td>
</tr>

<tr>
<td> 18:30 </td>
	<!-- Thu -->
	<td rowspan="4" class="food"><b>Gala dinner</b><br><i>Xiyuan dining room (Xiyuan hotel 2nd floor)</i></td>
</tr>

<tr>
<td> 18:45 </td>
</tr>

<tr>
<td> 19:00 </td>
	<!-- Sun -->
	<td rowspan="1" class="food"><b>Opening event</b><br><i>IVPP<br>(main building)</i></td>
</tr>


</tbody>
</table>





{% if page.repo %}

<div class="bigspacer"></div>
<hr>
<div class="bigspacer"></div>
# Lecture slides

Slides to lectures are available from [GitHub]( https://github.com/{{ page.repo }} ) and mirrored on [GitLab]( https://gitlab.com/ttb2025-group/Taming-the-BEAST-2025-Beijing-Lectures ) (in case GitHub is not accessible). 

{% endif %}

<div class="bigspacer"></div>
<hr>
<div class="bigspacer"></div>

# Required software

Please ensure the following software is installed _prior_ to the start of the workshop. 

- **BEAST 2:** BEAST 2 is a cross-platform program for Bayesian phylogenetic analysis of molecular sequences. We will be using this software to perform analyses on the data brought to the workshop. We will be using **BEAST v2.7** for the workshop [(download)](http://beast2.org/). If you want to use the latest release of BEAST 2 you can upgrade the downloaded version to **BEAST v2.7.8** by updating Beast.Base from the Package Manager in **BEAUti**. The developers would appreciate in any feedback you have about the new version! 
- **BEAGLE (optional, but strongly recommended):** BEAGLE is a high-performance library that can perform the core calculations in BEAST2 (and many other phylogenetics packages) much faster. BEAGLE isn't necessary for the workshop, but it will speed up your analyses [(download)](http://beast.community/beagle).
- **FigTree:** FigTree is a graphical viewer of phylogenetic trees, specifically designed to display summarised and annotated trees produced by BEAST [(download)](http://beast.community/figtree).
- **Tracer:** Tracer is a program for analysing the trace files generated by Bayesian MCMC runs. It can be used to check mixing, ESS, parameter correlations, etc. [(download)](http://beast.community/tracer).
- **Java:** The official BEAST 2 releases come bundled with Zulu Java 17 and don't need a separate Java installation anymore. However, FigTree and Tracer still require a Java Runtime Environment (JRE) to be installed. If you don't have a suitable version of Java already installed, you can install Zulu Java 17 from Azul Systems. [(download)](https://www.azul.com/downloads/?version=java-17-lts&package=jre#zulu).
- **LPhy Studio:** We will be using LinguaPhylo for a tutorial. Please see the installation instructions on the [website](https://linguaphylo.github.io/setup/). You will also need to install the LPhyBEAST package in BEAST 2. 
- **R:** R is a free software environment that provides a wide variety of statistical (linear and nonlinear modelling, classical statistical tests, time-series analysis, classification, clustering) and graphical techniques, and is highly extensible [(download)](https://www.r-project.org/).
- **RStudio (optional):** RStudio provides a friendly front-end for R [(download)](https://posit.co/download/rstudio-desktop/).

### BEAST 2 packages

As with the software above, it is highly recommended to pre-install all of the BEAST2 packages we will be using over the course of the week. We will be using the following packages:

- BDMM-Prime
- BDSKY
- BEAST_CLASSIC
- BEASTLabs
- bModelTest
- CCD
- ClaDS
- contraband
- Mascot
- MM
- MSBD
- NS
- SA
- starbeast3
- TiDeTree
- TreeStat2



<div class="bigspacer"></div>
<hr>
<div class="bigspacer"></div>

# Additional resources

There are a lot of great resources for brushing up or deepening your knowledge of the models used in BEAST2. This is a selection of resources that we consider especially useful, several of which are freely available on the internet. It is not expected that you've worked through _any_ of these before the workshop!  


### Phylogenetics and phylodynamics

- _Paul Lewis'_ Phyloseminar Phylogenetics 101 primer is an excellent introduction to the topic (4 hours of content):
	- [Part 1: Trees and Likelihood](https://www.youtube.com/watch?v=1r4z0YJq580)
	- [Part 2: Substitution models](https://www.youtube.com/watch?v=UsLeY0wZr4Y)
	- [Part 3a: Bayesian statistics and MCMC](https://www.youtube.com/watch?v=4PWlnNsfz90)
	- [Part 3b: Bayesian phylogenetics](https://www.youtube.com/watch?v=TLtOS--YwkU)
- [Decoding Genomes: From Sequences to Phylodynamics](https://decodinggenomes.org), _Tanja Stadler, Carsten Magnus, Timothy Vaughan, Joëlle Barido-Sottani, Veronika Bošková, Jana S. Huisman, Jūlija Pečerska_ **(PDF available free of charge from the website)**
- [Bayesian Evolutionary Analysis with BEAST](https://www.beast2.org/book/), _Alexei J. Drummond, Remco R. Bouckaert_
- [Molecular Evolution: A Statistical Approach](http://abacus.gene.ucl.ac.uk/MESA/), _Ziheng Yang_
- [Inferring Phylogenies](https://www.amazon.co.uk/Inferring-Phylogenies-Joseph-Felsenstein/dp/0878931775), _Joseph Felsenstein_


### Statistics and Bayesian inference

- [Information Theory, Inference and Learning Algorithms](https://www.inference.org.uk/itila/book.html), _David MacKay_ **(PDF available free of charge from the website)** 
- _Ziheng Yang's_ [statistics primer](http://abacus.gene.ucl.ac.uk/PPS/PrimerProbabilityStatistics.pdf) gives a short overview of the topic (excluding Bayesian inference).
- _Richard McElreath's_ [Statistical Rethinking](https://github.com/rmcelreath/stat_rethinking_2025) course uses Bayesian inference to teach data analysis.


<div class="bigspacer"></div>
<hr>
<div class="bigspacer"></div>




# Questions
Please contact the organizing committee at [ttb.beijing@ivpp.ac.cn](mailto:ttb.beijing@ivpp.ac.cn).

<div class="hugespacer"></div>
<hr>

<div class="bigspacer"></div>
<figure>
	<img src="{{ site.baseurl }}/images/workshops/Taming-the-BEAST-Beijing-Sponsors.jpg" alt="Sponsors of the Beijing workshop">
</figure>