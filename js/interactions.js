const wrapper = d3.select('#wrapper')
    .append('svg')
        .attr('height', 500)
        .attr('width', 800)

const bounds = wrapper.append('g')

const tip = d3.select('#wrapper').append('div')
    .style('position', 'absolute')
    .attr('class', 'tooltip')
    .html('Outside')
    .style('opacity', 0)
    .style('border-width', 'thin')
    .style('border', 'dashed')
    .style('padding', '5px')
    .style('border-radius', '5px')

var mouseover = function (data) {
    tip.style('opacity', 1)
    tip.style('font-size', '30px')
}

var mouseleave = function (data) {
    tip.style('opacity', 0)
    tip.style('font-size', '14px')
    circle.attr('opacity', 1)
}

var mousemove = function (data) {
    tip.html('x = '+ Math.trunc(d3.pointer(data)[0])+'px<br>y = '+Math.trunc(d3.pointer(data)[1])+'px')
    tip.style('left', d3.pointer(data)[0]+'px')
    tip.style('top', d3.pointer(data)[1]+'px')
    circle.attr('opacity', 0.5)
}


const circle = bounds.append('circle')
    .attr('id', 'circleTooltip')
    .attr('cx', 650)
    .attr('cy', 200)
    .attr('r', 100)
    .attr('opacity', 1)
    .attr('fill', '#a4b6e9')
    
circle
    .transition()

circle
    .on('mouseover', mouseover)
    .on('mouseleave', mouseleave)
    .on('mousemove', mousemove)
    
    



// const padding = 250

// for (let index = 0; index < 4; index++) {
//     bounds.append('rect')
//         .attr('x', (index)*padding)
//         .attr('y', 0)
//         .attr('height', 200)
//         .attr('width', 200)
//         .attr('fill', 'cornflowerblue')
// }

// console.log(xScale(3))
