import React, { useState } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [years, setYears] = useState(1);
  const [rate, setRate] = useState(10.5);
  const [emi, setEmi] = useState(0);

  function handleAmountChange(e) {
    setLoanAmount(e.target.value);
    calculateEmi();
  }

  function handleYears(e) {
    setYears(e.target.value);
    calculateEmi();
  }

  function handleRate(e) {
    setRate(e.target.value);
    calculateEmi();
  }

  function calculateEmi() {
    let p = parseInt(loanAmount);
    let r = parseFloat(rate) / 12 / 100;
    let n = parseInt(years) * 12;

    let EMI = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(EMI);
  }

  return (
    <div className="row bg-secondary p-5" style={{ height: "100vh" }}>
      <div className="col-7 card p-3" style={{ height: "500px" }}>
        <div>
          <div className="d-flex justify-content-between">
            <div className="fw-bold">Loan Amount</div>
            <div>
              <input
                type="text"
                value={loanAmount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min={100000}
              max={1000000}
              step={10000}
              value={loanAmount}
              onChange={handleAmountChange}
              className="form-range"
            />
            <span>&#8377; 1,00,000/-</span>
            <span className="float-end">&#8377; 10,00,000/-</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <div className="fw-bold">Loan Tenure</div>
            <div>
              <input
                type="text"
                size={2}
                value={years}
                onChange={handleYears}
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={years}
              onChange={handleYears}
              className="form-range"
            />
            <span>1 Year</span>
            <span className="float-end">5 Years</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex justify-content-between">
            <div className="fw-bold">Interest Rate</div>
            <div>
              <input type="text" size={4} value={rate} onChange={handleRate} />
            </div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min={10.5}
              max={18.5}
              step={0.01}
              value={rate}
              onChange={handleRate}
              className="form-range"
            />
            <span>10.5%</span>
            <span className="float-end">18.5%</span>
          </div>
        </div>
      </div>

      <div className="col-5 card p-4" style={{ height: "300px" }}>
        <div className="card-header p-3 mt-3">
          <div className="text-center text-primary fs-4 fw-medium">
            Your Monthly EMI will be
          </div>
        </div>

        <div className="card-body text-center">
          <div className="text-primary fs-1 fw-bold mt-3">
            {emi.toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
