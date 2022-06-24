# Oct8
<p align="center">
  <img width="200" src="./image/vi_export_4gvajckbj_16548749092741241.png" alt="Material Bread logo"><br/>
</p>

Functional language for dynamic  graphic desing
Oct8 is one  library for desing and dynamic sites , with support to cartesian plan ( basic) 

<h3>How works?</h3>
This is an interface control engine that uses CSS and JS to create more intuitive and full-bodied designs.   Oct8 supports static pages, SPA and even games (without having to use canvas or any NPM module)
For this to work import only two script tags into your projection, as shown in our example


<h2>How is use in my project</h2>
If your first project on October 8, we recommend the download project example at this link: </br>
    <a href="https://github.com/formiga-tecnologia/Oct8">Example Project</a> 
Download yours for git clone


<h1>Documentation Oct8 </h1>
Short snippet to get started in Oct8 understand that Oct8 uses a cartesian plan system inside boxes or containers, fully responsive. The basic structure follows with 3 main types of standard containers: 

<ul> 
   <li>CBE class: element that keeps centered and all elements within it are centered</li>
   <li>ELB class: An element that helps center varied elements if you want to create interactivity of various elements in a dynamic way create the ELB to place several elements.</li>
   <li>SSE class: they are diverse elements that do not follow alignments and the ideal is to place these elements inside an ELB class container</li>
</ul>

</br>

in this case hierarchically the ideal would be to place the elements within the other follows these two examples of container creation: 
   <b> example </b>
    <ul>
      <li> Cbe </li>
	<li>Elb</li>
 		<li>SSE OPEN /CLOSE </li>
 		<li>SSE OPEN /CLOSE </li>
 		<li>SSE OPEN /CLOSE </li>
	<li>ELB CLOSE</li>
      <li>CBE CLOSE </li>
    </ul>

<h2> Oct8 Reference </h2>