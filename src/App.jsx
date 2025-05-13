import { useState } from 'react';
import './App.css';

const gradeValues = {
  A1: 80,
  B2: 72,
  B3: 67,
  C4: 62,
  C5: 57,
  C6: 52,
};

function App() {
  const [scores, setScores] = useState({
    Maths: '', English: '', Physics: '', Biology: '', Chemistry: '', UTME: ''
  });

  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (subject, value) => {
    // Restrict UTME input to 0–400
    if (subject === 'UTME') {
      const num = parseInt(value);
      if (value === '' || (num >= 0 && num <= 400)) {
        setScores({ ...scores, [subject]: value });
      }
    } else {
      setScores({ ...scores, [subject]: value });
    }
  };

  const calculateAggregate = (e) => {
    e.preventDefault();
    const { Maths, English, Physics, Biology, Chemistry, UTME } = scores;

    if (!Maths || !English || !Physics || !Biology || !Chemistry || UTME === '') {
      alert('Please fill in all fields.');
      return;
    }

    const waecTotal = [Maths, English, Physics, Biology, Chemistry]
      .map(grade => gradeValues[grade])
      .reduce((acc, curr) => acc + curr, 0);

    const averageWaec = waecTotal / 5;
    const waecResult = (averageWaec / 100) * 25;
    const utmeScore = parseInt(UTME);
    const jambContribution = (utmeScore / 400) * 75;
    const aggregate = (waecResult + jambContribution).toFixed(2);

    setResult(aggregate);
    setShowModal(true);
  };

  return (
    <div className='min-h-screen p-5 bg-[#080809] flex flex-col justify-center items-center'>
      <div className='relative h-[95vh] w-[80vw] mx-auto rounded-3xl border-2 border-white/10 bg-gradient-to-b from-[#ffffff0e] to-[#57575710] backdrop-blur-md overflow-auto'>
        <h3 className='text-lg md:text-3xl md:my-10 my-5 text-center text-white font-semibold'>
          Enter your details to calculate your{' '}
          <span className='text-transparent bg-gradient-to-b from-[#fff] to-[#B6890C] bg-clip-text'>aggregate</span>
        </h3>

        <form className='px-3 md:grid md:px-24 md:my-28' onSubmit={calculateAggregate}>
          <div className='md:grid md:gap-5 grid-cols-2 md:pb-10 pb-5 flex flex-col space-y-[10px] md:space-y-0'>
            {['Maths', 'English', 'Physics', 'Biology', 'Chemistry'].map(subject => (
              <div key={subject} className='w-full bg-white/10 p-2 rounded-lg border-2 border-white/15 text-white'>
                <select
                  className='bg-transparent outline-none w-full'
                  value={scores[subject]}
                  onChange={(e) => handleChange(subject, e.target.value)}
                >
                  <option value="">{subject}</option>
                  {Object.keys(gradeValues).map((grade) => (
                    <option key={grade} value={grade} className='text-black'>{grade}</option>
                  ))}
                </select>
              </div>
            ))}
            <div className='w-full bg-white/10 p-2 rounded-lg border-2 border-white/15 text-white'>
              <input
                type="number"
                placeholder='UTME Score (0 - 400)'
                className='w-full bg-transparent outline-none appearance-none'
                value={scores.UTME}
                onChange={(e) => handleChange('UTME', e.target.value)}
                min="0"
                max="400"
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-gradient-to-b flex gap-1 justify-center md:w-[300px] items-center from-[#C39D36] to-[#82640F] w-full mx-auto text-center text-white font-semibold rounded-full p-2 hover:scale-105 duration-300'
          >
            Shoot <img src="PaperPlaneTilt.png" className='h-4 rotate-[45deg]' alt="Send" />
          </button>
        </form>

        {showModal && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/90 backdrop-blur-[100px] flex justify-center items-center z-50">
            <div className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-xl text-center shadow-lg text-white max-w-[300px] w-[80%]">
              <h2 className="text-2xl font-bold mb-4">🎉 Aggregate Score</h2>
              <p className="text-4xl text-[#C39D36] font-extrabold mb-4">{result}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 px-8 py-2 bg-gradient-to-r from-[#82640F] to-[#C39D36] text-white rounded-full hover:scale-105 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <h3 className='text-white text-center mt-5 ml-5'>Powered by:</h3>
      <div className='font-medium flex justify-center items-center text-white text-lg'><img src="img.png" className='h-20' alt="" /> The <strong className='mx-1'>Elites</strong></div>
    </div>
  );
}

export default App;
