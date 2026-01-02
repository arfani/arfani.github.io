interface P404Props {
  data: {
    isDarkMode?: boolean;
  };
}

export default function P404(props: P404Props) {
  return (
    <div id="not-found" className={`text-center py-12 ${props.data.isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} min-h-screen`}>
      <h2 className={`text-2xl font-bold ${props.data.isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>You are LOST !!</h2>
      <p className={props.data.isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Use the navigation above, please...</p>

      <h5 className={`${props.data.isDarkMode ? 'bg-red-900/50 text-red-300 border-red-700' : 'bg-red-100 text-red-700 border-red-300'} border rounded p-4 mt-4 max-w-lg mx-auto`}>
        Like in our life, don't use other than Al-Qur'an & Al-Hadits if you don't want to be LOST!
      </h5>
    </div>
  );
}
