var nameNode = document.getElementById('name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('intro');
var gitNode = document.getElementById('github');
var nameComponent = /*#__PURE__*/React.createElement("h1", null, "Harshaa Vardhini Subramani");
var imageComponent = /*#__PURE__*/React.createElement("img", {
  id: "img-st",
  src: "./HaSubram.jpg"
});
var introComponent = /*#__PURE__*/React.createElement("p", null, "I am a graduate student at San Diego State University pursuing my Masters in Computer Science. Prior to this, I worked as a Senior Java Developer with more than 6 years of experience in software design and development. I was also actively involved in Research and Development areas with exposure to various open source technologies and cloud computing platforms like AWS. ");
var gitComponent = /*#__PURE__*/React.createElement("button", {
  id: "btn"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/HarshaaVardhiniSubramani"
}, "VIEW MY GITHUB REPO"));
ReactDOM.render(nameComponent, nameNode);
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);