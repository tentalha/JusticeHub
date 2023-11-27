/* eslint-disable react/prop-types */
import { ProgressBar } from 'react-loader-spinner'
export const Loader = ({
  height = 80,
  width = 80,
  barColor = '#51E5FF',
  borderColor = '#F4442E',
}) => {
  return (
    <ProgressBar
      height={height}
      width={width}
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor={borderColor}
      barColor={barColor}
    />
  )
}
