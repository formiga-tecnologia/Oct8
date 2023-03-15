# Oct8
<p align="center">
  <img width="200" src="./image/oct8logo.png" alt="Material Bread logo"><br/>
</p>  
<h1> Objetive  </h1>
Functional language for dynamic  graphic desing
Oct8 is one  library for desing and dynamic sites , with support to cartesian plan ( basic) 

<h3>How works?</h3>
This is an interface control engine that uses CSS and JS to create more intuitive and full-bodied designs.   Oct8 supports static pages, SPA and even games (without having to use canvas or any NPM module)
For this to work import only two script tags into your projection, as shown in our example


<h2>How is use in my project</h2>
If your first project on October 8, we recommend the download project example at this link: </br>
    <a href="https://github.com/formiga-tecnologia/Oct8">Example Project</a> 
Download yours for git clone
  

<h1>Documentation Oct8  Css </h1>
Short snippet to get started in Oct8 understand that Oct8 uses a cartesian plan system inside boxes or containers, fully responsive. The basic structure follows with 3 main types of standard containers: 
   
<ul> 
   <li>CBE class: element that keeps centered and all elements within it are centered</li>
   <li>ELB class: An element that helps center varied elements if you want to create interactivity of various elements in a dynamic way create the ELB to place several elements.</li>
   <li>SSE class: they are diverse elements that do not follow alignments and the ideal is to place these elements inside an ELB class container</li>
</ul>
</br>

in this case hierarchically the ideal would be to place the elements within the other follows these two examples of container creation: 
</br>
   <b> example class elements hierarchy</b>
  ```html
   <cbe>
      <elb>
        <sse></sse>
	 <sse></sse>
	 <sse></sse>
      </elb>
   </cbe>  
  
```
   
<h2> Oct8 Reference </h2>
</br>

<b>Implementing Oct8 in your Project: </b> Enter the scripts below in your Js document:
</br></br>
```javascript
	import Oct8 from "../Oct8/Oct8.js";
	import Oct8Events from "../Oct8/Oct8Events.js";
```
Within Oct8 the componetization system works as follows, you need to create a factory that will generate your componenetes within your HTML document dynamically, within oct8 has three main pillars:
<ul>
	<li>Factorys</li>
	<li>Scene</li>
	<li>Timeline</li>
</ul>

<h3> How to create your Factory system </h3>
To create the manufacturing system, you create a method that manufactures it will call and passing as property to generate different components with different behaviors.

```javascript
	var OctEngine = new Oct8();	
	OctEngine.CreateObjectFactory(ArticleComp,"NameOfComponentA")
	function ArticleComp(props){
		    var elementCreated = OctEngine.CreateContainerElement(props[0],"divclass","div")
		     OctEngine.ModifyContentContainer(elementCreated,
        	     "<div>'+ props[1] +'</div>")
```
</br>
with this code you can generate a manufacturing system, where always passing a different stopmeter will create a component with a different content
To render this component on screen you can use this method here:

```javascript
	var prop_element = {
		Props01 = ["Id01","Hello world"]
	}
	OctEngine.AppendObjectFacyotyTo("NameOfComponentA",prop_element.Props01)
```
</br>



<h3>Creating a scene</h3> 
A scene will be what will be executed in predetermined order, so each scene is responsible for doing something, a scene can be a whole screen of your application, or a scene can be a partial rendering of a component where the next scene will be the continuity of that component, such as steps of a lead for example.
It follows as an example a scene creation in practice.

```javascript
objA.NewScene("Scene01",[ConsoleLog,"Ola mundo"],9000,5000)
```
