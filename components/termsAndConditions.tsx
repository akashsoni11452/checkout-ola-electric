const TermsAndConditions = () => {
  return (
    <div className="flex items-center p-3 bg-gray-100">
      <input
        checked
        id="green-checkbox"
        type="checkbox"
        value=""
        className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-white-500 dark:focus:ring-white-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="green-checkbox"
        className="ms-2 text-sm font-medium text-gray-600 dark:text-gray-300 w-[75%]"
      >
        I agree to the terms & condition and Privacy Policy
      </label>
    </div>
  );
};
export default TermsAndConditions
