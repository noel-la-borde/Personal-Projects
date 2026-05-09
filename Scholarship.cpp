#include <iostream>
using namespace std;

int main() {
    
    cout << "Scholarship Eligibility Checker" << endl;
    cout << "-----------------------------" << endl;
    cout << "We offer three different scholarships based on GPA:" << endl;
    cout << "1. Gold Scholarship: GPA 3.6 and above" << endl;
    cout << "2. Silver Scholarship: GPA 3.0 to 3.5" << endl;
    cout << "3. Bronze Scholarship: GPA 2.5 to 2.9" << endl;

    double gpa;
    cout << "Enter your GPA: ";
    cin >> gpa;
    if (gpa < 0.0 || gpa > 4.0) {
        cout << "Invalid GPA. Please enter a value between 0.0 and 4.0." << endl;
        cout << "Enter your GPA one more time: ";
        cin >> gpa;
    }
    if (gpa >= 3.6 && gpa <= 4.0) {
        cout << "Congratulations! You are eligible for the Gold Scholarship." << endl;
    } else if (gpa >= 3.0 && gpa < 3.6) {
        cout << "Congratulations! You are eligible for the Silver Scholarship." << endl;
    } else if (gpa >= 2.5 && gpa < 3.0) {
        cout << "Congratulations! You are eligible for the Bronze Scholarship." << endl;
    } else {
        cout << "Sorry, you do not meet the eligibility criteria for any scholarship." << endl;
    }

    return 0;
}