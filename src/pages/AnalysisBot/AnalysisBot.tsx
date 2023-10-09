import classNames from 'classnames';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { BiDollar, BiPlus } from 'react-icons/bi';
import 'chart.js/auto';
import { Doughnut, Bubble } from 'react-chartjs-2';
import { AiFillSetting } from 'react-icons/ai';

const data1 = {
  labels: ['Critical case', 'Urgent case'],
  datasets: [
    {
      data: [58, 42],
      backgroundColor: ['#4367b9', 'rgb(224, 224, 224)'],
      hoverBackgroundColor: ['#4367b9', 'rgb(224, 224, 224)'],
    },
  ],
};

const data2 = {
  labels: ['Critical case', 'Urgent case'],
  datasets: [
    {
      data: [58, 42],
      backgroundColor: ['#d15f85', 'rgb(224, 224, 224)'],
      hoverBackgroundColor: ['#d15f85', 'rgb(224, 224, 224)'],
    },
  ],
};

const data3 = {
  labels: ['Critical case', 'Urgent case'],
  datasets: [
    {
      data: [58, 42],
      backgroundColor: ['#e6b940', 'rgb(224, 224, 224)'],
      hoverBackgroundColor: ['#e6b940', 'rgb(224, 224, 224)'],
    },
  ],
};

const data4 = {
  labels: ['Critical case', 'Urgent case'],
  datasets: [
    {
      data: [58, 42],
      backgroundColor: ['#39b381', 'rgb(224, 224, 224)'],
      hoverBackgroundColor: ['#39b381', 'rgb(224, 224, 224)'],
    },
  ],
};

const mixedChart = {
  datasets: [
    {
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40, 50, 40],
    },
    {
      type: 'line',
      label: 'Line Dataset',
      data: [6, 30, 20, 50, 20, 30],
    },
  ],
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
};

const AnalysisBot = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const gradient = ctx?.createLinearGradient(0, 0, 300, 0);
  gradient?.addColorStop(0, '#94d2a7');
  gradient?.addColorStop(1, '#1a94f3');

  const data = {
    labels: ['Critical case', 'Urgent case'],
    datasets: [
      {
        data: [75, 42],
        backgroundColor: [gradient, 'rgb(224, 224, 224)'],
        hoverBackgroundColor: [gradient, 'rgb(224, 224, 224)'],
      },
    ],
  };

  return (
    <div className={classNames('mt-[20px]')}>
      <div className={classNames('grid grid-cols-4 gap-x-4')}>
        <div className="bg-white rounded-md p-4 shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] border-b-4 border-[#4367b9]">
          <p className="uppercase text-[#A7A9C0]">New accounts</p>
          <div className="flex justify-between">
            <p className="flex items-center mb-0 text-[18px]">
              <MdOutlineKeyboardArrowUp size={30} color="#4367b9" />
              <span className="font-bold text-[24px] mr-1">100</span>%
            </p>
            <p className="w-[40px] mb-0 relative">
              <Doughnut
                data={data1}
                options={{
                  cutout: 13,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  rotation: 250,
                }}
              />
              <p className="absolute w-full h-full justify-center items-center flex text-center top-0">
                <p className="mb-0 text-[12px]">75</p>
              </p>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] border-b-4 border-[#d15f85]">
          <p className="uppercase text-[#A7A9C0]">Total expenses</p>
          <div className="flex justify-between">
            <p className="flex items-center mb-0 text-[18px]">
              <MdOutlineKeyboardArrowDown size={30} color="#d15f85" />
              <span className="font-bold text-[24px] mr-1">65</span>%
            </p>
            <p className="w-[40px] mb-0 relative">
              <Doughnut
                data={data2}
                options={{
                  cutout: 13,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  rotation: 250,
                }}
              />
              <p className="absolute w-full h-full justify-center items-center flex text-center top-0">
                <p className="mb-0 text-[12px]">75</p>
              </p>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] border-b-4 border-[#e6b940]">
          <p className="uppercase text-[#A7A9C0]">Company value</p>
          <div className="flex justify-between">
            <p className="flex items-center mb-0 text-[18px]">
              <BiDollar size={20} color="#e6b940" />
              <span className="font-bold text-[24px] mr-1">2M</span>
            </p>
            <p className="w-[40px] mb-0 relative">
              <Doughnut
                data={data3}
                options={{
                  cutout: 13,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  rotation: 250,
                }}
              />
              <p className="absolute w-full h-full justify-center items-center flex text-center top-0">
                <p className="mb-0 text-[12px]">75</p>
              </p>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md p-4 shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] border-b-4 border-[#39b381]">
          <p className="uppercase text-[#A7A9C0]">New employee</p>
          <div className="flex justify-between">
            <p className="flex items-center mb-0">
              <BiPlus size={20} color="#39b381" />
              <span className="font-bold text-[24px] mr-1">23</span>hires
            </p>
            <p className="w-[40px] mb-0 relative">
              <Doughnut
                data={data4}
                options={{
                  cutout: 13,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    tooltip: {
                      enabled: false,
                    },
                  },
                  rotation: 250,
                }}
              />
              <p className="absolute w-full h-full justify-center items-center flex text-center top-0">
                <p className="mb-0 text-[12px]">75</p>
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-4 mt-8">
        <div className="bg-white col-span-2 p-4 shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)] ">
          <Bubble data={mixedChart} width="full" />
        </div>
        <div className="bg-white shadow-[0_0px_4px_0px_rgba(32,32,62,0.16)]">
          <div className="flex justify-between p-3 border-b-2 border-[#e9eaed] items-center">
            <p className="mb-0 text-[#A7A9C0] font-bold ">Income</p>
            <AiFillSetting size={20} />
          </div>
          <div className="w-[60%] m-auto mt-10 relative">
            <Doughnut
              data={data}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    enabled: false,
                  },
                },
                rotation: 240,
              }}
            />
            <div className="absolute w-full h-full justify-center items-center flex text-center top-0">
              <p className="mb-0">
                Percent
                <br />
                <span className="text-[24px] font-bold text-black">75</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisBot;
