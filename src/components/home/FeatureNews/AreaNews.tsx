import Btn from "../../common/Btn";

const AreaNews: React.FC = () => {
  return (
    <div>
      <div className=" flex items-center justify-center border bg-base-content shadow-md rounded-xl mb-3">
        <div className="max-w-[400px] text-white text-xl md:text-xl px-4  ml-4  cursor-pointer">
          এলাকার খবর
        </div>
      </div>
      <div className=" max-w-[400px] mx-auto  bg-white rounded-xl shadow-md px-4 py-4">
        <div className=" ">
          <label
            htmlFor="division"
            className="block text-base xl:text-xl font-medium text-gray-900"
          >
            বিভাগ
          </label>
          <select
            id="division"
            name="division"
            defaultValue="বিভাগ"
            className="mt-1 block w-full rounded-md border-0 py-3 text-base xl:text-xl px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-300 "
          >
            <option className="text-sm">নির্বাচন করুন</option>
            <option>বিভাগ</option>
          </select>
        </div>
        <div className=" pt-2">
          <label
            htmlFor="district"
            className="block text-base xl:text-xl font-medium text-gray-900"
          >
            জেলা
          </label>
          <select
            id="district"
            name="district"
            defaultValue="বিভাগ"
            className="mt-1 block w-full rounded-md border-0 py-3 text-base xl:text-xl px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-300 "
          >
            <option className="text-sm">নির্বাচন করুন</option>
            <option>জেলা</option>
          </select>
        </div>
        <div className=" pt-2 mb-4">
          <label
            htmlFor="subdistrict"
            className="block text-base xl:text-xl font-medium text-gray-900"
          >
            উপজেলা
          </label>
          <select
            id="subdistrict"
            name="subdistrict"
            defaultValue="বিভাগ"
            className="mt-1 block w-full rounded-md border-0 py-3 text-base xl:text-xl px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-300 "
          >
            <option className="text-sm">নির্বাচন করুন</option>
            <option>উপজেলা</option>
          </select>
        </div>

        <Btn text="খুজুন" />
      </div>
    </div>
  );
};

export default AreaNews;
