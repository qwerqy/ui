import { total } from "../.coverage/coverage-final.json" assert { type: "json" };

function checkCoverage() {
  const totalCoverage = total.lines.pct;

  const minCoverage = 80; // Set your desired minimum coverage here

  if (totalCoverage < minCoverage) {
    console.error(
      `Coverage check failed! Total coverage is ${totalCoverage}%, which is below the minimum required coverage of ${minCoverage}%.`
    );
    process.exit(1);
  } else {
    console.log(`Coverage check passed! Total coverage is ${totalCoverage}%.`);
  }
}

checkCoverage();
