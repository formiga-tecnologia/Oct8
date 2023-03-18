# Oct8 frameworks

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
function RenderComp(){
	....
}

function Validate(){
	....
}

function ChangeColor(){
	....
}
OctEngine.NewScene("Scene01",[RenderComp,Validate,ChangeColor],9000,5000)
```
As parameters you have to pass the name of the scene, its functions that will be executed, the execution time of each value of the Array, and the execution time of the scene as a whole (its timeout value in a nutshell)

<h3>Running the scene</h3>
To perform the scene you can directly delete the name of the created scene or even using parameters that perform the next scene or previous scene, where the scene always begins with the first scene created.
follows how it works in these three ways:

```javascript
//Execute Scene for direct name
OctEngine.ExecuteScene("Scene01")
// Execute Next Scene for Default
OctEngine.ExecuteNextScene()
//Execute Prev Scene for Default
OctEngine.ExecutePrevScene()
```

<h3>Timeline System</h3> 
With the scenes created you can run all of them at once with the Timeline system. The Timeline system performs all functions within the order within the time each was determined, each Variable Oct8 has only a single Timeline and to run this Timeline you need to run this code: 

```javascript
OctEngine.ExecuteTimeLine()
```
<h2>Create Dynamic Elements for Oct8 function </h2>
To create on-screen elements with greater ease and much greater readability, it is by using the functions of the Oct8 itself even outside the manufacturing system, in the example below follows how to create a small component without using many lines:

```javascript
    var ElementBase = OctEngine.CreateContainerElement("Id_element","append_element_Id","Class_Names")
```

With this single line you can create an element that is the "div" type, and you can modify its properties or even insert more elements within that component, the example is to modify the properties and elements:

```javascript
    var ElementBase = OctEngine.CreateContainerElement("Id_element","append_element_Id","Class_Names")
    //Modify content value.
    OctEngine.ModifyContentContainer(ElementBase , "<section>Section type</section>")
    //Modify props element.
    OctEngine.ModifyPropsDefault(ElementBase , 9,4,[40],[40])
```

To modify the properties you need to put the values inside keys [10] , if you put without the keys the Oct8 will add values to the element if you negatively put -1 the Oct8 will decrease the property according to the current value.

<h3>Creating oct8 animations</h3>
