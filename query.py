import requests
import json

URL = "http://localhost:5000/api/query"

queries = [
    {"studentId": "student1", "heading": "Issue with Assignment 1", "query": "Unable to understand problem statement"},
    {"studentId": "student2", "heading": "Doubt in Lecture 3", "query": "Clarification needed on REST APIs"},
    {"studentId": "student3", "heading": "Project Setup Issue", "query": "Facing issues while setting up the project"},
    {"studentId": "student4", "heading": "Query about Exam", "query": "What topics will be covered in the exam?"},
    {"studentId": "student5", "heading": "Doubt in Homework", "query": "Need help with solving the last question"},
    {"studentId": "student6", "heading": "Lab Assignment Query", "query": "How to implement the given algorithm?"},
    {"studentId": "student7", "heading": "Lecture Notes Missing", "query": "Unable to find notes for lecture 5"},
    {"studentId": "student8", "heading": "Issue with Submission", "query": "Submitted assignment but not reflected"},
    {"studentId": "student9", "heading": "Clarification on Grading", "query": "How is the final grade calculated?"},
    {"studentId": "student10", "heading": "Extension Request", "query": "Need extension for the assignment"},
    {"studentId": "student11", "heading": "Question on Project", "query": "Can we use external libraries?"},
    {"studentId": "student12", "heading": "Doubt in Lecture", "query": "What is the difference between TCP and UDP?"},
    {"studentId": "student13", "heading": "Clarification Needed", "query": "Can we work in teams for the project?"},
    {"studentId": "student14", "heading": "Issue with IDE", "query": "IDE not recognizing the project structure"},
    {"studentId": "student15", "heading": "Problem with Server", "query": "Server not responding to requests"},
    {"studentId": "student16", "heading": "Question on Homework", "query": "Do we need to write unit tests?"},
    {"studentId": "student17", "heading": "Doubt in Lab", "query": "How to debug the given code?"},
    {"studentId": "student18", "heading": "Query about Grades", "query": "Why did I lose marks for the last assignment?"},
    {"studentId": "student19", "heading": "Extension for Submission", "query": "Can I get an extension for lab submission?"},
    {"studentId": "student20", "heading": "Clarification Needed", "query": "Is there any extra credit available?"},
    {"studentId": "student21", "heading": "Issue with Login", "query": "Unable to login to the student portal"},
    {"studentId": "student22", "heading": "Doubt in Theory", "query": "What is the concept of polymorphism?"},
    {"studentId": "student23", "heading": "Issue with Code", "query": "Code not compiling, showing errors"},
    {"studentId": "student24", "heading": "Question on Lecture", "query": "Can you explain inheritance with an example?"},
    {"studentId": "student25", "heading": "Clarification on Exam", "query": "Will there be negative marking?"},
    {"studentId": "student26", "heading": "Problem with Submission", "query": "Assignment submission portal is down"},
    {"studentId": "student27", "heading": "Issue with Project", "query": "Project deadline clashing with other exams"},
    {"studentId": "student28", "heading": "Query on Homework", "query": "What is the expected output for the given problem?"},
    {"studentId": "student29", "heading": "Doubt in Code", "query": "Getting a runtime error, please help"},
    {"studentId": "student30", "heading": "Clarification on Assignment", "query": "Is plagiarism checked in assignments?"},
    {"studentId": "student31", "heading": "Issue with Lab", "query": "Lab computers not working"},
    {"studentId": "student32", "heading": "Doubt in Quiz", "query": "Can you provide the solution for the last quiz?"},
    {"studentId": "student33", "heading": "Problem with VPN", "query": "Unable to access resources from home"},
    {"studentId": "student34", "heading": "Question on Lecture", "query": "What is the best practice for error handling?"},
    {"studentId": "student35", "heading": "Issue with IDE", "query": "IDE crashes frequently, any solutions?"},
    {"studentId": "student36", "heading": "Doubt in Assignment", "query": "How to approach the given problem statement?"},
    {"studentId": "student37", "heading": "Clarification Needed", "query": "Do we need to submit the code and report separately?"},
    {"studentId": "student38", "heading": "Issue with Repo", "query": "Unable to clone the repository"},
    {"studentId": "student39", "heading": "Problem with Code", "query": "Code works locally but fails on server"},
    {"studentId": "student40", "heading": "Doubt in Project", "query": "Can we use Python for the project?"},
    {"studentId": "student41", "heading": "Question on Grades", "query": "When will the grades be released?"},
    {"studentId": "student42", "heading": "Issue with Submission", "query": "Accidentally submitted the wrong file"},
    {"studentId": "student43", "heading": "Problem in Lab", "query": "Lab assistants are not available"},
    {"studentId": "student44", "heading": "Clarification on Project", "query": "Can we use open-source libraries?"},
    {"studentId": "student45", "heading": "Doubt in Code", "query": "How to implement the given algorithm efficiently?"},
    {"studentId": "student46", "heading": "Issue with Quiz", "query": "Unable to access the quiz portal"},
    {"studentId": "student47", "heading": "Clarification Needed", "query": "Can we work in pairs for the project?"},
    {"studentId": "student48", "heading": "Problem with Notes", "query": "Notes for lecture 7 are not uploaded"},
    {"studentId": "student49", "heading": "Doubt in Theory", "query": "What is the concept of abstract classes?"},
    {"studentId": "student50", "heading": "Issue with Submission", "query": "Submitted the assignment but not reflected"}
]

# Function to send POST request
def send_query(query):
    response = requests.post(URL, headers={"Content-Type": "application/json"}, data=json.dumps(query))
    if response.status_code == 201:
        print(f"Successfully created query for studentId: {query['studentId']}")
    else:
        print(f"Failed to create query for studentId: {query['studentId']} - Status code: {response.status_code}")

# Loop through the queries and send POST requests
for query in queries:
    send_query(query)
