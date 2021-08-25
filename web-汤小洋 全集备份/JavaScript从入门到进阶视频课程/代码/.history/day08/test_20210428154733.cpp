#include <iostream>
#include<string>
using namespace std;
class Person
{
private:
    char* buffer;
    int age;
public:
    Person(const Person& me);
    Person(const char *p ,int a);
    void Display();
};
Person::Person(const Person& me) {
    buffer = new char[strlen(me.buffer) + 1];
    strcpy(buffer, me.buffer);
    this->age = me.age;
}
Person::Person(const char* p ,int a) {
    buffer = new char[strlen(p) + 1];
    strcpy(buffer, p);
    age = a;
}
void Person::Display() {
    cout << "The name is " << buffer << " age is " << age << endl;
}
void main()
{
    Person A("liu", 50);
    Person B(A);
    B.Display();
}