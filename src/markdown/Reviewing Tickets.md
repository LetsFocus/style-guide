#  How to Review a Ticket?

### Step1:
- Before proceeding with any ticket, it is essential to verify that the pipeline has passed successfully. If the pipeline has not passed, the ticket should be returned to the original assignee for further action.
- This ensures that all necessary checks and balances are in place before moving forward with the ticket. Maintaining this protocol helps in maintaining the quality and reliability of the workflow, preventing potential issues from escalating.
### Step2:
- First, ensure that the Swagger changes have been reviewed. If the Swagger changes have not been reviewed or approved, the ticket should be returned to the original assignee for further revisions. 
- This step is crucial to maintain the accuracy and consistency of the API documentation, preventing any discrepancies or issues in the development process.
### Step3:
- Next, review the unit tests. The unit tests must be thoroughly written, not merely to achieve coverage, but to ensure they check all possible cases comprehensively. 
- If the unit tests do not meet these standards, the ticket should be returned to the original assignee for improvement.
-  This practice is vital to ensure the robustness and reliability of the code, catching potential issues early in the development process.
-  Following this protocol helps maintain high-quality standards and prevents future problems.

```
package main

import (
	"errors"
	"fmt"
)

// Add adds two integers and returns the result.
// Returns an error if either of the inputs is negative.
func Add(a, b int) (int, error) {
	if a < 0 || b < 0 {
		return 0, errors.New("input values must be non-negative")
	}
	return a + b, nil
}

func main() {
	result, err := Add(3, 5)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}
}

```

Tests:
```
package main

import (
	"testing"
)

// TestAdd tests the Add function with various cases.
func TestAdd(t *testing.T) {
	tests := []struct {
		name    string
		a       int
		b       int
		want    int
		wantErr bool
	}{
		{"Positive numbers", 3, 5, 8, false},
		{"Zero and positive number", 0, 5, 5, false},
		{"Zero and zero", 0, 0, 0, false},
		{"Negative first number", -1, 5, 0, true},
		{"Negative second number", 3, -5, 0, true},
		{"Both negative numbers", -3, -5, 0, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := Add(tt.a, tt.b)
			if (err != nil) != tt.wantErr {
				t.Errorf("Add() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("Add() = %v, want %v", got, tt.want)
			}
		})
	}
}

```
- Here we have written tests for all the possible cases 

### Step4:

- The code coverage should be more than 97% mostly it should be 100%

### Step5:
- Next, review the code changes for optimization in terms of time efficiency and readability. The code should not only perform well but also be easy to understand and maintain.
-  If the code does not meet these standards, it should be returned to the original assignee for improvement.
-  This step is essential for maintaining high performance and ensuring that future developers can easily work with the codebase. Adhering to this protocol helps in building a robust, efficient, and maintainable system.

### Step6:

- Finally, conduct thorough local testing, ensuring that all possible cases are covered. This involves testing the code in a local environment to catch any issues that might not have been apparent during the initial review. 
- If the local tests reveal any problems, the ticket should be returned to the original assignee for further refinement. 
- This step is crucial for identifying and resolving issues early in the development process, ensuring the code works as expected in various scenarios and maintaining overall quality and reliability.

### Step7:

- Approve the PR
- Every PR needs 2 rounds of approvals

