const Featured = () => {
  return (
    <div className="py-8">
      <h2 className="text-center text-4xl font-bold text-[#212121]">
        Featured Property Types
      </h2>
      <h4 className="text-center py-2">Find All type of Property </h4>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4 lg:px-32 py-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-6 pt-4 m-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png"
              alt="Property"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title text-sm  ">dynamic value property</h2>
            <p className="text-xs">dynamic value property number</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-6 pt-4 m-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png"
              alt="Property"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title text-sm  ">dynamic value property</h2>
            <p className="text-xs">dynamic value property number</p>
          </div>
        </div>{" "}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-6 pt-4 m-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png"
              alt="Property"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title text-sm  ">dynamic value property</h2>
            <p className="text-xs">dynamic value property number</p>
          </div>
        </div>{" "}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-6 pt-4 m-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png"
              alt="Property"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title text-sm  ">dynamic value property</h2>
            <p className="text-xs">dynamic value property number</p>
          </div>
        </div>{" "}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-6 pt-4 m-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1040/1040993.png"
              alt="Property"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body p-3 items-center text-center">
            <h2 className="card-title text-sm  ">dynamic value property</h2>
            <p className="text-xs">dynamic value property number</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
