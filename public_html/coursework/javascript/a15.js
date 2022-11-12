
/*** Get the data ***/

/* https://www.worldometers.info/coronavirus/country/us/ */

let arr = [
    {state: 'California', total_cases: 11_341_649, cityAbbr: 'CA'}, 
    {state: 'Texas', total_cases: 7_993_294, cityAbbr: 'TX'}, 
    {state: 'Florida', total_cases: 7_189_354, cityAbbr: 'FL'}, 
    {state: 'New York', total_cases: 6_392_450, cityAbbr: 'NY'}, 
    {state: 'Illinois', total_cases: 3_800_317, cityAbbr: 'IL'}, 
    {state: 'Pennsylvania', total_cases: 3_291_033, cityAbbr: 'PA'}, 
    {state: 'North Carolina', total_cases: 3_220_858, cityAbbr: 'NC'}, 
    {state: 'Ohio', total_cases: 3_173_375, cityAbbr: 'OH'}, 
    {state: 'Georgia', total_cases: 2_917_301, cityAbbr: 'GA'}, 
    {state: 'Michigan', total_cases: 2_874_009, cityAbbr: 'MI'}, 
    {state: 'New Jersey', total_cases: 2_783_723, cityAbbr: 'NJ'}, 
    {state: 'Tennessee', total_cases: 2_351_887, cityAbbr: 'TN'}, 
    {state: 'Arizona', total_cases: 2_283_073, cityAbbr: 'AZ'}, 
    {state: 'Virginia', total_cases: 2_112_539, cityAbbr: 'VA'}, 
    {state: 'Massachusetts', total_cases: 2_078_225, cityAbbr: 'MA'} 
]

const svgWidth = 700
const svgHeight = 650

const paddingTopBottom = 80
const paddingLeftRight = 140

const graphWidth = svgWidth - (paddingLeftRight * 2)
const graphHeight = svgHeight - (paddingTopBottom * 2)

/* Add an svg to main */

// let svg = d3.select(".svg-container")
let svg = d3.select('.svg-container')
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background-color", "black")

svg.append("g")
    .append("text")
    .attr("transform", `translate(340, ${paddingTopBottom - 30})`)
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .text("15 Leading States with Positive COVID-19 Cases")
    .style("font-size", "24px")

/* Create Scales */

let yScale = d3.scaleLinear()
    .domain([0, 12_000_000])
    .range([graphHeight, 0])

let cScale = d3.scaleLinear()
    .domain([0, 11_341_649])
    .range(["pink", "red"])

console.log(cScale(4000))

let graph = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${paddingTopBottom})`)
    
    /* bind data to graph */
        
let update = graph.selectAll("rect")
    .data(arr)

update.enter()
    .append("rect")
    .attr("x", (d, i) => i * 35) // space between bars
    .attr("y", (d) => yScale(d.total_cases))
    .attr("width", 20)
    .attr("height", (d) => graphHeight - yScale(d.total_cases))
    .attr("fill", (d) => cScale(d.total_cases))

/* Create axis */

let leftAxis = d3.axisLeft(yScale)
    .tickSize([5])

let yAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight - 10}, ${paddingTopBottom})`)
    .call(leftAxis)

yAxis.select("path")
    .style("stroke", "white")

yAxis.selectAll("text")
    .style("stroke", "white")

yAxis.selectAll("line")
    .style("stroke", "white")


let cityAbbr = arr.map((d) => { return d.cityAbbr })

let xScale = d3.scaleBand()
    .domain(cityAbbr)
    .range([0, 515])

let bottomAxis = d3.axisBottom(xScale)
    
let xAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${svgHeight - 75})`)
    .call(bottomAxis)

xAxis.select("path")
    .style("stroke", "white")

xAxis.selectAll("text")
    .style("stroke", "white")

xAxis.selectAll("line")
    .style("stroke", "white")


// add axis

svg.append("g")
    .append("text")
    .attr("transform", `translate(350, ${paddingTopBottom + 540})`)
    .style("text-anchor", "middle")
    .attr("fill", "red")
    .text("Cases Per State")

svg.append("g")
.append("text")
.attr("transform", `translate(45, ${paddingTopBottom + 250})`+ "rotate(-90)")
.style("text-anchor", "middle")
.attr("fill", "red")
.text("Number of Cases")
// .style("font-size", "15px")