import CustButton from 'components/button/button'

function NavBar() {
  return (
    <div className="flex text-center items-center justify-center pt-10 sticky z-50">
      <div className="pr-32 pb-3">
        <svg
          width="160"
          height="50"
          viewBox="0 0 198 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5_183)">
            <path
              d="M60.4871 47V32.2727H64.447V34.8423H64.6004C64.8689 33.9283 65.3195 33.2379 65.9523 32.7713C66.5852 32.2983 67.3139 32.0618 68.1384 32.0618C68.343 32.0618 68.5635 32.0746 68.8 32.1001C69.0365 32.1257 69.2443 32.1609 69.4232 32.2056V35.8299C69.2315 35.7724 68.9662 35.7212 68.6274 35.6765C68.2886 35.6317 67.9786 35.6094 67.6974 35.6094C67.0965 35.6094 66.5596 35.7404 66.0866 36.0025C65.62 36.2582 65.2492 36.6161 64.9744 37.0763C64.7059 37.5366 64.5717 38.0671 64.5717 38.668V47H60.4871ZM77.5611 47.2876C76.0462 47.2876 74.7422 46.9808 73.6492 46.3672C72.5625 45.7472 71.7252 44.8714 71.1371 43.7401C70.549 42.6023 70.255 41.2567 70.255 39.7035C70.255 38.1886 70.549 36.859 71.1371 35.7148C71.7252 34.5707 72.5529 33.679 73.6204 33.0398C74.6943 32.4006 75.9535 32.081 77.3981 32.081C78.3697 32.081 79.2742 32.2376 80.1115 32.5508C80.9553 32.8576 81.6904 33.321 82.3168 33.9411C82.9496 34.5611 83.4418 35.3409 83.7933 36.2805C84.1449 37.2138 84.3207 38.3068 84.3207 39.5597V40.6815H71.885V38.1502H80.4759C80.4759 37.5621 80.348 37.0412 80.0924 36.5874C79.8367 36.1335 79.4819 35.7788 79.0281 35.5231C78.5806 35.261 78.0597 35.13 77.4652 35.13C76.8452 35.13 76.2955 35.2738 75.8161 35.5614C75.3431 35.8427 74.9723 36.223 74.7039 36.7024C74.4354 37.1754 74.298 37.7028 74.2916 38.2844V40.6911C74.2916 41.4197 74.4258 42.0494 74.6943 42.5799C74.9691 43.1104 75.3558 43.5195 75.8544 43.8072C76.353 44.0948 76.9443 44.2386 77.6282 44.2386C78.0821 44.2386 78.4975 44.1747 78.8747 44.0469C79.2518 43.919 79.5746 43.7273 79.8431 43.4716C80.1115 43.2159 80.3161 42.9027 80.4567 42.532L84.2344 42.7812C84.0426 43.6889 83.6495 44.4815 83.0551 45.1591C82.467 45.8303 81.7063 46.3544 80.7731 46.7315C79.8463 47.1023 78.7756 47.2876 77.5611 47.2876ZM99.2397 36.4723L95.5004 36.7024C95.4365 36.3828 95.299 36.0952 95.0881 35.8395C94.8772 35.5774 94.5991 35.3697 94.2539 35.2163C93.9152 35.0565 93.5093 34.9766 93.0362 34.9766C92.4034 34.9766 91.8697 35.1108 91.435 35.3793C91.0004 35.6413 90.783 35.9929 90.783 36.4339C90.783 36.7855 90.9237 37.0827 91.2049 37.3256C91.4862 37.5685 91.9688 37.7635 92.6527 37.9105L95.3182 38.4474C96.75 38.7415 97.8175 39.2145 98.5206 39.8665C99.2237 40.5185 99.5753 41.375 99.5753 42.4361C99.5753 43.4013 99.2909 44.2482 98.722 44.9769C98.1595 45.7056 97.386 46.2745 96.4017 46.6836C95.4237 47.0863 94.2955 47.2876 93.0171 47.2876C91.0675 47.2876 89.5142 46.8817 88.3573 46.07C87.2067 45.2518 86.5323 44.1396 86.3342 42.7333L90.3516 42.5224C90.473 43.1168 90.7671 43.5707 91.2337 43.8839C91.7003 44.1907 92.298 44.3441 93.0267 44.3441C93.7426 44.3441 94.3178 44.2067 94.7525 43.9318C95.1936 43.6506 95.4173 43.2894 95.4237 42.8484C95.4173 42.4776 95.2607 42.174 94.9539 41.9375C94.647 41.6946 94.174 41.5092 93.5348 41.3814L90.9844 40.8732C89.5462 40.5856 88.4755 40.087 87.7724 39.3775C87.0757 38.668 86.7273 37.7635 86.7273 36.6641C86.7273 35.718 86.983 34.9031 87.4943 34.2191C88.0121 33.5352 88.7376 33.0078 89.6708 32.6371C90.6105 32.2663 91.7099 32.081 92.9691 32.081C94.8292 32.081 96.293 32.4741 97.3605 33.2603C98.4343 34.0465 99.0607 35.1172 99.2397 36.4723ZM109.981 32.2727V35.3409H101.112V32.2727H109.981ZM103.125 28.7443H107.21V42.4744C107.21 42.8516 107.267 43.1456 107.382 43.3565C107.497 43.5611 107.657 43.7049 107.862 43.788C108.073 43.8711 108.316 43.9126 108.59 43.9126C108.782 43.9126 108.974 43.8967 109.166 43.8647C109.358 43.8263 109.505 43.7976 109.607 43.7784L110.249 46.8178C110.045 46.8817 109.757 46.9553 109.386 47.0384C109.016 47.1278 108.565 47.1822 108.034 47.2013C107.05 47.2397 106.187 47.1087 105.446 46.8082C104.711 46.5078 104.138 46.0412 103.729 45.4084C103.32 44.7756 103.119 43.9766 103.125 43.0114V28.7443ZM116.841 47.2781C115.901 47.2781 115.064 47.1151 114.329 46.7891C113.594 46.4567 113.012 45.9677 112.584 45.3221C112.162 44.6701 111.951 43.8583 111.951 42.8867C111.951 42.0685 112.101 41.3814 112.402 40.8253C112.702 40.2692 113.111 39.8217 113.629 39.483C114.147 39.1442 114.735 38.8885 115.393 38.7159C116.058 38.5433 116.755 38.4219 117.483 38.3516C118.34 38.2621 119.03 38.179 119.554 38.1023C120.079 38.0192 120.459 37.8977 120.695 37.7379C120.932 37.5781 121.05 37.3416 121.05 37.0284V36.9709C121.05 36.3636 120.858 35.8938 120.475 35.5614C120.098 35.229 119.561 35.0629 118.864 35.0629C118.129 35.0629 117.544 35.2259 117.109 35.5518C116.675 35.8714 116.387 36.2741 116.247 36.7599L112.469 36.4531C112.661 35.5582 113.038 34.7848 113.6 34.1328C114.163 33.4744 114.888 32.9695 115.777 32.6179C116.672 32.2599 117.707 32.081 118.883 32.081C119.701 32.081 120.484 32.1768 121.232 32.3686C121.987 32.5604 122.655 32.8576 123.236 33.2603C123.824 33.663 124.288 34.1808 124.627 34.8136C124.965 35.44 125.135 36.1911 125.135 37.0668V47H121.261V44.9577H121.146C120.91 45.418 120.593 45.8239 120.197 46.1754C119.801 46.5206 119.324 46.7923 118.768 46.9904C118.212 47.1822 117.57 47.2781 116.841 47.2781ZM118.011 44.4592C118.612 44.4592 119.142 44.3409 119.602 44.1044C120.063 43.8615 120.424 43.5355 120.686 43.1264C120.948 42.7173 121.079 42.2539 121.079 41.7362V40.1733C120.951 40.2564 120.775 40.3331 120.552 40.4034C120.334 40.4673 120.088 40.5281 119.813 40.5856C119.538 40.6367 119.264 40.6847 118.989 40.7294C118.714 40.7678 118.465 40.8029 118.241 40.8349C117.761 40.9052 117.343 41.017 116.985 41.1705C116.627 41.3239 116.349 41.5316 116.151 41.7937C115.953 42.0494 115.853 42.369 115.853 42.7525C115.853 43.3086 116.055 43.7337 116.457 44.0277C116.867 44.3153 117.384 44.4592 118.011 44.4592ZM137.748 40.7294V32.2727H141.832V47H137.911V44.3249H137.757C137.425 45.1879 136.872 45.8814 136.099 46.4055C135.332 46.9297 134.395 47.1918 133.289 47.1918C132.305 47.1918 131.439 46.968 130.691 46.5206C129.943 46.0732 129.358 45.4371 128.936 44.6126C128.521 43.788 128.31 42.8004 128.304 41.6499V32.2727H132.388V40.9212C132.394 41.7905 132.628 42.4776 133.088 42.9826C133.548 43.4876 134.165 43.7401 134.938 43.7401C135.431 43.7401 135.891 43.6282 136.319 43.4045C136.747 43.1744 137.093 42.8356 137.355 42.3881C137.623 41.9407 137.754 41.3878 137.748 40.7294ZM145.099 47V32.2727H149.059V34.8423H149.213C149.481 33.9283 149.932 33.2379 150.565 32.7713C151.197 32.2983 151.926 32.0618 152.751 32.0618C152.955 32.0618 153.176 32.0746 153.412 32.1001C153.649 32.1257 153.857 32.1609 154.036 32.2056V35.8299C153.844 35.7724 153.579 35.7212 153.24 35.6765C152.901 35.6317 152.591 35.6094 152.31 35.6094C151.709 35.6094 151.172 35.7404 150.699 36.0025C150.232 36.2582 149.862 36.6161 149.587 37.0763C149.318 37.5366 149.184 38.0671 149.184 38.668V47H145.099ZM159.925 47.2781C158.985 47.2781 158.148 47.1151 157.413 46.7891C156.678 46.4567 156.096 45.9677 155.668 45.3221C155.246 44.6701 155.035 43.8583 155.035 42.8867C155.035 42.0685 155.185 41.3814 155.486 40.8253C155.786 40.2692 156.195 39.8217 156.713 39.483C157.231 39.1442 157.819 38.8885 158.477 38.7159C159.142 38.5433 159.839 38.4219 160.567 38.3516C161.424 38.2621 162.114 38.179 162.638 38.1023C163.163 38.0192 163.543 37.8977 163.779 37.7379C164.016 37.5781 164.134 37.3416 164.134 37.0284V36.9709C164.134 36.3636 163.942 35.8938 163.559 35.5614C163.182 35.229 162.645 35.0629 161.948 35.0629C161.213 35.0629 160.628 35.2259 160.193 35.5518C159.759 35.8714 159.471 36.2741 159.331 36.7599L155.553 36.4531C155.745 35.5582 156.122 34.7848 156.684 34.1328C157.247 33.4744 157.972 32.9695 158.861 32.6179C159.756 32.2599 160.791 32.081 161.967 32.081C162.785 32.081 163.568 32.1768 164.316 32.3686C165.071 32.5604 165.739 32.8576 166.32 33.2603C166.908 33.663 167.372 34.1808 167.711 34.8136C168.049 35.44 168.219 36.1911 168.219 37.0668V47H164.345V44.9577H164.23C163.994 45.418 163.677 45.8239 163.281 46.1754C162.885 46.5206 162.408 46.7923 161.852 46.9904C161.296 47.1822 160.654 47.2781 159.925 47.2781ZM161.095 44.4592C161.696 44.4592 162.226 44.3409 162.686 44.1044C163.147 43.8615 163.508 43.5355 163.77 43.1264C164.032 42.7173 164.163 42.2539 164.163 41.7362V40.1733C164.035 40.2564 163.859 40.3331 163.636 40.4034C163.418 40.4673 163.172 40.5281 162.897 40.5856C162.622 40.6367 162.348 40.6847 162.073 40.7294C161.798 40.7678 161.549 40.8029 161.325 40.8349C160.845 40.9052 160.427 41.017 160.069 41.1705C159.711 41.3239 159.433 41.5316 159.235 41.7937C159.037 42.0494 158.937 42.369 158.937 42.7525C158.937 43.3086 159.139 43.7337 159.541 44.0277C159.951 44.3153 160.468 44.4592 161.095 44.4592ZM175.472 38.4858V47H171.388V32.2727H175.28V34.8711H175.453C175.779 34.0146 176.325 33.337 177.092 32.8384C177.859 32.3335 178.79 32.081 179.883 32.081C180.905 32.081 181.797 32.3047 182.558 32.7521C183.318 33.1996 183.91 33.8388 184.331 34.6697C184.753 35.4943 184.964 36.4787 184.964 37.6229V47H180.88V38.3516C180.886 37.4503 180.656 36.7472 180.189 36.2422C179.723 35.7308 179.08 35.4751 178.262 35.4751C177.712 35.4751 177.227 35.5934 176.805 35.8299C176.389 36.0664 176.063 36.4116 175.827 36.8654C175.597 37.3129 175.478 37.853 175.472 38.4858ZM196.017 32.2727V35.3409H187.148V32.2727H196.017ZM189.161 28.7443H193.246V42.4744C193.246 42.8516 193.303 43.1456 193.419 43.3565C193.534 43.5611 193.693 43.7049 193.898 43.788C194.109 43.8711 194.352 43.9126 194.627 43.9126C194.818 43.9126 195.01 43.8967 195.202 43.8647C195.394 43.8263 195.541 43.7976 195.643 43.7784L196.285 46.8178C196.081 46.8817 195.793 46.9553 195.422 47.0384C195.052 47.1278 194.601 47.1822 194.071 47.2013C193.086 47.2397 192.223 47.1087 191.482 46.8082C190.747 46.5078 190.175 46.0412 189.765 45.4084C189.356 44.7756 189.155 43.9766 189.161 43.0114V28.7443Z"
              fill="#101A24"
            />
            <path
              d="M15.2857 38.0715C20.6113 38.0715 24.9285 33.7542 24.9285 28.4286C24.9285 23.103 20.6113 18.7858 15.2857 18.7858C9.96008 18.7858 5.64282 23.103 5.64282 28.4286C5.64282 33.7542 9.96008 38.0715 15.2857 38.0715Z"
              stroke="url(#paint0_linear_5_183)"
              strokeWidth="3.57143"
            />
            <path
              d="M0.00261579 30.7144C0.000871931 30.8332 0 30.9522 0 31.0715C0 44.2869 10.7132 55.0001 23.9286 55.0001C37.1439 55.0001 47.8571 44.2869 47.8571 31.0715C47.8571 30.9522 47.8563 30.8332 47.8545 30.7144H0.00261579Z"
              fill="url(#paint1_linear_5_183)"
            />
            <path
              d="M35.6429 24.5C38.0098 24.5 39.9286 22.5812 39.9286 20.2143C39.9286 17.8474 38.0098 15.9286 35.6429 15.9286C33.276 15.9286 31.3572 17.8474 31.3572 20.2143C31.3572 22.5812 33.276 24.5 35.6429 24.5Z"
              stroke="#EAA427"
              strokeWidth="2.14286"
            />
            <path
              d="M27.7857 10.2144C30.1526 10.2144 32.0714 8.29559 32.0714 5.92865C32.0714 3.56172 30.1526 1.64294 27.7857 1.64294C25.4188 1.64294 23.5 3.56172 23.5 5.92865C23.5 8.29559 25.4188 10.2144 27.7857 10.2144Z"
              stroke="#EA7727"
              strokeWidth="2.14286"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5_183"
              x1="7.42859"
              y1="20.2143"
              x2="22.4286"
              y2="37.7143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EA6D27" />
              <stop offset="1" stopColor="#EAA827" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5_183"
              x1="6.42857"
              y1="30.7144"
              x2="35"
              y2="46.4286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9400" />
              <stop offset="1" stopColor="#EA6D27" />
            </linearGradient>
            <clipPath id="clip0_5_183">
              <rect width="198" height="55" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex text-lg">
        <div className="pl-10 pr-5 cursor-pointer font-segoe font-semibold ">
          <p className="hover:bg-custorange hover:text-white px-3 py-1 rounded-md ...">
            Menu
          </p>
        </div>
        <div className="pl-10 pr-5 cursor-pointer font-segoe font-semibold">
          <p className="hover:bg-custorange hover:text-white px-3 py-1 rounded-md">
            Event
          </p>
        </div>
        <div className="pl-10 pr-5 cursor-pointer font-segoe font-semibold">
          <p className="hover:bg-custorange hover:text-white px-3 py-1 rounded-md">
            Gallery
          </p>
        </div>
        <div className="pl-10 pr-5 cursor-pointer font-segoe font-semibold">
          <p className="hover:bg-custorange hover:text-white px-3 py-1 rounded-md">
            About
          </p>
        </div>
        <div className="pl-10 pr-5 cursor-pointer font-segoe font-semibold">
          <p className="hover:bg-custorange hover:text-white px-3 py-1 rounded-md">
            Contact
          </p>
        </div>
      </div>

      <div className="pl-32">
        <CustButton txt="Book a Table" clr="bg-custorange" />
      </div>
    </div>
  )
}
export default NavBar
