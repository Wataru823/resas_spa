import React from 'react'
import Highcharts, { SeriesOptionsType } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PrefPopulation } from '../types/PrefPopulation'

interface Props {
  prefPopulation: PrefPopulation[]
}

const PopulationGraph: React.FC<Props> = ({ prefPopulation }) => {
  const series: SeriesOptionsType[] = prefPopulation.map(
    ({ prefName, data }) => ({
      type: 'line',
      name: prefName,
      data: data.map(({ value }) => value),
    }),
  )

  const categories =
    prefPopulation[0]?.data.map(({ year }) => String(year)) || []

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '都道府県別の総人口',
      },
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default PopulationGraph
