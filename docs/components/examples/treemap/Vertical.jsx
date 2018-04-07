import React from "react"
import TreeMap from "replot-treemap"


const verticalTreemapCode = `<TreeMap data={data} weightKey="population"
  keyOrder={["country", "state", "city"]}
  width={200} height={400}
/>`

const verticalTreemapData = `const data = [
  {population: 650, country: "China", state: "Beijing", city: "Miyun"},
  {population: 902, country: "China", state: "Beijing", city: "Tongzhou"},
  {population: 120, country: "China", state: "Beijing", city: "Yizhuang"},
  {population: 800, country: "United States", state: "California", city: "San Francisco"},
  {population: 10020, country: "United States", state: "California", city: "Los Angeles"},
  {population: 150, country: "United States", state: "Vermont", city: "Newport"},
  {population: 20, country: "United States", state: "Vermont", city: "Montpelier"},
  {population: 202, country: "United States", state: "Illinois", city: "Chicago"},
  {population: 112, country: "Canada", state: "Ontario", city: "Kingston"},
  {population: 80, country: "Canada", state: "Ontario", city: "Barrie"},
]`

const VerticalTreemap = ({}) => {
  const data = [
    {population: 650, country: "China", state: "Beijing", city: "Miyun"},
    {population: 902, country: "China", state: "Beijing", city: "Tongzhou"},
    {population: 120, country: "China", state: "Beijing", city: "Yizhuang"},
    {population: 800, country: "United States", state: "California", city: "San Francisco"},
    {population: 10020, country: "United States", state: "California", city: "Los Angeles"},
    {population: 150, country: "United States", state: "Vermont", city: "Newport"},
    {population: 20, country: "United States", state: "Vermont", city: "Montpelier"},
    {population: 202, country: "United States", state: "Illinois", city: "Chicago"},
    {population: 112, country: "Canada", state: "Ontario", city: "Kingston"},
    {population: 80, country: "Canada", state: "Ontario", city: "Barrie"},
  ]

  return(
    <div style={{ display: "inline-block" }}>
      <TreeMap data={data} weightKey="population"
        keyOrder={["country", "state", "city"]}
        width={200} height={400} />
    </div>
  )
}

export {
  VerticalTreemap,
  verticalTreemapCode,
  verticalTreemapData,
}
