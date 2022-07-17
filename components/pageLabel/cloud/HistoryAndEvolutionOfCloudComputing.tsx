import React from "react";
import HeadingL3 from "../../headings/HeadingL3";
import OneLiner from "../../OneLiner";
import QA from "../../QA";
import UnOrderdList from "../../UnOrderdList";

const HistoryAndEvolutionOfCloudComputing = () => {
  const y1950 = {
    title: "1950s",
    list: [
      "Large-scale mainframes with high-volume processing power.",
      "The practice of time sharing, or resource pooling, evolved.",
      "Multiple users were able to access the same data storage layer and CPU power.",
    ],
  };

  const y1970 = {
    title: "1970s",
    list: [
      "Virtual Machine (VM)",
      "Mainframes to have multiple virtual systems, or virtual machines, on a single physical node.",
    ],
  };

  const virtualMachines = {
    title: "Virtual Machines",
    data: "VMs - Multiple distinct compute environments on the same physical hardware\nEach virtual machine hosted guest operating systems that behaved as though they had their own memory, CPU, and hard drives, even though these were shared resources.",
  };

  const virtualization = {
    title: "Virtualization",
    description: "A huge catalyst for evolutions in computing.",
    list: [
      "Shared hosting environments",
      "Virtual private servers",
      "Virtual dedicated servers",
    ],
  };

  const hypervisor = {
    title: "Hypervisor",
    list: [
      "A hypervisor is a small software layer that enables multiple operating systems to run alongside each other, sharing the same physical computing resources.",
      "A hypervisor also separates the Virtual Machines logically, assigning each its own slice of the underlying computing power, memory, and storage, preventing the virtual machines from interfering with each other.",
      "For example, one operating system suffers a crash or a security compromise, the others keep working.",
    ],
  };

  return (
    <>
      <HeadingL3 title="History and Evolution of Cloud Computing" />
      <UnOrderdList heading={y1950.title} listData={y1950.list} />
      <UnOrderdList heading={y1970.title} listData={y1970.list} />
      <QA question={virtualMachines.title} answer={virtualMachines.data} />
      <UnOrderdList
        heading={virtualization.title}
        description={virtualization.description}
        listData={virtualization.list}
      />
      <UnOrderdList heading={hypervisor.title} listData={hypervisor.list} />
      <OneLiner>
        <p>Cloud: Switch from CapEx to OpEx</p>
        <p>CapEx: Capital Expense ( High up-front costs )</p>
        <p>OpEx: Operating Expense ( No or low up-front costs )</p>
      </OneLiner>
    </>
  );
};

export default HistoryAndEvolutionOfCloudComputing;
