import { useState } from 'react';
import './App.css';

const gradeValues = {
  A1: 80,
  B2: 72,
  B3: 67,
  C4: 62,
  C5: 57,
  C6: 52
};

function App() {
  const [scores, setScores] = useState({
    Maths: '', English: '', Physics: '', Biology: '', Chemistry: '', UTME: ''
  });

  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (subject, value) => {
    if (subject === 'UTME') {
      const num = parseInt(value);
      if (num < 0 || num > 400 || isNaN(num)) return;
    }
    setScores({ ...scores, [subject]: value });
  };

  const isFormValid = Object.values(scores).every(v => v !== '');

  const calculateAggregate = (e) => {
    e.preventDefault();
    const { Maths, English, Physics, Biology, Chemistry, UTME } = scores;

    const waecTotal = [Maths, English, Physics, Biology, Chemistry]
      .map(grade => gradeValues[grade])
      .reduce((acc, curr) => acc + curr, 0);

    const averageWaec = waecTotal / 5;
    const waecResult = (averageWaec / 100) * 25;
    const utmeScore = parseInt(UTME);
    const jambContribution = (utmeScore / 400) * 75;
    const aggregate = waecResult + jambContribution;

    setResult(aggregate.toFixed(2));
    setShowModal(true);
  };

  return (
    <div className='relative min-h-screen p-5 bg-[#080809] flex flex-col justify-center items-center'>
      {showModal && (
        <div className='fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-20'>
          <div className='bg-white/10 border w-96 border-white/20 p-3 rounded-2xl shadow-lg backdrop-blur-md text-white text-center'>
            <button
              onClick={() => setShowModal(false)}
              className='bg-white/30 px-3 py-1 flex float-right rounded-full font-semibold'
            >
              X
            </button>
            <h2 className='text-xl mt-7 font-bold mb-2'>Your Aggregate Score:</h2>
            <p className='text-3xl font-semibold text-[#C39D36]'>{result}</p>
            <p className='my-3'>Join The Class '29 aspirants group for more informtion and updates on addmission news...</p>
            <button className='px-8 py-3 bg-[#b6890c] text-white rounded-full my-5'>
              <a href="https://chat.whatsapp.com/FSHbOdaysuU3itdZhbKBPK">Join Group</a>
            </button>
          </div>
        </div>
      )}

      <div className={`relative z-10 md:w-[55vw] mx-auto rounded-3xl border-2 border-white/10 bg-gradient-to-b from-[#ffffff0e] to-[#57575710]`}>
        <h3 className='text-lg md:text-3xl md:my-10 my-5 text-center text-white font-bold'>
          Enter your details to <br /> calculate your{' '}
          <span className='text-transparent bg-gradient-to-b from-[#ffe59c]  to-[#B6890C] bg-clip-text'>aggregate</span>
        </h3>

        <form className='px-3 md:grid md:px-16 md:my-16' onSubmit={calculateAggregate}>
          <div className='md:grid md:gap-8 grid-cols-2 md:pb-10 pb-5 flex flex-col space-y-[10px] md:space-y-0'>
            {['Maths', 'English', 'Physics', 'Biology', 'Chemistry'].map(subject => (
              <div key={subject} className='w-full bg-white/5 p-3 rounded-lg border-[1.5px] border-white/15 text-white'>
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

            <div className='w-full bg-white/10 p-3 rounded-lg border-2 border-white/15 text-white'>
              <input
                type="number"
                placeholder='UTME Score'
                max={400}
                className='w-full bg-transparent outline-none'
                value={scores.UTME}
                onChange={(e) => handleChange('UTME', e.target.value)}
              />
            </div>
          </div>

          <button
            disabled={!isFormValid}
            className={`bg-gradient-to-b flex gap-1 justify-center md:w-[300px] items-center from-[#C39D36] to-[#82640F] w-full mx-auto text-center text-white font-semibold rounded-full p-2 transition-opacity ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
          >
            Shoot <img src="PaperPlaneTilt.png" className='h-4 rotate-[45deg]' alt="" />
          </button>
        </form>
      </div>
      <h3 className='text-white text-center mt-5'>Powered by:</h3>
      <div className='font-medium flex justify-center items-center mt-2 text-white text-lg flex-col'><img src="img.png" className='h-10' alt="" /> <p><strong>Emperor</strong> and The<strong className='mx-[5px]'>Elites</strong></p> <p className='font-bold'>07045875707</p></div>
    </div>
  );
}

export default App;
