# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Initially the thought process was to eliminate unnecessary if-else condition blocks since this increases readabiloity of the code and also testing would be easier, since the coverage will encapsulate all the testing scenarios easily. The initial choice of changing the candidate itself to "0" and returning it made sense, because when no event is passed, that is the default value in the original code-base. The candidate key is only stringified in the case when the user has passed an explicit non-string partitionKey through the event. In case of a partitionKey not present, crypto.createHash by default returns a string value and thus the check will be redundant and this can be skipped in this case. 

All our test cases are focused on covering the entire code-base, the edge scenarios have been handled thoroughly. 
