import React from 'react';

// import { DisplayCampaigns } from '../components';
// import { useStateContext } from '../context';

const Home = () => {
  return (
    <>
      <div style={{ color: 'red' }}>Home from Blockchain</div>
    </>
  );
};
//   const [isLoading, setIsLoading] = useState(false);
//   const [campaigns, setCampaigns] = useState([]);

//   const { address, contract, getCampaigns } = useStateContext();

//   const fetchCampaigns = async () => {
//     setIsLoading(true);
//     const data = await getCampaigns();
//     setCampaigns(data);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     if (contract) fetchCampaigns();
//   }, [address, contract]);

//   return (
//     <DisplayCampaigns
//       title="All Campaigns"
//       isLoading={isLoading}
//       campaigns={campaigns}
//     />
//   );
// };

export default Home;
