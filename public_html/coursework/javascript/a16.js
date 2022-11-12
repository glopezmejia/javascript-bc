
/*** Get the data ***/

/* https://www.worldometers.info/coronavirus/country/us/ */

let arr = [
    {state: 'California', total_cases: 11_341_649, total_recovered: 11_097_404, total_deaths: 96_936, cityAbbr: 'CA'}, 
    {state: 'Texas', total_cases: 7_993_294, total_recovered: 7_852_081, total_deaths: 91_666, cityAbbr: 'TX'}, 
    {state: 'Florida', total_cases: 7_189_354, total_recovered: 7_078_836, total_deaths: 82_065, cityAbbr: 'FL'}, 
    {state: 'New York', total_cases: 6_392_450, total_recovered: 6_294_206, total_deaths: 73_062, cityAbbr: 'NY'}, 
    {state: 'Illinois', total_cases: 3_800_317, total_recovered: 3_712_432, total_deaths: 39_982, cityAbbr: 'IL'}, 
    {state: 'Pennsylvania', total_cases: 3_291_033, total_recovered: 3_226_138, total_deaths: 47_693, cityAbbr: 'PA'}, 
    {state: 'North Carolina', total_cases: 3_220_858, total_recovered: 3_197_655, total_deaths: 26_953, cityAbbr: 'NC'}, 
    {state: 'Ohio', total_cases: 3_173_375, total_recovered: 3_110_252, total_deaths: 40_178, cityAbbr: 'OH'}, 
    {state: 'Georgia', total_cases: 2_917_301, total_recovered: 2_862_512, total_deaths: 40_626, cityAbbr: 'GA'}, 
    {state: 'Michigan', total_cases: 2_874_009, total_recovered: 2_796_917,total_deaths: 39_250, cityAbbr: 'MI'}, 
]

const svgWidth = 1200
const svgHeight = 650

const paddingTopBottom = 80
const paddingLeftRight = 140

const graphWidth = svgWidth - (paddingLeftRight * 2)
const graphHeight = svgHeight - (paddingTopBottom * 2)

/* Add an svg to main */

// let svg = d3.select(".svg-container")
let svg = d3.select('main')
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .style("background-color", "black")

// Title of graph
svg.append("g")
    .append("text")
    .attr("transform", `translate(440, ${paddingTopBottom - 30})`)
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .text("Effects of COVID-19 in US States")
    .style("font-size", "24px")

/* Create Scales */
let maxValueOfCases = 12_000_000
let highestValueInGraph = 11_341_649

    //total cases bars
let yScale = d3.scaleLinear()
    .domain([0, maxValueOfCases])
    .range([graphHeight, 0])

let cScale = d3.scaleLinear()
    .domain([0, highestValueInGraph])
    .range(["#00539CFF", "#00539CFF"])

    //total recovered bars

let aScale = d3.scaleLinear()
    .domain([0, maxValueOfCases])
    .range([graphHeight, 0])

let bScale = d3.scaleLinear()
    .domain([0, 11_097_404])
    .range(["rgb(104, 140, 107)", "rgb(104, 140, 107)"])

    //total active cases

let eScale = d3.scaleLinear()
    .domain([0, maxValueOfCases])
    .range([graphHeight, 0])

let fScale = d3.scaleLinear()
    .domain([0, 96_936])
    .range(["#FCE77D", "#FCE77D"])

console.log(cScale(4000))

let graph = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${paddingTopBottom})`)
    
    /* bind data to graph */
        
let update = graph.selectAll("rect")
    .data(arr)

update.enter()
    .append("rect")
    .attr("x", (d, i) => i * 70) // space between bars
    .attr("y", (d) => yScale(d.total_cases))
    .attr("width", 20)
    .attr("height", (d) => graphHeight - yScale(d.total_cases))
    .attr("fill", (d) => cScale(d.total_cases))

update.enter() 
    .append('rect')
    .attr('transform', 'translate(20,0)')
    .attr("x", (d, i) => i * 70) // space between bars
    .attr("y", (d) => aScale(d.total_recovered))
    .attr("width", 20)
    .attr("height", (d) => graphHeight - aScale(d.total_recovered))
    .attr("fill", (d) => bScale(d.total_recovered))

update.enter() 
    .append('rect')
    .attr('transform', 'translate(40,0)')
    .attr("x", (d, i) => i * 70) // space between bars
    .attr("y", (d) => eScale(d.total_deaths))
    .attr("width", 20)
    .attr("height", (d) => graphHeight - eScale(d.total_deaths))
    .attr("fill", (d) => fScale(d.total_deaths))

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
    .range([0, 700]) //spreads the x-axis tick names

let bottomAxis = d3.axisBottom(xScale)
    
let xAxis = svg.append("g")
    .attr("transform", `translate(${paddingLeftRight}, ${svgHeight - 75})`) // move x-axis up/down left/right
    .call(bottomAxis)

xAxis.select("path")
    .style("stroke", "white")

xAxis.selectAll("text")
    .style("stroke", "white")

xAxis.selectAll("line")
    .style("stroke", "white")


// add axis labels

svg.append("g")
    .append("text")
    .attr("transform", `translate(450, ${paddingTopBottom + 540})`)
    .style("text-anchor", "middle")
    .attr("fill", "#FCE77D")
    .text("Cases per State")

svg.append("g")
    .append("text")
    .attr("transform", `translate(45, ${paddingTopBottom + 250})`+ "rotate(-90)")
    .style("text-anchor", "middle")
    .attr("fill", "#FCE77D")
    .text("Number of Cases")
    // .style("font-size", "15px")

// legend
let colorScale = d3.scaleLinear()
    .domain([0,2500])
    .range(["#00539CFF", "#FCE77D"]);

let legend = d3.legendColor()
    .scale(colorScale)
    .cells(3)

svg.append("g")
    .attr("transform", "translate(900,250)")
    .call(legend);

svg.append("g")
    .append("text")
    .attr("transform", `translate(1000, ${paddingTopBottom + 150})`)
    .style("text-anchor", "middle")
    .attr("fill", "white")
    .text("Legend")
    .style("font-size", "18px")

    svg.append("g")
    .append("text")
    .attr("transform", `translate(920, ${paddingTopBottom + 183})`)
    .style("text-anchor", "start")
    .attr("fill", "white")
    .text("Total COVID-19 Cases")

    svg.append("g")
    .append("text")
    .attr("transform", `translate(920, ${paddingTopBottom + 203})`)
    .style("text-anchor", "start")
    .attr("fill", "white")
    .text("Recovered Cases")

    svg.append("g")
    .append("text")
    .attr("transform", `translate(920, ${paddingTopBottom + 223})`)
    .style("text-anchor", "start")
    .attr("fill", "white")
    .text("Deaths")
