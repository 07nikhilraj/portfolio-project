import React, { useState } from "react";
import SkillsComponent from "../components/SkillsComponent";
import { useEffect } from "react";

import Leetcode from "../assets/Leetcode.png";
import GFG from "../assets/Geeks.png";
import CF from "../assets/CF.png";

import { motion } from "framer-motion";

const CodingProfiles = () => {
  // codeforces
  const [user, setUser] = useState("");
  const [problems, setProblems] = useState("");
  const [rating, setRating] = useState("");
  const [color, setColor] = useState("");
  const [max, setMax] = useState("");

  // gfg data
  const [userGFG, setUserGFG] = useState("");
  const [problemsGFG, setProblemsGFG] = useState("");
  const [rank, setRank] = useState("");
  const [codingPoint, setCodingPoint] = useState("");
  const [thisMonth, setThisMonth] = useState("");

  // leetcode data
  const [userLC, setUserLC] = useState("");
  const [problemsLC, setProblemsLC] = useState("");
  const [easySolved, setEasySolved] = useState("");
  const [medSolved, setMedSolved] = useState("");
  const [hardSolved, setHardSolved] = useState("");
  const [easyTotal, setEasyTotal] = useState("");
  const [medTotal, setMedTotal] = useState("");
  const [hardTotal, setHardTotal] = useState("");
  const [easyBeats, setEasyBeats] = useState("");
  const [medBeats, setMedBeats] = useState("");
  const [hardBeats, setHardBeats] = useState("");

  const getCodeforcesData = async () => {
    const response = await fetch(`/api/cf/`);
    const json = await response.json();
    if (!response.ok) {
    }
    if (response.ok) {
      setUser(json.user);
      setProblems(json.problems);
      setRating(json.current);
      setColor(json.color);
      setMax(json.max);
    }
  };

  const getGFGData = async () => {
    const response = await fetch(`/api/gfg/`);
    const json = await response.json();
    if (!response.ok) {
    }
    if (response.ok) {
      setUserGFG(json.user);
      setProblemsGFG(json.problems);
      setRank(json.univ_rank);
      setCodingPoint(json.overall);
      setThisMonth(json.month);
    }
  };

  const getLCData = async () => {
    const response = await fetch(`/api/leetcode/`);
    const json = await response.json();
    if (!response.ok) {
      
    }
    if (response.ok) {
      setUserLC(json.user);
      setProblemsLC(json.all.totalProblems);
      setEasySolved(json.all.easy.solved);
      setEasyTotal(json.all.easy.total);
      setEasyBeats(json.all.easy.beats);
      setMedSolved(json.all.medium.solved);
      setMedTotal(json.all.medium.total);
      setMedBeats(json.all.medium.beats);
      setHardSolved(json.all.hard.solved);
      setHardTotal(json.all.hard.total);
      setHardBeats(json.all.hard.beats);
    }
  };

  function calculatePercentageEasy() {
    const percentage = (easySolved/easyTotal)*100; // Modify this value according to your calculation
    return `${percentage}%`;
  }
  
  // Update the class with the calculated percentage
  function updatePercentageClassEasy() {
    const percentage = calculatePercentageEasy();
    const element = document.getElementById("percentageElementEasy");
    element.style.width = percentage;
  }

  function calculatePercentagemed() {
    const percentage = (medSolved/medTotal)*100; // Modify this value according to your calculation
    return `${percentage}%`;
  }
  
  // Update the class with the calculated percentage
  function updatePercentageClassmed() {
    const percentage = calculatePercentagemed();
    const element = document.getElementById("percentageElementmed");
    element.style.width = percentage;
  }

  function calculatePercentagehard() {
    const percentage = (hardSolved/hardTotal)*100; // Modify this value according to your calculation
    return `${percentage}%`;
  }
  
  // Update the class with the calculated percentage
  function updatePercentageClasshard() {
    const percentage = calculatePercentagehard();
    const element = document.getElementById("percentageElementhard");
    element.style.width = percentage;
  }
  

  

  useEffect(() => {
    console.log("hi");
    getCodeforcesData();
    getGFGData();
    getLCData();
    updatePercentageClassEasy();
    updatePercentageClassmed();
    updatePercentageClasshard();
    // console.log('heyya',requestperblood)
  });

  return (
    <div
      id="codingProfile"
      className="relative border-dashed border-slate-600 border-b-2 bg-slate-200 z-0"
    >
      <div className="relative min-h-[100vh] max-w-[1240px] md:mx-auto flex justify-evenly items-center flex-col vsm:m-5">
        <div className="favFont text-[100px] text-slate-900">
          My Coding Profiles
        </div>

        <section className="flex flex-wrap justify-center items-center lg:flex-row vsm:flex-col border z-0 gap-4 ">
          {/* 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative min-h-[25rem] min-w-[25rem] border-[#1b1b35] rounded-xl text-3xl p-10 background_color hover:z-[10000] drop-shadow-2xl"
          >
            <div className="flex gap-5 justify-evenly items-center">
              <img
                src={Leetcode}
                alt="logo"
                className="min-w-[30px] max-w-[3vw] object-cover rounded-xl"
              />
              <header className="favFont text-slate-100 w-[80%]">
                <span className="z-0 relative after:content-[''] after:absolute after:bottom-[13.5%] after:z-[-1] after:left-0 after:w-[104%] after:h-[20%] after:bg-orange-700">
                  Leetcode
                </span>
                <br />
              </header>
            </div>
            <div className=" bmt-2 text-lg relative h-[200px] w-[300px] font-mono pt-6">
              <ul className="flex flex-col">
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Leetcode Handle: {userLC}
                </span>
                {/* copied */}
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  <div class="bg-layer-1 dark:bg-dark-layer-1 rounded-lg min-h-[186px] w-full pt-4 pb-3 lc-xl:h-[186px]">
                    <div class="px-[13px] font-medium text-label-3 dark:text-dark-label-3">
                      Solved {problemsLC} problems
                    </div>
                    <div class="mx-3 flex items-center lc-xl:mx-8 mt-1">
                      <div class="flex w-full flex-col space-y-4 lc-xl:max-w-[228px]">
                        <div class="space-y-2">
                          <div class="flex w-full items-end text-xs">
                            <div class="w-[53px] text-label-3 dark:text-dark-label-3">
                              Easy
                            </div>
                            <div class="flex flex-1 items-center">
                              <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                {easySolved}
                              </span>
                              <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                /{easyTotal}
                              </span>
                            </div>
                            <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                              <span class="space-x-1.5">
                                <span>Beats</span>
                                <span class="font-medium text-label-2 dark:text-dark-label-2">
                                  {easyBeats}%
                                </span>
                              </span>
                            </div>
                          </div>
                          <div class="relative h-2 w-full rounded-full h-1 max-w-none">
                            <div class="absolute h-full w-full rounded-full bg-green-800"></div>
                            <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-green-500" id="percentageElementEasy"></div>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <div class="flex w-full items-end text-xs">
                            <div class="w-[53px] text-label-3 dark:text-dark-label-3">
                              Medium
                            </div>
                            <div class="flex flex-1 items-center">
                              <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                {medSolved}
                              </span>
                              <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                /{medTotal}
                              </span>
                            </div>
                            <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                              <span class="space-x-1.5">
                                <span>Beats</span>
                                <span class="font-medium text-label-2 dark:text-dark-label-2">
                                  {medBeats}%
                                </span>
                              </span>
                            </div>
                          </div>
                          <div class="relative h-2 w-full rounded-full h-1 max-w-none">
                            <div class="absolute h-full w-full rounded-full bg-yellow-800"></div>
                            <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-yellow-500" id="percentageElementmed"></div>
                          </div>
                        </div>
                        <div class="space-y-2">
                          <div class="flex w-full items-end text-xs">
                            <div class="w-[53px] text-label-3 dark:text-dark-label-3">
                              Hard
                            </div>
                            <div class="flex flex-1 items-center">
                              <span class="mr-[5px] text-base font-medium leading-[20px] text-label-1 dark:text-dark-label-1">
                                {hardSolved}
                              </span>
                              <span class="text-xs font-medium text-label-4 dark:text-dark-label-4">
                                /{hardTotal}
                              </span>
                            </div>
                            <div class="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
                              <span class="space-x-1.5">
                                <span>Beats</span>
                                <span class="font-medium text-label-2 dark:text-dark-label-2">
                                  {hardBeats}%
                                </span>
                              </span>
                            </div>
                          </div>
                          <div class="relative h-2 w-full overflow-hidden rounded-full h-1 max-w-none">
                            <div class="absolute h-full w-full bg-red-800"></div>
                            <div class="absolute h-full rounded-full transition-all duration-300 ease-out bg-red-300" id="percentageElementhard"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </ul>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative min-h-[25rem] min-w-[25rem] border-[#1b1b35] rounded-xl text-3xl p-10 background_color z-0 hover:z-[10000] drop-shadow-2xl"
          >
            <div className="flex gap-5 justify-evenly items-center">
              <img
                src={GFG}
                alt="logo"
                className="min-w-[30px] max-w-[3vw] object-cover rounded-xl"
              />
              <header className="favFont text-slate-100 w-[80%]">
                <span className="z-0 relative after:content-[''] after:absolute after:bottom-[13.5%] after:z-[-1] after:left-0 after:w-[104%] after:h-[20%] after:bg-green-700">
                  Geeks For Geeks
                </span>
              </header>
            </div>
            <div className="mt-2 text-lg relative h-[200px] w-[300px] font-mono pt-10 ">
              {/* Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript. */}
              <ul className="flex flex-col">
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  GFG Handle: {userGFG}
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  University Rank: {rank} (among 3436)
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Solved ≥ {problemsGFG} problems
                </span>

                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Coding Score: {codingPoint}
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Current Month Score: {thisMonth}
                </span>
              </ul>
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative min-h-[25rem] min-w-[25rem] border-[#1b1b35] rounded-xl  text-3xl p-10  background_color z-0 hover:z-[10000] drop-shadow-2xl"
          >
            <div className="flex gap-5 items-center">
              <img
                src={CF}
                alt="logo"
                className="min-w-[30px] max-w-[3vw] object-cover rounded-xl"
              />
              <header className="favFont text-slate-100 w-[80%]">
                <span className="z-0 relative after:content-[''] after:absolute after:bottom-[13.5%] after:z-[-1] after:left-0 after:w-[104%] after:h-[20%] after:bg-blue-700">
                  Codeforces
                </span>
              </header>
            </div>
            <div className="  mt-2 text-lg relative h-[200px] w-[300px] font-mono pt-10 ">
              {/* Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript. */}
              <ul className="flex flex-col">
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  CF Handle: {user}
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Current Rating: {rating} ({color})
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Max Rating: {max}
                </span>
                <span className="p-2 rounded-xl bg-slate-700 m-1 text-sm hover:bg-slate-400 duration-500 text-slate-300 hover:text-black hover:font-bold">
                  Solved ≥ {problems}
                </span>
              </ul>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CodingProfiles;
