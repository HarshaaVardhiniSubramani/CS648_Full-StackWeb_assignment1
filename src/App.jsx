
var nameNode = document.getElementById('name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('intro');
var gitNode = document.getElementById('github');
var nameComponent = <h1>Harshaa Vardhini Subramani</h1>; 
var imageComponent = <img id="img-st" src="./HaSubram.jpg"/>;
var introComponent = <p>I am a graduate student at San Diego State University pursuing my Masters in Computer Science. Prior to this, I worked as a Senior Java Developer with more than 6 years of experience in software design and development. I was also actively involved in Research and Development areas with exposure to various open source technologies and cloud computing platforms like AWS. </p> 
var gitComponent = <button id="btn"><a href="https://github.com/HarshaaVardhiniSubramani">VIEW MY GITHUB REPO</a></button>
ReactDOM.render(nameComponent, nameNode); 
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);