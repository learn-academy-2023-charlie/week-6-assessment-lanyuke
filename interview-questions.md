# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:

    To adding foreign key into the application, we will need to generate a migration method to add_colunm with student table, in migration folder we will have the method add_column with :students :cohort_id :integer. then do rails db:migrate to add the foreign key. We also need to go to student.rb to add the relationship that student belongs_to cohort

Researched answer:

    To adding foreign key into the application, we will need to generate a migration method to add_cohort_id_to_student, in migration folder we will find the file for add_cohort_id_to_student and use add_reference with :students :cohort :foreign_key:ture. then do rails db:migrate to add the foreign key. We also need to go to student.rb to add the relationship that student belongs_to :cohort, foreign_key: 'cohort_id'. and we also neeed to go to cohort.rb to edit the reletionship.
    cohort has_many :students, foreign_key: 'cohort_id'.

2. Which RESTful routes must always be passed params? Why?

Your answer:

    When we need to create, post, patch or delete, because we need to use params to find specific data.

Researched answer:

    When we need to show, edit, update or destroy route. We use params to find specific of data.

3. Name three rails generator commands. What is created by each?

    Your answer: rails g model will generate a table model, rails g controller will generate a controller file for storing RESTful methods, rails g migration will generate migration file for migration.

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
    get 'students' => 'student'

action: "POST" location: /students


action: "GET" location: /students/new


action: "GET" location: /students/2


action: "GET" location: /students/2/edit


action: "PATCH" location: /students/2


action: "DELETE" location: /students/2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
