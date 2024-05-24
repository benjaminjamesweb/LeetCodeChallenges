var fib = function(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {

        let prevNum = 0;
        let currentNum = 1;

        for (i = 2; i <= n; i++) {
            let nextNum = prevNum + currentNum;
            prevNum = currentNum;
            currentNum = nextNum;
        }

        return currentNum;
    }
};