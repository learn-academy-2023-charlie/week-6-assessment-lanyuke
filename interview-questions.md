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

Your answer: 

    rails g model will generate a table model, rails g controller will generate a controller file for storing RESTful methods, rails g migration will generate migration file for migration.

Researched answer:

    rails g model will generate a table model, rails g controller will generate a controller file for storing RESTful methods, rails g migration will generate migration file for migration.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

    get 'students' => 'students#index'

action: "POST" location: /students

    post 'students' => 'students#create'

action: "GET" location: /students/new

    get 'students/new' => 'students#new'

action: "GET" location: /students/2

    get 'students/:id' => 'students#show'

action: "GET" location: /students/2/edit

    get 'students/:id/edit' => 'students#edit'


action: "PATCH" location: /students/2

    patch 'students/:id' => 'students#update'

action: "DELETE" location: /students/2

    delete 'students/:id' => 'students#destroy'

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I want to be able to create a new task with a title and description, so I can keep track of what needs to be done.
As a user, I want to mark a task as completed, so I can keep track of my progress.
As a user, I want to be able to edit a task's title or description, in case there are any changes or updates.
As a user, I want to be able to delete a task, in case I no longer need to do it.
As a user, I want to be able to prioritize tasks, so I can focus on the most important ones first.
As a user, I want to be able to categorize tasks into different lists or categories, such as work, personal, or shopping.
As a user, I want to be able to set due dates for tasks, so I can stay organized and complete them on time.
As a user, I want to be able to add labels or tags to tasks, so I can easily filter or search for specific tasks.
As a user, I want to be able to set reminders or notifications for important tasks, so I don't forget to complete them.
As a user, I want to have a user account and be able to log in, so my to-do list is personalized and accessible across devices.