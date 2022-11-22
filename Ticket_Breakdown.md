# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
The given ticket can be divided into 4 tasks:

Task 1: Schema modification
Implementation detail:
Remove the auto-incremental functionality on the ID column in the AGENTS table.
Add indexing on the updated ID field to facilitate faster data retrieval.

Acceptance Criteria:
The new schema design should allow creation of custom AGENT IDs.

Time/effort estimates:
1 developer, 3 business days



Task 2: Data Migration
Migrating the existing data (autoincremental ID), which is an integer (unique id) to a string (varchar in terms of SQL). This requires an efficient ETL (Execute-Transform-Load) logic to achieve this task in an optimal way. Intermediate tables (or a new temporary schema) could be used for the same. Thorough testing of the same to ensure the existing database schema logic does not crash or behaves in an erratic fashion.

Acceptance criteria: 
Existing data matches the modified schema (type change on the field).

Time/effort estimates:
2 Developers, 5 business days.



Task 3: Feature enablement on Front-end and Back-end components
Implementation detail:
Sub-task 1: Frontend development:
	-Allowing the user interface to accept custom input for AGENT ID (Text input field)
	-Provide suitable alerts to the user in case the ID input already exists in the database. 

Sub-task 2: Backend development:
	-Modify the function saving the agents data (or facility data having agent metadata) to accept the custom ID being input on the user interface. Propagate this new agent ID to the be saved on the database tables. 
	-Check if the newly input AGENT ID exists in the database table efficiently (The newly added indexing in Task 1 helps with this). If the ID exists, throw an error to the user suggesting to use an alternate ID. 
	-Also, modify any previous references to this function to make sure it handles the new custom ID and its type.

Acceptance criteria:
Should allow the data to be saved with a custom ID as long as the ID does not exist in the database already. If it does, then the alert should indicate the user to choose an alternative ID. 

Time/effort estimates:
1 developer for frontend and 2 developers for backend
5 Business days for development
5 Business days for testing (positive and negative scenarios covering all edge cases).



Task 4: Testing (Load + Integration Testing)
Implementation detail:
Perform load testing on a new environment to ensure the new logic (with the frontend and backend changes) works seamlessly and scales well with high traffic. 
Perform end-to-end testing on the entire system as a whole. 


Acceptance criteria:
Ensure the new logic works as expected.

Time/effort estimates:
2 developers, 5 business days


Task 5 (Optional requirement): Recommend customer ID if the input value exist in database
Implementation detail:
Analyse the possibility of recommending a system generated ID to the user if the input ID exists in the database already. 

Time/effort estimates:
POC could be targeted by 2 developers in 7 business days.