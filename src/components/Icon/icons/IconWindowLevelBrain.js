import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, title, width, height } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      aria-labelledby="title"
      width={width}
      height={height}
      stroke={color}
      strokeWidth="1.25"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="title">{title}</title>
      <path d="M9.477,17.251 C9.47700008,15.4559127 8.02208718,14.0005522 6.227,14 C6.174,14 6.127,14.013 6.074,14.016" />
      <path d="M9.139,4.388 C10.1071794,4.06154926 10.6736294,3.05782814 10.4526509,2.06027619 C10.2316724,1.06272423 9.29432573,0.392125319 8.27885567,0.505094155 C7.26338561,0.618062991 6.49633799,1.47827206 6.5,2.5 C6.50273041,2.68084368 6.52997882,2.86048132 6.581,3.034 C6.47,3.025 6.363,3 6.25,3 C4.82125583,2.99272637 3.51375534,3.80180432 2.88272268,5.08366258 C2.25169001,6.36552084 2.40789271,7.89515 3.285,9.023 C1.71628128,9.12669427 0.496882579,10.4293579 0.496882579,12.0015 C0.496882579,13.5736421 1.71628128,14.8763057 3.285,14.98 C2.4088849,16.1076699 2.25328058,17.6364954 2.88423445,18.9175552 C3.51518832,20.198615 4.82200641,21.0071611 6.25,21 C6.363,21 6.47,20.977 6.581,20.967 C6.28383855,22.0182201 6.88514293,23.1134021 7.93160342,23.4269131 C8.97806392,23.7404241 10.0824855,23.1562636 10.4122698,22.114817 C10.7420542,21.0733704 10.1751796,19.9599776 9.139,19.614" />
      <path d="M6.074,9.986 C6.126,9.986 6.174,10.001 6.227,10.001 C8.02169676,10.000448 9.47644804,8.54569676 9.477,6.751" />
      <path d="M14.523,17.251 C14.5229999,15.4559127 15.9779128,14.0005522 17.773,14 C17.826,14 17.873,14.013 17.926,14.016" />
      <path d="M14.861,4.388 C13.8928206,4.06154926 13.3263706,3.05782814 13.5473491,2.06027619 C13.7683276,1.06272423 14.7056743,0.392125319 15.7211443,0.505094155 C16.7366144,0.618062991 17.503662,1.47827206 17.5,2.5 C17.4972696,2.68084368 17.4700212,2.86048132 17.419,3.034 C17.53,3.024 17.637,3 17.75,3 C19.1783755,2.99302696 20.4854349,3.80196155 21.1163884,5.08344617 C21.7473419,6.36493078 21.5914958,7.89414352 20.715,9.022 C22.2837187,9.12569427 23.5031174,10.4283579 23.5031174,12.0005 C23.5031174,13.5726421 22.2837187,14.8753057 20.715,14.979 C21.5917266,16.1066634 21.7476874,17.6359054 21.1166544,18.9173389 C20.4856213,20.1987723 19.1783622,21.0074617 17.75,21 C17.637,21 17.53,20.977 17.419,20.967 C17.7161614,22.0182201 17.1148571,23.1134021 16.0683966,23.4269131 C15.0219361,23.7404241 13.9175145,23.1562636 13.5877302,22.114817 C13.2579458,21.0733704 13.8248204,19.9599776 14.861,19.614" />
      <path d="M17.926,9.986 C17.874,9.986 17.826,10.001 17.773,10.001 C15.9783032,10.000448 14.523552,8.54569676 14.523,6.751" />
      <path d="M10.5,2.4 C11.4282032,1.86410162 12.5717968,1.86410162 13.5,2.4" />
      <path d="M10.409,22.1 C11.4022898,22.6360615 12.5987102,22.6360615 13.592,22.1" />
      <path d="M12,7.001 L12,17.501" />
    </svg>
  )
}

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string,
}

Icon.defaultProps = {
  title: 'Window Level Brain',
}

export default Icon
