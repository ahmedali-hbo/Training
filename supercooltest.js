const  searchTestRun = {
    name: "Search",
    date: new Date(Date.now()).toString(),
    ranToday: false,
    addtionNotes: ["Run Twice ", "Test Trending"],
    passed: 0,
    failed: 0,
    skipped: 0,
    versionInfo:{
        version: 8.26,
        build:"90.5039.83838",
        apiversion: 4.928
    }
}

const  authTestRun = {
    name: "Auth",
    date: new Date(Date.now()).toString(),
    ranToday: false,
    addtionNotes: ["Run Twice ", "Test Trending"],
    passed: 0,
    failed: 0,
    skipped: 0,
    versionInfo:{
        version: 8.26,
        build:"89.5039.83838",
        apiversion: 4.928
    }
}

const superCoolTestSuite ={
    name: "Android Realease",
    version: 9.103,
    numberOfRuns: 8,
    hasRunToday: false,
    testRuns: [searchTestRun]
}

function runTests() {
    const max = 500
    return Math.floor(Math.random() * max)
}
function runTestSuites(suites){
    for(let i=0; i<suites.testRuns.length; i++){
        suites.testRuns[i].passed = runTests()
        suites.testRuns[i].failed = runTests()
        suites.testRuns[i].skipped = runTests()
        suites.testRuns[i].ranToday = true
    }
    return suites
}

console.log(runTestSuites(superCoolTestSuite))
