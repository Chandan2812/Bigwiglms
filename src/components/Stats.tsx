const StatsSection = () => {
  return (
    <div className="mt-36">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5 md:text-center">
        We are a global Real Estate CRM platform designed to empower your growth
      </h2> 
      <div className="bg-[#0c1c40] text-white py-8 px-5 max-w-6xl mx-auto rounded-lg">
        <div className="grid grid-cols-1 md:flex md:justify-around gap-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10">
            
            {/* Stat 1 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                1 <span className="text-2xl">Million</span>
              </p>
              <p className="mt-2 text-lg">
                Property listings managed on average annually
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                5 <span className="text-2xl">Million</span>
              </p>
              <p className="mt-2 text-lg">
                Leads generated on average annually through our platform
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                100 <span className="text-2xl">Thousand</span>
              </p>
              <p className="mt-2 text-lg">
                Deals closed on average annually by agents using our CRM
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                30,000
              </p>
              <p className="mt-2 text-lg">
                Real estate professionals across agencies and regions
              </p>
            </div>
          </div>

          {/* Highlighted Stat */}
          <div className="col-span-1 md:col-span-4 flex md:justify-center md:items-center">
            <div className="bg-[#172850] rounded-md p-6 w-full md:w-auto md:p-16">
              <p className="text-3xl font-bold">5000+</p>
              <p className="mt-2 text-lg">
                Real estate agencies trust Bigwig Media for lead management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
